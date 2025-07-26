// Mock data for portfolio website
// This will be replaced with real backend data during integration

export const mockFormSubmission = {
  // Mock contact form submission
  submitContactForm: async (formData) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock successful submission
    console.log('Mock form submission:', formData);
    return {
      success: true,
      message: 'Message sent successfully! I\'ll get back to you soon.'
    };
  },
  
  // Mock resume download
  downloadResume: () => {
    // Mock resume download functionality
    console.log('Mock resume download triggered');
    alert('Resume download functionality will be implemented with backend integration');
  }
};

export const mockCertifications = [
  {
    id: 1,
    title: "Machine Learning, ML",
    issuer: "NPTEL (IIT Madras)",
    date: "Jan-Mar 2025",
    logo: "/api/placeholder/60/60"
  },
  {
    id: 2,
    title: "Programming in Java",
    issuer: "NPTEL (IIT Madras)",
    date: "Jan-Apr 2025",
    logo: "/api/placeholder/60/60"
  },
  {
    id: 3,
    title: "Prompt Design in Vertex AI",
    issuer: "Google Cloud",
    date: "Apr 2025",
    logo: "/api/placeholder/60/60"
  },
  {
    id: 4,
    title: "Develop GenAI Apps with Gemini and Streamlit",
    issuer: "Google Cloud",
    date: "May 2025",
    logo: "/api/placeholder/60/60"
  },
  {
    id: 5,
    title: "Real World AI Applications with Gemini and Imagen",
    issuer: "Google Cloud",
    date: "May 2025",
    logo: "/api/placeholder/60/60"
  },
  {
    id: 6,
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    date: "Jul 2023",
    logo: "/api/placeholder/60/60"
  },
  {
    id: 7,
    title: "HTML and CSS Bootcamp",
    issuer: "LetsUpgrade",
    date: "Jul 2023",
    logo: "/api/placeholder/60/60"
  },
  {
    id: 8,
    title: "Python Programming Bootcamp",
    issuer: "LetsUpgrade",
    date: "Jun 2023",
    logo: "/api/placeholder/60/60"
  },
  {
    id: 9,
    title: "Graphic Designing",
    issuer: "Tech-Jnana Bindhu",
    date: "Jun 2021",
    logo: "/api/placeholder/60/60"
  }
];

export const mockExperience = [
  {
    id: 1,
    title: "Cyber Security Intern",
    company: "Teachnook Company",
    duration: "Current",
    type: "Internship",
    responsibilities: [
      "Secured devices/servers via encryption.",
      "Analyzed cipher algorithms to identify vulnerabilities and enhance data protection.",
      "Applied threat detection and mitigation strategies to safeguard devices and servers."
    ]
  },
  {
    id: 2,
    title: "Founder",
    company: "Zenith Adept",
    duration: "May 2024 - Present",
    type: "Entrepreneurship",
    responsibilities: [
      "Launched and scaled an EdTech platform delivering programming and design courses.",
      "Designed structured curricula and conducted live mentorship.",
      "Led product development, growth strategy, and learner engagement initiatives.",
      "Partnered with industry professionals to ensure high-quality, hands-on training."
    ]
  }
];

export const mockStats = {
  studentsCareer: 30,
  certifications: 9,
  projects: 5,
  satisfaction: 90
};