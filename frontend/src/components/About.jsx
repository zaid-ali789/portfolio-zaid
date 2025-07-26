import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Shield, Code, Users, Cloud, Brain, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Shield className="h-5 w-5" />,
      text: "Cybersecurity Intern at Teachnook",
      color: "bg-red-500/20 text-red-300 border-red-500/50"
    },
    {
      icon: <Users className="h-5 w-5" />,
      text: "Instructor & Founder – Zenith Adept",
      color: "bg-purple-500/20 text-purple-300 border-purple-500/50"
    },
    {
      icon: <Code className="h-5 w-5" />,
      text: "MERN Stack Dev | Python Flask | Tailwind CSS",
      color: "bg-blue-500/20 text-blue-300 border-blue-500/50"
    },
    {
      icon: <Cloud className="h-5 w-5" />,
      text: "AWS, GCP, Azure Pipelines",
      color: "bg-green-500/20 text-green-300 border-green-500/50"
    },
    {
      icon: <Brain className="h-5 w-5" />,
      text: "Prompt Engineer | GenAI Tools | Vertex AI",
      color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/50"
    },
    {
      icon: <Zap className="h-5 w-5" />,
      text: "Mentored 30+ Students with 90% Positive Feedback",
      color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/50"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
              <span className="text-cyan-400">&gt;</span> About Me
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Profile Image & Info */}
            <div className="relative">
              <Card className="bg-gray-800/50 border-purple-500/30 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-gradient-to-r from-purple-500 to-cyan-500 bg-gradient-to-r from-purple-500 to-cyan-500 p-1">
                      <img 
                        src="/assets/zaid-profile.jpeg" 
                        alt="Mohammed Zaid Ali" 
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-white font-mono mb-2">Mohammed Zaid Ali</h3>
                    <p className="text-purple-300 font-mono">Computer Science Engineer</p>
                    
                    {/* Open to Work Status */}
                    <div className="mt-4 inline-flex items-center bg-green-500/20 border border-green-500/50 rounded-full px-4 py-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-green-400 font-mono text-sm">Available for Internships</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-center">
                    <div className="text-cyan-400 font-mono">
                      <span className="text-gray-400">Institution:</span> Adichunchanagiri Institute of Technology
                    </div>
                    <div className="text-cyan-400 font-mono">
                      <span className="text-gray-400">Focus:</span> Cybersecurity & Full-Stack Development
                    </div>
                    <div className="text-cyan-400 font-mono">
                      <span className="text-gray-400">Availability:</span> Jan 2026 - 6 months max
                    </div>
                    <div className="text-cyan-400 font-mono">
                      <span className="text-gray-400">Goal:</span> Global Tech Leadership in AI & EdTech
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <Card className="bg-gray-800/50 border-cyan-500/30 backdrop-blur-sm">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed font-mono text-lg">
                    I'm a <span className="text-cyan-400">Computer Science undergrad</span> and <span className="text-purple-400">cybersecurity enthusiast</span> with a passion for securing and scaling full-stack web applications. 
                  </p>
                  <br />
                  <p className="text-gray-300 leading-relaxed font-mono text-lg">
                    As the <span className="text-yellow-400">founder of Zenith Adept</span>, I've designed and delivered tech courses, mentored 30+ students, and built scalable apps with <span className="text-green-400">MERN</span> and <span className="text-blue-400">Flask</span>.
                  </p>
                  <br />
                  <p className="text-gray-300 leading-relaxed font-mono text-lg">
                    My journey bridges <span className="text-red-400">ethical hacking</span>, <span className="text-purple-400">cloud platforms</span>, and <span className="text-cyan-400">AI-powered development</span>.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Highlights */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center font-mono">
              <span className="text-purple-400">&gt;</span> Key Highlights
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {highlights.map((highlight, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className={`${highlight.color} p-3 text-sm font-mono flex items-center gap-2 hover:scale-105 transition-all duration-300 cursor-pointer`}
                >
                  {highlight.icon}
                  <span>{highlight.text}</span>
                </Badge>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="bg-gray-800/50 border-purple-500/30 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-purple-400 font-mono">30+</div>
                <div className="text-gray-300 font-mono">Students Mentored</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/50 border-cyan-500/30 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-cyan-400 font-mono">10+</div>
                <div className="text-gray-300 font-mono">Certifications</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/50 border-green-500/30 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-green-400 font-mono">5+</div>
                <div className="text-gray-300 font-mono">Major Projects</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/50 border-yellow-500/30 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-yellow-400 font-mono">90%</div>
                <div className="text-gray-300 font-mono">Positive Feedback</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;