import { ArtStyle, TimelineEra, StyleBranch, StyleExplorationData, WaterfallSection, ArtworkData } from '../types/artwork';

// 艺术风格数据 - 精选3个主要风格用于展示
export const artStyles: ArtStyle[] = [
  {
    id: 'high-renaissance',
    name: '盛期文艺复兴',
    description: '15-16世纪文艺复兴的黄金时期，以达·芬奇、米开朗基罗、拉斐尔为代表。这一时期代表了人类艺术史上的巅峰，完美融合了科学、艺术和人文主义精神，创造了和谐均衡、理想化人物的经典美学。',
    period: '15-16世纪',
    startYear: 1500,
    endYear: 1520,
    region: '意大利',
    influence: '文艺复兴艺术的巅峰，影响了后世数百年的艺术发展，奠定了西方艺术的基础',
    characteristics: ['和谐均衡', '理想化人物', '完美比例', '古典美学', '人文主义', '科学透视', '解剖学', '晕涂法'],
    representativeWork: {
      id: 'mona-lisa',
      title: '蒙娜丽莎',
      artist: '列奥纳多·达·芬奇',
      year: '1503-1519',
      style: '盛期文艺复兴',
      url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
      source: '卢浮宫',
      description: '达·芬奇的杰作，运用了创新的晕涂法（sfumato）技术，创造了神秘而永恒的微笑。这幅画不仅展现了文艺复兴时期对完美人像的追求，更体现了艺术家对人性深刻的理解。',
      styleLabels: ['盛期文艺复兴', '肖像画', '达·芬奇', '晕涂法'],
      similarity: 1.0
    },
    relatedStyles: ['mannerism', 'baroque'],
    color: '#DAA520'
  },
  {
    id: 'impressionism',
    name: '印象派',
    description: '19世纪晚期法国艺术运动，以户外光影和快速笔触为特征。印象派彻底改变了传统绘画观念，将艺术从室内工作室带到了户外，捕捉瞬间的光影变化，开创了现代艺术的新纪元。',
    period: '19世纪晚期',
    startYear: 1870,
    endYear: 1890,
    region: '法国',
    influence: '彻底改变了绘画观念，为现代艺术奠定基础，影响了全球艺术发展',
    characteristics: ['户外光影', '快速笔触', '明亮色彩', '瞬间印象', '日常生活', '色彩分解', '破碎笔触', '光线捕捉'],
    representativeWork: {
      id: 'impression-sunrise',
      title: '印象·日出',
      artist: '克劳德·莫奈',
      year: '1872',
      style: '印象派',
      url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
      source: '马莫坦博物馆',
      description: '莫奈的杰作，印象派名称的由来。这幅画描绘了勒阿弗尔港口的日出景象，运用破碎的笔触和明亮的色彩捕捉了晨雾中光线的瞬间变化。',
      styleLabels: ['印象派', '风景画', '莫奈', '日出'],
      similarity: 1.0
    },
    relatedStyles: ['post-impressionism', 'realism'],
    color: '#87CEEB'
  },
  {
    id: 'contemporary-art',
    name: '当代艺术',
    description: '20世纪80年代至今的多元化艺术，包含装置、影像、数字艺术等。当代艺术代表了当今艺术的最新发展，强调社会参与、跨界融合和科技应用，持续影响全球文化和社会变革。',
    period: '20世纪80年代至今',
    startYear: 1980,
    endYear: 2024,
    region: '全球',
    influence: '代表了当今艺术的最新发展，持续影响全球文化，推动社会变革和思想创新',
    characteristics: ['多元化', '跨界融合', '社会参与', '科技融合', '全球化', '装置艺术', '数字艺术', '概念艺术'],
    representativeWork: {
      id: 'sunflower-seeds',
      title: '葵花籽',
      artist: '艾未未',
      year: '2010',
      style: '当代艺术',
      url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
      source: '泰特现代美术馆',
      description: '艾未未的杰作，由1亿颗手工制作的陶瓷葵花籽组成的装置艺术。这件作品不仅展现了艺术家的政治立场和对中国社会现实的关注，更体现了当代艺术中个体与集体、传统与创新、艺术与政治的复杂关系。',
      styleLabels: ['当代艺术', '装置艺术', '艾未未', '社会参与'],
      similarity: 1.0
    },
    relatedStyles: [],
    color: '#4CAF50'
  },
  {
    id: 'more-styles-coming',
    name: '更多风格，等待更新',
    description: '我们正在为艺术风格探索功能准备更多精彩的艺术风格内容，包括立体主义、表现主义、超现实主义、波普艺术等。敬请期待更多丰富的艺术体验！',
    period: '即将推出',
    startYear: 2024,
    endYear: 2024,
    region: '全球',
    influence: '即将为艺术爱好者带来更全面的艺术风格探索体验',
    characteristics: ['即将推出', '更多风格', '敬请期待', '丰富内容', '艺术探索', '风格多样', '深度体验', '持续更新'],
    representativeWork: {
      id: 'coming-soon-artwork',
      title: '敬请期待',
      artist: '即将推出',
      year: '2024',
      style: '更多风格',
      url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
      source: '即将推出',
      description: '我们正在为这一功能准备更多精彩的艺术风格内容，包括立体主义、表现主义、超现实主义、波普艺术等。敬请期待！',
      styleLabels: ['即将推出', '更多风格', '敬请期待'],
      similarity: 1.0
    },
    relatedStyles: [],
    color: '#9B59B6'
  }
];

// 时间轴节点数据 - 西方艺术风格时间线（约1000年）
export const timelineNodes: TimelineNode[] = [
  // 🏰 中世纪与早期
  {
    id: 'romanesque',
    year: 1000,
    title: '罗曼式艺术',
    description: '宗教壁画、圣经故事、厚重的建筑墙体装饰',
    significance: '中世纪艺术的典型代表，为哥特式艺术奠定基础',
    representativeArtists: ['匿名工匠', '教堂建筑师', '彩绘手抄本师'],
    color: '#8B4513',
    styles: [artStyles[0]] // 罗曼式艺术
  },
  {
    id: 'gothic',
    year: 1150,
    title: '哥特式艺术',
    description: '彩色玻璃、尖拱建筑、宗教主题绘画',
    significance: '建筑与艺术的完美结合，影响后世数百年',
    representativeArtists: ['乔托', '建筑大师', '彩色玻璃工匠'],
    color: '#6B4423',
    styles: [artStyles[1]] // 哥特式艺术
  },

  // 🌱 文艺复兴与古典回归
  {
    id: 'early-renaissance',
    year: 1400,
    title: '早期文艺复兴',
    description: '透视法、人体比例科学化',
    significance: '现代艺术的奠基时期，科学方法引入艺术',
    representativeArtists: ['马萨乔', '波提切利', '皮耶罗·德拉·弗朗切斯卡'],
    color: '#D2691E',
    styles: [artStyles[2]] // 早期文艺复兴
  },
  {
    id: 'high-renaissance',
    year: 1500,
    title: '盛期文艺复兴',
    description: '和谐均衡、理想化人物',
    significance: '文艺复兴艺术的巅峰，产生了最伟大的艺术大师',
    representativeArtists: ['达·芬奇', '米开朗基罗', '拉斐尔'],
    color: '#8B4513',
    styles: [artStyles[3]] // 盛期文艺复兴
  },
  {
    id: 'mannerism',
    year: 1520,
    title: '矫饰主义',
    description: '比例夸张、姿态扭曲、色彩强烈',
    significance: '对古典规范的突破，为巴洛克艺术铺路',
    representativeArtists: ['埃尔·格列柯', '帕尔米贾尼诺', '蓬托尔莫'],
    color: '#A0522D',
    styles: [artStyles[4]] // 矫饰主义
  },

  // 💎 巴洛克与启蒙
  {
    id: 'baroque',
    year: 1600,
    title: '巴洛克艺术',
    description: '戏剧化光影、强烈情感',
    significance: '宫廷艺术的巅峰，影响了欧洲艺术200多年',
    representativeArtists: ['卡拉瓦乔', '鲁本斯', '委拉斯开兹', '伦勃朗', '贝尼尼'],
    color: '#9B59B6',
    styles: [artStyles[5]] // 巴洛克
  },
  {
    id: 'rococo',
    year: 1700,
    title: '洛可可艺术',
    description: '华丽装饰、轻快色彩、宫廷生活',
    significance: '巴洛克艺术的精致化，体现了贵族生活的奢华',
    representativeArtists: ['华托', '布歇', '弗拉戈纳尔', '夏尔丹'],
    color: '#FF69B4',
    styles: [artStyles[6]] // 洛可可
  },
  {
    id: 'neoclassicism',
    year: 1750,
    title: '新古典主义',
    description: '回归古罗马/希腊美学、强调理性与秩序',
    significance: '启蒙时代的艺术表达，强调理性和道德',
    representativeArtists: ['雅克-路易·大卫', '安格尔', '卡诺瓦'],
    color: '#607D8B',
    styles: [artStyles[7]] // 新古典主义
  },

  // 🌄 浪漫与现实
  {
    id: 'romanticism',
    year: 1800,
    title: '浪漫主义',
    description: '情感、自然力量、民族史诗',
    significance: '个人情感表达的兴起，为现代艺术奠定基础',
    representativeArtists: ['德拉克洛瓦', '透纳', '戈雅', '弗里德里希', '康斯特布尔'],
    color: '#E74C3C',
    styles: [artStyles[8]] // 浪漫主义
  },
  {
    id: 'realism',
    year: 1840,
    title: '现实主义',
    description: '日常生活、社会题材，反对理想化',
    significance: '艺术开始关注现实社会，为印象派铺路',
    representativeArtists: ['库尔贝', '米勒', '杜米埃', '柯罗'],
    color: '#795548',
    styles: [artStyles[9]] // 现实主义
  },

  // 🌸 现代艺术的兴起
  {
    id: 'impressionism',
    year: 1870,
    title: '印象派',
    description: '户外光影、快速笔触、明亮色彩',
    significance: '现代艺术的转折点，革命性地改变了绘画方式',
    representativeArtists: ['莫奈', '雷诺阿', '德加', '西斯莱', '毕沙罗'],
    color: '#FF6B6B',
    styles: [artStyles[10]] // 印象派
  },
  {
    id: 'post-impressionism',
    year: 1885,
    title: '后印象派',
    description: '个人化表达、形体和色彩实验',
    significance: '为20世纪前卫艺术开辟了道路',
    representativeArtists: ['梵高', '高更', '塞尚', '修拉'],
    color: '#FF9800',
    styles: [artStyles[11]] // 后印象派
  },
  {
    id: 'symbolism',
    year: 1880,
    title: '象征主义',
    description: '神秘主义、梦幻题材',
    significance: '开启了艺术中的象征和隐喻表达',
    representativeArtists: ['莫罗', '雷东', '克里姆特', '蒙克'],
    color: '#9C27B0',
    styles: [artStyles[12]] // 象征主义
  },

  // 🌀 20世纪前卫艺术
  {
    id: 'fauvism',
    year: 1905,
    title: '野兽派',
    description: '大胆原色、简化形体',
    significance: '色彩解放的先驱，为现代艺术注入活力',
    representativeArtists: ['马蒂斯', '德兰', '弗拉芒克', '杜菲'],
    color: '#FF5722',
    styles: [artStyles[13]] // 野兽派
  },
  {
    id: 'cubism',
    year: 1907,
    title: '立体主义',
    description: '多视角几何化',
    significance: '彻底改变了艺术的表现方式，影响了现代艺术的发展',
    representativeArtists: ['毕加索', '布拉克', '格里斯', '莱热'],
    color: '#4ECDC4',
    styles: [artStyles[14]] // 立体主义
  },
  {
    id: 'futurism',
    year: 1909,
    title: '未来主义',
    description: '速度、机械、都市动感',
    significance: '拥抱现代科技和都市生活，影响设计艺术',
    representativeArtists: ['巴拉', '波丘尼', '卡拉', '塞韦里尼'],
    color: '#00BCD4',
    styles: [artStyles[15]] // 未来主义
  },
  {
    id: 'expressionism',
    year: 1905,
    title: '表现主义',
    description: '主观情感、扭曲形体',
    significance: '强调艺术家的内心世界和情感表达',
    representativeArtists: ['蒙克', '康定斯基', '基希纳', '诺尔德'],
    color: '#FFC107',
    styles: [artStyles[16]] // 表现主义
  },
  {
    id: 'dada',
    year: 1916,
    title: '达达主义',
    description: '反艺术、拼贴、讽刺',
    significance: '对传统艺术的彻底颠覆，为观念艺术铺路',
    representativeArtists: ['杜尚', '阿尔普', '施维特斯', '豪斯曼'],
    color: '#FF4081',
    styles: [artStyles[17]] // 达达主义
  },
  {
    id: 'surrealism',
    year: 1924,
    title: '超现实主义',
    description: '梦境、潜意识',
    significance: '探索人类潜意识，影响文学、电影等多个领域',
    representativeArtists: ['达利', '马格利特', '米罗', '恩斯特'],
    color: '#673AB7',
    styles: [artStyles[18]] // 超现实主义
  },
  {
    id: 'abstract-art',
    year: 1910,
    title: '抽象艺术',
    description: '脱离具象，强调形与色',
    significance: '艺术彻底摆脱具象束缚，进入纯形式探索',
    representativeArtists: ['康定斯基', '蒙德里安', '马列维奇', '库普卡'],
    color: '#3F51B5',
    styles: [artStyles[19]] // 抽象艺术
  },

  // 🎆 二战后至今
  {
    id: 'abstract-expressionism',
    year: 1940,
    title: '抽象表现主义',
    description: '即兴笔触、巨大画布',
    significance: '美国艺术的崛起，影响全球艺术发展',
    representativeArtists: ['波洛克', '罗斯科', '德·库宁', '纽曼'],
    color: '#2196F3',
    styles: [artStyles[20]] // 抽象表现主义
  },
  {
    id: 'minimalism',
    year: 1960,
    title: '极简主义',
    description: '简单几何、去个性化',
    significance: '艺术回归本质，强调纯粹的形式美',
    representativeArtists: ['唐纳德·贾德', '丹·弗莱文', '卡尔·安德烈', '索尔·勒维特'],
    color: '#607D8B',
    styles: [artStyles[21]] // 极简主义
  },
  {
    id: 'pop-art',
    year: 1950,
    title: '波普艺术',
    description: '消费文化、漫画、广告图像',
    significance: '艺术与大众文化的结合，挑战高雅艺术界限',
    representativeArtists: ['安迪·沃霍尔', '利希滕斯坦', '汉密尔顿', '韦塞尔曼'],
    color: '#E91E63',
    styles: [artStyles[22]] // 波普艺术
  },
  {
    id: 'conceptual-art',
    year: 1960,
    title: '观念艺术',
    description: '作品=观念本身，物质载体可有可无',
    significance: '艺术概念的彻底革新，影响当代艺术发展',
    representativeArtists: ['约瑟夫·科苏斯', '劳伦斯·韦纳', '索尔·勒维特', '布鲁斯·瑙曼'],
    color: '#9E9E9E',
    styles: [artStyles[23]] // 观念艺术
  },
  {
    id: 'contemporary-art',
    year: 1980,
    title: '当代艺术',
    description: '多元、跨界、装置、影像、数字艺术',
    significance: '艺术进入全新的发展阶段，形式无限扩展',
    representativeArtists: ['艾未未', '达米恩·赫斯特', '草间弥生', '杰夫·昆斯'],
    color: '#4CAF50',
    styles: [artStyles[24]] // 当代艺术
  }
];

// 时间线时代数据
export const timelineEras: TimelineEra[] = [
  {
    id: 'early-renaissance',
    name: '早期文艺复兴',
    startYear: 1400,
    endYear: 1500,
    description: '文艺复兴的萌芽期，艺术家开始探索透视法和人体解剖学',
    keyArtworks: [
      {
        id: 'baptism-of-christ',
        title: '基督受洗',
        artist: '皮耶罗·德拉·弗朗切斯卡',
        year: '1448-1450',
        style: '早期文艺复兴',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300',
        source: '国家美术馆',
        description: '早期文艺复兴透视法的杰作。',
        styleLabels: ['早期文艺复兴', '宗教画', '透视法'],
        similarity: 0.9
      }
    ],
    styles: [artStyles[0]],
    significance: '奠定了文艺复兴艺术的基础，建立了科学的透视法体系'
  },
  {
    id: 'high-renaissance',
    name: '盛期文艺复兴',
    startYear: 1500,
    endYear: 1520,
    description: '文艺复兴的黄金时代，出现了达芬奇、米开朗基罗、拉斐尔等大师',
    keyArtworks: [
      {
        id: 'sistine-madonna',
        title: '西斯廷圣母',
        artist: '拉斐尔',
        year: '1513-1514',
        style: '盛期文艺复兴',
        url: 'https://images.unsplash.com/photo-1578848151706-206b516e2592?w=300',
        source: '德累斯顿国家艺术收藏馆',
        description: '拉斐尔最著名的圣母像。',
        styleLabels: ['盛期文艺复兴', '宗教画', '圣母像'],
        similarity: 0.95
      }
    ],
    styles: [artStyles[0]],
    significance: '文艺复兴艺术的巅峰，创造了人类艺术史上的不朽杰作'
  },
  {
    id: 'late-renaissance',
    name: '晚期文艺复兴',
    startYear: 1520,
    endYear: 1600,
    description: '文艺复兴向巴洛克过渡的时期，风格更加复杂和戏剧化',
    keyArtworks: [
      {
        id: 'last-judgment',
        title: '最后的审判',
        artist: '米开朗基罗',
        year: '1536-1541',
        style: '晚期文艺复兴',
        url: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=300',
        source: '西斯廷教堂',
        description: '米开朗基罗晚年的杰作。',
        styleLabels: ['晚期文艺复兴', '宗教画', '壁画'],
        similarity: 0.88
      }
    ],
    styles: [artStyles[0]],
    significance: '为巴洛克艺术的发展奠定了基础，艺术风格开始向戏剧化转变'
  }
];

// 风格分支数据
export const styleBranches: StyleBranch[] = [
  {
    id: 'mannerism',
    name: '矫饰主义',
    description: '文艺复兴晚期到巴洛克早期的过渡风格，以夸张的比例和复杂的构图著称',
    parentStyle: 'renaissance',
    artworks: [
      {
        id: 'madonna-with-long-neck',
        title: '长颈圣母',
        artist: '帕尔米贾尼诺',
        year: '1534-1540',
        style: '矫饰主义',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300',
        source: '乌菲兹美术馆',
        description: '矫饰主义的代表作品。',
        styleLabels: ['矫饰主义', '宗教画', '夸张比例'],
        similarity: 0.85
      }
    ],
    influence: '影响了巴洛克艺术的发展，为后来的戏剧化风格铺平了道路',
    color: '#9B59B6'
  },
  {
    id: 'baroque',
    name: '巴洛克',
    description: '17-18世纪的艺术风格，以戏剧性、动感和华丽装饰为特征',
    parentStyle: 'renaissance',
    artworks: [
      {
        id: 'ecstasy-of-saint-teresa',
        title: '圣特蕾莎的狂喜',
        artist: '吉安·洛伦佐·贝尼尼',
        year: '1647-1652',
        style: '巴洛克',
        url: 'https://images.unsplash.com/photo-1578848151706-206b516e2592?w=300',
        source: '圣玛丽亚·德拉·维多利亚教堂',
        description: '巴洛克雕塑的杰作。',
        styleLabels: ['巴洛克', '雕塑', '宗教艺术'],
        similarity: 0.82
      }
    ],
    influence: '影响了整个欧洲艺术，为洛可可和新古典主义奠定了基础',
    color: '#E67E22'
  }
];

// 精选风格的详细数据
const featuredStyleData = {
  'high-renaissance': {
    masterpieces: [
      {
        id: 'mona-lisa',
        title: '蒙娜丽莎',
        artist: '列奥纳多·达·芬奇',
        year: '1503-1519',
        style: '盛期文艺复兴',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
        source: '卢浮宫',
        description: '达·芬奇的杰作，运用了创新的晕涂法（sfumato）技术，创造了神秘而永恒的微笑。这幅画不仅展现了文艺复兴时期对完美人像的追求，更体现了艺术家对人性深刻的理解。',
        styleLabels: ['盛期文艺复兴', '肖像画', '达·芬奇', '晕涂法'],
        similarity: 1.0
      },
      {
        id: 'david',
        title: '大卫',
        artist: '米开朗基罗',
        year: '1501-1504',
        style: '盛期文艺复兴',
        url: 'https://images.unsplash.com/photo-1578848151706-206b516e2592?w=600',
        source: '佛罗伦萨学院美术馆',
        description: '米开朗基罗的雕塑杰作，展现了完美的人体比例和英雄气概，树立了"英雄人体"的典范，成为文艺复兴雕塑的巅峰之作。',
        styleLabels: ['盛期文艺复兴', '雕塑', '米开朗基罗', '英雄人体'],
        similarity: 0.98
      }
    ],
    similarWorks: [
      {
        id: 'high-renaissance-similar-1',
        title: '西斯廷天顶画',
        artist: '米开朗基罗',
        year: '1508-1512',
        style: '盛期文艺复兴',
        url: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=300',
        source: '梵蒂冈西斯廷教堂',
        description: '米开朗基罗的杰作，描绘了《创世纪》的九个场景，展现了人类从创造到堕落的完整故事，是盛期文艺复兴的巅峰之作。',
        styleLabels: ['盛期文艺复兴', '壁画', '米开朗基罗', '宗教艺术'],
        similarity: 0.95
      },
      {
        id: 'high-renaissance-similar-2',
        title: '雅典学院',
        artist: '拉斐尔',
        year: '1509-1511',
        style: '盛期文艺复兴',
        url: 'https://images.unsplash.com/photo-1578848151706-206b516e2592?w=300',
        source: '梵蒂冈宫',
        description: '拉斐尔的杰作，描绘了古希腊哲学家和学者的聚会，体现了文艺复兴时期对古典智慧的追求，展现了和谐均衡的构图。',
        styleLabels: ['盛期文艺复兴', '壁画', '拉斐尔', '古典主义'],
        similarity: 0.92
      },
      {
        id: 'high-renaissance-similar-3',
        title: '岩间圣母',
        artist: '列奥纳多·达·芬奇',
        year: '1483-1486',
        style: '盛期文艺复兴',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300',
        source: '卢浮宫',
        description: '达·芬奇的早期杰作，运用了创新的晕涂法技术，创造了神秘而柔和的视觉效果，开启了新的视觉语言。',
        styleLabels: ['盛期文艺复兴', '宗教画', '达·芬奇', '晕涂法'],
        similarity: 0.88
      }
    ],
    timeline: [
      {
        id: 'prelude-1490s',
        name: '前奏（1490s）',
        startYear: 1490,
        endYear: 1500,
        description: '佛罗伦萨与米兰成为艺术创新中心。达·芬奇发展 sfumato（晕涂法），作品《岩间圣母》《最后的晚餐》开启新视觉语言。建筑师布拉曼特在米兰、后入罗马，推动古典风格复兴。',
        significance: '文艺复兴早期（Quattrocento）的探索趋于成熟，为"盛期"奠定基础',
        keyArtworks: [
          {
            id: 'madonna-of-the-rocks',
            title: '岩间圣母',
            artist: '列奥纳多·达·芬奇',
            year: '1483-1486',
            url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200'
          },
          {
            id: 'last-supper',
            title: '最后的晚餐',
            artist: '列奥纳多·达·芬奇',
            year: '1495-1498',
            url: 'https://images.unsplash.com/photo-1578848151706-206b516e2592?w=200'
          }
        ]
      },
      {
        id: 'florence-peak',
        name: '佛罗伦萨的高峰',
        startYear: 1500,
        endYear: 1506,
        description: '米开朗基罗雕刻《大卫》（1501–04），树立"英雄人体"典范。达·芬奇绘制《蒙娜丽莎》，探索心理与自然的微妙结合。年轻的拉斐尔吸收佛罗伦萨传统，逐渐形成和谐优雅的风格。',
        significance: '佛罗伦萨成为盛期文艺复兴的起点，人体表现与心理刻画达到新高度',
        keyArtworks: [
          {
            id: 'david-timeline',
            title: '大卫',
            artist: '米开朗基罗',
            year: '1501-1504',
            url: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=200'
          },
          {
            id: 'mona-lisa-timeline',
            title: '蒙娜丽莎',
            artist: '列奥纳多·达·芬奇',
            year: '1503-1519',
            url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200'
          }
        ]
      },
      {
        id: 'rome-art-center',
        name: '罗马的艺术中心',
        startYear: 1506,
        endYear: 1514,
        description: '教皇尤利乌斯二世大规模资助艺术：米开朗基罗绘制 西斯廷天顶画（1508–12）。拉斐尔创作 《雅典学院》 等"拉斐尔房间"壁画。布拉曼特主持重建圣彼得大教堂。',
        significance: '罗马取代佛罗伦萨，成为意大利与欧洲的艺术中心。盛期文艺复兴核心特征确立：和谐均衡、古典复兴、空间与人物的完美统一',
        keyArtworks: [
          {
            id: 'sistine-chapel-timeline',
            title: '西斯廷天顶画',
            artist: '米开朗基罗',
            year: '1508-1512',
            url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200'
          },
          {
            id: 'school-of-athens-timeline',
            title: '雅典学院',
            artist: '拉斐尔',
            year: '1509-1511',
            url: 'https://images.unsplash.com/photo-1578848151706-206b516e2592?w=200'
          }
        ]
      },
      {
        id: 'late-brilliance',
        name: '晚期辉煌与转折',
        startYear: 1515,
        endYear: 1520,
        description: '拉斐尔的《变容》（1516–20）综合和谐与戏剧性，被视为盛期的终曲。达·芬奇晚年移居法国，影响跨国艺术发展。1520年拉斐尔逝世，被视为"盛期"的象征性终结。',
        significance: '盛期文艺复兴的理性与和谐走到顶点。艺术逐渐转向 矫饰主义（Mannerism），强调夸张与情感张力',
        keyArtworks: [
          {
            id: 'transfiguration',
            title: '变容',
            artist: '拉斐尔',
            year: '1516-1520',
            url: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=200'
          }
        ]
      }
    ],
    branches: [
      {
        id: 'mannerism',
        name: '矫饰主义',
        description: '盛期文艺复兴之后的艺术风格，强调夸张的比例和戏剧性的表现，是对盛期完美均衡的反叛。',
        color: '#E67E22',
        influence: '高',
        artworks: [
          {
            id: 'mannerism-work',
            title: '矫饰主义作品',
            artist: '埃尔·格列柯',
            year: '1580',
            url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200'
          }
        ]
      },
      {
        id: 'baroque',
        name: '巴洛克',
        description: '17世纪的艺术风格，以戏剧性的光影和强烈的情感表达为特征，继承了盛期文艺复兴的古典精神。',
        color: '#8E44AD',
        influence: '极高',
        artworks: [
          {
            id: 'baroque-work',
            title: '巴洛克作品',
            artist: '卡拉瓦乔',
            year: '1600',
            url: 'https://images.unsplash.com/photo-1578848151706-206b516e2592?w=200'
          }
        ]
      },
      {
        id: 'classical-revival',
        name: '古典复兴',
        description: '盛期文艺复兴确立的古典美学原则，影响了后世数百年的艺术发展，成为西方艺术的基础。',
        color: '#DAA520',
        influence: '极高',
        artworks: [
          {
            id: 'classical-work',
            title: '古典复兴作品',
            artist: '安格尔',
            year: '1820',
            url: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=200'
          }
        ]
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
        style: '印象派',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
        source: '马莫坦博物馆',
        description: '莫奈的杰作，印象派名称的由来。这幅画描绘了勒阿弗尔港口的日出景象，运用破碎的笔触和明亮的色彩捕捉了晨雾中光线的瞬间变化。',
        styleLabels: ['印象派', '风景画', '莫奈', '日出'],
        similarity: 1.0
      },
      {
        id: 'luncheon-on-the-grass',
        title: '草地上的午餐',
        artist: '爱德华·马奈',
        year: '1863',
        style: '印象派',
        url: 'https://images.unsplash.com/photo-1578848151706-206b516e2592?w=600',
        source: '奥赛博物馆',
        description: '马奈的争议性杰作，在1863年"落选者沙龙"展出时震惊巴黎。这幅画打破了传统绘画的禁忌，将裸体女性置于现代场景中，成为印象派运动的先驱。',
        styleLabels: ['印象派', '人物画', '马奈', '落选者沙龙'],
        similarity: 0.98
      }
    ],
    similarWorks: [
      {
        id: 'impressionism-similar-1',
        title: '睡莲',
        artist: '克劳德·莫奈',
        year: '1919',
        style: '印象派',
        url: 'https://images.unsplash.com/photo-1578848151706-206b516e2592?w=300',
        source: '橘园美术馆',
        description: '莫奈晚期的杰作，展现了光影在水面上的变化。',
        styleLabels: ['印象派', '风景画', '莫奈', '睡莲'],
        similarity: 0.95
      },
      {
        id: 'impressionism-similar-2',
        title: '煎饼磨坊的舞会',
        artist: '皮埃尔-奥古斯特·雷诺阿',
        year: '1876',
        style: '印象派',
        url: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=300',
        source: '奥赛博物馆',
        description: '雷诺阿的杰作，描绘了蒙马特高地的露天舞会场景，展现了印象派对现代都市生活的关注。',
        styleLabels: ['印象派', '人物画', '雷诺阿', '都市生活'],
        similarity: 0.92
      },
      {
        id: 'impressionism-similar-3',
        title: '芭蕾舞课',
        artist: '埃德加·德加',
        year: '1874',
        style: '印象派',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300',
        source: '奥赛博物馆',
        description: '德加的代表作，展现了印象派对室内场景和人物动态的独特表现。',
        styleLabels: ['印象派', '人物画', '德加', '芭蕾'],
        similarity: 0.88
      }
    ],
    timeline: [
      {
        id: 'prelude-realism',
        name: '前奏：现实主义与巴比松画派',
        startYear: 1830,
        endYear: 1860,
        description: '法国巴比松画派（科罗、米勒）强调户外写生（plein air），现实主义（库尔贝）关注日常生活。',
        significance: '为印象派奠定"自然光下的直接观察"与"反学院派"的基础',
        keyArtworks: [
          {
            id: 'the-gleaners',
            title: '拾穗者',
            artist: '让-弗朗索瓦·米勒',
            year: '1857',
            url: 'https://images.unsplash.com/photo-1578848151706-206b516e2592?w=200'
          },
          {
            id: 'the-stone-breakers',
            title: '碎石工',
            artist: '古斯塔夫·库尔贝',
            year: '1849',
            url: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=200'
          }
        ]
      },
      {
        id: 'emergence-period',
        name: '萌芽期',
        startYear: 1860,
        endYear: 1874,
        description: '1863年"落选者沙龙"展出马奈《草地上的午餐》，震惊巴黎。莫奈、雷诺阿、巴齐耶、西斯莱等在巴黎郊外实验户外光影画法。',
        significance: '形成核心小圈子，反对学院"历史题材 + 光滑画风"，转向当下生活与自然景观',
        keyArtworks: [
          {
            id: 'luncheon-on-the-grass-1863',
            title: '草地上的午餐',
            artist: '爱德华·马奈',
            year: '1863',
            url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200'
          },
          {
            id: 'impression-sunrise-1872',
            title: '印象·日出',
            artist: '克劳德·莫奈',
            year: '1872',
            url: 'https://images.unsplash.com/photo-1578848151706-206b516e2592?w=200'
          }
        ]
      },
      {
        id: 'maturity-period',
        name: '成熟期：独立展览与集体行动',
        startYear: 1874,
        endYear: 1886,
        description: '1874年第一届"印象派画展"，莫奈的《印象·日出》被评论家嘲讽为"印象派" → 名字由此而来。1874-1886年共举行8届印象派展览。',
        significance: '打破官方沙龙的垄断，建立独立展览模式。技法特征确立：快速笔触、明亮色块、捕捉转瞬即逝的光影',
        keyArtworks: [
          {
            id: 'impression-sunrise-1874',
            title: '印象·日出',
            artist: '克劳德·莫奈',
            year: '1874',
            url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200'
          },
          {
            id: 'dance-at-le-moulin-de-la-galette',
            title: '煎饼磨坊的舞会',
            artist: '皮埃尔-奥古斯特·雷诺阿',
            year: '1876',
            url: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=200'
          }
        ]
      },
      {
        id: 'differentiation-period',
        name: '分化与转型',
        startYear: 1880,
        endYear: 1900,
        description: '部分艺术家向新方向探索：塞尚 → 结构化（走向立体派），梵高、高更 → 强调情感与色彩，修拉、西涅克 → 点彩画派（新印象主义）。',
        significance: '印象派成为20世纪现代艺术的起点，不再是单一流派，而是分化出多个"后印象派"道路',
        keyArtworks: [
          {
            id: 'the-bathers',
            title: '浴者',
            artist: '保罗·塞尚',
            year: '1885',
            url: 'https://images.unsplash.com/photo-1578848151706-206b516e2592?w=200'
          },
          {
            id: 'starry-night',
            title: '星夜',
            artist: '文森特·梵高',
            year: '1889',
            url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200'
          }
        ]
      },
      {
        id: 'international-spread',
        name: '国际传播与遗产',
        startYear: 1900,
        endYear: 1920,
        description: '印象派在欧美展览广受欢迎。美国（哈苏姆画派）与日本（日本印象派）都受到影响。1920年代，印象派作品进入博物馆主流收藏。',
        significance: '从"前卫"走向"经典"，被重新评价为艺术史的转折点。奠定了现代绘画"以个人感知为核心"的价值观',
        keyArtworks: [
          {
            id: 'water-lilies-series',
            title: '睡莲系列',
            artist: '克劳德·莫奈',
            year: '1919',
            url: 'https://images.unsplash.com/photo-1578848151706-206b516e2592?w=200'
          }
        ]
      }
    ],
    branches: [
      {
        id: 'post-impressionism',
        name: '后印象派',
        description: '印象派之后的重要艺术运动，包括塞尚的结构主义、梵高的表现主义、高更的象征主义等。',
        color: '#E67E22',
        influence: '极高',
        artworks: [
          {
            id: 'the-bathers-post',
            title: '浴者',
            artist: '保罗·塞尚',
            year: '1885',
            url: 'https://images.unsplash.com/photo-1578848151706-206b516e2592?w=200'
          },
          {
            id: 'starry-night-post',
            title: '星夜',
            artist: '文森特·梵高',
            year: '1889',
            url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200'
          }
        ]
      },
      {
        id: 'neo-impressionism',
        name: '新印象主义',
        description: '以修拉和西涅克为代表的点彩画派，运用科学的光学原理进行色彩分析。',
        color: '#9B59B6',
        influence: '高',
        artworks: [
          {
            id: 'sunday-afternoon',
            title: '大碗岛的星期天下午',
            artist: '乔治·修拉',
            year: '1886',
            url: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=200'
          }
        ]
      },
      {
        id: 'american-impressionism',
        name: '美国印象派',
        description: '受法国印象派影响的美国艺术运动，以哈苏姆画派为代表。',
        color: '#3498DB',
        influence: '中',
        artworks: [
          {
            id: 'american-garden',
            title: '美国花园',
            artist: '威廉·梅里特·蔡斯',
            year: '1890',
            url: 'https://images.unsplash.com/photo-1578848151706-206b516e2592?w=200'
          }
        ]
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
        style: '当代艺术',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
        source: '泰特现代美术馆',
        description: '艾未未的杰作，由1亿颗手工制作的陶瓷葵花籽组成的装置艺术。这件作品不仅展现了艺术家的政治立场和对中国社会现实的关注，更体现了当代艺术中个体与集体、传统与创新、艺术与政治的复杂关系。',
        styleLabels: ['当代艺术', '装置艺术', '艾未未', '社会参与'],
        similarity: 1.0
      },
      {
        id: 'everyday-objects',
        title: '布里洛盒子',
        artist: '安迪·沃霍尔',
        year: '1964',
        style: '当代艺术',
        url: 'https://images.unsplash.com/photo-1578848151706-206b516e2592?w=600',
        source: '现代艺术博物馆',
        description: '沃霍尔的波普艺术杰作，将日常消费品提升为艺术对象，挑战了传统艺术与商业文化的界限。',
        styleLabels: ['当代艺术', '波普艺术', '沃霍尔', '商业文化'],
        similarity: 0.95
      }
    ],
    similarWorks: [
      {
        id: 'contemporary-similar-1',
        title: '数字瀑布',
        artist: '草间弥生',
        year: '2019',
        style: '当代艺术',
        url: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=300',
        source: '草间弥生美术馆',
        description: '草间弥生的沉浸式装置艺术，结合了无限镜屋和数字技术，创造梦幻般的视觉体验。',
        styleLabels: ['当代艺术', '装置艺术', '草间弥生', '数字艺术'],
        similarity: 0.92
      },
      {
        id: 'contemporary-similar-2',
        title: '气候时钟',
        artist: '奥拉维尔·埃利亚松',
        year: '2021',
        style: '当代艺术',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300',
        source: '纽约联合广场',
        description: '埃利亚松的环境艺术作品，通过数字时钟提醒人们关注气候变化，将艺术与环保议题结合。',
        styleLabels: ['当代艺术', '环境艺术', '埃利亚松', '气候变化'],
        similarity: 0.88
      },
      {
        id: 'contemporary-similar-3',
        title: 'NFT数字艺术',
        artist: 'Beeple',
        year: '2021',
        style: '当代艺术',
        url: 'https://images.unsplash.com/photo-1578848151706-206b516e2592?w=300',
        source: '佳士得拍卖行',
        description: 'Beeple的NFT作品《每一天：前5000天》，以6900万美元成交，标志着数字艺术正式进入主流艺术市场。',
        styleLabels: ['当代艺术', 'NFT', 'Beeple', '数字艺术'],
        similarity: 0.85
      }
    ],
    timeline: [
      {
        id: 'prelude-postwar',
        name: '前奏：现代主义尾声',
        startYear: 1945,
        endYear: 1960,
        description: '二战后，抽象表现主义（波洛克、罗斯科）成为美国艺术中心。极简主义（Minimalism）与观念艺术（Conceptual Art）兴起，质疑"艺术 = 物品"的观念。',
        significance: '为当代艺术奠定"思想优先"的基调，开始挑战传统绘画与雕塑的边界',
        keyArtworks: [
          {
            id: 'abstract-expressionism',
            title: '抽象表现主义作品',
            artist: '杰克逊·波洛克',
            year: '1950',
            url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200'
          },
          {
            id: 'minimalism',
            title: '极简主义作品',
            artist: '唐纳德·贾德',
            year: '1965',
            url: 'https://images.unsplash.com/photo-1578848151706-206b516e2592?w=200'
          }
        ]
      },
      {
        id: 'avant-garde-rebellion',
        name: '先锋与反叛',
        startYear: 1960,
        endYear: 1970,
        description: '波普艺术（Pop Art）：安迪·沃霍尔、利希滕斯坦，用大众文化、广告符号入侵艺术殿堂。激浪派（Fluxus）、行为艺术（Performance Art）：约瑟夫·博伊斯、小野洋子，艺术与生活融合。大地艺术（Land Art）：克里斯托、史密森，把自然环境当作艺术现场。',
        significance: '艺术不再仅仅是"画布上的图像"，而是可以是行动、事件、媒介、社会批评',
        keyArtworks: [
          {
            id: 'pop-art',
            title: '波普艺术作品',
            artist: '安迪·沃霍尔',
            year: '1964',
            url: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=200'
          },
          {
            id: 'performance-art',
            title: '行为艺术作品',
            artist: '约瑟夫·博伊斯',
            year: '1965',
            url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200'
          }
        ]
      },
      {
        id: 'diversification-globalization',
        name: '多元扩展与全球化',
        startYear: 1980,
        endYear: 1990,
        description: '新表现主义（Neo-Expressionism）：巴塞利茨、基弗，回归强烈的绘画情感。装置艺术（Installation）、录像艺术（Video Art）广泛使用。全球艺术市场繁荣，纽约、伦敦、东京、香港等成为国际艺术中心。',
        significance: '当代艺术进入"多元并存"状态，没有单一主流。艺术家与市场、收藏、双年展体系紧密结合',
        keyArtworks: [
          {
            id: 'neo-expressionism',
            title: '新表现主义作品',
            artist: '格奥尔格·巴塞利茨',
            year: '1985',
            url: 'https://images.unsplash.com/photo-1578848151706-206b516e2592?w=200'
          },
          {
            id: 'installation-art',
            title: '装置艺术作品',
            artist: '安尼施·卡普尔',
            year: '1988',
            url: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=200'
          }
        ]
      },
      {
        id: 'global-issues-cross-media',
        name: '全球议题与跨媒介',
        startYear: 2000,
        endYear: 2010,
        description: '艺术聚焦全球化、身份认同、社会政治议题（移民、环境、性别、数字文化）。艺术媒介跨界：混合现实（XR）、互联网艺术、社会实践（social practice art）。艾未未、奥拉维尔·埃利亚松、草间弥生等成为国际符号。',
        significance: '当代艺术与全球化议题紧密捆绑，成为"文化批评"的一部分。艺术形式跨界科技、建筑、环境学',
        keyArtworks: [
          {
            id: 'ai-weiwei-sunflower',
            title: '葵花籽',
            artist: '艾未未',
            year: '2010',
            url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200'
          },
          {
            id: 'olafur-eliasson',
            title: '天气计划',
            artist: '奥拉维尔·埃利亚松',
            year: '2003',
            url: 'https://images.unsplash.com/photo-1578848151706-206b516e2592?w=200'
          }
        ]
      },
      {
        id: 'present-future',
        name: '当下与未来',
        startYear: 2020,
        endYear: 2024,
        description: '数字艺术与 NFT（Beeple 2021 拍卖震动全球）。AI 艺术、生成艺术进入艺术博览会与美术馆。环境可持续性、后疫情社会成为主题。',
        significance: '艺术与科技高度融合，数字作品被正式纳入艺术市场。当代艺术彻底进入"去中心化"，更强调网络与社会参与',
        keyArtworks: [
          {
            id: 'nft-art',
            title: 'NFT数字艺术',
            artist: 'Beeple',
            year: '2021',
            url: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=200'
          },
          {
            id: 'ai-art',
            title: 'AI生成艺术',
            artist: 'Various Artists',
            year: '2023',
            url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200'
          }
        ]
      }
    ],
    branches: [
      {
        id: 'pop-art',
        name: '波普艺术',
        description: '20世纪60年代兴起的艺术运动，将大众文化和商业图像融入艺术创作，代表人物包括安迪·沃霍尔、罗伊·利希滕斯坦等。',
        color: '#E74C3C',
        influence: '极高',
        artworks: [
          {
            id: 'warhol-marilyn',
            title: '玛丽莲·梦露',
            artist: '安迪·沃霍尔',
            year: '1962',
            url: 'https://images.unsplash.com/photo-1578848151706-206b516e2592?w=200'
          },
          {
            id: 'lichtenstein-drowning-girl',
            title: '溺水女孩',
            artist: '罗伊·利希滕斯坦',
            year: '1963',
            url: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=200'
          }
        ]
      },
      {
        id: 'conceptual-art',
        name: '观念艺术',
        description: '强调概念和思想而非传统艺术形式的艺术运动，认为艺术的核心是观念而非物质载体。',
        color: '#9B59B6',
        influence: '高',
        artworks: [
          {
            id: 'duchamp-fountain',
            title: '泉',
            artist: '马塞尔·杜尚',
            year: '1917',
            url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200'
          }
        ]
      },
      {
        id: 'digital-art',
        name: '数字艺术',
        description: '运用数字技术创作的艺术形式，包括计算机生成艺术、互动艺术、虚拟现实艺术等。',
        color: '#3498DB',
        influence: '极高',
        artworks: [
          {
            id: 'nft-beeple',
            title: '每一天：前5000天',
            artist: 'Beeple',
            year: '2021',
            url: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=200'
          }
        ]
      }
    ]
  }
};

// 生成瀑布流章节数据
export const generateWaterfallSections = (style: ArtStyle): WaterfallSection[] => [
  {
    id: 'masterpiece',
    type: 'masterpiece',
    title: '代表作',
    description: `《${style.representativeWork.title}》是${style.name}风格的代表作`,
    data: style.representativeWork,
    scrollTrigger: 0.0
  },
  {
    id: 'similar-works',
    type: 'similar-works',
    title: '同风格代表作',
    description: `探索更多${style.name}风格的经典作品`,
    data: generateSimilarWorks(style),
    scrollTrigger: 0.2
  },
  {
    id: 'timeline',
    type: 'timeline',
    title: '发展历程',
    description: `了解${style.name}风格的历史发展脉络`,
    data: timelineEras.filter(era => era.styles.some(s => s.id === style.id)),
    scrollTrigger: 0.5
  },
  {
    id: 'style-branches',
    type: 'style-branches',
    title: '相关风格',
    description: `探索与${style.name}相关的艺术风格分支`,
    data: styleBranches.filter(branch => branch.parentStyle === style.id),
    scrollTrigger: 0.8
  }
];

// 生成相似作品
const generateSimilarWorks = (style: ArtStyle): ArtworkData[] => {
  const baseArtwork = style.representativeWork;
  return [
    {
      id: `${style.id}-similar-1`,
      title: '自画像',
      artist: baseArtwork.artist,
      year: '1512',
      style: style.name,
      url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300',
      source: '皇家图书馆',
      description: `${style.name}风格的另一代表作。`,
      styleLabels: [style.name, '肖像画', '素描'],
      similarity: 0.89
    },
    {
      id: `${style.id}-similar-2`,
      title: '风景画',
      artist: '同风格艺术家',
      year: '1500',
      style: style.name,
      url: 'https://images.unsplash.com/photo-1578848151706-206b516e2592?w=300',
      source: '艺术博物馆',
      description: `${style.name}风格的风景画作品。`,
      styleLabels: [style.name, '风景画', '写实主义'],
      similarity: 0.85
    },
    {
      id: `${style.id}-similar-3`,
      title: '宗教画',
      artist: '同风格艺术家',
      year: '1505',
      style: style.name,
      url: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=300',
      source: '教堂',
      description: `${style.name}风格的宗教题材作品。`,
      styleLabels: [style.name, '宗教画', '壁画'],
      similarity: 0.82
    }
  ];
};

// 生成完整的风格探索数据
export const generateStyleExplorationData = (styleId: string): StyleExplorationData | null => {
  const style = artStyles.find(s => s.id === styleId);
  if (!style) return null;

  // 检查是否是精选的3个风格之一
  const featuredStyleIds = ['high-renaissance', 'impressionism', 'contemporary-art'];
  const isFeaturedStyle = featuredStyleIds.includes(styleId);

  if (isFeaturedStyle) {
    // 精选风格：使用详细内容
    const featuredData = featuredStyleData[styleId as keyof typeof featuredStyleData];
    return {
      selectedStyle: style,
      waterfallSections: [
        {
          id: 'masterpiece',
          type: 'masterpiece',
          title: '代表作品',
          description: `《${style.representativeWork.title}》是${style.name}风格的代表作`,
          data: featuredData.masterpieces[0] || style.representativeWork,
          scrollTrigger: 0.1
        },
        {
          id: 'similar-works',
          type: 'similar-works',
          title: '相似作品',
          description: `探索更多${style.name}风格的经典作品`,
          data: featuredData.similarWorks,
          scrollTrigger: 0.3
        },
        {
          id: 'timeline',
          type: 'timeline',
          title: '历史时间轴',
          description: `了解${style.name}风格的历史发展脉络`,
          data: featuredData.timeline,
          scrollTrigger: 0.5
        },
        {
          id: 'style-branches',
          type: 'style-branches',
          title: '相关分支',
          description: `探索与${style.name}相关的艺术风格分支`,
          data: featuredData.branches,
          scrollTrigger: 0.7
        }
      ],
      timeline: featuredData.timeline,
      styleBranches: featuredData.branches
    };
  } else {
    // 非精选风格：生成与精选风格相同结构的空内容
    return {
      selectedStyle: style,
      waterfallSections: [
        {
          id: 'masterpiece',
          type: 'masterpiece',
          title: '代表作品',
          description: '我们正在为这一艺术风格准备代表作品内容，敬请期待！',
          data: [],
          scrollTrigger: 0.1
        },
        {
          id: 'similar-works',
          type: 'similar-works',
          title: '相似作品',
          description: '我们正在为这一艺术风格准备相似作品内容，敬请期待！',
          data: [],
          scrollTrigger: 0.3
        },
        {
          id: 'timeline',
          type: 'timeline',
          title: '历史时间轴',
          description: '我们正在为这一艺术风格准备历史发展内容，敬请期待！',
          data: [],
          scrollTrigger: 0.5
        },
        {
          id: 'style-branches',
          type: 'style-branches',
          title: '相关分支',
          description: '我们正在为这一艺术风格准备相关分支内容，敬请期待！',
          data: [],
          scrollTrigger: 0.7
        }
      ],
      timeline: [],
      styleBranches: []
    };
  }
};

// 获取所有可用的艺术风格
export const getAvailableStyles = (): ArtStyle[] => artStyles;