import { ArtworkData, ExploreResponse, StyleGroup } from '../types/artwork';

// 简化的经典艺术作品数据
export const classicArtworks: ArtworkData[] = [
  {
    id: 'mona-lisa',
    title: '蒙娜丽莎',
    artist: '列奥纳多·达·芬奇',
    year: '1503-1519',
    style: '文艺复兴',
    url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
    source: '卢浮宫',
    description: '世界上最著名的肖像画之一，以其神秘的微笑而闻名。',
    styleLabels: ['文艺复兴', '肖像画', '写实主义'],
    similarity: 1.0
  },
  {
    id: 'starry-night',
    title: '星月夜',
    artist: '文森特·梵高',
    year: '1889',
    style: '后印象派',
    url: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=400',
    source: '现代艺术博物馆',
    description: '梵高最著名的作品之一，描绘了他看到的夜空。',
    styleLabels: ['后印象派', '表现主义', '风景画'],
    similarity: 1.0
  },
  {
    id: 'great-wave',
    title: '神奈川冲浪里',
    artist: '葛饰北斋',
    year: '1831',
    style: '浮世绘',
    url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
    source: '东京国立博物馆',
    description: '日本江户时代最著名的浮世绘作品。',
    styleLabels: ['浮世绘', '日本艺术', '风景画'],
    similarity: 1.0
  },
  {
    id: 'girl-with-pearl',
    title: '戴珍珠耳环的少女',
    artist: '约翰内斯·维米尔',
    year: '1665',
    style: '巴洛克',
    url: 'https://images.unsplash.com/photo-1578848151706-206b516e2592?w=400',
    source: '莫瑞泰斯皇家美术馆',
    description: '荷兰黄金时代的杰作。',
    styleLabels: ['巴洛克', '肖像画', '荷兰黄金时代'],
    similarity: 1.0
  },
  {
    id: 'scream',
    title: '呐喊',
    artist: '爱德华·蒙克',
    year: '1893',
    style: '表现主义',
    url: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=400',
    source: '挪威国家美术馆',
    description: '表现主义的代表作品。',
    styleLabels: ['表现主义', '象征主义', '现代主义'],
    similarity: 1.0
  },
  {
    id: 'birth-of-venus',
    title: '维纳斯的诞生',
    artist: '桑德罗·波提切利',
    year: '1484-1486',
    style: '文艺复兴',
    url: 'https://images.unsplash.com/photo-1578848151706-206b516e2592?w=400',
    source: '乌菲兹美术馆',
    description: '文艺复兴时期的经典之作。',
    styleLabels: ['文艺复兴', '神话题材', '古典主义'],
    similarity: 1.0
  }
];

// 生成相似作品数据
export const generateSimilarArtworks = (baseArtwork: ArtworkData): ArtworkData[] => {
  return [
    {
      id: 'similar-1',
      title: '自画像',
      artist: '列奥纳多·达·芬奇',
      year: '1512',
      style: '文艺复兴',
      url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300',
      source: '皇家图书馆',
      description: '达芬奇晚年的自画像。',
      styleLabels: ['文艺复兴', '肖像画', '素描'],
      similarity: 0.89
    },
    {
      id: 'similar-2',
      title: '最后的晚餐',
      artist: '列奥纳多·达·芬奇',
      year: '1495-1498',
      style: '文艺复兴',
      url: 'https://images.unsplash.com/photo-1578848151706-206b516e2592?w=300',
      source: '圣玛丽亚感恩修道院',
      description: '达芬奇的另一杰作。',
      styleLabels: ['文艺复兴', '宗教画', '壁画'],
      similarity: 0.85
    },
    {
      id: 'similar-3',
      title: '抱银鼠的女子',
      artist: '列奥纳多·达·芬奇',
      year: '1489-1491',
      style: '文艺复兴',
      url: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=300',
      source: '恰尔托雷斯基博物馆',
      description: '达芬奇的肖像画杰作。',
      styleLabels: ['文艺复兴', '肖像画', '写实主义'],
      similarity: 0.82
    },
    {
      id: 'similar-4',
      title: '拉斐尔自画像',
      artist: '拉斐尔·桑齐奥',
      year: '1506',
      style: '文艺复兴',
      url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300',
      source: '乌菲兹美术馆',
      description: '文艺复兴三杰之一拉斐尔的自画像。',
      styleLabels: ['文艺复兴', '肖像画', '写实主义'],
      similarity: 0.75
    },
    {
      id: 'similar-5',
      title: '戴头盔的男子',
      artist: '伦勃朗',
      year: '1635',
      style: '巴洛克',
      url: 'https://images.unsplash.com/photo-1578848151706-206b516e2592?w=300',
      source: '大都会艺术博物馆',
      description: '伦勃朗的肖像画作品。',
      styleLabels: ['巴洛克', '肖像画', '写实主义'],
      similarity: 0.72
    }
  ];
};

// 生成风格分组数据
export const generateStyleGroups = (baseArtwork: ArtworkData): StyleGroup[] => {
  return [
    {
      styleName: '文艺复兴',
      description: '14-17世纪欧洲的艺术复兴运动',
      artworks: [
        {
          id: 'renaissance-1',
          title: '雅典学院',
          artist: '拉斐尔',
          year: '1509-1511',
          style: '文艺复兴',
          url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300',
          source: '梵蒂冈博物馆',
          description: '拉斐尔的代表作。',
          styleLabels: ['文艺复兴', '壁画', '古典主义'],
          similarity: 0.85
        },
        {
          id: 'renaissance-2',
          title: '创世纪',
          artist: '米开朗基罗',
          year: '1508-1512',
          style: '文艺复兴',
          url: 'https://images.unsplash.com/photo-1578848151706-206b516e2592?w=300',
          source: '西斯廷教堂',
          description: '米开朗基罗在西斯廷教堂天顶的杰作。',
          styleLabels: ['文艺复兴', '宗教画', '壁画'],
          similarity: 0.80
        }
      ]
    },
    {
      styleName: '肖像画',
      description: '专注于描绘人物面貌和性格的艺术形式',
      artworks: [
        {
          id: 'portrait-1',
          title: '阿尔诺芬尼夫妇',
          artist: '扬·凡·艾克',
          year: '1434',
          style: '北欧文艺复兴',
          url: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=300',
          source: '国家美术馆',
          description: '北欧文艺复兴的杰作。',
          styleLabels: ['北欧文艺复兴', '肖像画', '油画'],
          similarity: 0.78
        },
        {
          id: 'portrait-2',
          title: '夜巡',
          artist: '伦勃朗',
          year: '1642',
          style: '巴洛克',
          url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300',
          source: '阿姆斯特丹国立博物馆',
          description: '伦勃朗的群体肖像画杰作。',
          styleLabels: ['巴洛克', '群体肖像', '光影技法'],
          similarity: 0.72
        }
      ]
    },
    {
      styleName: '古典主义',
      description: '追求和谐、平衡和理想美的艺术风格',
      artworks: [
        {
          id: 'classical-1',
          title: '大宫女',
          artist: '让-奥古斯特-多米尼克·安格尔',
          year: '1814',
          style: '新古典主义',
          url: 'https://images.unsplash.com/photo-1578848151706-206b516e2592?w=300',
          source: '卢浮宫',
          description: '安格尔的东方主义作品。',
          styleLabels: ['新古典主义', '东方主义', '人体艺术'],
          similarity: 0.70
        }
      ]
    }
  ];
};

// 生成完整的探索响应数据
export const generateMockExploreResponse = (selectedArtwork: ArtworkData): ExploreResponse => {
  return {
    rootImage: selectedArtwork,
    similarityBranch: {
      title: '相似度探索',
      description: `基于 ${selectedArtwork.title} 的视觉特征，我们为您找到了这些相似的艺术作品`,
      artworks: generateSimilarArtworks(selectedArtwork)
    },
    styleBranch: {
      title: '风格探索',
      description: `探索与 ${selectedArtwork.title} 相关的艺术风格和流派`,
      styleGroups: generateStyleGroups(selectedArtwork)
    },
    overview: [
      ...generateSimilarArtworks(selectedArtwork),
      ...generateStyleGroups(selectedArtwork).flatMap(group => group.artworks)
    ]
  };
};

// 默认的探索响应数据（用于演示）
export const defaultExploreResponse: ExploreResponse = generateMockExploreResponse(classicArtworks[0]);
