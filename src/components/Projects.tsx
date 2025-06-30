
import React from 'react';
import { Code, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Mini KBC Game",
      description: "Developed an engaging game based on the popular TV show, 'Kaun Banega Crorepati'.",
      tools: ["Python"],
      color: "from-green-400 to-blue-500"
    },
    {
      title: "FP Growth Algorithm",
      description: "Developed a GUI application that simplifies the process of discovering frequent patterns in transactional datasets.",
      tools: ["Python", "Tkinter"],
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Tic-Tac-Toe Game",
      description: "Built a GUI-based Tic-Tac-Toe game for two players.",
      tools: ["Python", "Tkinter"],
      color: "from-orange-400 to-red-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Here are some of my recent projects</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                <Code size={32} className="text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{project.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">Tools Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, toolIndex) => (
                    <span 
                      key={toolIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-sm font-medium">
                  <Github size={16} />
                  View Code
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
