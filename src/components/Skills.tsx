
import React from 'react';
import { Code, Terminal, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={32} />,
      skills: ["C++", "Python", "SQL", "CSS", "JavaScript"],
      color: "from-purple-500 via-blue-500 to-cyan-500",
      delay: "0"
    },
    {
      title: "Technologies & Tools",
      icon: <Terminal size={32} />,
      skills: ["MS Visual Studio Code", "Github", "MS Office 365", "Web Development"],
      color: "from-pink-500 via-red-500 to-orange-500",
      delay: "200"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Technologies
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 mx-auto mb-6 rounded-full animate-pulse"></div>
          <p className="text-xl text-gray-300 font-light">Tools and technologies I work with</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              style={{
                animationDelay: `${category.delay}ms`
              }}
            >
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className={`relative w-20 h-20 bg-gradient-to-r ${category.color} rounded-3xl flex items-center justify-center mb-8 text-white shadow-2xl transform group-hover:rotate-12 transition-transform duration-300`}>
                {category.icon}
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-8 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="relative bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:bg-white/20 group/skill"
                    style={{
                      animationDelay: `${parseInt(category.delay) + skillIndex * 100}ms`
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative text-gray-200 font-medium group-hover/skill:text-white transition-colors duration-300">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
