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

// 艺术风格探索相关类型定义
export interface ArtStyle {
  id: string;
  name: string;
  description: string;
  period: string; // 时期，如 "14-17世纪"
  startYear: number; // 开始年份
  endYear: number; // 结束年份
  characteristics: string[]; // 特征描述
  representativeWork: ArtworkData; // 代表作
  relatedStyles: string[]; // 相关风格ID
  color: string; // 主题色
  region: string; // 发源地
  influence: string; // 影响力描述
}

// 时间轴节点类型
export interface TimelineNode {
  id: string;
  year: number;
  title: string;
  description: string;
  styles: ArtStyle[];
  significance: string; // 历史意义
  representativeArtists: string[]; // 代表作家
  color: string;
}

export interface TimelineEra {
  id: string;
  name: string;
  startYear: number;
  endYear: number;
  description: string;
  keyArtworks: ArtworkData[];
  styles: ArtStyle[];
  significance: string; // 历史意义
}

export interface StyleBranch {
  id: string;
  name: string;
  description: string;
  parentStyle?: string; // 父风格ID
  artworks: ArtworkData[];
  influence: string; // 影响力描述
  color: string;
}

export interface WaterfallSection {
  id: string;
  type: 'masterpiece' | 'similar-works' | 'timeline' | 'style-branches';
  title: string;
  description: string;
  data: any; // 根据type不同，数据结构不同
  scrollTrigger: number; // 滚动触发点 (0-1)
}

export interface StyleExplorationData {
  selectedStyle: ArtStyle;
  waterfallSections: WaterfallSection[];
  timeline: TimelineEra[];
  styleBranches: StyleBranch[];
}

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
