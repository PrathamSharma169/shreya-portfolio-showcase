
import React from 'react';
import { Mail, Github, Linkedin, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      info: "shreyachaturved@gmail.com",
      href: "mailto:shreyachaturved@gmail.com",
      color: "from-blue-500 to-cyan-500",
      delay: "0"
    },
    {
      icon: Github,
      title: "GitHub",
      info: "View my projects",
      href: "https://github.com/Shreya-og",
      color: "from-gray-600 to-gray-800",
      delay: "200"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      info: "Professional network",
      href: "https://www.linkedin.com/in/shreya-chaturvedi-96b437258",
      color: "from-blue-600 to-blue-800",
      delay: "400"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Let's Connect
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 mx-auto mb-6 rounded-full animate-pulse"></div>
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and exciting projects. 
            Let's create something amazing together!
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <a 
              key={index}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-4"
              style={{ animationDelay: `${method.delay}ms` }}
            >
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className={`relative w-20 h-20 bg-gradient-to-r ${method.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl transform group-hover:rotate-12 transition-transform duration-300`}>
                <method.icon size={32} className="text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                {method.title}
              </h3>
              <p className="text-gray-300 font-light group-hover:text-gray-200 transition-colors duration-300">
                {method.info}
              </p>
            </a>
          ))}
        </div>
        
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl shadow-xl">
                <Phone size={32} className="text-white" />
              </div>
              <div className="text-left">
                <p className="text-gray-400 text-sm font-semibold uppercase tracking-wide">Phone</p>
                <p className="text-white text-xl font-bold">+91 9827991742</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-xl">
                <MapPin size={32} className="text-white" />
              </div>
              <div className="text-left">
                <p className="text-gray-400 text-sm font-semibold uppercase tracking-wide">Location</p>
                <p className="text-white text-xl font-bold">Gwalior, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
