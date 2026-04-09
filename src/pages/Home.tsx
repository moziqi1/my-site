import Hero from '../components/Hero';
import CourseCard from '../components/CourseCard';
import PersonalInfo from '../components/PersonalInfo';
import { courses } from '../data/courses';

const Home = () => {
  return (
    <div>
      <Hero />
      <section id="courses" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">我的课程</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>
      <PersonalInfo />
    </div>
  );
};

export default Home;
