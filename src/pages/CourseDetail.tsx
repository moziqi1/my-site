import { useParams, Link } from 'react-router-dom';
import { courses, Course, SyllabusModule } from '../data/courses';

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
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <Link to="/" className="inline-flex items-center text-blue-600 font-medium mb-6">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          返回首页
        </Link>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="h-64 overflow-hidden">
            <img 
              src={course.image} 
              alt={course.title} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8">
            <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {course.semester}
                </span>
                <span className="text-sm text-gray-500">授课教师：{course.instructor}</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{course.title}</h1>
            <p className="text-lg text-gray-600 leading-relaxed">{course.description}</p>
          </div>
        </div>

        {course.prerequisites && course.prerequisites.length > 0 && (
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
              <svg className="w-6 h-6 mr-2 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              前置课程
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {course.prerequisites.map((prereq, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-amber-500 mr-2 mt-1">•</span>
                  <span className="text-gray-600">{prereq}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {course.objectives && course.objectives.length > 0 && (
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
              <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              课程目标
            </h2>
            <ul className="space-y-3">
              {course.objectives.map((objective, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span className="text-gray-600">{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {course.syllabus && course.syllabus.length > 0 && (
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
              <svg className="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              课程大纲
            </h2>
            <div className="space-y-6">
              {course.syllabus.map((module: SyllabusModule) => (
                <div key={module.id} className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
                  <div className="flex flex-wrap justify-between items-start mb-4 gap-3">
                    <h3 className="text-xl font-bold text-gray-800">{module.title}</h3>
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {module.duration}
                    </span>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">学习内容：</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {module.topics.map((topic, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          <span className="text-gray-600">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {module.activities && module.activities.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">实践活动：</h4>
                      <ul className="space-y-1">
                        {module.activities.map((activity, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-500 mr-2 mt-1">✓</span>
                            <span className="text-gray-600">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {course.learningOutcomes && course.learningOutcomes.length > 0 && (
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
              <svg className="w-6 h-6 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              学习成果
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {course.learningOutcomes.map((outcome, index) => (
                <div key={index} className="bg-purple-50 rounded-lg p-4">
                  <div className="flex items-start">
                    <span className="text-purple-500 mr-3 mt-1">⭐</span>
                    <span className="text-gray-700">{outcome}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {course.assessment && course.assessment.length > 0 && (
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
              <svg className="w-6 h-6 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              考核方式
            </h2>
            <div className="space-y-4">
              {course.assessment.map((item, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">{item.name}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <div className="ml-4">
                    <span className="text-2xl font-bold text-orange-500">{item.weight}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {course.resources && course.resources.length > 0 && (
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
              <svg className="w-6 h-6 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              参考资源
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {course.resources.map((resource, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-indigo-300 transition-colors">
                  <div className="flex items-start">
                    <span className="text-indigo-500 mr-3 mt-1">📚</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">{resource.name}</h4>
                      <p className="text-sm text-gray-500">{resource.type}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetail;
