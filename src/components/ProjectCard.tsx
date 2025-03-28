interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
  icon?: React.ReactNode;
  index: number;
}

const ProjectCard = ({ title, description, technologies, githubLink, demoLink, icon, index }: ProjectCardProps) => {
  return (
    <div 
      className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 bg-white rounded-2xl overflow-hidden shadow-3d hover:shadow-xl border border-gray-100 group card-3d"
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-primary-50/50 to-secondary-50/50">
        <div className="flex items-center space-x-4 mb-2 card-content">
          {icon && (
            <div className="w-14 h-14 p-3 bg-gradient-to-br from-primary-100 to-secondary-100 text-primary-600 rounded-xl flex items-center justify-center group-hover:shadow-md transition-all duration-300 transform group-hover:scale-110">
              {icon}
            </div>
          )}
          <h3 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            {title}
          </h3>
        </div>
      </div>
      
      <div className="p-6 card-content">
        <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>
        
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-600 mb-3">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, techIndex) => (
              <span 
                key={techIndex} 
                className="bg-gradient-to-r from-primary-50 to-secondary-50 text-primary-700 text-xs px-3 py-1.5 rounded-full border border-primary-100 hover:from-primary-100 hover:to-secondary-100 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex gap-4 pt-4 border-t border-gray-100">
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors group"
            >
              <svg className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.169 6.839 9.489.5.092.682-.217.682-.48 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.165 22 16.418 22 12c0-5.523-4.477-10-10-10z"></path>
              </svg>
              <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-500 after:transition-all after:duration-300 group-hover:after:w-full">
                View Code
              </span>
            </a>
          )}
          
          {demoLink && (
            <a 
              href={demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors group"
            >
              <svg className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
              <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-500 after:transition-all after:duration-300 group-hover:after:w-full">
                Live Demo
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
