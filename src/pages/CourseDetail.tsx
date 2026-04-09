import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courses';

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const course = courses.find(c => c.id === id);

  if (!course) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">课程不存在</h2>
          <p className="text-gray-600 mb-8">抱歉，您访问的课程不存在。</p>
          <Link to="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            返回首页
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-blue-600 font-medium mb-6">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          返回首页
        </Link>
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="h-64 overflow-hidden">
            <img 
              src={course.image} 
              alt={course.title} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                {course.semester}
              </span>
              <span className="text-sm text-gray-500">{course.instructor}</span>
            </div>
            <h1 className="text-3xl font-bold mb-4 text-gray-800">{course.title}</h1>
            <p className="text-gray-600 mb-8">{course.description}</p>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">课程内容</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-600 mb-4">
                  本课程主要涵盖以下内容：
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>课程基础概念和理论</li>
                  <li>实践操作和案例分析</li>
                  <li>项目实战和技能应用</li>
                  <li>考试和评估方式</li>
                </ul>
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">学习成果</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-600 mb-4">
                  通过本课程的学习，学生将能够：
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>掌握课程核心概念和技能</li>
                  <li>能够独立完成相关项目和任务</li>
                  <li>具备解决实际问题的能力</li>
                  <li>为后续课程学习打下基础</li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">参考资料</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>课程教材和讲义</li>
                  <li>在线学习资源和视频</li>
                  <li>相关学术论文和案例</li>
                  <li>实践项目和作业</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
