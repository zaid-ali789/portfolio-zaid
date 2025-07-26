import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { mockExperience } from '../mock/mockData';

const Experience = () => {
  const getExperienceColor = (type) => {
    const colors = {
      "Internship": "from-blue-500 to-cyan-500",
      "Entrepreneurship": "from-purple-500 to-pink-500",
      "Full-time": "from-green-500 to-teal-500"
    };
    return colors[type] || "from-gray-500 to-gray-600";
  };

  const getExperienceBorder = (type) => {
    const borders = {
      "Internship": "border-blue-500/30",
      "Entrepreneurship": "border-purple-500/30",
      "Full-time": "border-green-500/30"
    };
    return borders[type] || "border-gray-500/30";
  };

  const getTypeColor = (type) => {
    const colors = {
      "Internship": "bg-blue-500/20 text-blue-300 border-blue-500/50",
      "Entrepreneurship": "bg-purple-500/20 text-purple-300 border-purple-500/50",
      "Full-time": "bg-green-500/20 text-green-300 border-green-500/50"
    };
    return colors[type] || "bg-gray-500/20 text-gray-300 border-gray-500/50";
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
              <span className="text-cyan-400">&gt;</span> Work Experience
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 text-lg font-mono">
              Building expertise through hands-on experience
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full"></div>
            
            {mockExperience.map((exp, index) => (
              <div key={exp.id} className="relative flex items-start mb-12 last:mb-0">
                
                {/* Timeline Node */}
                <div className={`absolute left-4 w-4 h-4 rounded-full bg-gradient-to-r ${getExperienceColor(exp.type)} border-2 border-gray-900 z-10`}></div>
                
                {/* Experience Card */}
                <div className="ml-16 flex-1">
                  <Card className={`bg-gray-800/50 ${getExperienceBorder(exp.type)} backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20`}>
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div className={`bg-gradient-to-r ${getExperienceColor(exp.type)} p-3 rounded-lg`}>
                          <Briefcase className="h-6 w-6 text-white" />
                        </div>
                        <Badge 
                          variant="outline"
                          className={`${getTypeColor(exp.type)} font-mono`}
                        >
                          {exp.type}
                        </Badge>
                      </div>
                      
                      <CardTitle className="text-2xl font-bold text-white font-mono">
                        {exp.title}
                      </CardTitle>
                      
                      <div className="space-y-2">
                        <div className="flex items-center text-cyan-400 font-mono">
                          <Briefcase className="h-4 w-4 mr-2" />
                          <span className="text-lg">{exp.company}</span>
                        </div>
                        <div className="flex items-center text-purple-400 font-mono">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <div className="space-y-4">
                        <h4 className="text-cyan-400 font-mono font-bold">Key Responsibilities:</h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((responsibility, respIndex) => (
                            <li key={respIndex} className="text-gray-300 font-mono flex items-start">
                              <CheckCircle className="h-4 w-4 text-green-400 mr-3 mt-1 flex-shrink-0" />
                              <span className="leading-relaxed">{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievement Highlight */}
                      <div className="mt-6 p-4 bg-black/50 border border-green-500/30 rounded-lg">
                        <div className="font-mono text-sm">
                          <div className="text-green-400 mb-1">
                            &gt; {exp.company.toLowerCase().replace(/\s+/g, '_')}_impact.calculate()
                          </div>
                          <div className="text-cyan-400">
                            {exp.type === 'Entrepreneurship' 
                              ? `→ Platform launched | 30+ students mentored | 90% satisfaction rate`
                              : `→ Security enhanced | Threats mitigated | Systems protected`
                            }
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>

          {/* Current Focus */}
          <div className="mt-16">
            <Card className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Briefcase className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-mono mb-2">
                    Current Focus
                  </h3>
                  <p className="text-cyan-400 font-mono text-lg mb-2">
                    Pursuing a career in global tech
                  </p>
                  <p className="text-gray-400 font-mono text-sm">
                    Specializing in AI, Cybersecurity, and Education Technology
                  </p>
                  <div className="mt-4 bg-black/50 border border-cyan-500/30 rounded p-3 font-mono text-sm">
                    <div className="text-cyan-400">
                      &gt; career_trajectory.setGoal("GlobalTechLeadership") → <span className="text-green-400">LOADING...</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white mb-8 font-mono text-center">
              <span className="text-purple-400">&gt;</span> Education
            </h3>
            <Card className="bg-gray-800/50 border-orange-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white font-mono mb-2">
                    Bachelor of Computer Science and Engineering
                  </h4>
                  <p className="text-orange-400 font-mono">
                    Adichunchanagiri Institute of Technology
                  </p>
                  <div className="mt-4 bg-black/50 border border-orange-500/30 rounded p-3 font-mono text-sm">
                    <div className="text-orange-400">
                      &gt; education.status → <span className="text-green-400">IN_PROGRESS</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;