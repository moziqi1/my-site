const PersonalInfo = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">关于我</h2>
        <div className="bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">个人信息</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="font-medium text-gray-700 w-24">姓名：</span>
                  <span className="text-gray-600">梓祺</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium text-gray-700 w-24">学院：</span>
                  <span className="text-gray-600">广东科学技术职业学院</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium text-gray-700 w-24">专业：</span>
                  <span className="text-gray-600">商务数据分析与应用</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium text-gray-700 w-24">年级：</span>
                  <span className="text-gray-600">2023级</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">专业技能</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="font-medium text-gray-700 w-24">编程语言：</span>
                  <span className="text-gray-600">Python, SQL</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium text-gray-700 w-24">数据分析：</span>
                  <span className="text-gray-600">Pandas, NumPy, Matplotlib</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium text-gray-700 w-24">数据可视化：</span>
                  <span className="text-gray-600">Tableau, Power BI</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium text-gray-700 w-24">数据库：</span>
                  <span className="text-gray-600">MySQL, PostgreSQL</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4 text-gray-800">个人简介</h3>
            <p className="text-gray-600 leading-relaxed">
              我是一名商务数据分析与应用专业的学生，对数据科学和商业分析充满热情。
              我热爱学习新技能，并且善于将理论知识应用到实际项目中。
              在校期间，我学习了Python编程、数据分析、数据采集与处理、供应链数据分析和数据库原理等课程，
              希望能够将所学知识应用到实际工作中，为企业的决策提供数据支持。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;
