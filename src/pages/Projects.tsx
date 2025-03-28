import { useEffect, useRef } from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "BUDGETER App",
      description: "A comprehensive budget management application that helps users track their expenses and manage finances. Uses Azure AI OCR to extract information from receipts and automatically categorize expenses.",
      technologies: ["Spring Boot", "Java", "Azure AI OCR", "JPA", "SQLite3", "React", "TypeScript"],
      githubLink: "https://github.com/ShadowOfHumanity/RestAPI-Finance-Budgeter",
      demoLink: "#",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "JobsForMalta",
      description: "A full-stack job listing platform with advanced features including authentication, user sessions, and category-based job filtering. Helps job seekers find relevant opportunities in Malta.",
      technologies: ["Node.js", "Express.js", "PostgreSQL", "React", "Authentication", "REST API", "Tailwind"],
      githubLink: "https://github.com/ShadowOfHumanity/JobsInMalta---Tailwind",
      demoLink: "#",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Game Hub",
      description: "An interactive gaming platform that allows users to browse, search, and discover games based on various criteria including genres, platforms, and ratings.",
      technologies: ["React", "TypeScript", "API Integration", "Responsive Design"],
      githubLink: "https://github.com/ShadowOfHumanity/game-hub",
      demoLink: "#",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
        </svg>
      )
    },
    {
      title: "Weather Dashboard",
      description: "An interactive weather application that provides real-time weather data and forecasts for any location worldwide using OpenWeatherMap API.",
      technologies: ["JavaScript", "HTML5", "CSS3", "REST API", "LocalStorage", "Responsive Design"],
      githubLink: "https://github.com/ShadowOfHumanity/minature-weather-app",
      demoLink: "#",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    {
      title: "TryJarvis V1",
      description: "A voice-controlled assistant application inspired by Jarvis from Iron Man. Implements speech recognition and natural language processing to respond to user commands.",
      technologies: ["Python", "Speech Recognition", "NLP", "APIs"],
      githubLink: "https://github.com/ShadowOfHumanity/TryJarvisV1",
      demoLink: "#",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      )
    },
    {
      title: "TurnOffPC via Local Network",
      description: "A utility application that allows remote shutdown of computers on a local network. Useful for managing multiple machines in a home or office environment.",
      technologies: ["C#", ".NET", "Network Programming", "Windows API"],
      githubLink: "https://github.com/ShadowOfHumanity/TurnOffPC-viaLocalNetwork",
      demoLink: "#",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
        </svg>
      )
    }
  ];

  // Ref for intersection observer
  const animatedElements = useRef<NodeListOf<Element> | null>(null);

  // Scroll anim setup
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

  return (
    <div className="pt-20">
      {/* project showcase */}
      <section className="bg-gradient-to-b from-white to-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 text-gray-800">My Projects</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Check out some of the projects I've worked on that showcase my skills and expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index}
                index={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                githubLink={project.githubLink}
                demoLink={project.demoLink}
                icon={project.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll opacity-0 translate-y-4 transition-all duration-700">
            <h2 className="text-3xl font-bold mb-6 text-primary-600">Want to See More?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Visit my GitHub profile to see all of my projects including smaller experiments and contributions to open source.
            </p>
            <a 
              href="https://github.com/ShadowOfHumanity?tab=repositories" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors duration-300 inline-block"
            >
              View GitHub Profile
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
