
import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="text-center z-10 max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Shreya Chaturvedi
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-2">Computer Science Student</p>
          <p className="text-lg text-gray-500 mb-6">Gwalior, India</p>
        </div>
        
        <div className="mb-8 max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            I am a highly motivated Computer Science student with a strong academic record and skilled in 
            problem-solving, software development and data analysis. Passionate to learn and develop, 
            I am eager to apply my expertise to innovative and impactful projects.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
          <a 
            href="mailto:shreyachaturved@gmail.com" 
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Mail size={20} />
            Get In Touch
          </a>
          <div className="flex items-center gap-4">
            <a 
              href="mailto:shreyachaturved@gmail.com"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all text-gray-600 hover:text-blue-600"
            >
              <Mail size={24} />
            </a>
            <a 
              href="#"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all text-gray-600 hover:text-blue-600"
            >
              <Github size={24} />
            </a>
            <a 
              href="#"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all text-gray-600 hover:text-blue-600"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
        
        <div className="text-gray-600">
          <p className="mb-2">📧 shreyachaturved@gmail.com</p>
          <p>📱 +91 9827991742</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
