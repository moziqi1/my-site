export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  semester: string;
  instructor: string;
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
    description: "学习数据分析的基本方法和工具，包括数据清洗、数据可视化、统计分析等。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Data%20analysis%20dashboard%20with%20charts%20and%20graphs&image_size=landscape_16_9",
    semester: "第二学期",
    instructor: "李老师"
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
