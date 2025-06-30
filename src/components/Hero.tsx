
import React from 'react';
import { Mail, Github, Linkedin, Download, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <Sparkles className="text-purple-400/40 w-4 h-4" />
          </div>
        ))}
      </div>
      
      <div className="text-center z-10 max-w-5xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <div className="inline-block mb-6 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-full border border-white/20">
            <span className="text-purple-300 font-medium">👋 Welcome to my portfolio</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6 animate-pulse">
            Shreya Chaturvedi
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-full border border-white/20">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xl md:text-2xl text-white font-semibold">Computer Science Student</span>
            </div>
          </div>
          
          <p className="text-lg text-purple-200 mb-2 flex items-center justify-center gap-2">
            <span className="text-2xl">📍</span> Gwalior, India
          </p>
        </div>
        
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light">
              I am a highly motivated Computer Science student with a strong academic record and skilled in 
              <span className="text-purple-400 font-semibold"> problem-solving</span>, 
              <span className="text-pink-400 font-semibold"> software development</span> and 
              <span className="text-cyan-400 font-semibold"> data analysis</span>. 
              Passionate to learn and develop, I am eager to apply my expertise to innovative and impactful projects.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <a 
            href="mailto:shreyachaturved@gmail.com" 
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center gap-3">
              <Mail size={24} />
              Get In Touch
            </div>
          </a>
          
          <div className="flex items-center gap-4">
            {[
              { icon: Mail, href: "mailto:shreyachaturved@gmail.com", color: "from-blue-500 to-purple-500" },
              { icon: Github, href: "#", color: "from-gray-600 to-gray-800" },
              { icon: Linkedin, href: "#", color: "from-blue-600 to-blue-800" }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.href}
                className={`group relative p-4 bg-gradient-to-r ${social.color} rounded-full shadow-2xl hover:shadow-xl transform hover:scale-110 hover:-translate-y-2 transition-all duration-300`}
              >
                <div className="absolute inset-0 bg-white/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <social.icon size={24} className="text-white relative z-10" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-white">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="font-semibold">shreyachaturved@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full">
                <span className="text-2xl">📱</span>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <p className="font-semibold">+91 9827991742</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
