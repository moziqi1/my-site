const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24 pt-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">你好，我是梓祺</h1>
            <p className="text-xl md:text-2xl mb-6">广东科学技术职业学院</p>
            <p className="text-lg md:text-xl mb-8">商学院 | 商务数据分析与应用专业</p>
            <div className="flex space-x-4">
              <a href="#courses" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                查看我的课程
              </a>
              <a href="#about" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
                了解更多
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center shadow-lg">
              <div className="text-blue-600 text-7xl font-bold">梓祺</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
