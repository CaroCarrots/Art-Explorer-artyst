import { ArtStyle, TimelineEra, StyleBranch, StyleExplorationData, WaterfallSection, ArtworkData } from '../types/artwork';

// 艺术风格数据 - 包含时间轴中的所有风格
export const artStyles: ArtStyle[] = [
  // 🏰 中世纪与早期
  {
    id: 'romanesque',
    name: '罗曼式艺术',
    description: '10-12世纪欧洲宗教艺术，以厚重的建筑装饰和宗教壁画为特征',
    period: '10-12世纪',
    startYear: 1000,
    endYear: 1150,
    region: '欧洲',
    influence: '中世纪艺术的典型代表，为哥特式艺术奠定基础',
    characteristics: ['宗教壁画', '圣经故事', '厚重建筑', '装饰性', '宗教主题'],
    representativeWork: {
      id: 'romanesque-church',
      title: '罗曼式教堂壁画',
      artist: '匿名',
      year: '1100',
      style: '罗曼式',
      url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
      source: '圣萨文教堂',
      description: '典型的罗曼式宗教壁画，展现了中世纪的艺术特色。',
      styleLabels: ['罗曼式', '宗教艺术', '壁画'],
      similarity: 1.0
    },
    relatedStyles: ['gothic'],
    color: '#8B4513'
  },
  {
    id: 'gothic',
    name: '哥特式艺术',
    description: '12-15世纪欧洲艺术风格，以尖拱建筑和彩色玻璃为特征',
    period: '12-15世纪',
    startYear: 1150,
    endYear: 1400,
    region: '法国',
    influence: '建筑与艺术的完美结合，影响后世数百年',
    characteristics: ['尖拱建筑', '彩色玻璃', '垂直感', '光线效果', '宗教主题'],
    representativeWork: {
      id: 'gothic-cathedral',
      title: '沙特尔大教堂',
      artist: '建筑大师',
      year: '1194-1220',
      style: '哥特式',
      url: 'https://images.unsplash.com/photo-1578848151706-206b516e2592?w=600',
      source: '沙特尔',
      description: '哥特式建筑的杰作，展现了彩色玻璃和尖拱的完美结合。',
      styleLabels: ['哥特式', '建筑', '彩色玻璃'],
      similarity: 1.0
    },
    relatedStyles: ['renaissance'],
    color: '#6B4423'
  },

  // 🌱 文艺复兴与古典回归
  {
    id: 'early-renaissance',
    name: '早期文艺复兴',
    description: '14-15世纪意大利艺术复兴的初期，探索透视法和人体解剖学',
    period: '14-15世纪',
    startYear: 1400,
    endYear: 1500,
    region: '意大利',
    influence: '奠定了文艺复兴艺术的基础，建立了科学的透视法体系',
    characteristics: ['透视法', '人体解剖', '科学方法', '古典学习', '写实主义'],
    representativeWork: {
      id: 'baptism-of-christ',
      title: '基督受洗',
      artist: '皮耶罗·德拉·弗朗切斯卡',
      year: '1448-1450',
      style: '早期文艺复兴',
      url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
      source: '国家美术馆',
      description: '早期文艺复兴透视法的杰作。',
      styleLabels: ['早期文艺复兴', '宗教画', '透视法'],
      similarity: 1.0
    },
    relatedStyles: ['high-renaissance', 'mannerism'],
    color: '#D2691E'
  },
  {
    id: 'high-renaissance',
    name: '盛期文艺复兴',
    description: '15-16世纪文艺复兴的黄金时期，以达·芬奇、米开朗基罗、拉斐尔为代表',
    period: '15-16世纪',
    startYear: 1500,
    endYear: 1520,
    region: '意大利',
    influence: '文艺复兴艺术的巅峰，影响了后世数百年的艺术发展',
    characteristics: ['和谐均衡', '理想化人物', '完美比例', '古典美学', '人文主义'],
    representativeWork: {
      id: 'mona-lisa',
      title: '蒙娜丽莎',
      artist: '列奥纳多·达·芬奇',
      year: '1503-1519',
      style: '盛期文艺复兴',
      url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
      source: '卢浮宫',
      description: '世界上最著名的肖像画之一，以其神秘的微笑而闻名。',
      styleLabels: ['盛期文艺复兴', '肖像画', '写实主义'],
      similarity: 1.0
    },
    relatedStyles: ['mannerism', 'baroque'],
    color: '#8B4513'
  },
  {
    id: 'mannerism',
    name: '矫饰主义',
    description: '16世纪后期艺术风格，以夸张比例和扭曲姿态为特征',
    period: '16世纪后期',
    startYear: 1520,
    endYear: 1600,
    region: '意大利',
    influence: '为巴洛克艺术铺路，展现了艺术家的个人表达',
    characteristics: ['夸张比例', '扭曲姿态', '强烈色彩', '复杂构图', '个人表达'],
    representativeWork: {
      id: 'burial-of-count-orgaz',
      title: '奥尔加斯伯爵的葬礼',
      artist: '埃尔·格列柯',
      year: '1586-1588',
      style: '矫饰主义',
      url: 'https://images.unsplash.com/photo-1578848151706-206b516e2592?w=600',
      source: '圣托美教堂',
      description: '矫饰主义的杰作，展现了夸张的人物比例和戏剧性构图。',
      styleLabels: ['矫饰主义', '宗教画', '戏剧性'],
      similarity: 1.0
    },
    relatedStyles: ['baroque'],
    color: '#A0522D'
  },

  // 💎 巴洛克与启蒙
  {
    id: 'baroque',
    name: '巴洛克',
    description: '17-18世纪的艺术风格，以戏剧性、动感和装饰性为特征',
    period: '17-18世纪',
    startYear: 1600,
    endYear: 1750,
    region: '意大利',
    influence: '影响了欧洲艺术200多年，成为宫廷艺术的主要风格',
    characteristics: ['戏剧性', '动感', '装饰性', '光影对比', '情感表达'],
    representativeWork: {
      id: 'ecstasy-of-teresa',
      title: '圣特雷莎的狂喜',
      artist: '吉安·洛伦佐·贝尼尼',
      year: '1647-1652',
      style: '巴洛克',
      url: 'https://images.unsplash.com/photo-1578848151706-206b516e2592?w=600',
      source: '圣玛丽亚胜利教堂',
      description: '巴洛克雕塑的杰作，展现了强烈的戏剧性和情感表达。',
      styleLabels: ['巴洛克', '雕塑', '宗教艺术'],
      similarity: 1.0
    },
    relatedStyles: ['rococo', 'neoclassicism'],
    color: '#9B59B6'
  },
  {
    id: 'rococo',
    name: '洛可可',
    description: '18世纪法国宫廷艺术风格，以华丽装饰和轻快色彩为特征',
    period: '18世纪',
    startYear: 1700,
    endYear: 1780,
    region: '法国',
    influence: '代表了18世纪欧洲贵族的审美趣味，影响装饰艺术',
    characteristics: ['华丽装饰', '轻快色彩', '宫廷生活', '精致细节', '优雅曲线'],
    representativeWork: {
      id: 'the-swing',
      title: '秋千',
      artist: '让-奥诺雷·弗拉戈纳尔',
      year: '1767',
      style: '洛可可',
      url: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600',
      source: '华莱士收藏',
      description: '洛可可绘画的代表作，展现了宫廷生活的优雅和精致。',
      styleLabels: ['洛可可', '宫廷艺术', '优雅'],
      similarity: 1.0
    },
    relatedStyles: ['neoclassicism'],
    color: '#FF69B4'
  },
  {
    id: 'neoclassicism',
    name: '新古典主义',
    description: '18-19世纪艺术运动，回归古罗马/希腊美学，强调理性与秩序',
    period: '18-19世纪',
    startYear: 1750,
    endYear: 1820,
    region: '法国',
    influence: '启蒙时代的艺术表达，强调理性和道德',
    characteristics: ['古典美学', '理性秩序', '道德主题', '简洁线条', '历史题材'],
    representativeWork: {
      id: 'oath-of-horatii',
      title: '荷拉斯兄弟之誓',
      artist: '雅克-路易·大卫',
      year: '1784',
      style: '新古典主义',
      url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
      source: '卢浮宫',
      description: '新古典主义的杰作，展现了古典美学和道德主题。',
      styleLabels: ['新古典主义', '历史画', '道德主题'],
      similarity: 1.0
    },
    relatedStyles: ['romanticism'],
    color: '#607D8B'
  },

  // 🌄 浪漫与现实
  {
    id: 'romanticism',
    name: '浪漫主义',
    description: '18-19世纪的艺术运动，强调情感、想象力和个人表达',
    period: '18-19世纪',
    startYear: 1800,
    endYear: 1850,
    region: '欧洲',
    influence: '强调个人情感和想象力，为现代艺术的情感表达奠定基础',
    characteristics: ['情感表达', '想象力', '自然崇拜', '个人主义', '戏剧性'],
    representativeWork: {
      id: 'wanderer-above-sea',
      title: '雾海上的漫游者',
      artist: '卡斯帕·大卫·弗里德里希',
      year: '1818',
      style: '浪漫主义',
      url: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600',
      source: '汉堡美术馆',
      description: '浪漫主义风景画的代表作，展现了人与自然的关系。',
      styleLabels: ['浪漫主义', '风景画', '情感表达'],
      similarity: 1.0
    },
    relatedStyles: ['realism', 'impressionism'],
    color: '#E74C3C'
  },
  {
    id: 'realism',
    name: '现实主义',
    description: '19世纪中期艺术运动，关注日常生活和社会题材，反对理想化',
    period: '19世纪中期',
    startYear: 1840,
    endYear: 1880,
    region: '法国',
    influence: '艺术开始关注现实社会，为印象派铺路',
    characteristics: ['日常生活', '社会题材', '反对理想化', '真实描绘', '社会批判'],
    representativeWork: {
      id: 'the-stone-breakers',
      title: '采石工人',
      artist: '古斯塔夫·库尔贝',
      year: '1849',
      style: '现实主义',
      url: 'https://images.unsplash.com/photo-1578848151706-206b516e2592?w=600',
      source: '德累斯顿美术馆',
      description: '现实主义的代表作，真实描绘了劳动者的生活。',
      styleLabels: ['现实主义', '社会题材', '劳动者'],
      similarity: 1.0
    },
    relatedStyles: ['impressionism'],
    color: '#795548'
  },

  // 🌸 现代艺术的兴起
  {
    id: 'impressionism',
    name: '印象派',
    description: '19世纪后期法国艺术运动，强调光线和色彩的变化，捕捉瞬间印象',
    period: '19世纪后期',
    startYear: 1860,
    endYear: 1886,
    region: '法国',
    influence: '革命性地改变了绘画方式，为现代艺术开辟了新道路',
    characteristics: ['光线变化', '色彩丰富', '笔触明显', '户外写生', '瞬间印象'],
    representativeWork: {
      id: 'impression-sunrise',
      title: '印象·日出',
      artist: '克劳德·莫奈',
      year: '1872',
      style: '印象派',
      url: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600',
      source: '马蒙坦博物馆',
      description: '印象派运动的开山之作，展现了光线在水面上的变化。',
      styleLabels: ['印象派', '风景画', '光线研究'],
      similarity: 1.0
    },
    relatedStyles: ['post-impressionism', 'neo-impressionism', 'fauvism'],
    color: '#FF6B6B'
  },
  {
    id: 'post-impressionism',
    name: '后印象派',
    description: '19世纪末20世纪初艺术运动，强调个人化表达和色彩实验',
    period: '19世纪末20世纪初',
    startYear: 1885,
    endYear: 1910,
    region: '法国',
    influence: '为20世纪前卫艺术开辟了道路',
    characteristics: ['个人化表达', '色彩实验', '形体探索', '情感表达', '主观性'],
    representativeWork: {
      id: 'starry-night',
      title: '星夜',
      artist: '文森特·梵高',
      year: '1889',
      style: '后印象派',
      url: 'https://images.unsplash.com/photo-1578848151706-206b516e2592?w=600',
      source: '现代艺术博物馆',
      description: '后印象派的杰作，展现了梵高独特的色彩和笔触风格。',
      styleLabels: ['后印象派', '风景画', '情感表达'],
      similarity: 1.0
    },
    relatedStyles: ['fauvism', 'expressionism'],
    color: '#FF9800'
  },
  {
    id: 'symbolism',
    name: '象征主义',
    description: '19世纪末20世纪初艺术运动，强调神秘主义和梦幻题材',
    period: '19世纪末20世纪初',
    startYear: 1880,
    endYear: 1910,
    region: '法国',
    influence: '开启了艺术中的象征和隐喻表达',
    characteristics: ['神秘主义', '梦幻题材', '象征意义', '隐喻表达', '主观想象'],
    representativeWork: {
      id: 'the-apparition',
      title: '幽灵',
      artist: '古斯塔夫·莫罗',
      year: '1876',
      style: '象征主义',
      url: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600',
      source: '古斯塔夫·莫罗博物馆',
      description: '象征主义的代表作，展现了神秘和梦幻的艺术特色。',
      styleLabels: ['象征主义', '神秘主义', '梦幻'],
      similarity: 1.0
    },
    relatedStyles: ['surrealism'],
    color: '#9C27B0'
  },

  // 🌀 20世纪前卫艺术
  {
    id: 'fauvism',
    name: '野兽派',
    description: '20世纪初法国艺术运动，以大胆原色和简化形体为特征',
    period: '20世纪初',
    startYear: 1905,
    endYear: 1910,
    region: '法国',
    influence: '色彩解放的先驱，为现代艺术注入活力',
    characteristics: ['大胆原色', '简化形体', '色彩对比', '情感表达', '装饰性'],
    representativeWork: {
      id: 'woman-with-hat',
      title: '戴帽子的女人',
      artist: '亨利·马蒂斯',
      year: '1905',
      style: '野兽派',
      url: 'https://images.unsplash.com/photo-1578848151706-206b516e2592?w=600',
      source: '旧金山现代艺术博物馆',
      description: '野兽派的代表作，展现了大胆的色彩运用。',
      styleLabels: ['野兽派', '色彩', '装饰性'],
      similarity: 1.0
    },
    relatedStyles: ['expressionism', 'cubism'],
    color: '#FF5722'
  },
  {
    id: 'cubism',
    name: '立体主义',
    description: '20世纪初的艺术运动，将物体分解为几何形状，从多个角度同时表现',
    period: '20世纪初',
    startYear: 1907,
    endYear: 1920,
    region: '法国',
    influence: '彻底改变了艺术的表现方式，影响了现代艺术的发展',
    characteristics: ['几何形状', '多角度表现', '抽象化', '平面化', '拼贴技法'],
    representativeWork: {
      id: 'les-demoiselles',
      title: '亚维农少女',
      artist: '巴勃罗·毕加索',
      year: '1907',
      style: '立体主义',
      url: 'https://images.unsplash.com/photo-1578848151706-206b516e2592?w=600',
      source: '现代艺术博物馆',
      description: '立体主义的开山之作，彻底改变了艺术的表现方式。',
      styleLabels: ['立体主义', '现代主义', '抽象艺术'],
      similarity: 1.0
    },
    relatedStyles: ['futurism', 'constructivism', 'abstract-art'],
    color: '#4ECDC4'
  },
  {
    id: 'futurism',
    name: '未来主义',
    description: '20世纪初意大利艺术运动，强调速度、机械和都市动感',
    period: '20世纪初',
    startYear: 1909,
    endYear: 1930,
    region: '意大利',
    influence: '拥抱现代科技和都市生活，影响设计艺术',
    characteristics: ['速度感', '机械美学', '都市动感', '动态线条', '现代科技'],
    representativeWork: {
      id: 'dynamism-of-dog',
      title: '狗的动态',
      artist: '贾科莫·巴拉',
      year: '1912',
      style: '未来主义',
      url: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600',
      source: '布法罗美术馆',
      description: '未来主义的代表作，展现了运动和速度的视觉表现。',
      styleLabels: ['未来主义', '运动', '速度'],
      similarity: 1.0
    },
    relatedStyles: ['constructivism'],
    color: '#00BCD4'
  },
  {
    id: 'expressionism',
    name: '表现主义',
    description: '20世纪初德国艺术运动，强调主观情感和扭曲形体',
    period: '20世纪初',
    startYear: 1905,
    endYear: 1930,
    region: '德国',
    influence: '强调艺术家的内心世界和情感表达',
    characteristics: ['主观情感', '扭曲形体', '强烈色彩', '内心表达', '社会批判'],
    representativeWork: {
      id: 'the-scream',
      title: '呐喊',
      artist: '爱德华·蒙克',
      year: '1893',
      style: '表现主义',
      url: 'https://images.unsplash.com/photo-1578848151706-206b516e2592?w=600',
      source: '国家美术馆',
      description: '表现主义的杰作，展现了强烈的情感表达。',
      styleLabels: ['表现主义', '情感表达', '内心世界'],
      similarity: 1.0
    },
    relatedStyles: ['abstract-expressionism'],
    color: '#FFC107'
  },
  {
    id: 'dada',
    name: '达达主义',
    description: '20世纪初反艺术运动，以拼贴、讽刺和反传统为特征',
    period: '20世纪初',
    startYear: 1916,
    endYear: 1925,
    region: '瑞士',
    influence: '对传统艺术的彻底颠覆，为观念艺术铺路',
    characteristics: ['反艺术', '拼贴技法', '讽刺幽默', '反传统', '观念表达'],
    representativeWork: {
      id: 'fountain',
      title: '泉',
      artist: '马塞尔·杜尚',
      year: '1917',
      style: '达达主义',
      url: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600',
      source: '现代艺术博物馆',
      description: '达达主义的代表作，挑战了艺术的定义。',
      styleLabels: ['达达主义', '观念艺术', '反传统'],
      similarity: 1.0
    },
    relatedStyles: ['surrealism', 'conceptual-art'],
    color: '#FF4081'
  },
  {
    id: 'surrealism',
    name: '超现实主义',
    description: '20世纪20-40年代艺术运动，探索梦境和潜意识',
    period: '20世纪20-40年代',
    startYear: 1924,
    endYear: 1940,
    region: '法国',
    influence: '探索人类潜意识，影响文学、电影等多个领域',
    characteristics: ['梦境题材', '潜意识', '超现实', '象征意义', '心理表达'],
    representativeWork: {
      id: 'persistence-of-memory',
      title: '记忆的永恒',
      artist: '萨尔瓦多·达利',
      year: '1931',
      style: '超现实主义',
      url: 'https://images.unsplash.com/photo-1578848151706-206b516e2592?w=600',
      source: '现代艺术博物馆',
      description: '超现实主义的杰作，展现了梦境般的奇异景象。',
      styleLabels: ['超现实主义', '梦境', '潜意识'],
      similarity: 1.0
    },
    relatedStyles: ['abstract-art'],
    color: '#673AB7'
  },
  {
    id: 'abstract-art',
    name: '抽象艺术',
    description: '20世纪初至今的艺术形式，脱离具象，强调形与色',
    period: '20世纪初至今',
    startYear: 1910,
    endYear: 2024,
    region: '全球',
    influence: '艺术彻底摆脱具象束缚，进入纯形式探索',
    characteristics: ['脱离具象', '纯形式', '色彩实验', '几何形状', '情感表达'],
    representativeWork: {
      id: 'composition-vii',
      title: '构成七号',
      artist: '瓦西里·康定斯基',
      year: '1913',
      style: '抽象艺术',
      url: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600',
      source: '特列季亚科夫画廊',
      description: '抽象艺术的杰作，展现了纯形式的艺术表达。',
      styleLabels: ['抽象艺术', '纯形式', '色彩'],
      similarity: 1.0
    },
    relatedStyles: ['abstract-expressionism', 'minimalism'],
    color: '#3F51B5'
  },

  // 🎆 二战后至今
  {
    id: 'abstract-expressionism',
    name: '抽象表现主义',
    description: '20世纪40-50年代美国艺术运动，以即兴笔触和巨大画布为特征',
    period: '20世纪40-50年代',
    startYear: 1940,
    endYear: 1950,
    region: '美国',
    influence: '美国艺术的崛起，影响全球艺术发展',
    characteristics: ['即兴笔触', '巨大画布', '情感表达', '动作绘画', '色彩实验'],
    representativeWork: {
      id: 'no-1-lavender-mist',
      title: '薰衣草雾一号',
      artist: '杰克逊·波洛克',
      year: '1950',
      style: '抽象表现主义',
      url: 'https://images.unsplash.com/photo-1578848151706-206b516e2592?w=600',
      source: '国家美术馆',
      description: '抽象表现主义的杰作，展现了即兴的绘画技法。',
      styleLabels: ['抽象表现主义', '动作绘画', '即兴'],
      similarity: 1.0
    },
    relatedStyles: ['minimalism', 'pop-art'],
    color: '#2196F3'
  },
  {
    id: 'minimalism',
    name: '极简主义',
    description: '20世纪60-70年代艺术运动，强调简单几何和去个性化',
    period: '20世纪60-70年代',
    startYear: 1960,
    endYear: 1970,
    region: '美国',
    influence: '艺术回归本质，强调纯粹的形式美',
    characteristics: ['简单几何', '去个性化', '纯粹形式', '工业材料', '空间感'],
    representativeWork: {
      id: 'untitled',
      title: '无题',
      artist: '唐纳德·贾德',
      year: '1965',
      style: '极简主义',
      url: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600',
      source: '现代艺术博物馆',
      description: '极简主义的代表作，展现了纯粹的形式美。',
      styleLabels: ['极简主义', '几何', '纯粹'],
      similarity: 1.0
    },
    relatedStyles: ['conceptual-art'],
    color: '#607D8B'
  },
  {
    id: 'pop-art',
    name: '波普艺术',
    description: '20世纪50-70年代艺术运动，以消费文化和大众图像为特征',
    period: '20世纪50-70年代',
    startYear: 1950,
    endYear: 1970,
    region: '美国/英国',
    influence: '艺术与大众文化的结合，挑战高雅艺术界限',
    characteristics: ['消费文化', '大众图像', '商业元素', '色彩鲜艳', '讽刺意味'],
    representativeWork: {
      id: 'campbells-soup-cans',
      title: '坎贝尔汤罐头',
      artist: '安迪·沃霍尔',
      year: '1962',
      style: '波普艺术',
      url: 'https://images.unsplash.com/photo-1578848151706-206b516e2592?w=600',
      source: '现代艺术博物馆',
      description: '波普艺术的代表作，展现了消费文化的艺术表达。',
      styleLabels: ['波普艺术', '消费文化', '商业'],
      similarity: 1.0
    },
    relatedStyles: ['conceptual-art', 'contemporary-art'],
    color: '#E91E63'
  },
  {
    id: 'conceptual-art',
    name: '观念艺术',
    description: '20世纪60年代至今的艺术形式，强调观念本身而非物质载体',
    period: '20世纪60年代至今',
    startYear: 1960,
    endYear: 2024,
    region: '全球',
    influence: '艺术概念的彻底革新，影响当代艺术发展',
    characteristics: ['观念表达', '非物质化', '文字艺术', '行为艺术', '概念性'],
    representativeWork: {
      id: 'one-and-three-chairs',
      title: '一把和三把椅子',
      artist: '约瑟夫·科苏斯',
      year: '1965',
      style: '观念艺术',
      url: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600',
      source: '现代艺术博物馆',
      description: '观念艺术的代表作，探讨了艺术与概念的关系。',
      styleLabels: ['观念艺术', '概念', '文字'],
      similarity: 1.0
    },
    relatedStyles: ['contemporary-art'],
    color: '#9E9E9E'
  },
  {
    id: 'contemporary-art',
    name: '当代艺术',
    description: '20世纪80年代至今的艺术形式，多元、跨界、包含装置、影像、数字艺术',
    period: '20世纪80年代至今',
    startYear: 1980,
    endYear: 2024,
    region: '全球',
    influence: '艺术进入全新的发展阶段，形式无限扩展',
    characteristics: ['多元形式', '跨界融合', '装置艺术', '影像艺术', '数字艺术'],
    representativeWork: {
      id: 'sunflower-seeds',
      title: '葵花籽',
      artist: '艾未未',
      year: '2010',
      style: '当代艺术',
      url: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600',
      source: '泰特现代美术馆',
      description: '当代艺术的代表作，展现了装置艺术的魅力。',
      styleLabels: ['当代艺术', '装置艺术', '社会批判'],
      similarity: 1.0
    },
    relatedStyles: [],
    color: '#4CAF50'
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

  return {
    selectedStyle: style,
    waterfallSections: generateWaterfallSections(style),
    timeline: timelineEras.filter(era => era.styles.some(s => s.id === styleId)),
    styleBranches: styleBranches.filter(branch => branch.parentStyle === styleId)
  };
};

// 获取所有可用的艺术风格
export const getAvailableStyles = (): ArtStyle[] => artStyles;