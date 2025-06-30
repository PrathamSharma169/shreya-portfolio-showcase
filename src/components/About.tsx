
import React from 'react';
import { Book, GraduationCap, Award, Calendar } from 'lucide-react';

const About = () => {
  const courses = [
    'C++', 'Data Structures and Algorithms', 'Python', 'Computer Networks', 
    'DAA', 'Operating System', 'Data Science'
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Education
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto rounded-full animate-pulse"></div>
        </div>
        
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 hover:border-white/40 transition-all duration-500 group">
          {/* Glowing effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative flex flex-col lg:flex-row items-start gap-8">
            <div className="flex-shrink-0">
              <div className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl text-white shadow-2xl transform group-hover:rotate-6 transition-transform duration-300">
                <GraduationCap size={48} />
              </div>
            </div>
            
            <div className="flex-1 space-y-6">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  B.Tech in Computer Science
                </h3>
                <p className="text-xl text-blue-300 font-semibold mb-4 flex items-center gap-2">
                  <Book size={20} />
                  Madhav Institute of Technology & Science, Gwalior
                </p>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-full border border-green-400/30">
                  <Award className="text-green-400" size={20} />
                  <span className="text-green-300 font-bold text-lg">CGPA: 8.6/10.0</span>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-blue-400/30">
                  <Calendar className="text-blue-400" size={20} />
                  <span className="text-blue-300 font-semibold">Nov 2022 – July 2026</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-purple-400 mb-6 flex items-center gap-2">
                  <span className="text-2xl">🎓</span>
                  Relevant Coursework
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {courses.map((course, index) => (
                    <div 
                      key={index}
                      className="group/course relative px-4 py-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:bg-white/20"
                      style={{
                        animationDelay: `${index * 100}ms`
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover/course:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative text-gray-300 font-medium text-sm group-hover/course:text-white transition-colors duration-300">
                        {course}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
