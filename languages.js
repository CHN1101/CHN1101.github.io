/**
 * 网站多语言数据
 * 所有需要翻译的文本内容均保存在此文件中
 * 
 * 使用方法：
 * 1. 在HTML元素上添加 data-lang-key 属性，值为对应的语言键
 * 2. 在此文件中为每个语言键添加中英文翻译
 * 3. 新增内容时，只需在此文件中添加新的语言键和对应翻译
 */

// 语言数据对象
const langData = {
    'zh': {
        // 导航链接
        'about': '关于',
        'education': '教育经历',
        
        // 关于页面
        'aboutTitle': '关于',
        'greeting': '您好，我是程昊楠，这是我的个人信息介绍网页。',
        'skill1': '使用Office、Adobe、Notion等生产力程序进行办公、使用LaTex进行写作',
        'skill2': '基于GIS程序和云平台（如ArcMap与GEE）进行地理数据分析以及制作高质量地图',
        'skill3': '使用R、Python等编程语言进行科学研究相关的数据处理与分析（包括机器学习、深度学习等）、数据可视化、工作自动化等各类工作',
        'skill4': '如今，在以GPT、Claude、DeepSeek、Grok、Gemini等为代表的LLM及衍生的多模态AI模型和工具的帮助下，我可以释放更多生产力，实现更多工作技术需求',
        'updated': '⭐以上信息于2025年3月更新。',
        
        // 教育经历页面
        'educationTitle': '教育经历',
        'university1': '中国地质大学（武汉）',
        'degree1': '工学学士',
        'university2': '中国地质大学（武汉）',
        'degree2': '管理学硕士',
        'university3': '中国科学院 地理科学与资源研究所',
        'degree3': '访问学生（自然地理）',
        
        // 水印
        'watermark': 'The background photo was taken by CHN at Daikichiyama Observation Deck, Uji city.'
    },
    'en': {
        // 导航链接
        'about': 'About',
        'education': 'Education',
        
        // 关于页面
        'aboutTitle': 'About',
        'greeting': 'Hello, I am Haonan Cheng, and this is my personal introduction webpage.',
        'skills': 'With a background in science and engineering, I have acquired the following professional skills during my higher education:',
        'skill1': 'Using productivity software like Office, Adobe, Notion for work, and LaTex for writing',
        'skill2': 'Performing geographic data analysis and creating high-quality maps using GIS programs and cloud platforms (such as ArcMap and GEE)',
        'skill3': 'Using programming languages such as R and Python for scientific research-related data processing and analysis (including machine learning, deep learning, etc.), data visualization, work automation, and various other tasks',
        'skill4': 'Today, with the help of LLMs like GPT, Claude, DeepSeek, Grok, and Gemini, I can unleash more productivity and meet more technical work requirements',
        'updated': '⭐Information updated in April 2025. (English Ver.) <br> 🙂The English version may be a little bit briefer than the Chinese version. This is due to the different maintenance frequencies of the two language versions. Thank you for your understanding.',
        
        // 教育经历页面
        'educationTitle': 'Education',
        'university1': 'China University of Geosciences (Wuhan)',
        'degree1': 'Bachelor of Engineering',
        'university2': 'China University of Geosciences (Wuhan)',
        'degree2': 'Master of Management',
        'university3': 'Institute of Geographic Sciences and Natural Resources Research, Chinese Academy of Sciences',
        'degree3': 'Visiting Student (Physical Geography)',
        
        // 水印
        'watermark': 'The background photo was taken by CHN at Daikichiyama Observation Deck, Uji city.'
    }
};