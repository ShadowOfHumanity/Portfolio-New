import { useEffect, useRef, useState } from 'react';
import CvOption from '../components/CvOption';
import TypewriterText from '../components/TypewriterText';
import TechTag from '../components/TechTag';
import DarianCv from '../assets/darian-cv.pdf';
import GeneralCv from '../assets/general-cv.pdf';
import placeholderImage from '../assets/placeholder.jpg'; 
import ProjectImage1 from '../assets/project1.jpg';
import ProjectImage2 from '../assets/project2.jpg'; 
import selfImage from '../assets/selfImage.jpg'; 
import { Clock, MapPin, Laptop, Briefcase, Mail, Zap, ArrowRight, Code2, Layout, Server, Database, Linkedin, Github } from 'lucide-react';

const profileImageUrl = selfImage;
const EMAIL_ADDRESS = 'darianbakerbray@gmail.com';

// Project data
const showcaseProjects = [
  {
    title: "JobsForMalta",
    subtitle: "Job Listing Platform",
    description: "A localized job search platform specifically designed for the Maltese job market. Employers can post listings while job seekers can search, filter, and apply directly through the platform.",
    fullScreenshot: ProjectImage1,
    techStack: ["Node.js", "Express", "PostgreSQL", "React", "Authentication", "REST API"],
    highlights: [
      "Advanced filtering system with location-based search",
      "Employer dashboard for managing job listings and applicants",
      "Mobile-responsive design for on-the-go job searching"
    ],
    demoLink: "#",
    githubLink: "https://github.com/ShadowOfHumanity/JobsInMalta---Tailwind"
  },
  {
    title: "BUDGETER",
    subtitle: "Expense Management Application",
    description: "A comprehensive budget management application with advanced receipt scanning capabilities. Users can track expenses, set budgets, and gain insights into their spending habits through intuitive analytics dashboards.",
    fullScreenshot: ProjectImage2, 
    techStack: ["Spring Boot", "Java", "Azure AI OCR", "React", "TypeScript", "PostgreSQL"],
    highlights: [
      "Smart receipt scanner using Azure AI OCR technology",
      "Real-time spending analytics with interactive charts",
      "Multi-user access with role-based permissions"
    ],
    demoLink: "#",
    githubLink: "github.com/ShadowOfHumanity?tab=repositories"
  }
];

const Home = () => {
  const [currentTime, setCurrentTime] = useState('');
  
  // Malta time update
  useEffect(() => {
    const updateTime = () => {
      const maltaTime = new Date().toLocaleTimeString('en-GB', {
        timeZone: 'Europe/Malta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      setCurrentTime(maltaTime);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  //   tech stack
  const techStack = [
    {
      category: "Languages",
      icon: <Code2 className="w-5 h-5 text-white" />,
      gradient: "from-blue-500 to-indigo-600 to-indigo-600",
      items: ["Java", "JavaScript", "TypeScript"]
    },
    {
      category: "Frontend",
      icon: <Layout className="w-5 h-5 text-white" />,
      gradient: "from-cyan-500 to-blue-600",
      items: ["React", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      category: "Backend",
      icon: <Server className="w-5 h-5 text-white" />,
      gradient: "from-green-500 to-emerald-600",
      items: ["Spring Boot", "Node.js", "Express", "REST APIs"]
    },
    {
      category: "Databases",
      icon: <Database className="w-5 h-5 text-white" />,
      gradient: "from-purple-500 to-violet-600",
      items: ["PostgreSQL", "SQLite3", "JPA"]
    },
    {
      category: "Tools & Learning",
      icon: <Briefcase className="w-5 h-5 text-white" />,
      gradient: "from-amber-500 to-orange-600",
      items: ["Git", "GitHub", "VS Code", "Next.js", "Azure AI OCR"]
    }
  ];

  // animation observer ref
  const animatedElements = useRef<NodeListOf<Element> | null>(null);

  // scroll anim setup
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.add('translate-y-0');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    animatedElements.current = document.querySelectorAll('.animate-on-scroll');
    animatedElements.current.forEach(el => {
      observer.observe(el);
    });

    return () => {
      if (animatedElements.current) {
        animatedElements.current.forEach(el => observer.unobserve(el));
      }
    };
  }, []);

  // dev titles for typewriter
  const developerTitles = [
    "Full-Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Gaming Developer",
    "Web Developer"
  ];

  return (
    <div className="pt-20 bg-gradient-to-b from-white via-amber-50/30 to-amber-50/70">
      
      <section className="bg-gradient-to-b from-amber-50/70 via-rose-50 to-indigo-50/90 py-32 relative overflow-hidden">
        
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200/30 rounded-full filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200/30 rounded-full filter blur-3xl opacity-50 translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-6xl font-bold leading-tight mb-6 text-gray-800">
                <TypewriterText 
                  titles={developerTitles} 
                  
                />
              </h1>
              <p className="text-2xl text-gray-600 mb-10">
                Passionate about creating robust applications with modern technologies
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://github.com/ShadowOfHumanity?tab=repositories" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-xl hover:translate-y-[-2px] flex items-center"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/darian-baker-1402b2327/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-md hover:shadow-xl hover:translate-y-[-2px] flex items-center"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
                <a 
                  href={`mailto:${EMAIL_ADDRESS}`} 
                  className="border border-gray-300 bg-white/50 backdrop-blur-sm text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  Contact Me
                </a>
              </div>
            </div>
            
            <div className="md:w-1/2 flex justify-center md:justify-end">
              {/* PFP */}
              <div className="relative group">
                
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden ring-4 ring-white">
                  <img 
                    src={profileImageUrl} 
                    alt="Darian Baker" 
                    className="w-full h-full object-cover object-center "
                    onError={(e) => {
                      // Fallback to initials if image fails to load
                      e.currentTarget.classList.add('hidden');
                      e.currentTarget.parentElement?.classList.add('bg-gradient-to-br', 'from-purple-400', 'to-indigo-600', 'flex', 'items-center', 'justify-center');
                      const initialsEl = document.createElement('span');
                      initialsEl.textContent = 'DB'; 
                      initialsEl.className = 'text-white text-6xl font-bold';
                      e.currentTarget.parentElement?.appendChild(initialsEl);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* info card(s) */}
      <section className="py-16 bg-gradient-to-b from-indigo-50/90 to-purple-50/90 relative">
        {/* decorations */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-300/20 rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-300/20 rounded-full filter blur-3xl opacity-50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* malta Location card */}
            <div className="group bg-white/60 backdrop-blur-sm hover:bg-white/80 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center border border-transparent hover:border-indigo-200 overflow-hidden relative h-full">
              {/* background pattern */}
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:20px_20px] -z-10"></div>
              
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-amber-600 transition-colors">Based in</h3>
              <p className="text-lg text-gray-700 font-medium">Malta, EU</p>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-amber-50 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            </div>
            
            {/* time Card */}
            <div className="group bg-white/60 backdrop-blur-sm hover:bg-white/80 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center border border-transparent hover:border-indigo-200 overflow-hidden relative h-full">
              {/* pattern */}
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px] -z-10"></div>
              
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">My Time</h3>
              <p className="text-lg text-gray-700 font-medium mb-1">{currentTime}</p>
              <p className="text-xs text-gray-500">Malta Timezone (CEST)</p>
              <div className="mt-3 w-12 h-0.5 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-50 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            </div>
            
            {/* work Card */}
            <div className="group bg-white/60 backdrop-blur-sm hover:bg-white/80 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center border border-transparent hover:border-indigo-200 overflow-hidden relative h-full">
              {/* background pattern */}
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px] -z-10"></div>
              
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                <Laptop className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-emerald-600 transition-colors">Work Style</h3>
              
              <div className="flex gap-2 mb-1">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-emerald-800 text-xs font-medium bg-emerald-100 border border-emerald-200">
                  Remote/Hybrid
                </span>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-emerald-800 text-xs font-medium bg-emerald-100 border border-emerald-200">
                  On Site
                </span>
              </div>
              
              <p className="text-gray-500 mt-2 text-sm">Flexible arrangements</p>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-50 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            </div>
            
            {/* Card */}
            <div className="group bg-white/60 backdrop-blur-sm hover:bg-white/80 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center border border-transparent hover:border-indigo-200 overflow-hidden relative h-full">
              {/*  pattern */}
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ec4899_1px,transparent_1px)] [background-size:20px_20px] -z-10"></div>
              
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-pink-600 transition-colors">Tech Enthusiast</h3>
              <p className="text-lg text-gray-700 font-medium">Always learning</p>
              <div className="mt-3 flex space-x-1">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-300 animate-pulse"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" style={{ animationDelay: '300ms' }}></span>
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" style={{ animationDelay: '600ms' }}></span>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-50 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            </div>
            
            {/* Available Work Card */}
            <div className="group bg-white/60 backdrop-blur-sm hover:bg-white/80 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center border border-transparent hover:border-indigo-200 overflow-hidden relative h-full">
              {/* pattern */}
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:20px_20px] -z-10"></div>
              
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-indigo-600 transition-colors">Available for Work</h3>
              <p className="text-gray-600 font-medium text-sm">Open to full-time, part-time and internship positions</p>
              <div className="mt-3 w-12 h-0.5 bg-gradient-to-r from-indigo-300 to-violet-300 rounded-full"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-50 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            </div>
            
            {/* Let's Work Together Card */}
            <div className="group bg-white/60 backdrop-blur-sm hover:bg-white/80 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center border border-transparent hover:border-indigo-200 overflow-hidden relative h-full">
              {/*  pattern */}
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#7c3aed_1px,transparent_1px)] [background-size:20px_20px] -z-10"></div>
              
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-400 to-fuchsia-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-purple-600 transition-colors">Let's Work Together</h3>
              <a 
                href={`mailto:${EMAIL_ADDRESS}`}
                className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors inline-flex items-center text-sm"
              >
                {EMAIL_ADDRESS}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
              <div className="mt-3 w-12 h-0.5 bg-gradient-to-r from-purple-300 to-fuchsia-300 rounded-full"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-50 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* project showcase */}
      <section className="py-24 bg-gradient-to-b from-purple-50/90 via-indigo-50/70 to-white relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-200/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/10 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          
          <div className="relative mb-20 text-center">
            <h2 className="text-5xl font-extrabold mb-2 relative z-10 inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">My</span>
              <span className="relative mx-2 inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">Recent</span>
                <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full"></div>
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Work</span>
              <div className="absolute -z-10 bottom-1 left-0 w-full h-6 bg-gradient-to-r from-indigo-200/30 to-purple-200/30 rounded-lg transform skew-x-12 blur"></div>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Check out some of my featured projects showcasing my skills and expertise
            </p>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500/5 to-purple-500/5 animate-ping-slow -z-10"></div>
          </div>
          
          <div className="max-w-7xl mx-auto space-y-40">
            {showcaseProjects.map((project, index) => (
              <div key={index} className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700">
                {/* project Header */}
                <div className="text-center mb-16">
                  <h3 className="text-sm uppercase tracking-widest text-indigo-600 font-semibold mb-3">Featured Project {index + 1}</h3>
                  <h2 className="text-4xl font-bold mb-3 inline-flex items-center justify-center">
                    <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                      {project.title}
                    </span>
                    <span className="mx-3 text-gray-300">|</span>
                    <span className="text-gray-600 font-normal text-2xl">{project.subtitle}</span>
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
                </div>
                
                <div className="flex flex-col lg:flex-row gap-12 items-center ">
                  <div className="w-full lg:w-3/5 aspect-video rounded-2xl overflow-hidden shadow-2xl relative group transition-all duration-500">
                    {/* Browser UI mockup :3 */}
                    <div className="absolute top-0 left-0 right-0 h-8 bg-gray-100 rounded-t-xl flex items-center px-4 gap-1.5 z-20">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      <div className="ml-4 h-5 w-1/2 bg-white rounded-full text-xs text-gray-400 flex items-center justify-center font-mono">
                        {project.demoLink}
                      </div>
                    </div>
                    
                    
                    <div className="relative w-full h-full">
                      <img 
                        src={project.fullScreenshot} 
                        alt={`${project.title} application screenshot`}
                        className="w-full h-full object-cover object-center pt-8" // Added pt-8 to push image down below the browser UI
                        onError={(e) => {
                          console.error(`Failed to load image for ${project.title}`, {
                            fullScreenshot: project.fullScreenshot,
                            type: typeof project.fullScreenshot,
                            placeholderType: typeof placeholderImage
                          });
                          e.currentTarget.src = placeholderImage;
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Project Details */}
                  <div className="w-full lg:w-2/5 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-800">About the Project</h3>
                      <p className="text-gray-600 leading-relaxed">{project.description}</p>
                    </div>
                    
                    {/* Key Highlights */}
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-gray-800">Key Highlights</h3>
                      <ul className="space-y-3">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start">
                            <div className="mt-1 mr-3 w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-xs font-bold">{i+1}</span>
                            </div>
                            <p className="text-gray-700">{highlight}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Tech Stack Tags */}
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-gray-800">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, i) => (
                          <TechTag key={i} name={tech} />
                        ))}
                      </div>
                    </div>
                    
                    {/* Links */}
                    <div className="pt-4 flex gap-4">
                      <a 
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-1 font-medium text-indigo-600 hover:text-indigo-800 transition-colors group"
                      >
                        View Live Demo
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </a>
                      <a 
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-1 font-medium text-gray-600 hover:text-gray-800 transition-colors group"
                      >
                        Source Code
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CV download section */}
      <section className="py-20 bg-gradient-to-b from-white via-pink-50/50 to-purple-50/80 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-indigo-200 to-blue-200 rounded-full filter blur-3xl opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Download My CV</h2>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <CvOption title="Jr" subtitle="Frontend Developer" filename={DarianCv} />
            <CvOption title="Tech" subtitle="Technical CV" filename={GeneralCv} /> 
          </div>
        </div>
      </section>

      {/* Tech stack  */}
      <section id="skills" className="py-24 bg-gradient-to-b from-white/90 via-indigo-50/50 to-purple-50/80 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            My Tech Stack
          </h2>
          
          <div className="max-w-5xl mx-auto space-y-10">
            {techStack.map((category, index) => (
              <div 
                key={index}
                className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mr-4 shadow-lg`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{category.category}</h3>
                  <div className="flex-grow h-px bg-gradient-to-r from-primary-500/50 to-transparent ml-4"></div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.items.map((tech, i) => (
                    <TechTag key={i} name={tech} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact  */}
      <section id="contact" className="py-28 bg-gradient-to-b from-purple-50/80 via-indigo-50/60 to-blue-50/90 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll opacity-0 translate-y-4 transition-all duration-700">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Let's Work Together</h2>
            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              Feel free to reach out, and I'll get back to you as soon as possible!
            </p>
            <a 
              href={`mailto:${EMAIL_ADDRESS}`} 
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-10 py-4 rounded-xl text-xl font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 inline-flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </a>
            <p className="mt-6 text-gray-500">{EMAIL_ADDRESS}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

// CSS  grid pattern
const styleElement = document.createElement('style');
styleElement.textContent = `
  .bg-grid-pattern {
    background-image: 
      linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px);
    background-size: 30px 30px;
  }
  
  @keyframes ping-slow {
    0% {
      transform: scale(1);
      opacity: 0.5;
    }
    50% {
      opacity: 0.2;
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }
  
  .animate-ping-slow {
    animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
  }
`;
document.head.appendChild(styleElement);

export default Home;
