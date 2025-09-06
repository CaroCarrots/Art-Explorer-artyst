# 🔧 后端接入修改指南

当你准备将前端连接到真实后端时，需要按以下步骤修改：

## 📋 修改清单

### 1. 创建 API 路由文件 (必需)

你需要创建以下 API 路由：

#### `app/api/classic-artworks/route.ts`
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { ArtworkData } from '../../types/artwork';

export async function GET() {
  try {
    // 调用你的后端 API 获取经典作品列表
    const response = await fetch('YOUR_BACKEND_URL/api/classic-artworks');
    const data = await response.json();
    
    return NextResponse.json({
      artworks: data.artworks as ArtworkData[]
    });
  } catch (error) {
    console.error('获取经典作品失败:', error);
    return NextResponse.json(
      { error: '获取经典作品失败' },
      { status: 500 }
    );
  }
}
```

#### `app/api/explore-artwork/route.ts`
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { ExploreResponse } from '../../types/artwork';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { imageUrl, uploadedImage } = body;
    
    // 调用你的后端 API 进行艺术探索
    const response = await fetch('YOUR_BACKEND_URL/api/explore-artwork', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ imageUrl, uploadedImage }),
    });
    
    const data = await response.json();
    
    return NextResponse.json(data as ExploreResponse);
  } catch (error) {
    console.error('艺术探索失败:', error);
    return NextResponse.json(
      { error: '艺术探索失败' },
      { status: 500 }
    );
  }
}
```

#### `app/api/style-artworks/route.ts` (可选)
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { ArtworkData } from '../../types/artwork';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const style = searchParams.get('style');
    const limit = searchParams.get('limit') || '10';
    const offset = searchParams.get('offset') || '0';
    
    // 调用你的后端 API 获取特定风格的作品
    const response = await fetch(
      \`YOUR_BACKEND_URL/api/style-artworks?style=\${style}&limit=\${limit}&offset=\${offset}\`
    );
    const data = await response.json();
    
    return NextResponse.json({
      artworks: data.artworks as ArtworkData[],
      hasMore: data.hasMore
    });
  } catch (error) {
    console.error('获取风格作品失败:', error);
    return NextResponse.json(
      { error: '获取风格作品失败' },
      { status: 500 }
    );
  }
}
```

### 2. 修改前端组件

#### `app/components/explore/ClassicImageSelector.tsx`
找到第 21-30 行的 `fetchClassicImages` 函数，替换为：

```typescript
const fetchClassicImages = async () => {
  try {
    setIsLoading(true);
    
    // 调用真实 API
    const response = await fetch('/api/classic-artworks');
    if (!response.ok) {
      throw new Error('网络请求失败');
    }
    
    const data = await response.json();
    setClassicImages(data.artworks);
    setIsLoading(false);
  } catch (error) {
    console.error('获取经典图片失败:', error);
    setIsLoading(false);
  }
};
```

并删除第 6 行的静态数据导入：
```typescript
// 删除这行
import { classicArtworks } from '../../lib/mockData-simple';
```

#### `app/components/SimilarImagesSection.tsx`
找到第 53-68 行的 `handleExploreArtwork` 函数，替换为：

```typescript
const handleExploreArtwork = async (imageUrl?: string, uploadedFile?: File) => {
  try {
    setIsLoading(true);
    
    // 调用真实 API
    const response = await fetch('/api/explore-artwork', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        imageUrl,
        uploadedImage: uploadedFile
      }),
    });
    
    if (!response.ok) {
      throw new Error('网络请求失败');
    }
    
    const exploreData = await response.json();
    setExploreData(exploreData);
    setCurrentMode('similarity');
    setIsLoading(false);
  } catch (error) {
    console.error('艺术探索失败:', error);
    setIsLoading(false);
  }
};
```

并删除第 6 行的静态数据导入：
```typescript
// 删除这行
import { classicArtworks, generateMockExploreResponse } from '../lib/mockData-simple';
```

### 3. 环境变量配置

创建 `.env.local` 文件（如果还没有）：
```bash
# 后端 API 基础 URL
NEXT_PUBLIC_API_BASE_URL=YOUR_BACKEND_URL
BACKEND_API_URL=YOUR_BACKEND_URL
```

然后在 API 路由中使用：
```typescript
const BACKEND_URL = process.env.BACKEND_API_URL;
```

### 4. 文件上传处理 (如果需要)

如果你的后端需要处理文件上传，可能需要使用 FormData：

```typescript
// 在 explore-artwork API 路由中
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const imageUrl = formData.get('imageUrl') as string;
    const uploadedFile = formData.get('uploadedFile') as File;
    
    // 创建新的 FormData 发送给后端
    const backendFormData = new FormData();
    if (imageUrl) {
      backendFormData.append('imageUrl', imageUrl);
    }
    if (uploadedFile) {
      backendFormData.append('uploadedFile', uploadedFile);
    }
    
    const response = await fetch(\`\${BACKEND_URL}/api/explore-artwork\`, {
      method: 'POST',
      body: backendFormData,
    });
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    // 错误处理
  }
}
```

## 🧪 测试步骤

1. **确保后端 API 正常运行**
2. **更新环境变量**
3. **逐个修改前端组件**
4. **测试每个功能点**：
   - 经典图片加载
   - 图片选择探索
   - 文件上传探索
   - 相似度分支浏览
   - 风格分支浏览
   - 概览模式

## 🔍 调试提示

- 使用浏览器开发者工具的 Network 标签查看 API 请求
- 检查 Next.js 终端输出的服务器端错误
- 确保后端返回的数据格式与 `types/artwork.ts` 中定义的接口一致

## 📝 数据格式要求

后端返回的数据必须严格按照 `app/types/artwork.ts` 中定义的接口格式，特别注意：

- `ArtworkData.styleLabels` 必须是字符串数组
- `ArtworkData.style` 必须存在
- `ExploreResponse` 的结构必须完整
- 所有必需字段都不能为空

---

按照这个指南逐步修改，你的前端就能无缝连接到后端了！🚀
