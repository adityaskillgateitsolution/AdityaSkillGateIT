
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Check, Globe, CheckCircle2, ArrowRight } from 'lucide-react';
import { COURSES } from '../constants';

const Courses: React.FC = () => {
  const navigate = useNavigate();
  const categories = ['Web Development', 'Digital Marketing', 'UI/UX Designing'];

  return (
    <div className="pt-20 pb-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Expert-Led Tech Courses</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">Pick a domain that excites you and start your journey towards expertise.</p>
        </div>

        {/* Why Choosing Our Courses */}
        <section className="mb-24 bg-gradient-to-r from-blue-600 to-green-500 rounded-[2.5rem] p-8 md:p-16 text-white overflow-hidden relative shadow-2xl shadow-blue-500/30">
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">Why Choosing Our Courses?</h2>
              <ul className="space-y-4">
                {[
                  'Curriculum updated every quarter to match industry trends',
                  'Live doubt clearing sessions with top industry mentors',
                  'Access to 50+ recorded video modules for lifetime',
                  'Industry-recognized certifications upon completion',
                  'Hands-on projects with real client case studies'
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 bg-white/20 p-1 rounded-full shadow-inner"><Check size={16} /></div>
                    <span className="text-blue-50 font-medium">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
              <Globe className="w-20 h-20 mb-6 opacity-40 animate-pulse" />
              <p className="text-2xl font-light italic leading-relaxed">
                "Our courses are designed to transition you from zero knowledge to a ready-to-hire developer within 16-24 weeks."
              </p>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
        </section>



        {/* Grouped Courses */}
        {categories.map((category) => (
          <div key={category} className="mb-16 last:mb-0">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{category}</h2>
              <div className="h-[2px] flex-grow bg-slate-100 dark:bg-slate-800 rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {COURSES.filter(c => c.category === category).map((course) => (
                <div key={course.id} className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-3xl overflow-hidden shadow-lg shadow-slate-200/60 dark:shadow-none border border-slate-100 dark:border-slate-700 flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  <div className="relative h-56 overflow-hidden group">
                    <img src={course.image} alt={course.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 py-1.5 px-4 bg-white/95 rounded-full text-[10px] font-black tracking-widest uppercase text-blue-600 shadow-md backdrop-blur-sm">
                      {course.category}
                    </div>
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-3">{course.name}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed line-clamp-2">{course.description}</p>

                    <div className="mb-8 flex flex-wrap gap-2">
                      {course.technologies.map((tech) => (
                        <span key={tech} className="text-[9px] font-black px-2.5 py-1 bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300 rounded-lg uppercase tracking-wider">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mb-6 flex items-center gap-3">
                      <span className="text-sm text-slate-400 font-medium line-through">
                        ₹{course.originalPrice.toLocaleString()}
                      </span>
                      <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        ₹{course.offeredPrice.toLocaleString()}
                      </span>
                      <span className="text-xs font-bold text-green-500 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full">
                        {Math.round(((course.originalPrice - course.offeredPrice) / course.originalPrice) * 100)}% OFF
                      </span>
                    </div>

                    <div className="mt-auto">
                      <button
                        onClick={() => {
                          const subject = `Enrollment Inquiry: ${course.name}`;
                          const message = `Hello Aditya Skill Gate, I'm interested in enrolling for the ${course.name} course (${course.category}). The offered price is ₹${course.offeredPrice.toLocaleString()}. Please let me know the batch start dates and enrollment process.`;
                          navigate('/contact', { state: { subject, message, scrollToForm: true } });
                        }}
                        className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-blue-500/30 hover:shadow-blue-600/50 transition-all"
                      >
                        Enroll Now <ShoppingCart size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* SECTION 4: OUR PREVIOUS BATCHES */}
        <section className="py-24 bg-slate-50 dark:bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="inline-block py-2 px-4 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full text-xs font-black uppercase tracking-widest mb-4">
                Student Success Stories
              </span>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Our Previous Batches</h2>
              <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full mb-8" />
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Meet the talented individuals who transformed their careers through our comprehensive internship programs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Ananthi",
                  role: "Full Stack Developer",
                  company: "Intern at TechFlow",
                  image: "/img/woman.png"
                },
                {
                  name: "Rajeswari",
                  role: "UI/UX Designer",
                  company: "Intern at CreativeMinds",
                  image: "/img/woman.png"
                },
                {
                  name: "Kanchana devi",
                  role: "UI/UX Designer",
                  company: "Intern at CreativeMinds",
                  image: "/img/woman.png"
                },
                {
                  name: "Maha Priya",
                  role: "Data Scientist",
                  company: "Intern at DataCorp",
                  image: "/img/woman.png"
                },
                {
                  name: "RVijaya Ananthi",
                  role: "Full Stack Developer",
                  company: "Intern at TechFlow",
                  image: "/img/woman.png"
                },
                {
                  name: "Bavani",
                  role: "UI/UX Designer",
                  company: "Intern at CreativeMinds",
                  image: "/img/woman.png"
                },
                {
                  name: "Santhiya",
                  role: "UI/UX Designer",
                  company: "Intern at CreativeMinds",
                  image: "/img/woman.png"
                },
                {
                  name: "Sivarathi",
                  role: "Data Scientist",
                  company: "Intern at DataCorp",
                  image: "/img/woman.png"
                },
                {
                  name: "Shameema",
                  role: "Data Scientist",
                  company: "Intern at DataCorp",
                  image: "/img/woman.png"
                },
                {
                  name: "Jeeva malar",
                  role: "Data Scientist",
                  company: "Intern at DataCorp",
                  image: "/img/woman.png"
                },
                {
                  name: "Priyanka",
                  role: "Data Scientist",
                  company: "Intern at DataCorp",
                  image: "/img/woman.png"
                },
                {
                  name: "Priyanka",
                  role: "Data Scientist",
                  company: "Intern at DataCorp",
                  image: "/img/woman.png"
                },
                {
                  name: "Dhana Shri",
                  role: "Data Scientist",
                  company: "Intern at DataCorp",
                  image: "/img/woman.png"
                },
                {
                  name: "Efciba",
                  role: "Digital Marketer",
                  company: "Intern at BrandBoost",
                  image: "/img/woman.png"
                }
              ].map((student, index) => (
                <div key={index} className="group relative bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-blue-600/0 transition-all z-10" />
                    <img
                      src={student.image}
                      alt={student.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 relative z-20 bg-white dark:bg-slate-800">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{student.name}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-2">{student.role}</p>
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs">
                      <CheckCircle2 size={14} className="text-green-500" />
                      <span>{student.company}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <button
                onClick={() => {
                  const subject = "Next Batch Inquiry";
                  const message = "Hello Aditya Skill Gate, I'm interested in joining your next batch for IT training. Please provide more details about the upcoming schedule and courses.";
                  navigate('/contact', { state: { subject, message, scrollToForm: true } });
                }}
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold hover:gap-4 transition-all"
              >
                Join our next batch <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Courses;
