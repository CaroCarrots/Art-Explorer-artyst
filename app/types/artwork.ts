// 艺术探索相关的类型定义

export interface ArtworkData {
  id: string;
  url: string;
  title: string;
  artist: string;
  year: string;
  style: string;
  description: string;
  similarity?: number;
  styleLabels: string[];
  source?: string;
}

export interface ExploreResponse {
  rootImage: ArtworkData;
  similarityBranch: {
    title: string;
    description: string;
    artworks: ArtworkData[];
  };
  styleBranch: {
    title: string;
    description: string;
    styleGroups: StyleGroup[];
  };
  overview: ArtworkData[];
}

export interface StyleGroup {
  styleName: string;
  description: string;
  artworks: ArtworkData[];
}

export type ExploreMode = 'selection' | 'similarity' | 'style' | 'overview';

// 后端API接口说明
export interface APIEndpoints {
  // 获取预设的经典图片列表
  '/api/classic-artworks': {
    method: 'GET';
    response: {
      artworks: ArtworkData[];
    };
  };

  // 基于用户选择/上传的图片进行艺术探索
  '/api/explore-artwork': {
    method: 'POST';
    body: {
      imageUrl?: string; // 选择的经典图片URL
      uploadedImage?: File; // 或者上传的图片文件
    };
    response: ExploreResponse;
  };

  // 获取特定风格的更多作品（可选，用于懒加载）
  '/api/style-artworks': {
    method: 'GET';
    params: {
      style: string;
      limit?: number;
      offset?: number;
    };
    response: {
      artworks: ArtworkData[];
      hasMore: boolean;
    };
  };
}
