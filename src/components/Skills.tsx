
import React from 'react';
import { Code, Javascript, Css } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={32} />,
      skills: ["C++", "Python", "SQL", "CSS", "JavaScript"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Technologies & Tools",
      icon: <Javascript size={32} />,
      skills: ["MS Visual Studio Code", "Github", "MS Office 365", "Web Development"],
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Tools and technologies I work with</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 shadow-xl"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg`}>
                {category.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-6">{category.title}</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="bg-white px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                  >
                    <span className="text-gray-700 font-medium">{skill}</span>
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
