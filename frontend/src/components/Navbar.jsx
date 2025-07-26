import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Download, Code, Shield, User, Mail } from 'lucide-react';
import { mockFormSubmission } from '../mock/mockData';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about', icon: <User className="h-4 w-4" /> },
    { name: 'Skills', href: '#skills', icon: <Code className="h-4 w-4" /> },
    { name: 'Projects', href: '#projects', icon: <Shield className="h-4 w-4" /> },
    { name: 'Experience', href: '#experience', icon: <User className="h-4 w-4" /> },
    { name: 'Certifications', href: '#certifications', icon: <Shield className="h-4 w-4" /> },
    { name: 'Contact', href: '#contact', icon: <Mail className="h-4 w-4" /> }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleResumeClick = () => {
    mockFormSubmission.downloadResume();
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-sm border-b border-purple-500/30' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-purple-500 to-cyan-500 p-2 rounded-lg">
              <Code className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white font-mono">
              Zaid<span className="text-cyan-400">.dev</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-gray-300 hover:text-cyan-400 font-mono text-sm transition-colors duration-300 flex items-center space-x-1 cursor-pointer"
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            ))}
          </div>

          {/* Resume Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button 
              onClick={handleResumeClick}
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-mono text-sm px-4 py-2 transition-all duration-300 transform hover:scale-105"
            >
              <Download className="h-4 w-4 mr-2" />
              Resume
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-cyan-400 transition-colors duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-purple-500/30">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-gray-300 hover:text-cyan-400 font-mono block px-3 py-2 text-base transition-colors duration-300 flex items-center space-x-2 cursor-pointer"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Glitch Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 animate-pulse"></div>
      </div>
    </nav>
  );
};

export default Navbar;