import React, { JSX } from 'react';
import { FaJava, FaReact, FaNodeJs, FaDatabase, FaCode } from 'react-icons/fa';
import { SiTypescript, SiSpringboot, SiPostgresql, SiExpress } from 'react-icons/si';

// tech icon maps
const techIcons: Record<string, JSX.Element> = {
  'Java': <FaJava />,
  'TypeScript': <SiTypescript />,
  'JavaScript': <FaCode />,
  'React': <FaReact />,
  'Spring Boot': <SiSpringboot />,
  'Node.js': <FaNodeJs />,
  'Express': <SiExpress />,
  'PostgreSQL': <SiPostgresql />,
  'Database': <FaDatabase />,
  'default': <FaCode />
};

interface TechTagProps {
  name: string;
}

const TechTag: React.FC<TechTagProps> = ({ name }) => {
  const getIcon = () => {
    return techIcons[name] || techIcons['default'];
  };
  
  // color maps by category
  const getBgColor = () => {
    if (name.includes('Java') || name.includes('Spring')) {
      return 'bg-orange-100 text-orange-700 border-orange-200';
    } else if (name.includes('React') || name.includes('Script')) {
      return 'bg-blue-100 text-blue-700 border-blue-200';
    } else if (name.includes('Node') || name.includes('Express')) {
      return 'bg-green-100 text-green-700 border-green-200';
    } else if (name.includes('SQL') || name.includes('Database')) {
      return 'bg-purple-100 text-purple-700 border-purple-200';
    } else if (name.includes('Azure')) {
      return 'bg-indigo-100 text-indigo-700 border-indigo-200';
    } else if (name.includes('Auth')) {
      return 'bg-yellow-100 text-yellow-700 border-yellow-200';
    } else if (name.includes('REST') || name.includes('API')) {
      return 'bg-rose-100 text-rose-700 border-rose-200';
    } else {
      return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium ${getBgColor()} transition-colors duration-200 hover:bg-opacity-80 border`}>
      <span className="mr-1.5">{getIcon()}</span>
      {name}
    </span>
  );
};

export default TechTag;
