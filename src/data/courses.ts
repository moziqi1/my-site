export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  semester: string;
  instructor: string;
  objectives?: string[];
  prerequisites?: string[];
  syllabus?: SyllabusModule[];
  learningOutcomes?: string[];
  assessment?: AssessmentItem[];
  resources?: ResourceItem[];
}

export interface SyllabusModule {
  id: string;
  title: string;
  duration: string;
  topics: string[];
  activities?: string[];
}

export interface AssessmentItem {
  name: string;
  weight: string;
  description: string;
}

export interface ResourceItem {
  name: string;
  type: string;
  link?: string;
}

export const courses: Course[] = [
  {
    id: "python-basics",
    title: "Python基础",
    description: "学习Python编程语言的基础知识，包括语法、数据类型、控制结构、函数和模块等。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20programming%20code%20on%20screen%2C%20clean%20modern%20interface&image_size=landscape_16_9",
    semester: "第一学期",
    instructor: "张老师"
  },
  {
    id: "data-analysis",
    title: "数据分析技术",
    description: "本课程系统地介绍数据分析的核心技术与方法，结合商务场景进行实践。学生将掌握数据预处理、探索性数据分析、统计分析、数据可视化及机器学习基础等技能，能够运用Python进行完整的数据分析项目实践。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Data%20analysis%20dashboard%20with%20charts%20and%20graphs&image_size=landscape_16_9",
    semester: "第二学期",
    instructor: "李老师",
    objectives: [
      "掌握数据分析的完整流程和方法论",
      "熟练运用Python进行数据预处理和清洗",
      "掌握探索性数据分析（EDA）的技术与方法",
      "学会使用统计方法进行数据分析与推断",
      "掌握数据可视化的原则与实现技巧",
      "了解机器学习基础并能应用于实际问题",
      "培养数据思维和解决实际业务问题的能力"
    ],
    prerequisites: [
      "Python基础编程能力",
      "数据采集与处理基础",
      "商务数据分析与应用基础",
      "基本的统计学知识"
    ],
    syllabus: [
      {
        id: "module-1",
        title: "数据分析基础与环境搭建",
        duration: "4课时",
        topics: [
          "数据分析概述与职业发展",
          "数据分析完整流程介绍",
          "Anaconda与Jupyter Notebook环境配置",
          "NumPy与Pandas基础回顾"
        ],
        activities: [
          "环境搭建与配置练习",
          "Pandas数据结构操作实战"
        ]
      },
      {
        id: "module-2",
        title: "数据预处理与清洗技术",
        duration: "8课时",
        topics: [
          "数据质量评估与常见问题",
          "缺失值处理方法与实践",
          "异常值检测与处理",
          "数据类型转换与标准化",
          "特征工程基础",
          "数据合并与重塑"
        ],
        activities: [
          "电商数据清洗实战项目",
          "客户数据预处理练习"
        ]
      },
      {
        id: "module-3",
        title: "探索性数据分析（EDA）",
        duration: "8课时",
        topics: [
          "单变量分析方法",
          "双变量与多变量分析",
          "分组分析与透视表",
          "相关性分析与热力图",
          "时间序列数据探索",
          "EDA报告撰写"
        ],
        activities: [
          "销售数据EDA项目",
          "用户行为数据分析练习"
        ]
      },
      {
        id: "module-4",
        title: "统计分析与推断",
        duration: "8课时",
        topics: [
          "描述性统计与概率分布",
          "参数估计与置信区间",
          "假设检验基础（t检验、卡方检验）",
          "方差分析（ANOVA）",
          "相关性与因果性",
          "A/B测试原理与实践"
        ],
        activities: [
          "营销效果统计分析",
          "A/B测试模拟实验"
        ]
      },
      {
        id: "module-5",
        title: "数据可视化技术",
        duration: "8课时",
        topics: [
          "数据可视化原则与最佳实践",
          "Matplotlib与Seaborn进阶",
          "交互式可视化（Plotly）",
          "地理数据可视化",
          "专业图表制作技巧",
          "仪表板设计"
        ],
        activities: [
          "销售数据可视化大屏",
          "交互式数据分析仪表板"
        ]
      },
      {
        id: "module-6",
        title: "机器学习基础应用",
        duration: "8课时",
        topics: [
          "机器学习概述与分类",
          "线性回归与逻辑回归",
          "决策树与随机森林",
          "聚类分析（K-Means）",
          "模型评估与调优",
          "Scikit-learn实战"
        ],
        activities: [
          "客户流失预测模型",
          "客户分群聚类分析"
        ]
      },
      {
        id: "module-7",
        title: "综合项目实战",
        duration: "12课时",
        topics: [
          "商业数据分析项目流程",
          "需求分析与问题定义",
          "数据采集与整合",
          "分析方案设计",
          "报告撰写与成果展示",
          "项目答辩与互评"
        ],
        activities: [
          "完整商业数据分析项目（可选方向：电商、金融、零售等）"
        ]
      }
    ],
    learningOutcomes: [
      "能够独立完成从数据获取到分析报告的完整数据分析流程",
      "熟练使用Pandas、NumPy、Matplotlib、Seaborn等工具进行数据分析",
      "能够运用统计方法对业务问题进行量化分析",
      "具备数据可视化能力，能够制作专业的分析图表和仪表板",
      "能够应用机器学习基础算法解决实际业务预测和分类问题",
      "具备良好的数据思维和商业分析能力",
      "能够撰写规范的数据分析报告并进行有效展示"
    ],
    assessment: [
      {
        name: "平时作业与课堂参与",
        weight: "20%",
        description: "包括课后习题、编程作业、课堂讨论和小组活动"
      },
      {
        name: "模块项目",
        weight: "30%",
        description: "每个模块结束后的小型数据分析项目，共3个"
      },
      {
        name: "期中测试",
        weight: "20%",
        description: "涵盖前4个模块的理论知识和实操技能"
      },
      {
        name: "综合项目",
        weight: "30%",
        description: "期末完整数据分析项目，包括项目报告和答辩"
      }
    ],
    resources: [
      {
        name: "Python for Data Analysis",
        type: "教材",
        link: ""
      },
      {
        name: "利用Python进行数据分析",
        type: "中文教材",
        link: ""
      },
      {
        name: "Pandas官方文档",
        type: "在线资源",
        link: "https://pandas.pydata.org/docs/"
      },
      {
        name: "Kaggle数据集与竞赛",
        type: "实践平台",
        link: "https://www.kaggle.com/"
      },
      {
        name: "课程GitHub仓库",
        type: "代码仓库",
        link: ""
      },
      {
        name: "课堂讲义与示例代码",
        type: "课程资料",
        link: ""
      }
    ]
  },
  {
    id: "data-collection",
    title: "数据采集与处理",
    description: "学习数据采集的方法和工具，包括网络爬虫、API调用、数据存储等。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Web%20scraping%20process%2C%20data%20flow%20diagram&image_size=landscape_16_9",
    semester: "第二学期",
    instructor: "王老师"
  },
  {
    id: "supply-chain-analysis",
    title: "供应链数据分析",
    description: "学习供应链管理中的数据分析方法，包括需求预测、库存优化、物流分析等。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Supply%20chain%20management%20dashboard%2C%20logistics%20flow&image_size=landscape_16_9",
    semester: "第三学期",
    instructor: "刘老师"
  },
  {
    id: "database-principles",
    title: "数据库原理与应用",
    description: "学习数据库的基本原理和应用，包括SQL语句、数据库设计、数据管理等。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Database%20schema%20diagram%2C%20SQL%20queries&image_size=landscape_16_9",
    semester: "第三学期",
    instructor: "陈老师"
  }
];
