import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          梓祺的个人页面
        </Link>
        <div className="flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
            首页
          </Link>
          <Link to="#courses" className="text-gray-700 hover:text-blue-600 transition-colors">
            课程
          </Link>
          <Link to="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
            关于我
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
