import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, Calendar, Users, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Travel Tourism Web-App",
      date: "Apr 2025",
      type: "Team Project",
      description: "MERN stack travel booking platform with intelligent place recommendations and trip planning capabilities. Features network detection for offline access and AI-powered destination suggestions.",
      features: [
        "Network speed detection for offline maps",
        "YouTube API integration for hidden gems",
        "Real-time trip planning",
        "Responsive design"
      ],
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "YouTube API"],
      color: "from-blue-500 to-purple-500",
      borderColor: "border-blue-500/30",
      status: "Completed"
    },
    {
      title: "Cafe Management System",
      date: "Jul 2024",
      type: "Team Project",
      description: "Comprehensive MERN stack restaurant management solution with real-time order tracking, digital menu system, and administrative dashboard for seamless operations.",
      features: [
        "Real-time order status updates",
        "Digital menu with cart functionality",
        "Admin dashboard for management",
        "MongoDB change streams implementation"
      ],
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Change Streams"],
      color: "from-green-500 to-cyan-500",
      borderColor: "border-green-500/30",
      status: "Completed"
    },
    {
      title: "E-Learning Platform",
      date: "Sep 2024",
      type: "Team Project",
      description: "Full-stack educational platform with course management, prerequisite checking, and dynamic progress tracking. Built with role-based access control for enhanced security.",
      features: [
        "Course prerequisite validation",
        "Dynamic progress tracking",
        "Role-based access control",
        "Responsive React UI"
      ],
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
      color: "from-purple-500 to-pink-500",
      borderColor: "border-purple-500/30",
      status: "Completed"
    },
    {
      title: "Zenith Adept EdTech Platform",
      date: "May 2024 - Present",
      type: "Founder Project",
      description: "Comprehensive EdTech platform delivering programming and design courses. Features live mentorship, structured curricula, and industry-professional partnerships.",
      features: [
        "Live course delivery system",
        "Student mentorship program",
        "Curriculum design and management",
        "Industry partnership integration"
      ],
      techStack: ["Full-Stack Development", "Course Management", "Live Streaming", "Analytics"],
      color: "from-yellow-500 to-red-500",
      borderColor: "border-yellow-500/30",
      status: "Ongoing"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
              <span className="text-cyan-400">&gt;</span> Featured Projects
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 text-lg font-mono">
              Building scalable solutions with modern technologies
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`bg-gray-800/50 ${project.borderColor} backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className={`bg-gradient-to-r ${project.color} p-2 rounded-lg`}>
                      <Code className="h-5 w-5 text-white" />
                    </div>
                    <Badge 
                      variant="outline"
                      className={`${project.status === 'Ongoing' ? 'bg-green-500/20 text-green-300 border-green-500/50' : 'bg-blue-500/20 text-blue-300 border-blue-500/50'} font-mono`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-white font-mono">
                    {project.title}
                  </CardTitle>
                  <div className="flex items-center gap-4 text-sm text-gray-400 font-mono">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {project.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {project.type}
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-300 mb-4 font-mono leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-cyan-400 font-mono font-bold mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-300 font-mono text-sm flex items-start">
                          <span className="text-purple-400 mr-2">▸</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-cyan-400 font-mono font-bold mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="bg-gray-700/50 text-gray-300 border-gray-600 font-mono text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      variant="outline"
                      size="sm"
                      className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 font-mono"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      variant="outline"
                      size="sm"
                      className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-mono"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>

                  {/* Terminal Effect */}
                  <div className="mt-4 bg-black/50 border border-green-500/30 rounded p-2 font-mono text-xs">
                    <div className="text-green-400">
                      project_{project.title.toLowerCase().replace(/\s+/g, '_')} initialized successfully
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Section */}
          <div className="text-center mt-12">
            <Button 
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-3 font-mono"
            >
              <Github className="h-5 w-5 mr-2" />
              View More on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;