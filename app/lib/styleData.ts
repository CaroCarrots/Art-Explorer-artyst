import { ArtStyle, TimelineEra, StyleBranch, StyleExplorationData, WaterfallSection, ArtworkData } from '../types/artwork';

// 艺术风格数据 - 精选最有名的4个艺术风格
export const artStyles: ArtStyle[] = [
  // 🌟 盛期文艺复兴 - 艺术史上的黄金时代
  {
    id: 'high-renaissance',
    name: '盛期文艺复兴',
    description: '15-16世纪意大利艺术黄金时代，以达·芬奇、米开朗基罗、拉斐尔为代表，追求和谐均衡和理想化人物，将艺术推向前所未有的高度',
    period: '15-16世纪',
    startYear: 1500,
    endYear: 1520,
    region: '意大利',
    influence: '艺术史上的巅峰时期，影响了后世数百年的艺术发展，确立了古典美学的标准',
    characteristics: ['和谐均衡', '理想化人物', '完美比例', '古典美学', '人文主义', '科学透视', '解剖学', '光影效果'],
    representativeWork: {
      id: 'mona-lisa',
      title: '蒙娜丽莎',
      artist: '列奥纳多·达·芬奇',
      year: '1503-1519',
      style: '盛期文艺复兴',
      url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
      source: '卢浮宫',
      description: '达·芬奇的杰作，运用了创新的晕涂法（sfumato）技术，创造了神秘而永恒的微笑，展现了文艺复兴时期对完美人像的追求和对人性的深刻理解。',
      styleLabels: ['盛期文艺复兴', '肖像画', '达·芬奇', '晕涂法'],
      similarity: 1.0
    },
    relatedStyles: ['impressionism'],
    color: '#FFD700'
  },
  // 🌸 印象派 - 现代艺术的起点
  {
    id: 'impressionism',
    name: '印象派',
    description: '19世纪晚期法国艺术革命，以莫奈、雷诺阿、德加为代表，突破传统绘画技法，捕捉户外光影的瞬间变化，开创了现代艺术的新纪元',
    period: '19世纪晚期',
    startYear: 1870,
    endYear: 1890,
    region: '法国',
    influence: '现代艺术的起点，彻底改变了艺术观念，从室内画室走向户外，从历史题材转向日常生活，为20世纪艺术革命奠定基础',
    characteristics: ['户外光影', '快速笔触', '明亮色彩', '瞬间印象', '自然光', '日常生活', '色彩分解', '光学原理'],
    representativeWork: {
      id: 'monet-impression',
      title: '印象·日出',
      artist: '克劳德·莫奈',
      year: '1872',
      style: '印象派',
      url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
      source: '巴黎',
      description: '莫奈的杰作，印象派名称的由来。这幅画描绘了勒阿弗尔港口的日出景象，运用破碎的笔触和明亮的色彩捕捉了晨雾中光线的瞬间变化，彻底颠覆了传统绘画的写实主义观念。',
      styleLabels: ['印象派', '风景画', '莫奈', '日出', '港口'],
      similarity: 1.0
    },
    relatedStyles: ['high-renaissance', 'cubism'],
    color: '#87CEEB'
  },
  // 🌀 立体主义 - 20世纪最重要的艺术运动之一
  {
    id: 'cubism',
    name: '立体主义',
    description: '20世纪初由毕加索和布拉克开创的艺术革命，通过多视角几何化重新定义空间和形式，彻底颠覆了传统绘画的透视法则，成为现代艺术的重要里程碑',
    period: '20世纪初',
    startYear: 1907,
    endYear: 1920,
    region: '法国',
    influence: '20世纪最重要的艺术运动之一，影响了建筑、设计、雕塑等多个领域，为抽象艺术和现代艺术的发展开辟了道路',
    characteristics: ['多视角', '几何化', '空间重构', '抽象化', '分析性', '拼贴技法', '色彩简化', '形式分解'],
    representativeWork: {
      id: 'picasso-les',
      title: '亚维农少女',
      artist: '巴勃罗·毕加索',
      year: '1907',
      style: '立体主义',
      url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
      source: '纽约现代艺术博物馆',
      description: '毕加索的杰作，立体主义的开山之作。这幅画描绘了巴塞罗那亚维农街的妓女，通过几何化的形式和多重视角，彻底打破了传统绘画的单一视点，开创了全新的艺术表现方式，标志着现代艺术的诞生。',
      styleLabels: ['立体主义', '人物画', '毕加索', '亚维农', '几何化'],
      similarity: 1.0
    },
    relatedStyles: ['impressionism', 'contemporary-art'],
    color: '#2E8B57'
  },
  // 🎆 当代艺术 - 现代艺术的最新发展
  {
    id: 'contemporary-art',
    name: '当代艺术',
    description: '20世纪80年代至今的多元化艺术实践，突破传统媒介界限，融合装置、影像、数字艺术、行为艺术等多种形式，关注社会议题和全球化问题',
    period: '20世纪80年代至今',
    startYear: 1980,
    endYear: 2024,
    region: '全球',
    influence: '当代艺术的最新发展，持续影响社会文化，推动艺术与科技、社会、政治的深度融合，重新定义艺术的可能性',
    characteristics: ['多元跨界', '装置艺术', '影像艺术', '数字艺术', '社会参与', '全球化', '身份政治', '环境议题', '科技融合'],
    representativeWork: {
      id: 'ai-weiwei-sunflower',
      title: '葵花籽',
      artist: '艾未未',
      year: '2010',
      style: '当代艺术',
      url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
      source: '伦敦泰特现代美术馆',
      description: '艾未未的杰作，由1亿颗手工制作的陶瓷葵花籽组成的装置艺术。这件作品不仅展现了艺术家的政治立场和对中国社会现实的关注，更体现了当代艺术中个体与集体、传统与创新、艺术与政治的复杂关系，成为当代艺术史上的重要作品。',
      styleLabels: ['当代艺术', '装置', '艾未未', '政治艺术', '社会批判'],
      similarity: 1.0
    },
    relatedStyles: ['cubism'],
    color: '#FF4500'
  }
];

// 时间轴节点数据 - 包含"更多内容，后续更新"提示
export const timelineNodes = [
  {
    id: 'romanesque',
    year: 1000,
    title: '罗曼式艺术',
    description: '10-12世纪欧洲宗教艺术，以厚重的建筑装饰和宗教壁画为特征',
    styles: [],
    significance: '中世纪艺术的典型代表，为哥特式艺术奠定基础',
    representativeArtists: ['匿名大师'],
    color: '#8B4513'
  },
  {
    id: 'gothic',
    year: 1150,
    title: '哥特式艺术',
    description: '12-15世纪欧洲艺术风格，以尖拱建筑和彩色玻璃为特征',
    styles: [],
    significance: '建筑与艺术的完美结合，影响后世数百年',
    representativeArtists: ['建筑大师们'],
    color: '#4A90E2'
  },
  {
    id: 'early-renaissance',
    year: 1400,
    title: '早期文艺复兴',
    description: '14-15世纪意大利艺术复兴的初期，探索透视法和人体解剖学',
    styles: [],
    significance: '奠定了文艺复兴艺术的基础，建立了科学的透视法体系',
    representativeArtists: ['马萨乔', '波提切利'],
    color: '#D4AF37'
  },
  {
    id: 'high-renaissance',
    year: 1500,
    title: '盛期文艺复兴',
    description: '15-16世纪文艺复兴的黄金时期，以达·芬奇、米开朗基罗、拉斐尔为代表',
    styles: [artStyles[0]], // 引用盛期文艺复兴风格
    significance: '文艺复兴艺术的巅峰，影响了后世数百年的艺术发展',
    representativeArtists: ['达·芬奇', '米开朗基罗', '拉斐尔'],
    color: '#FFD700'
  },
  {
    id: 'mannerism',
    year: 1520,
    title: '矫饰主义',
    description: '16世纪晚期艺术风格，以比例夸张和姿态扭曲为特征',
    styles: [],
    significance: '对文艺复兴理想的反叛，开启巴洛克艺术',
    representativeArtists: ['埃尔·格列柯'],
    color: '#FF6B6B'
  },
  {
    id: 'baroque',
    year: 1600,
    title: '巴洛克',
    description: '17-18世纪欧洲艺术风格，以戏剧化光影和强烈情感为特征',
    styles: [],
    significance: '艺术与宗教的完美结合，影响整个欧洲',
    representativeArtists: ['卡拉瓦乔', '鲁本斯', '委拉斯开兹', '伦勃朗'],
    color: '#8B0000'
  },
  {
    id: 'rococo',
    year: 1700,
    title: '洛可可',
    description: '18世纪法国宫廷艺术，以华丽装饰和轻快色彩为特征',
    styles: [],
    significance: '宫廷艺术的极致，影响装饰艺术发展',
    representativeArtists: ['华托', '布歇', '弗拉戈纳尔'],
    color: '#FFB6C1'
  },
  {
    id: 'neoclassicism',
    year: 1750,
    title: '新古典主义',
    description: '18-19世纪艺术风格，回归古罗马希腊美学，强调理性与秩序',
    styles: [],
    significance: '启蒙运动的艺术表现，影响政治和社会',
    representativeArtists: ['雅克-路易·大卫', '安格尔'],
    color: '#4682B4'
  },
  {
    id: 'romanticism',
    year: 1800,
    title: '浪漫主义',
    description: '19世纪早期艺术运动，强调情感、自然力量和民族史诗',
    styles: [],
    significance: '对理性的反叛，强调个人情感和想象力',
    representativeArtists: ['德拉克洛瓦', '透纳', '戈雅'],
    color: '#DC143C'
  },
  {
    id: 'realism',
    year: 1840,
    title: '现实主义',
    description: '19世纪中期艺术运动，描绘日常生活和社会题材，反对理想化',
    styles: [],
    significance: '艺术转向现实，为印象派铺平道路',
    representativeArtists: ['库尔贝', '米勒'],
    color: '#696969'
  },
  {
    id: 'impressionism',
    year: 1870,
    title: '印象派',
    description: '19世纪晚期法国艺术运动，以户外光影和快速笔触为特征',
    styles: [artStyles[1]], // 引用印象派风格
    significance: '现代艺术的起点，彻底改变艺术观念',
    representativeArtists: ['莫奈', '雷诺阿', '德加'],
    color: '#87CEEB'
  },
  {
    id: 'post-impressionism',
    year: 1885,
    title: '后印象派',
    description: '19世纪末20世纪初艺术运动，强调个人化表达和形体色彩实验',
    styles: [],
    significance: '为现代艺术各流派奠定基础',
    representativeArtists: ['梵高', '高更', '塞尚'],
    color: '#FFD700'
  },
  {
    id: 'symbolism',
    year: 1880,
    title: '象征主义',
    description: '19世纪末20世纪初艺术运动，强调神秘主义和梦幻题材',
    styles: [],
    significance: '为超现实主义奠定基础',
    representativeArtists: ['莫罗', '雷东'],
    color: '#9370DB'
  },
  {
    id: 'fauvism',
    year: 1905,
    title: '野兽派',
    description: '20世纪初法国艺术运动，以大胆原色和简化形体为特征',
    styles: [],
    significance: '色彩解放，为表现主义铺平道路',
    representativeArtists: ['马蒂斯'],
    color: '#FF4500'
  },
  {
    id: 'cubism',
    year: 1907,
    title: '立体主义',
    description: '20世纪初艺术运动，以多视角几何化为特征',
    styles: [artStyles[2]], // 引用立体主义风格
    significance: '20世纪最重要的艺术运动之一',
    representativeArtists: ['毕加索', '布拉克'],
    color: '#2E8B57'
  },
  {
    id: 'futurism',
    year: 1909,
    title: '未来主义',
    description: '20世纪初意大利艺术运动，强调速度、机械和都市动感',
    styles: [],
    significance: '对现代工业文明的赞美',
    representativeArtists: ['波丘尼'],
    color: '#FF6347'
  },
  {
    id: 'expressionism',
    year: 1905,
    title: '表现主义',
    description: '20世纪初德国艺术运动，强调主观情感和扭曲形体',
    styles: [],
    significance: '情感表达的艺术，影响后世表现主义',
    representativeArtists: ['康定斯基', '蒙克'],
    color: '#8B0000'
  },
  {
    id: 'dada',
    year: 1916,
    title: '达达主义',
    description: '20世纪初反艺术运动，以拼贴和讽刺为特征',
    styles: [],
    significance: '反艺术的艺术，为观念艺术奠定基础',
    representativeArtists: ['杜尚'],
    color: '#FF1493'
  },
  {
    id: 'surrealism',
    year: 1924,
    title: '超现实主义',
    description: '20世纪20-40年代艺术运动，探索梦境和潜意识',
    styles: [],
    significance: '探索潜意识，影响现代艺术和设计',
    representativeArtists: ['达利', '马格利特'],
    color: '#FF69B4'
  },
  {
    id: 'abstract-art',
    year: 1910,
    title: '抽象艺术',
    description: '20世纪初至今的艺术运动，脱离具象，强调形与色',
    styles: [],
    significance: '现代艺术的核心，影响所有艺术形式',
    representativeArtists: ['康定斯基', '蒙德里安'],
    color: '#9370DB'
  },
  {
    id: 'abstract-expressionism',
    year: 1940,
    title: '抽象表现主义',
    description: '20世纪40-50年代美国艺术运动，以即兴笔触和巨大画布为特征',
    styles: [],
    significance: '美国艺术的崛起，影响全球艺术发展',
    representativeArtists: ['波洛克', '罗斯科'],
    color: '#FF8C00'
  },
  {
    id: 'minimalism',
    year: 1960,
    title: '极简主义',
    description: '20世纪60-70年代艺术运动，以简单几何和去个性化为特征',
    styles: [],
    significance: '极简美学，影响设计和建筑',
    representativeArtists: ['唐纳德·贾德'],
    color: '#C0C0C0'
  },
  {
    id: 'pop-art',
    year: 1950,
    title: '波普艺术',
    description: '20世纪50-70年代艺术运动，以消费文化和广告图像为特征',
    styles: [],
    significance: '艺术与大众文化的结合，影响当代艺术',
    representativeArtists: ['安迪·沃霍尔', '利希滕斯坦'],
    color: '#FF1493'
  },
  {
    id: 'conceptual-art',
    year: 1960,
    title: '观念艺术',
    description: '20世纪60年代至今的艺术运动，作品即观念本身',
    styles: [],
    significance: '观念至上，影响当代艺术发展',
    representativeArtists: ['约瑟夫·科苏斯'],
    color: '#000000'
  },
  {
    id: 'contemporary-art',
    year: 1980,
    title: '当代艺术',
    description: '20世纪80年代至今的艺术，多元跨界，包含装置、影像、数字艺术',
    styles: [artStyles[3]], // 引用当代艺术风格
    significance: '当代艺术的最新发展，持续影响社会',
    representativeArtists: ['艾未未', '达米恩·赫斯特'],
    color: '#FF4500'
  },
  // 更多内容，后续更新提示
  {
    id: 'coming-soon',
    year: 2025,
    title: '更多艺术风格',
    description: '我们正在持续更新更多精彩的艺术风格内容，敬请期待！',
    styles: [],
    significance: '更多艺术风格探索功能即将上线',
    representativeArtists: ['敬请期待'],
    color: '#9CA3AF'
  }
];

// 风格分支数据
export const styleBranches: StyleBranch[] = [
  {
    id: 'renaissance-branches',
    name: '文艺复兴分支',
    description: '文艺复兴时期的各种艺术表现形式',
    parentStyle: 'high-renaissance',
    relatedStyles: ['early-renaissance', 'mannerism'],
    artworks: []
  },
  {
    id: 'modern-art-branches',
    name: '现代艺术分支',
    description: '20世纪现代艺术的各种流派',
    parentStyle: 'cubism',
    relatedStyles: ['fauvism', 'expressionism', 'surrealism'],
    artworks: []
  }
];

// 精选艺术风格的详细探索数据
export const featuredStyleData: { [key: string]: any } = {
  'high-renaissance': {
    masterpieces: [
      {
        id: 'mona-lisa',
        title: '蒙娜丽莎',
        artist: '列奥纳多·达·芬奇',
        year: '1503-1519',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
        description: '达·芬奇的杰作，运用了创新的晕涂法（sfumato）技术，创造了神秘而永恒的微笑。这幅画不仅展现了文艺复兴时期对完美人像的追求，更体现了艺术家对人性深刻的理解。',
        techniques: ['晕涂法', '透视法', '光影效果', '解剖学'],
        significance: '文艺复兴艺术的巅峰之作，影响了后世数百年的肖像画创作'
      },
      {
        id: 'sistine-chapel',
        title: '西斯廷教堂天顶画',
        artist: '米开朗基罗',
        year: '1508-1512',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
        description: '米开朗基罗的巨作，描绘了《创世纪》的九个场景。这幅画展现了艺术家对人体解剖学的深刻理解和对宗教题材的崇高表达。',
        techniques: ['湿壁画', '人体解剖', '透视缩短', '色彩运用'],
        significance: '文艺复兴雕塑与绘画艺术的完美结合，展现了人类创造力的极限'
      },
      {
        id: 'school-of-athens',
        title: '雅典学院',
        artist: '拉斐尔',
        year: '1509-1511',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
        description: '拉斐尔的杰作，描绘了古希腊哲学家们的聚会。这幅画完美体现了文艺复兴时期对古典文化的复兴和对理性知识的追求。',
        techniques: ['线性透视', '人物群像', '建筑背景', '色彩和谐'],
        significance: '人文主义思想的视觉表达，展现了文艺复兴对古典文化的崇敬'
      }
    ],
    similarWorks: [
      {
        id: 'last-supper',
        title: '最后的晚餐',
        artist: '列奥纳多·达·芬奇',
        year: '1495-1498',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
        description: '达·芬奇的宗教画杰作，运用了创新的透视法和人物心理刻画。'
      },
      {
        id: 'david',
        title: '大卫像',
        artist: '米开朗基罗',
        year: '1501-1504',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
        description: '米开朗基罗的雕塑杰作，展现了完美的人体比例和英雄气概。'
      },
      {
        id: 'sistine-madonna',
        title: '西斯廷圣母',
        artist: '拉斐尔',
        year: '1512-1513',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
        description: '拉斐尔的圣母像杰作，展现了理想化的女性美和母性光辉。'
      }
    ],
    timeline: [
      { year: 1400, event: '早期文艺复兴开始', description: '马萨乔等艺术家开始探索透视法' },
      { year: 1450, event: '印刷术传入欧洲', description: '促进了人文主义思想的传播' },
      { year: 1500, event: '盛期文艺复兴开始', description: '达·芬奇、米开朗基罗、拉斐尔三大巨匠活跃' },
      { year: 1520, event: '拉斐尔去世', description: '盛期文艺复兴结束，矫饰主义兴起' }
    ],
    branches: [
      {
        name: '威尼斯画派',
        description: '以色彩和光线为特色的威尼斯艺术传统',
        artists: ['提香', '乔尔乔内', '丁托列托'],
        characteristics: ['色彩丰富', '光线效果', '风景画', '感官享受']
      },
      {
        name: '佛罗伦萨画派',
        description: '以线条和构图见长的佛罗伦萨艺术传统',
        artists: ['波提切利', '基兰达约', '韦罗基奥'],
        characteristics: ['线性美', '构图严谨', '宗教题材', '人文主义']
      }
    ]
  },
  'impressionism': {
    masterpieces: [
      {
        id: 'impression-sunrise',
        title: '印象·日出',
        artist: '克劳德·莫奈',
        year: '1872',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
        description: '莫奈的杰作，印象派名称的由来。这幅画描绘了勒阿弗尔港口的日出景象，运用破碎的笔触和明亮的色彩捕捉了晨雾中光线的瞬间变化。',
        techniques: ['破碎笔触', '色彩分解', '户外写生', '光线捕捉'],
        significance: '印象派运动的开山之作，彻底颠覆了传统绘画观念'
      },
      {
        id: 'dance-at-le-moulin',
        title: '煎饼磨坊的舞会',
        artist: '皮埃尔-奥古斯特·雷诺阿',
        year: '1876',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
        description: '雷诺阿的杰作，描绘了巴黎蒙马特高地煎饼磨坊的舞会场景。这幅画展现了印象派对日常生活和光影效果的关注。',
        techniques: ['点彩技法', '光影效果', '人物群像', '色彩和谐'],
        significance: '印象派社会题材的代表作，展现了现代都市生活的活力'
      },
      {
        id: 'absinthe-drinker',
        title: '苦艾酒',
        artist: '埃德加·德加',
        year: '1876',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
        description: '德加的作品，描绘了巴黎咖啡馆中的孤独女性。这幅画展现了印象派对现代都市生活的深刻观察。',
        techniques: ['构图创新', '心理刻画', '色彩运用', '社会观察'],
        significance: '印象派心理描写的代表作，展现了现代都市的孤独感'
      }
    ],
    similarWorks: [
      {
        id: 'water-lilies',
        title: '睡莲系列',
        artist: '克劳德·莫奈',
        year: '1899-1926',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
        description: '莫奈晚年的杰作，专注于光影和色彩的变化。'
      },
      {
        id: 'luncheon-boating',
        title: '游艇上的午餐',
        artist: '皮埃尔-奥古斯特·雷诺阿',
        year: '1881',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
        description: '雷诺阿的户外写生杰作，展现了印象派的色彩技巧。'
      },
      {
        id: 'dance-class',
        title: '舞蹈课',
        artist: '埃德加·德加',
        year: '1874',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
        description: '德加的芭蕾舞题材作品，展现了印象派的构图创新。'
      }
    ],
    timeline: [
      { year: 1860, event: '印象派前奏', description: '库尔贝等现实主义艺术家为印象派铺路' },
      { year: 1874, event: '第一次印象派展览', description: '印象派正式诞生，莫奈展出《印象·日出》' },
      { year: 1886, event: '最后一次印象派展览', description: '印象派运动结束，后印象派兴起' },
      { year: 1890, event: '印象派影响扩散', description: '印象派技法影响全球艺术发展' }
    ],
    branches: [
      {
        name: '后印象派',
        description: '在印象派基础上发展出的个人化艺术风格',
        artists: ['梵高', '高更', '塞尚'],
        characteristics: ['个人表达', '色彩实验', '形式创新', '情感表达']
      },
      {
        name: '新印象派',
        description: '以科学色彩理论为基础的印象派分支',
        artists: ['修拉', '西涅克'],
        characteristics: ['点彩技法', '科学色彩', '几何构图', '理性分析']
      }
    ]
  },
  'cubism': {
    masterpieces: [
      {
        id: 'les-demoiselles',
        title: '亚维农少女',
        artist: '巴勃罗·毕加索',
        year: '1907',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
        description: '毕加索的杰作，立体主义的开山之作。这幅画描绘了巴塞罗那亚维农街的妓女，通过几何化的形式和多重视角，彻底打破了传统绘画的单一视点。',
        techniques: ['多重视角', '几何化', '空间重构', '色彩简化'],
        significance: '现代艺术的开端，彻底改变了艺术表现方式'
      },
      {
        id: 'violin-candlestick',
        title: '小提琴与烛台',
        artist: '乔治·布拉克',
        year: '1910',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
        description: '布拉克的立体主义杰作，将日常物品分解为几何形状，探索了新的空间表现方式。',
        techniques: ['分析立体主义', '拼贴技法', '色彩简化', '形式分解'],
        significance: '立体主义分析阶段的代表作，展现了新的艺术语言'
      },
      {
        id: 'guernica',
        title: '格尔尼卡',
        artist: '巴勃罗·毕加索',
        year: '1937',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
        description: '毕加索的反战杰作，运用立体主义技法描绘了西班牙内战中格尔尼卡小镇的惨状。',
        techniques: ['立体主义', '拼贴技法', '单色调', '象征手法'],
        significance: '政治艺术的代表作，展现了艺术的社会责任'
      }
    ],
    similarWorks: [
      {
        id: 'portrait-gertrude',
        title: '格特鲁德·斯泰因肖像',
        artist: '巴勃罗·毕加索',
        year: '1906',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
        description: '毕加索早期立体主义肖像画，探索了新的表现方式。'
      },
      {
        id: 'houses-lestaque',
        title: '埃斯塔克的房子',
        artist: '乔治·布拉克',
        year: '1908',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
        description: '布拉克的风景画，展现了立体主义对空间的重新定义。'
      },
      {
        id: 'three-musicians',
        title: '三个音乐家',
        artist: '巴勃罗·毕加索',
        year: '1921',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
        description: '毕加索综合立体主义时期的杰作，融合了拼贴技法。'
      }
    ],
    timeline: [
      { year: 1907, event: '立体主义诞生', description: '毕加索创作《亚维农少女》，立体主义开始' },
      { year: 1908, event: '布拉克加入', description: '布拉克与毕加索合作，立体主义理论形成' },
      { year: 1912, event: '综合立体主义', description: '拼贴技法引入，立体主义进入新阶段' },
      { year: 1920, event: '立体主义影响扩散', description: '立体主义影响建筑、设计等多个领域' }
    ],
    branches: [
      {
        name: '未来主义',
        description: '受立体主义影响的意大利艺术运动',
        artists: ['波丘尼', '巴拉', '塞韦里尼'],
        characteristics: ['动态感', '机械美', '速度感', '现代性']
      },
      {
        name: '构成主义',
        description: '俄国的几何抽象艺术运动',
        artists: ['塔特林', '罗德琴科', '马列维奇'],
        characteristics: ['几何抽象', '工业材料', '社会功能', '理性设计']
      }
    ]
  },
  'contemporary-art': {
    masterpieces: [
      {
        id: 'sunflower-seeds',
        title: '葵花籽',
        artist: '艾未未',
        year: '2010',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
        description: '艾未未的杰作，由1亿颗手工制作的陶瓷葵花籽组成的装置艺术。这件作品不仅展现了艺术家的政治立场和对中国社会现实的关注，更体现了当代艺术中个体与集体、传统与创新、艺术与政治的复杂关系。',
        techniques: ['装置艺术', '集体创作', '陶瓷工艺', '社会参与'],
        significance: '当代政治艺术的代表作，展现了艺术的社会批判功能'
      },
      {
        id: 'for-the-love-of-god',
        title: '为了上帝的爱',
        artist: '达米恩·赫斯特',
        year: '2007',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
        description: '赫斯特的装置艺术杰作，用铂金和钻石制作的人头骨，探讨了死亡、财富和宗教等当代议题。',
        techniques: ['装置艺术', '贵金属工艺', '概念艺术', '商业运作'],
        significance: '当代艺术商业化的典型代表，引发了对艺术价值的讨论'
      },
      {
        id: 'weather-project',
        title: '天气计划',
        artist: '奥拉维尔·埃利亚松',
        year: '2003',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
        description: '埃利亚松的装置艺术，在泰特现代美术馆创造了人工太阳和雾气的环境，探讨了自然与人工、感知与现实的关系。',
        techniques: ['环境装置', '光影效果', '感官体验', '科技融合'],
        significance: '当代环境艺术的代表作，展现了艺术与科技的融合'
      }
    ],
    similarWorks: [
      {
        id: 'my-bed',
        title: '我的床',
        artist: '翠西·艾敏',
        year: '1998',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
        description: '艾敏的自传性装置作品，展现了当代艺术的个人化表达。'
      },
      {
        id: 'shark-tank',
        title: '鲨鱼缸',
        artist: '达米恩·赫斯特',
        year: '1991',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
        description: '赫斯特的早期装置作品，探讨了死亡和恐惧的主题。'
      },
      {
        id: 'infinity-mirrors',
        title: '无限镜屋',
        artist: '草间弥生',
        year: '2013',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
        description: '草间弥生的沉浸式装置艺术，创造了无限延伸的视觉体验。'
      }
    ],
    timeline: [
      { year: 1980, event: '当代艺术兴起', description: '后现代主义艺术开始影响全球' },
      { year: 1990, event: '全球化艺术', description: '艺术市场全球化，双年展制度确立' },
      { year: 2000, event: '数字艺术兴起', description: '互联网和数字技术改变艺术创作' },
      { year: 2010, event: '社会参与艺术', description: '艺术家更多关注社会议题和政治问题' }
    ],
    branches: [
      {
        name: '数字艺术',
        description: '运用数字技术创作的艺术形式',
        artists: ['草间弥生', 'teamLab', '拉斐尔·罗森塔尔'],
        characteristics: ['数字技术', '互动性', '虚拟现实', '科技融合']
      },
      {
        name: '社会参与艺术',
        description: '关注社会议题的参与式艺术',
        artists: ['艾未未', '班克斯', 'JR'],
        characteristics: ['社会批判', '公众参与', '政治表达', '社会变革']
      }
    ]
  }
};

// 瀑布流探索数据
export const explorationData: StyleExplorationData = {
  selectedStyle: null,
  waterfallSections: []
};

// 经典艺术作品数据
export const classicArtworks: ArtworkData[] = [
  {
    id: 'mona-lisa',
    title: '蒙娜丽莎',
    artist: '达·芬奇',
    year: '1503-1519',
    style: '盛期文艺复兴',
    url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
    source: '卢浮宫',
    description: '达·芬奇的杰作，展现了文艺复兴时期对完美人像的追求。',
    styleLabels: ['盛期文艺复兴', '肖像画', '达·芬奇'],
    similarity: 1.0
  },
  {
    id: 'impression-sunrise',
    title: '印象·日出',
    artist: '莫奈',
    year: '1872',
    style: '印象派',
    url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
    source: '巴黎',
    description: '莫奈的杰作，印象派名称的由来，展现了光影的瞬间变化。',
    styleLabels: ['印象派', '风景画', '莫奈'],
    similarity: 1.0
  },
  {
    id: 'les-demoiselles',
    title: '亚维农少女',
    artist: '毕加索',
    year: '1907',
    style: '立体主义',
    url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
    source: '纽约',
    description: '毕加索的杰作，立体主义的开山之作，彻底改变了艺术观念。',
    styleLabels: ['立体主义', '人物画', '毕加索'],
    similarity: 1.0
  },
  {
    id: 'sunflower-seeds',
    title: '葵花籽',
    artist: '艾未未',
    year: '2010',
    style: '当代艺术',
    url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
    source: '伦敦',
    description: '艾未未的杰作，展现了当代艺术对社会问题的关注。',
    styleLabels: ['当代艺术', '装置', '艾未未'],
    similarity: 1.0
  }
];

// 获取可用的艺术风格
export const getAvailableStyles = (): ArtStyle[] => {
  return artStyles;
};

// 生成风格探索数据
export const generateStyleExplorationData = (style: ArtStyle): StyleExplorationData => {
  // 检查是否是精选的4个艺术风格
  const isFeaturedStyle = ['high-renaissance', 'impressionism', 'cubism', 'contemporary-art'].includes(style.id);
  
  return {
    selectedStyle: style,
    waterfallSections: [
      {
        id: 'masterpiece',
        title: '代表作品',
        description: isFeaturedStyle ? '探索这一艺术风格的经典代表作' : '了解这一艺术风格的代表作品（简化版本）',
        component: 'MasterpieceSection',
        data: isFeaturedStyle ? featuredStyleData[style.id]?.masterpieces || [] : [],
        scrollTrigger: 0.1
      }
    ]
  };
};

// 模拟探索响应数据
export const generateMockExploreResponse = (imageUrl: string): any => {
  return {
    similarImages: classicArtworks.slice(0, 6),
    styleAnalysis: {
      dominantStyle: '盛期文艺复兴',
      confidence: 0.85,
      characteristics: ['和谐均衡', '理想化人物', '完美比例']
    },
    relatedStyles: ['印象派', '立体主义', '当代艺术'],
    explorationModes: ['similarity', 'style', 'timeline']
  };
};