
import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Connect</h2>
        <p className="text-xl text-blue-100 mb-12">
          I'm always open to discussing new opportunities and exciting projects
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <a 
            href="mailto:shreyachaturved@gmail.com"
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/20 transition-all transform hover:-translate-y-2 border border-white/20"
          >
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Mail size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
            <p className="text-blue-100">shreyachaturved@gmail.com</p>
          </a>
          
          <a 
            href="#"
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/20 transition-all transform hover:-translate-y-2 border border-white/20"
          >
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Github size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">GitHub</h3>
            <p className="text-blue-100">View my projects</p>
          </a>
          
          <a 
            href="#"
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/20 transition-all transform hover:-translate-y-2 border border-white/20"
          >
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Linkedin size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">LinkedIn</h3>
            <p className="text-blue-100">Professional network</p>
          </a>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
          <p className="text-white text-lg mb-4">📱 Phone: +91 9827991742</p>
          <p className="text-white text-lg">📍 Location: Gwalior, India</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
