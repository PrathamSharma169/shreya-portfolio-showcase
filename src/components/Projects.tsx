
import React from 'react';
import { Code, Github, ExternalLink, Zap, GamepadIcon, BarChart3 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Mini KBC Game",
      description: "Developed an engaging game based on the popular TV show, 'Kaun Banega Crorepati'.",
      tools: ["Python"],
      color: "from-green-400 via-emerald-500 to-teal-500",
      icon: <GamepadIcon size={32} />,
      delay: "0"
    },
    {
      title: "FP Growth Algorithm",
      description: "Developed a GUI application that simplifies the process of discovering frequent patterns in transactional datasets.",
      tools: ["Python", "Tkinter"],
      color: "from-purple-400 via-violet-500 to-indigo-500",
      icon: <BarChart3 size={32} />,
      delay: "200"
    },
    {
      title: "Tic-Tac-Toe Game",
      description: "Built a GUI-based Tic-Tac-Toe game for two players.",
      tools: ["Python", "Tkinter"],
      color: "from-orange-400 via-red-500 to-pink-500",
      icon: <Zap size={32} />,
      delay: "400"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-800 via-gray-900 to-slate-800 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 mx-auto mb-6 rounded-full animate-pulse"></div>
          <p className="text-xl text-gray-300 font-light">Here are some of my recent projects</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:-translate-y-4"
              style={{
                animationDelay: `${project.delay}ms`
              }}
            >
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Project icon */}
              <div className={`relative w-20 h-20 bg-gradient-to-r ${project.color} rounded-3xl flex items-center justify-center mb-8 text-white shadow-2xl transform group-hover:rotate-12 transition-transform duration-300`}>
                {project.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                {project.title}
              </h3>
              
              <p className="text-gray-300 mb-8 leading-relaxed font-light group-hover:text-gray-200 transition-colors duration-300">
                {project.description}
              </p>
              
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-purple-400 mb-4 uppercase tracking-wide">Tools Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, toolIndex) => (
                    <span 
                      key={toolIndex}
                      className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                <button className="group/btn relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-sm shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  <Github size={16} className="relative z-10" />
                  <span className="relative z-10">View Code</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
