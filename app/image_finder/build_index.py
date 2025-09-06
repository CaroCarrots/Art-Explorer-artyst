import json, os, sys, threading, time
from pathlib import Path
import pandas as pd
import numpy as np
from PIL import Image, ImageOps
from tqdm import tqdm
import torch, faiss
from transformers import CLIPProcessor, CLIPModel
import logging


def setup_logger(log_file: Path, verbose: bool = True):
    log_file.parent.mkdir(parents=True, exist_ok=True)
    level = logging.INFO if verbose else logging.WARNING
    handlers = [logging.FileHandler(log_file, encoding="utf-8")]
    # 同时在终端输出
    handlers.append(logging.StreamHandler(stream=sys.stdout))
    logging.basicConfig(
        level=level,
        format="%(asctime)s [%(levelname)s] %(message)s",
        handlers=handlers
    )
    # 让 transformers 也多说点话
    logging.getLogger("transformers").setLevel(logging.INFO)


def exif_open(p: Path):
    img = Image.open(p).convert("RGB")
    return ImageOps.exif_transpose(img)


def pick_device(cli_device: str | None):
    if cli_device:
        return cli_device
    try:
        if torch.cuda.is_available():
            return "cuda"
        # Apple Silicon
        if hasattr(torch.backends, "mps") and torch.backends.mps.is_available():  # type: ignore[attr-defined]
            return "mps"
    except Exception:
        pass
    return "cpu"


class Heartbeat:
    """后台心跳，每 N 秒提醒程序还活着，避免你以为挂了。"""
    def __init__(self, interval=30):
        self.interval = interval
        self._stop = threading.Event()
        self._th = threading.Thread(target=self._run, daemon=True)

    def _run(self):
        while not self._stop.is_set():
            time.sleep(self.interval)
            logging.info("... still working (heartbeat) ...")

    def start(self):
        self._th.start()

    def stop(self):
        self._stop.set()
        self._th.join(timeout=1)


class CLIPIndexer:
    def __init__(self, model_name="openai/clip-vit-base-patch32", device=None, local_only=False):
        self.device = pick_device(device)
        self.local_only = local_only

        logging.info(f"Selected device: {self.device}")
        logging.info(f"HF caches: TRANSFORMERS_CACHE={os.getenv('TRANSFORMERS_CACHE')} | HF_HOME={os.getenv('HF_HOME')}")

        # 提前提示：可能在这里等待下载/解压
        logging.info(f"Loading model {model_name} (local_only={self.local_only}) ...")
        t0 = time.time()
        try:
            self.model = CLIPModel.from_pretrained(model_name, local_files_only=self.local_only).to(self.device).eval()
            self.proc  = CLIPProcessor.from_pretrained(model_name, local_files_only=self.local_only)
        except Exception as e:
            logging.error("Failed to load model. If this is stuck on downloading, try setting --local_only or pre-download the model with `huggingface-cli download`.")
            raise
        logging.info(f"Model loaded in {time.time()-t0:.1f}s")

        self.index = None
        self.meta = None

    @torch.no_grad()
    def embed_pil(self, imgs, batch=16):
        zs=[]
        total_batches = (len(imgs) + batch - 1) // batch
        for bi in range(total_batches):
            s = bi*batch
            e = min((bi+1)*batch, len(imgs))
            logging.info(f"Embedding batch {bi+1}/{total_batches} (images {s}-{e-1})")
            inp = self.proc(images=imgs[s:e], return_tensors="pt").to(self.device)
            z = self.model.get_image_features(**inp)
            z = torch.nn.functional.normalize(z, p=2, dim=1)
            zs.append(z.cpu().numpy().astype("float32"))
        return np.concatenate(zs, 0)

    def build_and_save(self, meta_csv: Path, index_dir: Path, batch=16):
        logging.info(f"Reading metadata CSV: {meta_csv}")
        df = pd.read_csv(meta_csv)
        assert {"image_path","artist","genre","title"}.issubset(df.columns), "CSV must contain columns: image_path, artist, genre, title"
        rows = df.to_dict("records")
        logging.info(f"Total rows in CSV: {len(rows)}")

        # 心跳开始（最容易卡的是这里的模型加载与图片 IO/解码）
        hb = Heartbeat(interval=20)
        hb.start()

        imgs, meta = [], []
        skipped = 0
        for r in tqdm(rows, desc="Loading images", mininterval=0.5, leave=True):
            p = Path(r["image_path"])
            try:
                imgs.append(exif_open(p))
                meta.append({
                    "title": r["title"],
                    "artist": r["artist"],
                    "genre": r["genre"],
                    "image_path": r["image_path"]
                })
            except Exception as e:
                skipped += 1
                logging.warning(f"[skip] {p}: {e}")

        logging.info(f"Loaded {len(imgs)} images, skipped {skipped}")

        if len(imgs) == 0:
            hb.stop()
            raise RuntimeError("No images loaded. Please check your image_path in CSV.")

        feats = self.embed_pil(imgs, batch=batch)
        logging.info(f"Embedding done. Features shape = {feats.shape}")

        index = faiss.IndexFlatIP(feats.shape[1])
        index.add(feats)

        index_dir.mkdir(parents=True, exist_ok=True)
        faiss.write_index(index, str(index_dir / "index.faiss"))
        with open(index_dir / "meta.json", "w", encoding="utf-8") as f:
            json.dump(meta, f, ensure_ascii=False, indent=2)
        logging.info(f"[OK] saved index and metadata to {index_dir}")

        hb.stop()


if __name__ == "__main__":
    import argparse
    ap = argparse.ArgumentParser()
    ap.add_argument("--meta_csv", required=True, help="subset_metadata.csv")
    ap.add_argument("--index_dir", required=True, help="output dir for index.faiss + meta.json")
    ap.add_argument("--model_name", default="openai/clip-vit-base-patch32")
    ap.add_argument("--batch", type=int, default=16)
    ap.add_argument("--device", default=None, help="force device: cuda | mps | cpu")
    ap.add_argument("--log_file", default="logs/run.log", help="Path to save log file")
    ap.add_argument("--quiet", action="store_true", help="less console logs")
    ap.add_argument("--local_only", action="store_true", help="do not attempt to download weights; use local cache only")
    args = ap.parse_args()

    setup_logger(Path(args.log_file), verbose=not args.quiet)

    # 可选：加速 huggingface 下载（如有网络）
    os.environ.setdefault("HF_HUB_ENABLE_HF_TRANSFER", "1")

    CLIPIndexer(
        model_name=args.model_name,
        device=args.device,
        local_only=args.local_only
    ).build_and_save(
        meta_csv=Path(args.meta_csv),
        index_dir=Path(args.index_dir),
        batch=args.batch
    )
