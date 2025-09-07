import { ArtStyle, TimelineEra, StyleBranch, StyleExplorationData, WaterfallSection, ArtworkData } from '../types/artwork';

// Image path mapping function
const getImageUrl = (imagePath: string): string => {
  // Convert local path to accessible URL
  // Assume images are already copied to public directory
  const fileName = imagePath.split('/').pop() || '';
  return `/images/${fileName}`;
};

// High Renaissance real image data
const highRenaissanceImages = {
  'raphael-deposition': {
    title: 'The Deposition',
    artist: 'Raphael',
    year: '1507',
    fileName: 'raphael_the-deposition-1507_320efd91.jpg',
    description: 'Raphael\'s masterpiece, depicting the solemn scene of Christ\'s deposition, embodying the High Renaissance\'s sublime treatment of religious subjects.'
  },
  'michelangelo-awakening-slave': {
    title: 'The Awakening Slave',
    artist: 'Michelangelo',
    year: '1536',
    fileName: 'michelangelo_the-awakening-slave-1536_50542386.jpg',
    description: 'Michelangelo\'s sculptural masterpiece, capturing the moment of a figure awakening from stone, demonstrating the artist\'s profound understanding of human beauty.'
  },
  'perugino-baptism': {
    title: 'Baptism of Christ',
    artist: 'Pietro Perugino',
    year: '1523',
    fileName: 'pietro-perugino_pala-di-sant-agostino-baptism-of-christ-1523_aa534c07.jpg',
    description: 'Perugino\'s religious masterpiece, depicting the solemn scene of Christ\'s baptism, representing the transition from Early to High Renaissance.'
  },
  'lotto-entombment': {
    title: 'The Entombment',
    artist: 'Lorenzo Lotto',
    year: '1516',
    fileName: 'lorenzo-lotto_altar-polyptych-of-san-bartolomeo-bergamo-foot-plate-entombment-1516_159463af.jpg',
    description: 'Lotto\'s altarpiece masterpiece, depicting the tragic scene of Christ\'s entombment, showcasing the coloristic characteristics of the Venetian school.'
  },
  'michelangelo-pius': {
    title: 'Portrait of Pope Pius',
    artist: 'Michelangelo',
    year: '1504',
    fileName: 'michelangelo_pius-1504_6bf811fd.jpg',
    description: 'Michelangelo\'s sculptural masterpiece, depicting the majestic image of the Pope, demonstrating the High Renaissance\'s profound characterization of personality.'
  },
  'leonardo-st-anne': {
    title: 'Study of St. Anne',
    artist: 'Leonardo da Vinci',
    year: '1500',
    fileName: 'leonardo-da-vinci_study-of-st-anne-mary-the-christ-child-and-the-young-st-john_c2ac15f4.jpg',
    description: 'Leonardo\'s manuscript study, demonstrating the artist\'s deep contemplation of composition and human relationships, embodying the integration of scientific method with artistic creation.'
  },
  'leonardo-hands': {
    title: '手部研究',
    artist: '列奥纳多·达·芬奇',
    year: '1500',
    fileName: 'leonardo-da-vinci_study-of-arms-and-hands-a-sketch-by-da-vinci-popularly-considered-to-be-a-preliminary-study-for_1d05c785.jpg',
    description: '达·芬奇的人体解剖学研究，展现了艺术家对人体结构的科学观察，体现了文艺复兴时期科学与艺术的完美结合。'
  },
  'raphael-holy-family': {
    title: '圣家族',
    artist: '拉斐尔',
    year: '1506',
    fileName: 'raphael_the-holy-family-1506_049fda7a.jpg',
    description: '拉斐尔的圣母像杰作，展现了理想化的家庭和谐，体现了盛期文艺复兴对完美构图的追求。'
  }
};

// 艺术风格数据 - 精选最有名的4个艺术风格
export const artStyles: ArtStyle[] = [
  // 🌟 盛期文艺复兴 - 艺术史上的黄金时代
  {
    id: 'high-renaissance',
    name: 'High Renaissance',
    description: 'The golden age of Italian art in the 15th-16th centuries, represented by Leonardo da Vinci, Michelangelo, and Raphael, pursuing harmony, balance, and idealized figures, elevating art to unprecedented heights. This period perfectly combined scientific methods with artistic creation, established the standards of classical aesthetics, and became the pinnacle of human art history.',
    period: '15th-16th Century',
    startYear: 1500,
    endYear: 1520,
    region: 'Italy',
    influence: 'The pinnacle period in art history, influencing artistic development for hundreds of years and establishing the standards of classical aesthetics. Its technical innovations and aesthetic concepts are still regarded as classics today, laying the foundation for modern art education.',
    characteristics: [
      'Harmony and Balance', 'Idealized Figures', 'Perfect Proportions', 'Classical Aesthetics', 'Humanism', 
      'Scientific Perspective', 'Anatomy', 'Light and Shadow Effects', 'Sfumato', 'Linear Perspective', 
      'Color Harmony', 'Rigorous Composition', 'Emotional Expression', 'Religious Themes', 'Mythological Subjects'
    ],
    techniques: [
      {
        name: 'Sfumato',
        description: 'A technique invented by Leonardo da Vinci, creating a hazy effect through soft color transitions, making contours more natural',
        example: 'The mysterious smile of the Mona Lisa'
      },
      {
        name: 'Linear Perspective',
        description: 'A scientific perspective system that achieves accurate representation of three-dimensional space, enhancing the three-dimensionality of the painting',
        example: 'The depth of space in The Last Supper'
      },
      {
        name: 'Chiaroscuro',
        description: 'Enhancing three-dimensionality and dramatic effects through strong light and shadow contrast',
        example: 'Michelangelo\'s sculptural works'
      },
      {
        name: 'Human Anatomy',
        description: 'Human representation based on scientific anatomy, achieving more accurate figure modeling',
        example: 'The Vitruvian Man\'s study of human proportions'
      },
      {
        name: 'Color Harmony',
        description: 'Pursuing natural harmony of colors, avoiding overly bright colors',
        example: 'The soft tones in Raphael\'s works'
      }
    ],
    representativeWork: {
      id: 'last-supper',
      title: 'The Last Supper',
      artist: 'Leonardo da Vinci',
      year: '1495-1498',
      style: 'High Renaissance',
      url: '/images/The-Last-Supper.jpg',
      source: 'Santa Maria delle Grazie, Milan',
      description: 'Leonardo da Vinci\'s religious masterpiece, depicting Christ\'s last supper with the twelve apostles. This painting employs innovative perspective techniques and psychological characterization, demonstrating Leonardo\'s profound insight into human complexity.',
      styleLabels: ['High Renaissance', 'Religious Painting', 'Leonardo da Vinci', 'Perspective'],
      similarity: 1.0
    },
    relatedStyles: ['impressionism'],
    color: '#FFD700'
  },
  // 🌸 印象派 - 现代艺术的起点
  {
    id: 'impressionism',
    name: 'Impressionism',
    description: 'A French artistic revolution in the late 19th century, represented by Monet, Renoir, and Degas, breaking through traditional painting techniques to capture the instantaneous changes of outdoor light and shadow, ushering in a new era of modern art',
    period: 'Late 19th Century',
    startYear: 1870,
    endYear: 1890,
    region: 'France',
    influence: 'The starting point of modern art, completely changing artistic concepts, moving from indoor studios to outdoors, from historical subjects to daily life, laying the foundation for 20th-century artistic revolution',
    characteristics: ['Outdoor Light and Shadow', 'Quick Brushstrokes', 'Bright Colors', 'Instantaneous Impressions', 'Natural Light', 'Daily Life', 'Color Decomposition', 'Optical Principles'],
    representativeWork: {
      id: 'monet-impression',
      title: 'Impression, Sunrise',
      artist: 'Claude Monet',
      year: '1872',
      style: 'Impressionism',
      url: '/images/Impression-sunrise.jpg',
      source: 'Paris',
      description: 'Monet\'s masterpiece, the origin of the Impressionist movement\'s name. This painting depicts the sunrise scene at the port of Le Havre, using broken brushstrokes and bright colors to capture the instantaneous changes of light in the morning mist, completely overturning traditional painting\'s realist concepts.',
      styleLabels: ['Impressionism', 'Landscape Painting', 'Monet', 'Sunrise', 'Port'],
      similarity: 1.0
    },
    relatedStyles: ['high-renaissance', 'cubism'],
    color: '#87CEEB'
  },
  // 🌀 立体主义 - 20世纪最重要的艺术运动之一
  {
    id: 'cubism',
    name: 'Cubism',
    description: 'An artistic revolution pioneered by Picasso and Braque in the early 20th century, redefining space and form through multi-perspective geometrization, completely overturning traditional painting\'s perspective laws and becoming an important milestone in modern art',
    period: 'Early 20th Century',
    startYear: 1907,
    endYear: 1920,
    region: 'France',
    influence: 'One of the most important artistic movements of the 20th century, influencing architecture, design, sculpture, and other fields, paving the way for the development of abstract art and modern art',
    characteristics: ['Multi-perspective', 'Geometrization', 'Spatial Reconstruction', 'Abstraction', 'Analytical', 'Collage Techniques', 'Color Simplification', 'Form Decomposition'],
    representativeWork: {
      id: 'picasso-les',
      title: 'Les Demoiselles d\'Avignon',
      artist: 'Pablo Picasso',
      year: '1907',
      style: 'Cubism',
      url: '/images/Les-Demoiselles-d\'Avignon.jpg',
      source: 'Museum of Modern Art, New York',
      description: 'Picasso\'s masterpiece, the founding work of Cubism. This painting depicts prostitutes from Avignon Street in Barcelona, through geometric forms and multiple perspectives, completely breaking the single viewpoint of traditional painting, creating a new artistic expression and marking the birth of modern art.',
      styleLabels: ['Cubism', 'Figure Painting', 'Picasso', 'Avignon', 'Geometrization'],
      similarity: 1.0
    },
    relatedStyles: ['impressionism', 'contemporary-art'],
    color: '#2E8B57'
  },
  // 🎆 当代艺术 - 现代艺术的最新发展
  {
    id: 'contemporary-art',
    name: 'Contemporary Art',
    description: 'Diverse artistic practices from the 1980s to the present, breaking through traditional media boundaries, integrating installation, video, digital art, performance art, and other forms, focusing on social issues and globalization',
    period: '1980s to Present',
    startYear: 1980,
    endYear: 2024,
    region: 'Global',
    influence: 'The latest development in contemporary art, continuously influencing social culture, promoting deep integration of art with technology, society, and politics, redefining the possibilities of art',
    characteristics: ['Multi-disciplinary', 'Installation Art', 'Video Art', 'Digital Art', 'Social Engagement', 'Globalization', 'Identity Politics', 'Environmental Issues', 'Technology Integration'],
    representativeWork: {
      id: 'ai-weiwei-sunflower',
      title: 'Sunflower Seeds',
      artist: 'Ai Weiwei',
      year: '2010',
      style: 'Contemporary Art',
      url: '/images/Kui-Hua-Zi.jpg',
      source: 'Tate Modern, London',
      description: 'Ai Weiwei\'s masterpiece, an installation art piece composed of 100 million handcrafted ceramic sunflower seeds. This work not only demonstrates the artist\'s political stance and concern for Chinese social reality, but also embodies the complex relationships in contemporary art between individual and collective, tradition and innovation, art and politics, becoming an important work in contemporary art history.',
      styleLabels: ['Contemporary Art', 'Installation', 'Ai Weiwei', 'Political Art', 'Social Critique'],
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
    title: 'Romanesque Art',
    description: 'European religious art of the 10th-12th centuries, characterized by heavy architectural decoration and religious murals',
    styles: [],
    significance: 'A typical representative of medieval art, laying the foundation for Gothic art',
    representativeArtists: ['Anonymous Masters'],
    color: '#8B4513'
  },
  {
    id: 'gothic',
    year: 1150,
    title: 'Gothic Art',
    description: 'European artistic style of the 12th-15th centuries, characterized by pointed arch architecture and stained glass',
    styles: [],
    significance: 'Perfect combination of architecture and art, influencing future generations for centuries',
    representativeArtists: ['Master Architects'],
    color: '#4A90E2'
  },
  {
    id: 'early-renaissance',
    year: 1400,
    title: 'Early Renaissance',
    description: 'The early period of Italian artistic revival in the 14th-15th centuries, exploring perspective and human anatomy',
    styles: [],
    significance: 'Laid the foundation for Renaissance art and established the scientific perspective system',
    representativeArtists: ['Masaccio', 'Botticelli'],
    color: '#D4AF37'
  },
  {
    id: 'high-renaissance',
    year: 1500,
    title: 'High Renaissance',
    description: 'The golden period of the Renaissance in the 15th-16th centuries, represented by Leonardo da Vinci, Michelangelo, and Raphael',
    styles: [artStyles[0]], // 引用盛期文艺复兴风格
    significance: 'The pinnacle of Renaissance art, influencing artistic development for hundreds of years',
    representativeArtists: ['Leonardo da Vinci', 'Michelangelo', 'Raphael'],
    color: '#FFD700'
  },
  {
    id: 'mannerism',
    year: 1520,
    title: 'Mannerism',
    description: 'Late 16th-century artistic style characterized by exaggerated proportions and distorted poses',
    styles: [],
    significance: 'Rebellion against Renaissance ideals, opening the way for Baroque art',
    representativeArtists: ['El Greco'],
    color: '#FF6B6B'
  },
  {
    id: 'baroque',
    year: 1600,
    title: 'Baroque',
    description: 'European artistic style of the 17th-18th centuries, characterized by dramatic light and shadow and intense emotions',
    styles: [],
    significance: 'Perfect combination of art and religion, influencing all of Europe',
    representativeArtists: ['Caravaggio', 'Rubens', 'Velázquez', 'Rembrandt'],
    color: '#8B0000'
  },
  {
    id: 'rococo',
    year: 1700,
    title: 'Rococo',
    description: '18th-century French court art, characterized by ornate decoration and light colors',
    styles: [],
    significance: 'The pinnacle of court art, influencing the development of decorative arts',
    representativeArtists: ['Watteau', 'Boucher', 'Fragonard'],
    color: '#FFB6C1'
  },
  {
    id: 'neoclassicism',
    year: 1750,
    title: 'Neoclassicism',
    description: '18th-19th century art style, returning to ancient Roman and Greek aesthetics, emphasizing reason and order',
    styles: [],
    significance: 'Artistic expression of the Enlightenment, influencing politics and society',
    representativeArtists: ['Jacques-Louis David', 'Ingres'],
    color: '#4682B4'
  },
  {
    id: 'romanticism',
    year: 1800,
    title: 'Romanticism',
    description: 'Early 19th century art movement emphasizing emotion, natural forces, and national epics',
    styles: [],
    significance: 'Rebellion against reason, emphasizing personal emotion and imagination',
    representativeArtists: ['Delacroix', 'Turner', 'Goya'],
    color: '#DC143C'
  },
  {
    id: 'realism',
    year: 1840,
    title: 'Realism',
    description: 'Mid-19th century art movement depicting everyday life and social subjects, opposing idealization',
    styles: [],
    significance: 'Art turning to reality, paving the way for Impressionism',
    representativeArtists: ['Courbet', 'Millet'],
    color: '#696969'
  },
  {
    id: 'impressionism',
    year: 1870,
    title: 'Impressionism',
    description: 'Late 19th century French art movement characterized by outdoor light and shadow and rapid brushstrokes',
    styles: [artStyles[1]], // Reference to Impressionism style
    significance: 'The starting point of modern art, completely changing artistic concepts',
    representativeArtists: ['Monet', 'Renoir', 'Degas'],
    color: '#87CEEB'
  },
  {
    id: 'post-impressionism',
    year: 1885,
    title: 'Post-Impressionism',
    description: 'Late 19th to early 20th century art movement emphasizing personal expression and form-color experiments',
    styles: [],
    significance: 'Laying the foundation for various modern art movements',
    representativeArtists: ['Van Gogh', 'Gauguin', 'Cézanne'],
    color: '#FFD700'
  },
  {
    id: 'symbolism',
    year: 1880,
    title: 'Symbolism',
    description: 'Late 19th to early 20th century art movement emphasizing mysticism and dream themes',
    styles: [],
    significance: 'Laying the foundation for Surrealism',
    representativeArtists: ['Moreau', 'Redon'],
    color: '#9370DB'
  },
  {
    id: 'fauvism',
    year: 1905,
    title: 'Fauvism',
    description: 'Early 20th century French art movement characterized by bold primary colors and simplified forms',
    styles: [],
    significance: 'Color liberation, paving the way for Expressionism',
    representativeArtists: ['Matisse'],
    color: '#FF4500'
  },
  {
    id: 'cubism',
    year: 1907,
    title: 'Cubism',
    description: 'Early 20th century art movement characterized by multi-perspective geometricization',
    styles: [artStyles[2]], // Reference to Cubism style
    significance: 'One of the most important art movements of the 20th century',
    representativeArtists: ['Picasso', 'Braque'],
    color: '#2E8B57'
  },
  {
    id: 'futurism',
    year: 1909,
    title: 'Futurism',
    description: 'Early 20th century Italian art movement emphasizing speed, machinery, and urban dynamism',
    styles: [],
    significance: 'Celebration of modern industrial civilization',
    representativeArtists: ['Boccioni'],
    color: '#FF6347'
  },
  {
    id: 'expressionism',
    year: 1905,
    title: 'Expressionism',
    description: 'Early 20th century German art movement emphasizing subjective emotion and distorted forms',
    styles: [],
    significance: 'Art of emotional expression, influencing later Expressionism',
    representativeArtists: ['Kandinsky', 'Munch'],
    color: '#8B0000'
  },
  {
    id: 'dada',
    year: 1916,
    title: 'Dadaism',
    description: 'Early 20th century anti-art movement characterized by collage and satire',
    styles: [],
    significance: 'Anti-art art, laying the foundation for Conceptual Art',
    representativeArtists: ['Duchamp'],
    color: '#FF1493'
  },
  {
    id: 'surrealism',
    year: 1924,
    title: 'Surrealism',
    description: '1920s-1940s art movement exploring dreams and the subconscious',
    styles: [],
    significance: 'Exploring the subconscious, influencing modern art and design',
    representativeArtists: ['Dalí', 'Magritte'],
    color: '#FF69B4'
  },
  {
    id: 'abstract-art',
    year: 1910,
    title: 'Abstract Art',
    description: 'Art movement from early 20th century to present, breaking away from representation, emphasizing form and color',
    styles: [],
    significance: 'Core of modern art, influencing all art forms',
    representativeArtists: ['Kandinsky', 'Mondrian'],
    color: '#9370DB'
  },
  {
    id: 'abstract-expressionism',
    year: 1940,
    title: 'Abstract Expressionism',
    description: '1940s-1950s American art movement characterized by spontaneous brushstrokes and large canvases',
    styles: [],
    significance: 'Rise of American art, influencing global art development',
    representativeArtists: ['Pollock', 'Rothko'],
    color: '#FF8C00'
  },
  {
    id: 'minimalism',
    year: 1960,
    title: 'Minimalism',
    description: '1960s-1970s art movement characterized by simple geometry and depersonalization',
    styles: [],
    significance: 'Minimalist aesthetics, influencing design and architecture',
    representativeArtists: ['Donald Judd'],
    color: '#C0C0C0'
  },
  {
    id: 'pop-art',
    year: 1950,
    title: 'Pop Art',
    description: '1950s-1970s art movement characterized by consumer culture and advertising imagery',
    styles: [],
    significance: 'Combination of art and popular culture, influencing contemporary art',
    representativeArtists: ['Andy Warhol', 'Lichtenstein'],
    color: '#FF1493'
  },
  {
    id: 'conceptual-art',
    year: 1960,
    title: 'Conceptual Art',
    description: 'Art movement from 1960s to present, where the work is the concept itself',
    styles: [],
    significance: 'Concept over form, influencing contemporary art development',
    representativeArtists: ['Joseph Kosuth'],
    color: '#000000'
  },
  {
    id: 'contemporary-art',
    year: 1980,
    title: 'Contemporary Art',
    description: 'Art from 1980s to present, diverse and cross-disciplinary, including installations, video, and digital art',
    styles: [artStyles[3]], // Reference to Contemporary Art style
    significance: 'Latest development in contemporary art, continuously influencing society',
    representativeArtists: ['Ai Weiwei', 'Damien Hirst'],
    color: '#FF4500'
  },
  // More content, coming soon notice
  {
    id: 'coming-soon',
    year: 2025,
    title: 'More Art Styles',
    description: 'We are continuously updating more exciting art style content, stay tuned!',
    styles: [],
    significance: 'More art style exploration features coming soon',
    representativeArtists: ['Coming Soon'],
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
    artworks: [],
    influence: '为后世艺术发展奠定基础',
    color: '#FFD700'
  },
  {
    id: 'modern-art-branches',
    name: '现代艺术分支',
    description: '20世纪现代艺术的各种流派',
    parentStyle: 'cubism',
    artworks: [],
    influence: '推动现代艺术革命',
    color: '#2E8B57'
  }
];

// 精选艺术风格的详细探索数据
export const featuredStyleData: { [key: string]: any } = {
  'high-renaissance': {
    masterpieces: [
      {
        id: 'last-supper',
        title: '最后的晚餐',
        artist: '列奥纳多·达·芬奇',
        year: '1495-1498',
        url: '/images/The-Last-Supper.jpg',
        description: '达·芬奇的宗教画杰作，描绘了基督与十二门徒的最后晚餐。这幅画运用了创新的透视法和人物心理刻画，展现了达·芬奇对人性复杂性的深刻洞察。',
        techniques: ['线性透视', '心理刻画', '构图创新', '光影效果'],
        significance: '文艺复兴宗教画的巅峰之作，展现了艺术家对人物心理的深刻理解'
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
      },
      {
        id: 'last-supper',
        title: '最后的晚餐',
        artist: '列奥纳多·达·芬奇',
        year: '1495-1498',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
        description: '达·芬奇的宗教画杰作，描绘了基督与十二门徒的最后晚餐。这幅画运用了创新的透视法和人物心理刻画，展现了达·芬奇对人性复杂性的深刻洞察。',
        techniques: ['线性透视', '心理刻画', '构图创新', '光影效果'],
        significance: '文艺复兴宗教画的巅峰之作，展现了艺术家对人物心理的深刻理解'
      },
      {
        id: 'david',
        title: '大卫像',
        artist: '米开朗基罗',
        year: '1501-1504',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
        description: '米开朗基罗的雕塑杰作，展现了完美的人体比例和英雄气概。这座雕塑不仅体现了文艺复兴时期对人体美的追求，更展现了艺术家对古典雕塑传统的继承与创新。',
        techniques: ['大理石雕刻', '人体解剖', '比例完美', '动态平衡'],
        significance: '文艺复兴雕塑艺术的巅峰之作，重新定义了人体美的标准'
      },
      {
        id: 'sistine-madonna',
        title: '西斯廷圣母',
        artist: '拉斐尔',
        year: '1512-1513',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
        description: '拉斐尔的圣母像杰作，展现了理想化的女性美和母性光辉。这幅画完美体现了拉斐尔对和谐与美的追求，成为后世圣母像的典范。',
        techniques: ['理想化人物', '色彩和谐', '构图平衡', '情感表达'],
        significance: '文艺复兴圣母像的经典之作，展现了理想化的女性美'
      },
      {
        id: 'vitruvian-man',
        title: '维特鲁威人',
        artist: '列奥纳多·达·芬奇',
        year: '1490',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
        description: '达·芬奇的人体比例研究图，展现了完美的人体比例与几何学的结合。这幅画体现了文艺复兴时期对科学与艺术的完美融合。',
        techniques: ['人体解剖', '几何学', '比例研究', '科学绘图'],
        significance: '文艺复兴科学与艺术结合的典型代表，影响了后世的人体研究'
      },
      {
        id: 'pieta',
        title: '圣母怜子像',
        artist: '米开朗基罗',
        year: '1498-1499',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
        description: '米开朗基罗的早期杰作，描绘了圣母怀抱死去的基督。这座雕塑展现了艺术家对情感表达的深刻理解和对宗教题材的崇高处理。',
        techniques: ['大理石雕刻', '情感表达', '宗教题材', '人体解剖'],
        significance: '文艺复兴宗教雕塑的杰作，展现了深刻的宗教情感'
      }
    ],
    similarWorks: [
      {
        id: 'annunciation',
        title: '天使报喜',
        artist: '列奥纳多·达·芬奇',
        year: '1472-1475',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
        description: '达·芬奇的早期杰作，展现了其独特的透视法和光影处理技巧。'
      },
      {
        id: 'birth-of-venus',
        title: '维纳斯的诞生',
        artist: '桑德罗·波提切利',
        year: '1485',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
        description: '波提切利的杰作，展现了早期文艺复兴对古典神话的重新诠释。'
      },
      {
        id: 'primavera',
        title: '春',
        artist: '桑德罗·波提切利',
        year: '1482',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
        description: '波提切利的另一杰作，展现了文艺复兴时期对自然和神话的赞美。'
      },
      {
        id: 'moses',
        title: '摩西像',
        artist: '米开朗基罗',
        year: '1513-1515',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
        description: '米开朗基罗的雕塑杰作，展现了其对人性和神性的深刻理解。'
      },
      {
        id: 'transfiguration',
        title: '变容',
        artist: '拉斐尔',
        year: '1516-1520',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
        description: '拉斐尔的最后杰作，综合了和谐与戏剧性，被视为盛期文艺复兴的终曲。'
      },
      {
        id: 'sistine-madonna',
        title: '西斯廷圣母',
        artist: '拉斐尔',
        year: '1512-1513',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
        description: '拉斐尔的圣母像杰作，展现了理想化的女性美和母性光辉。'
      },
      {
        id: 'lady-with-ermine',
        title: '抱银鼠的女子',
        artist: '列奥纳多·达·芬奇',
        year: '1489-1490',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
        description: '达·芬奇的肖像画杰作，展现了其对人性和动物性的深刻观察。'
      },
      {
        id: 'battle-of-anghiari',
        title: '安吉亚里之战',
        artist: '列奥纳多·达·芬奇',
        year: '1503-1505',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
        description: '达·芬奇的战争题材杰作，展现了其对人性和战争的深刻思考。'
      }
    ],
    timeline: [
      {
        period: '🌱 前奏（1490s）',
        events: [
          '佛罗伦萨与米兰成为艺术创新中心',
          '达·芬奇发展 sfumato（晕涂法），作品《岩间圣母》《最后的晚餐》开启新视觉语言',
          '建筑师布拉曼特在米兰、后入罗马，推动古典风格复兴',
          '波提切利创作《维纳斯的诞生》和《春》，展现早期文艺复兴的优雅',
          '佩鲁吉诺等艺术家为盛期文艺复兴奠定技法基础'
        ],
        significance: '文艺复兴早期（Quattrocento）的探索趋于成熟，为"盛期"奠定基础'
      },
      {
        period: '🌟 佛罗伦萨的高峰（1500–1506）',
        events: [
          '米开朗基罗雕刻《大卫》（1501–04），树立"英雄人体"典范',
          '达·芬奇绘制《蒙娜丽莎》，探索心理与自然的微妙结合',
          '年轻的拉斐尔吸收佛罗伦萨传统，逐渐形成和谐优雅的风格',
          '达·芬奇创作《安吉亚里之战》，展现战争题材的深刻思考',
          '米开朗基罗完成《圣母怜子像》，展现宗教情感的表达'
        ],
        significance: '佛罗伦萨成为盛期文艺复兴的起点，人体表现与心理刻画达到新高度'
      },
      {
        period: '🏛 罗马的艺术中心（1506–1514）',
        events: [
          '教皇尤利乌斯二世大规模资助艺术',
          '米开朗基罗绘制 西斯廷天顶画（1508–12）',
          '拉斐尔创作 《雅典学院》 等"拉斐尔房间"壁画',
          '布拉曼特主持重建圣彼得大教堂',
          '拉斐尔创作《西斯廷圣母》，展现理想化的女性美',
          '达·芬奇移居罗马，继续艺术探索'
        ],
        significance: '罗马取代佛罗伦萨，成为意大利与欧洲的艺术中心。盛期文艺复兴核心特征确立：和谐均衡、古典复兴、空间与人物的完美统一'
      },
      {
        period: '🌠 晚期辉煌与转折（1515–1520）',
        events: [
          '拉斐尔的《变容》（1516–20）综合和谐与戏剧性，被视为盛期的终曲',
          '达·芬奇晚年移居法国，影响跨国艺术发展',
          '1520年拉斐尔逝世，被视为"盛期"的象征性终结',
          '米开朗基罗创作《摩西像》，展现对人性和神性的理解',
          '矫饰主义开始兴起，艺术风格逐渐转向夸张和情感张力'
        ],
        significance: '盛期文艺复兴的理性与和谐走到顶点。艺术逐渐转向 矫饰主义（Mannerism），强调夸张与情感张力'
      },
      {
        period: '🎨 技法革新与科学融合',
        events: [
          '达·芬奇发展晕涂法（sfumato），创造柔和的轮廓过渡',
          '线性透视法的完善，实现三维空间的准确表现',
          '人体解剖学的研究，推动人物造型的精确性',
          '光影效果（chiaroscuro）的运用，增强立体感',
          '色彩理论的探索，实现更自然的色彩表现'
        ],
        significance: '科学方法与艺术创作的完美结合，为后世艺术技法奠定基础'
      },
      {
        period: '🏛 历史意义与影响',
        events: [
          '艺术理想的顶峰：人体、透视、光影和古典精神的结合，确立"理想美"的范式',
          '艺术与权力结合：教廷成为艺术赞助核心，推动罗马成为欧洲艺术首都',
          '奠基未来流派：盛期的完美均衡为矫饰主义与巴洛克的张力与戏剧化铺路',
          '人文主义思想的视觉表达，推动欧洲文化复兴',
          '艺术教育体系的建立，影响后世艺术教育'
        ],
        significance: '盛期文艺复兴代表了人类艺术史上的黄金时代，其影响延续至今'
      }
    ],
    branches: [
      {
        name: '威尼斯画派',
        description: '以色彩和光线为特色的威尼斯艺术传统',
        artists: ['提香', '乔尔乔内', '丁托列托', '韦罗内塞'],
        characteristics: ['色彩丰富', '光线效果', '风景画', '感官享受', '色彩和谐']
      },
      {
        name: '佛罗伦萨画派',
        description: '以线条和构图见长的佛罗伦萨艺术传统',
        artists: ['波提切利', '基兰达约', '韦罗基奥', '吉兰达约'],
        characteristics: ['线性美', '构图严谨', '宗教题材', '人文主义', '理性构图']
      },
      {
        name: '罗马画派',
        description: '以宏伟和庄严为特色的罗马艺术传统',
        artists: ['拉斐尔', '米开朗基罗', '布拉曼特', '佩鲁吉诺'],
        characteristics: ['宏伟庄严', '古典复兴', '宗教题材', '建筑融合', '理想化']
      },
      {
        name: '米兰画派',
        description: '以科学和技法创新为特色的米兰艺术传统',
        artists: ['达·芬奇', '布拉曼特', '卢伊尼', '索拉里'],
        characteristics: ['科学方法', '技法创新', '透视法', '解剖学', '光影效果']
      },
      {
        name: '矫饰主义',
        description: '盛期文艺复兴后期的艺术风格，强调夸张和情感张力',
        artists: ['埃尔·格列柯', '蓬托尔莫', '布龙齐诺', '帕尔米贾尼诺'],
        characteristics: ['夸张比例', '情感张力', '复杂构图', '色彩对比', '戏剧性']
      },
      {
        name: '北方文艺复兴',
        description: '阿尔卑斯山以北的文艺复兴艺术发展',
        artists: ['丢勒', '霍尔拜因', '博斯', '勃鲁盖尔'],
        characteristics: ['细节精细', '现实主义', '风景画', '肖像画', '宗教改革']
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
        url: '/images/Impression-sunrise.jpg',
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
        url: '/images/Les-Demoiselles-d\'Avignon.jpg',
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
        url: '/images/Kui-Hua-Zi.jpg',
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
  waterfallSections: [],
  timeline: [],
  styleBranches: []
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