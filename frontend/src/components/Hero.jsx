import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Download, Mail, Github, Linkedin, Phone } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Hero = () => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const texts = [
    "Hi, I'm Mohammed Zaid Ali",
    "Cybersecurity Intern | EdTech Founder | MERN Developer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex < texts.length) {
      const currentText = texts[currentIndex];
      if (text.length < currentText.length) {
        const timeout = setTimeout(() => {
          setText(currentText.slice(0, text.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentIndex(prev => prev + 1);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    }
  }, [text, currentIndex, texts]);

  const handleResumeClick = () => {
    // Download resume from backend
    window.open(`${API}/resume`, '_blank');
  };

  const handleContactClick = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Cyberpunk Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTc1MzU0NjYwNnww&ixlib=rb-4.1.0&q=85')`
        }}
      />
      
      {/* Glitch Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Animated Text */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-mono">
              {currentIndex === 0 ? (
                <>
                  {text}
                  <span className={`text-cyan-400 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
                </>
              ) : (
                texts[0]
              )}
            </h1>
            {currentIndex >= 1 && (
              <p className="text-xl md:text-2xl text-purple-300 font-mono">
                {currentIndex === 1 ? (
                  <>
                    {text}
                    <span className={`text-cyan-400 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
                  </>
                ) : (
                  texts[1]
                )}
              </p>
            )}
          </div>

          {/* Open to Work Badge */}
          <div className="mb-6">
            <div className="inline-flex items-center bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/50 rounded-full px-6 py-3 backdrop-blur-sm">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-green-400 font-mono font-bold">
                🚀 Open to Work - Internships from Jan 2026 (up to 6 months)
              </span>
            </div>
          </div>

          {/* Glitch Effect Text */}
          <div className="mb-8 relative">
            <div className="text-cyan-400 text-lg md:text-xl font-mono animate-pulse floating">
              &gt; Securing_the_digital_world.exe
            </div>
            <div className="text-purple-400 text-lg md:text-xl font-mono animate-pulse delay-500 floating">
              &gt; Building_scalable_applications.run
            </div>
            <div className="text-green-400 text-lg md:text-xl font-mono animate-pulse delay-1000 floating">
              &gt; Innovating_with_AI_tools.init
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={handleResumeClick}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-mono border border-purple-500 hover:border-purple-400 transition-all duration-300 transform hover:scale-105 hover-glow"
            >
              <Download className="mr-2 h-5 w-5" />
              Check My Resume
            </Button>
            <Button 
              onClick={handleContactClick}
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-3 rounded-lg font-mono transition-all duration-300 transform hover:scale-105 hover-glow"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/zaid-ali789"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/mohammed-zaid-ali-b82467268"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:zaid789209@gmail.com"
              className="text-white hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
            <a
              href="tel:+919164624616"
              className="text-white hover:text-green-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Phone size={24} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
            <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center backdrop-blur-sm bg-black/30">
              <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;