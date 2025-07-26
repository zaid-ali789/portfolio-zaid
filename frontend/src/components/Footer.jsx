import React from 'react';
import { Github, Linkedin, Mail, Phone, Code, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/zaid-ali789",
      label: "GitHub",
      color: "hover:text-purple-400"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/mohammed-zaid-ali-b82467268",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:zaid789209@gmail.com",
      label: "Email",
      color: "hover:text-cyan-400"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      href: "tel:+919164624616",
      label: "Phone",
      color: "hover:text-green-400"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black border-t border-purple-500/30">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-gradient-to-r from-purple-500 to-cyan-500 p-1">
                  <img 
                    src="/assets/za-logo.png" 
                    alt="ZA Logo" 
                    className="w-full h-full object-contain bg-black rounded-md"
                  />
                </div>
                <span className="text-2xl font-bold text-white font-mono">Mohammed Zaid Ali</span>
              </div>
              <p className="text-gray-400 font-mono text-sm leading-relaxed">
                Cybersecurity enthusiast and full-stack developer passionate about building secure, scalable applications and mentoring the next generation of developers.
              </p>
              <div className="bg-black/50 border border-cyan-500/30 rounded p-3 font-mono text-xs">
                <div className="text-cyan-400">
                  &gt; status.current → <span className="text-green-400">OPEN_FOR_INTERNSHIPS_JAN_2026</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-white font-mono mb-4">
                <span className="text-purple-400">&gt;</span> Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 font-mono text-sm transition-colors duration-300 flex items-center"
                    >
                      <span className="text-purple-400 mr-2">▸</span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold text-white font-mono mb-4">
                <span className="text-cyan-400">&gt;</span> Connect
              </h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-400 font-mono text-sm">
                  <Mail className="h-4 w-4 mr-2 text-cyan-400" />
                  <a href="mailto:zaid789209@gmail.com" className="hover:text-cyan-400 transition-colors duration-300">
                    zaid789209@gmail.com
                  </a>
                </div>
                <div className="flex items-center text-gray-400 font-mono text-sm">
                  <Phone className="h-4 w-4 mr-2 text-green-400" />
                  <a href="tel:+919164624616" className="hover:text-green-400 transition-colors duration-300">
                    +91 91646 24616
                  </a>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="mt-6">
                <h4 className="text-white font-mono text-sm mb-3">Follow Me:</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-8"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 font-mono text-sm">
              <span className="text-purple-400">&copy;</span> {currentYear} Mohammed Zaid Ali. All rights reserved.
            </div>
            
            <div className="flex items-center text-gray-400 font-mono text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 mx-1 text-red-400 animate-pulse" />
              <span>and</span>
              <Code className="h-4 w-4 mx-1 text-cyan-400" />
              <span>by Zaid</span>
            </div>
          </div>

          {/* Terminal Footer */}
          <div className="mt-8 bg-black/50 border border-green-500/30 rounded-lg p-4 font-mono text-xs">
            <div className="text-green-400 mb-1">zaid@portfolio:~$ echo "Thanks for visiting!"</div>
            <div className="text-cyan-400">Thanks for visiting!</div>
            <div className="text-gray-400 mt-1">
              Last updated: {new Date().toLocaleDateString()} | Version: 2.0.0 | Status: Live
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;