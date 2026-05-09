import React, { useState } from "react";
import { ExternalLink, Github, Server, Database, Cpu, Code, Star, CheckCircle, Clock, Users, ShoppingBag, Scissors, Shirt, Calendar, CreditCard, FileText, Bell, Search, Shield, Zap } from "lucide-react";

// Image Fallback Component
const ImageWithFallback = ({ src, alt, category, className }) => {
  const [imgError, setImgError] = useState(false);

  if (imgError || !src) {
    return (
      <div className={`flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 ${className}`}>
        <div className="text-center">
          {category === "fullstack" ? (
            <Server size={48} className="text-blue-400 mx-auto" />
          ) : category === "frontend" ? (
            <Code size={48} className="text-purple-400 mx-auto" />
          ) : (
            <Database size={48} className="text-green-400 mx-auto" />
          )}
          <p className="text-gray-500 text-xs mt-2">{alt}</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${className}`}
      onError={() => setImgError(true)}
    />
  );
};

const projects = [
  // 🌟🌟 LIVE CLIENT PROJECTS (PRODUCTION - TOP PRIORITY) 🌟🌟
  {
    title: "Super Shanghai Laundry System",
    description: "Complete production-ready laundry management system for a real client. Features POS booking, full/partial delivery management, payment tracking, customer management, automated reports, and shop invoice tracking. Used by Super Shanghai Dry Cleaners.",
    image: "/projects/laundry-system.jpg",
    live: "https://ssdc.shop",
    github: "https://github.com/raigulukharal/super-shanghai-laundry",
    tech: ["Laravel 13", "PHP 8.3", "MySQL", "Tailwind CSS", "jQuery AJAX", "DomPDF"],
    features: ["POS Booking", "Full/Partial Delivery", "Auto Invoicing", "Payment Tracking", "WhatsApp Ready", "Shop Management"],
    category: "fullstack",
    isLiveClient: true,
    clientInfo: "Super Shanghai Dry Cleaners, Nankana Sahib"
  },
  {
    title: "OUTRE Tailor Management System",
    description: "Production-ready tailor shop management system for a real client. Features order management, live search, 1-day reminder system with WhatsApp/Print/PDF, auto-status updates, and customer history tracking. Used by OUTRE Tailors.",
    image: "/projects/tailor-system.jpg",
    live: "https://outre.online",
    github: "https://github.com/raigulukharal/outre-tailor-system",
    tech: ["Laravel 13", "PHP 8.3", "MySQL", "Tailwind CSS", "jQuery AJAX", "DomPDF"],
    features: ["Live Search", "Reminder System", "WhatsApp Integration", "PDF Invoice", "Print Receipt", "Auto Status"],
    category: "fullstack",
    isLiveClient: true,
    clientInfo: "OUTRE Tailors, Pakistan"
  },

  // Production-Ready Major Projects
  {
    title: "MarketStack – Multi-Vendor E-Commerce",
    description: "Production-ready multi-vendor e-commerce platform with 3 roles (Admin, Vendor, Customer). Full payment flow, inventory, analytics, and scalable MERN architecture.",
    image: "/projects/marketstack.png",
    live: "#",
    github: "https://github.com/raigulukharal/MarketStack",
    tech: ["MERN", "Redux", "Cloudinary", "JWT"],
    features: ["Admin Panel", "Vendor Dashboard", "Payment System", "Order Management"],
    category: "fullstack",
    isLiveClient: false
  },
  {
    title: "Gym Management System",
    description: "Complete gym management with QR attendance, subscription plans, payment integration, and role-based dashboards (Admin, Trainer, Member).",
    image: "/projects/gym-system.png",
    live: "#",
    github: "https://github.com/raigulukharal/Gym-managment",
    tech: ["MERN", "Tailwind", "Redux", "JWT"],
    features: ["QR Attendance", "Payment", "Reports", "Notifications"],
    category: "fullstack",
    isLiveClient: false
  },
  {
    title: "FlowDo – Project Management",
    description: "Trello-inspired project management app with boards, tasks, drag-drop, team collaboration, and real-time updates.",
    image: "/projects/flowdo.png",
    live: "#",
    github: "https://github.com/raigulukharal/FlowDo",
    tech: ["MERN", "Redux", "Tailwind", "Drag & Drop"],
    features: ["Task Boards", "Team Collaboration", "Real-time", "Responsive"],
    category: "fullstack",
    isLiveClient: false
  },
  {
    title: "University Management System",
    description: "Complete Laravel-based university system for managing students, courses, grades, attendance, and automatic GPA calculation.",
    image: "/projects/university.png",
    live: "https://university.naeemhub.com",
    github: "https://github.com/raigulukharal/university-management-system",
    tech: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
    features: ["Student Portal", "Grade Mgmt", "GPA Calc", "Admin Panel"],
    category: "fullstack",
    isLiveClient: false
  },
  // Full Stack Applications
  {
    title: "ConnectSphere – Social Media",
    description: "Modern social platform with posts, comments, likes, follow system, real-time chat, and profile management.",
    image: "/projects/connectsphere.png",
    live: "#",
    github: "https://github.com/raigulukharal/ConnectSphere",
    tech: ["MERN", "Cloudinary", "Socket.io", "JWT"],
    features: ["Posts", "Chat", "Follow System", "Profile"],
    category: "fullstack",
    isLiveClient: false
  },
  {
    title: "Secure Authentication System",
    description: "Advanced auth system with 2FA, OTP verification, admin dashboard, file uploads, and role-based access.",
    image: "/projects/auth-system.png",
    live: "#",
    github: "https://github.com/raigulukharal/Secure-authentication-system",
    tech: ["MERN", "JWT", "2FA", "Multer"],
    features: ["2FA", "Admin Dashboard", "File Upload", "Security"],
    category: "fullstack",
    isLiveClient: false
  },
  {
    title: "Nextflix Clone",
    description: "Netflix-inspired MERN app with movie trailers, authentication, and responsive design using TMDB API.",
    image: "/projects/nextflix.png",
    live: "https://nextflix-app.netlify.app",
    github: "https://github.com/raigulukharal/nextflix",
    tech: ["MERN", "TMDB API", "Firebase", "Redux"],
    features: ["Movie Streaming", "Auth", "Search", "Responsive"],
    category: "frontend",
    isLiveClient: false
  },
  {
    title: "DeepSeek AI Clone",
    description: "AI-powered assistant with OpenAI API integration for chat, summaries, and code generation.",
    image: "/projects/deepseek.png",
    live: "https://deepseek-client.netlify.app",
    github: "https://github.com/raigulukharal/Deepseek-Clone",
    tech: ["MERN", "OpenAI API", "JWT", "Tailwind"],
    features: ["AI Chat", "Code Gen", "Summaries", "History"],
    category: "fullstack",
    isLiveClient: false
  },
  // Frontend & UI Projects
  {
    title: "Guru Nanak Gym Website",
    description: "Modern fitness website with workout plans, BMI calculator, membership info, and responsive UI.",
    image: "/projects/gym-website.png",
    live: "https://gurunankgym.netlify.app/",
    github: "https://github.com/raigulukharal/Gym",
    tech: ["React", "Tailwind", "Responsive", "Modern UI"],
    features: ["Workout Plans", "BMI Calc", "Pricing", "Contact"],
    category: "frontend",
    isLiveClient: false
  },
  {
    title: "Personal Portfolio",
    description: "Modern portfolio website showcasing projects, skills, certificates, and contact information.",
    image: "/projects/portfolio.png",
    live: "https://gulfamshair.netlify.app",
    github: "https://github.com/raigulukharal/personal-portfolio",
    tech: ["React", "Tailwind", "Framer Motion", "Responsive"],
    features: ["Projects Showcase", "Skills", "Certificates", "Contact"],
    category: "frontend",
    isLiveClient: false
  },
  // Data Science Projects
  {
    title: "Google Data Analytics Projects",
    description: "Complete Google Data Analytics specialization projects covering data cleaning, visualization, and analysis.",
    image: "/projects/data-analysis.jfif",
    github: "https://github.com/raigulukharal/Google-Data-Analytics-Projects",
    tech: ["Python", "Pandas", "R", "SQL"],
    features: ["Data Cleaning", "Visualization", "Analysis", "Reports"],
    category: "datascience",
    isLiveClient: false
  },
  {
    title: "Exploratory Data Analysis",
    description: "EDA projects on real datasets: Titanic, IMDB, Google Play Store, Heart Disease, and more.",
    image: "/projects/EDA.jfif",
    github: "https://github.com/raigulukharal/EDA-Projects",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    features: ["Titanic", "IMDB", "Google Play", "Healthcare"],
    category: "datascience",
    isLiveClient: false
  },
  {
    title: "Data Visualization Projects",
    description: "Data visualization using Matplotlib, Seaborn, and Plotly to uncover insights through charts.",
    image: "/projects/data-vis.png",
    github: "https://github.com/raigulukharal/Data-Visuallization",
    tech: ["Matplotlib", "Seaborn", "Plotly", "Pandas"],
    features: ["Charts", "Heatmaps", "Pair Plots", "Dashboards"],
    category: "datascience",
    isLiveClient: false
  },
  {
    title: "Data Wrangling & Preprocessing",
    description: "Data cleaning, transformation, normalization, and preprocessing for machine learning.",
    image: "/projects/data-wrangling.png",
    github: "https://github.com/raigulukharal/Data-Wrangling",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    features: ["Cleaning", "Normalization", "Encoding", "Feature Eng"],
    category: "datascience",
    isLiveClient: false
  }
];

const Projects = () => {
  // Count projects by category
  const liveClientCount = projects.filter(p => p.isLiveClient === true).length;
  const fullstackCount = projects.filter(p => p.category === "fullstack" && !p.isLiveClient).length;
  const frontendCount = projects.filter(p => p.category === "frontend").length;
  const datascienceCount = projects.filter(p => p.category === "datascience").length;

  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-4 md:px-8" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Header with Stats */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            My <span className="text-pink-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8">
            Full-stack web applications, production client projects, modern UI designs, and data analysis projects showcasing my technical expertise.
          </p>
          
          {/* Project Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-green-900/30 to-green-900/10 p-4 rounded-2xl border border-green-800/30">
              <div className="text-3xl font-bold text-green-400">{liveClientCount}</div>
              <div className="text-gray-300 text-sm">Live Client Projects</div>
              <div className="flex justify-center mt-2">
                <Users className="text-green-400" size={20} />
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-900/10 p-4 rounded-2xl border border-blue-800/30">
              <div className="text-3xl font-bold text-blue-400">{fullstackCount}</div>
              <div className="text-gray-300 text-sm">Full Stack</div>
              <div className="flex justify-center mt-2">
                <Server className="text-blue-400" size={20} />
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-900/10 p-4 rounded-2xl border border-purple-800/30">
              <div className="text-3xl font-bold text-purple-400">{frontendCount}</div>
              <div className="text-gray-300 text-sm">Frontend</div>
              <div className="flex justify-center mt-2">
                <Code className="text-purple-400" size={20} />
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-900/30 to-orange-900/10 p-4 rounded-2xl border border-orange-800/30">
              <div className="text-3xl font-bold text-orange-400">{datascienceCount}</div>
              <div className="text-gray-300 text-sm">Data Science</div>
              <div className="flex justify-center mt-2">
                <Database className="text-orange-400" size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Live Client Projects Section - Featured at Top */}
        {liveClientCount > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-8 bg-green-500 rounded-full"></div>
              <h3 className="text-2xl font-bold text-white">🌟 Production Client Projects</h3>
              <span className="bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full border border-green-500/30 ml-2">
                Live & Deployed
              </span>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {projects.filter(p => p.isLiveClient === true).map((project, index) => (
                <div
                  key={`live-${index}`}
                  className="group bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-green-500/30 hover:border-green-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/10"
                >
                  {/* Project Image with Fallback Component */}
                  <div className="relative h-56 overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      category={project.category}
                      className="w-full h-full"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                        <Shield className="text-green-400" size={14} />
                        <span className="text-green-400 text-xs font-semibold">CLIENT PROJECT</span>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1 bg-green-500/80 backdrop-blur-sm px-2 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                        <span className="text-white text-xs">Live</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-green-400/70 text-sm mb-3 flex items-center gap-2">
                      <Users size={14} />
                      {project.clientInfo}
                    </p>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-gray-800/50 text-gray-300 rounded-md border border-gray-700">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.features.map((feature, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-green-900/20 text-green-300 rounded-full border border-green-800/30 flex items-center gap-1">
                          <CheckCircle size={10} />
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl text-sm font-semibold transition-all duration-300"
                      >
                        <Github size={16} />
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Other Projects Grid */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1 h-8 bg-pink-500 rounded-full"></div>
            <h3 className="text-2xl font-bold text-white">📁 Portfolio & Demo Projects</h3>
            <span className="bg-pink-500/20 text-pink-400 text-xs px-3 py-1 rounded-full border border-pink-500/30 ml-2">
              Full Portfolio
            </span>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.filter(p => !p.isLiveClient).map((project, index) => (
              <div
                key={index}
                className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-pink-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/10"
              >
                {/* Project Image with Fallback Component */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    category={project.category}
                    className="w-full h-full"
                  />
                  
                  <div className="absolute top-4 left-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      project.category === "fullstack" 
                        ? "bg-blue-900/70 text-blue-300 border border-blue-700/50" 
                        : project.category === "frontend"
                        ? "bg-purple-900/70 text-purple-300 border border-purple-700/50"
                        : "bg-orange-900/70 text-orange-300 border border-orange-700/50"
                    }`}>
                      {project.category === "fullstack" ? "Full Stack" :
                       project.category === "frontend" ? "Frontend" :
                       "Data Science"}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map((tech, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-gray-800/50 text-gray-300 rounded-md border border-gray-700">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="text-xs px-2 py-1 bg-gray-800/50 text-gray-400 rounded-md">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-pink-900/20 text-pink-300 rounded-full border border-pink-800/30">
                        {feature}
                      </span>
                    ))}
                    {project.features.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-gray-800/50 text-gray-400 rounded-full">
                        +{project.features.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    {project.live && project.live !== "#" ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    ) : (
                      <button
                        disabled
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 text-gray-500 rounded-xl text-sm font-semibold cursor-not-allowed"
                      >
                        <ExternalLink size={16} />
                        Demo Soon
                      </button>
                    )}
                    
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl text-sm font-semibold transition-all duration-300"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Summary Footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-6 bg-gray-900/50 backdrop-blur-sm rounded-2xl px-8 py-6 border border-gray-700">
            <div className="text-left">
              <div className="text-2xl font-bold text-white mb-1">Total Projects: {projects.length}</div>
              <div className="text-gray-400 text-sm">
                Including {liveClientCount} production client projects, {fullstackCount} full-stack, {frontendCount} frontend, and {datascienceCount} data science projects
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300 bg-gray-800/50 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Live Client Projects Available for Demo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
