import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Award, Calendar, CheckCircle } from 'lucide-react';
import { mockCertifications } from '../mock/mockData';

const Certifications = () => {
  const certificationGroups = {
    "IIT Madras": mockCertifications.filter(cert => cert.issuer.includes("IIT Madras")),
    "Google Cloud": mockCertifications.filter(cert => cert.issuer.includes("Google Cloud")),
    "Industry Partners": mockCertifications.filter(cert => !cert.issuer.includes("IIT Madras") && !cert.issuer.includes("Google Cloud"))
  };

  const getGroupColor = (group) => {
    const colors = {
      "IIT Madras": "from-orange-500 to-red-500",
      "Google Cloud": "from-blue-500 to-green-500",
      "Industry Partners": "from-purple-500 to-pink-500"
    };
    return colors[group] || "from-gray-500 to-gray-600";
  };

  const getGroupBorder = (group) => {
    const borders = {
      "IIT Madras": "border-orange-500/30",
      "Google Cloud": "border-blue-500/30",
      "Industry Partners": "border-purple-500/30"
    };
    return borders[group] || "border-gray-500/30";
  };

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
              <span className="text-cyan-400">&gt;</span> Certifications
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 text-lg font-mono">
              Validated expertise from leading institutions and platforms
            </p>
          </div>

          {/* Certifications by Group */}
          {Object.entries(certificationGroups).map(([group, certs]) => (
            <div key={group} className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6 font-mono flex items-center">
                <div className={`bg-gradient-to-r ${getGroupColor(group)} p-2 rounded-lg mr-4`}>
                  <Award className="h-5 w-5 text-white" />
                </div>
                <span className="text-cyan-400">&gt;</span> {group}
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certs.map((cert, index) => (
                  <Card 
                    key={cert.id} 
                    className={`bg-gray-800/50 ${getGroupBorder(group)} backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20`}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className={`bg-gradient-to-r ${getGroupColor(group)} p-3 rounded-lg`}>
                          <CheckCircle className="h-6 w-6 text-white" />
                        </div>
                        <Badge 
                          variant="outline"
                          className="bg-green-500/20 text-green-300 border-green-500/50 font-mono"
                        >
                          Verified
                        </Badge>
                      </div>
                      <CardTitle className="text-lg font-bold text-white font-mono leading-tight">
                        {cert.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center text-cyan-400 font-mono">
                          <Award className="h-4 w-4 mr-2" />
                          <span className="text-sm">{cert.issuer}</span>
                        </div>
                        <div className="flex items-center text-purple-400 font-mono">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span className="text-sm">{cert.date}</span>
                        </div>
                      </div>

                      {/* Achievement Badge */}
                      <div className="mt-4 p-2 bg-black/50 border border-green-500/30 rounded font-mono text-xs">
                        <div className="text-green-400">
                          &gt; cert_{cert.id}.validate() → <span className="text-cyan-400">SUCCESS</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}

          {/* Special Achievement */}
          <div className="mt-16">
            <Card className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-mono mb-2">
                    Special Achievement
                  </h3>
                  <p className="text-yellow-400 font-mono text-lg">
                    Mentored 30+ Students achieving 90% positive Feedback
                  </p>
                  <p className="text-gray-400 font-mono text-sm mt-2">
                    Zenith Adept • May 2024 - Present
                  </p>
                  <div className="mt-4 bg-black/50 border border-yellow-500/30 rounded p-3 font-mono text-sm">
                    <div className="text-yellow-400">
                      &gt; mentorship_program.execute() → <span className="text-green-400">OUTSTANDING_RESULTS</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats Summary */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="bg-gray-800/50 border-blue-500/30 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-400 font-mono">{mockCertifications.length}</div>
                <div className="text-gray-300 font-mono">Total Certifications</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/50 border-orange-500/30 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-orange-400 font-mono">2</div>
                <div className="text-gray-300 font-mono">IIT Madras</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/50 border-green-500/30 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-green-400 font-mono">3</div>
                <div className="text-gray-300 font-mono">Google Cloud</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/50 border-purple-500/30 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-purple-400 font-mono">2025</div>
                <div className="text-gray-300 font-mono">Latest Year</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;