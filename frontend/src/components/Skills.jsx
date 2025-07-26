import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Code, Database, Cloud, Shield, Palette, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      color: "from-blue-500 to-purple-500",
      borderColor: "border-blue-500/30",
      skills: ["Java", "Python", "C++", "HTML/CSS", "JavaScript"]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Database className="h-6 w-6" />,
      color: "from-green-500 to-cyan-500",
      borderColor: "border-green-500/30",
      skills: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js", "Flask", "Tailwind CSS"]
    },
    {
      title: "Cloud Platforms",
      icon: <Cloud className="h-6 w-6" />,
      color: "from-purple-500 to-pink-500",
      borderColor: "border-purple-500/30",
      skills: ["AWS (EC2, S3)", "Microsoft Azure", "Google Cloud Platform", "Vertex AI"]
    },
    {
      title: "Security & Auth",
      icon: <Shield className="h-6 w-6" />,
      color: "from-red-500 to-orange-500",
      borderColor: "border-red-500/30",
      skills: ["JWT Authentication", "Basic Encryption", "Threat Mitigation", "Cipher Analysis"]
    },
    {
      title: "Design Tools",
      icon: <Palette className="h-6 w-6" />,
      color: "from-yellow-500 to-red-500",
      borderColor: "border-yellow-500/30",
      skills: ["Adobe Photoshop", "Adobe Illustrator", "Canva", "UI/UX Design"]
    },
    {
      title: "Development Tools",
      icon: <Wrench className="h-6 w-6" />,
      color: "from-cyan-500 to-blue-500",
      borderColor: "border-cyan-500/30",
      skills: ["Git", "GitHub", "Postman", "MongoDB Compass", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
              <span className="text-cyan-400">&gt;</span> Technical Skills
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 text-lg font-mono">
              Constantly evolving toolkit for modern development
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className={`bg-gray-800/50 ${category.borderColor} backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20`}
              >
                <CardContent className="p-6">
                  
                  {/* Category Header */}
                  <div className="flex items-center mb-6">
                    <div className={`bg-gradient-to-r ${category.color} p-3 rounded-lg mr-4`}>
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white font-mono">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center justify-between">
                        <Badge 
                          variant="outline"
                          className="bg-gray-700/50 text-gray-300 border-gray-600 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 font-mono"
                        >
                          {skill}
                        </Badge>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full ${
                                i < Math.floor(Math.random() * 2) + 3
                                  ? 'bg-cyan-400'
                                  : 'bg-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Glitch Effect */}
                  <div className="mt-4 text-xs text-cyan-400 font-mono opacity-50">
                    &gt; {category.title.toLowerCase().replace(/\s+/g, '_')}.dll loaded
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-white mb-8 font-mono">
              <span className="text-purple-400">&gt;</span> Additional Expertise
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Prompt Engineering",
                "GenAI Applications",
                "API Development",
                "Database Design",
                "Real-time Systems",
                "Responsive Design",
                "DevOps Basics",
                "Project Management"
              ].map((skill, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-gray-800/50 text-gray-300 border-purple-500/30 hover:border-purple-400 hover:text-purple-400 transition-all duration-300 font-mono p-3 cursor-pointer"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Terminal Effect */}
          <div className="mt-16 bg-black/50 border border-green-500/30 rounded-lg p-4 font-mono text-sm">
            <div className="text-green-400 mb-2">zaid@portfolio:~$ cat skills.txt</div>
            <div className="text-gray-300">
              <span className="text-cyan-400">Current Status:</span> Continuously learning and adapting to new technologies...<br/>
              <span className="text-purple-400">Next Learning:</span> Advanced AI/ML, DevOps, and Blockchain development<br/>
              <span className="text-yellow-400">Goal:</span> Mastering full-stack security architecture
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;