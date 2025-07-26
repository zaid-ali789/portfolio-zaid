import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await axios.post(`${API}/contact`, formData);
      
      if (response.data.success) {
        toast({
          title: "Success!",
          description: response.data.message,
          variant: "default"
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(response.data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Error",
        description: error.response?.data?.detail || "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "zaid789209@gmail.com",
      href: "mailto:zaid789209@gmail.com",
      color: "text-cyan-400"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 91646 24616",
      href: "tel:+919164624616",
      color: "text-green-400"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "zaid-ali789",
      href: "https://github.com/zaid-ali789",
      color: "text-purple-400"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "mohammed-zaid-ali",
      href: "https://linkedin.com/in/mohammed-zaid-ali-b82467268",
      color: "text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
              <span className="text-cyan-400">&gt;</span> Get In Touch
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 text-lg font-mono">
              Let's build something amazing together
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-gray-800/50 border-purple-500/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white font-mono flex items-center">
                    <Mail className="h-6 w-6 text-cyan-400 mr-3" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className={`${contact.color} p-3 rounded-lg bg-gray-700/50`}>
                        {contact.icon}
                      </div>
                      <div>
                        <p className="text-gray-400 font-mono text-sm">{contact.label}</p>
                        <a
                          href={contact.href}
                          target={contact.href.startsWith('http') ? '_blank' : undefined}
                          rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className={`${contact.color} font-mono hover:underline transition-colors duration-300`}
                        >
                          {contact.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="bg-gray-800/50 border-cyan-500/30 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white font-mono mb-4">
                    <span className="text-cyan-400">&gt;</span> Availability Status
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                      <div className="text-green-400 font-mono">Open for Internships</div>
                    </div>
                    <div className="text-gray-400 font-mono text-sm">
                      <div>Duration: January 2026 - 6 months max</div>
                      <div>Type: Full-time internship opportunities</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Terminal Effect */}
              <div className="bg-black/50 border border-green-500/30 rounded-lg p-4 font-mono text-sm">
                <div className="text-green-400 mb-2">zaid@portfolio:~$ cat status.txt</div>
                <div className="text-cyan-400">
                  Status: Available for internship opportunities<br/>
                  Duration: January 2026 - up to 6 months<br/>
                  Interests: Full-stack development, Cybersecurity, AI/ML<br/>
                  Location: Open to remote work<br/>
                  <span className="text-green-400">Ready to innovate and collaborate!</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-gray-800/50 border-cyan-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white font-mono flex items-center">
                  <Send className="h-6 w-6 text-cyan-400 mr-3" />
                  Send Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-300 font-mono">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1 bg-gray-700/50 border-gray-600 text-white font-mono focus:border-cyan-400"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-300 font-mono">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1 bg-gray-700/50 border-gray-600 text-white font-mono focus:border-cyan-400"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-gray-300 font-mono">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="mt-1 bg-gray-700/50 border-gray-600 text-white font-mono focus:border-cyan-400"
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-gray-300 font-mono">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="mt-1 bg-gray-700/50 border-gray-600 text-white font-mono focus:border-cyan-400 resize-none"
                      placeholder="Tell me about your project or opportunity..."
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-mono py-3 transition-all duration-300 transform hover:scale-105"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>

                {/* Form Status */}
                <div className="mt-6 bg-black/50 border border-purple-500/30 rounded p-3 font-mono text-sm">
                  <div className="text-purple-400">
                    &gt; contact_form.status → <span className="text-green-400">READY</span>
                  </div>
                  <div className="text-gray-400 text-xs mt-1">
                    * All fields are required | Form uses secure transmission
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

export default Contact;