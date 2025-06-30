
import React from 'react';
import { Book, User } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="flex items-start gap-6">
            <div className="p-4 bg-blue-600 rounded-2xl text-white shadow-lg">
              <Book size={32} />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                B.Tech in Computer Science
              </h3>
              <p className="text-xl text-blue-600 font-semibold mb-2">
                Madhav Institute of Technology & Science, Gwalior
              </p>
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full font-semibold">
                  CGPA: 8.6/10.0
                </span>
                <span className="text-gray-600 font-medium">Nov 2022 – July 2026</span>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-700 mb-3">Relevant Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'C++', 'Data Structures and Algorithms', 'Python', 'Computer Networks', 
                    'DAA', 'Operating System', 'Data Science'
                  ].map((course, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm shadow-sm border border-gray-200"
                    >
                      {course}
                    </span>
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
