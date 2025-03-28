import { 
  Code2, 
  Database, 
  Server, 
  KeyRound, 
  Globe, 
  Layout, 
  Layers, 
  GitBranch,
  Cpu,
  PenTool
} from 'lucide-react';

interface SkillProps {
  title: string;
  description: string;
  category?: string;
}

const SkillSection = ({ 
  title, 
  skills 
}: { 
  title: string; 
  skills: SkillProps[] 
}) => {
  // Icon selection  magic
  const getIconForSkill = (skillTitle: string) => {
    if (skillTitle.includes('Java') || skillTitle.includes('Script') || skillTitle.includes('React')) {
      return <Code2 className="w-6 h-6 text-primary-500" />;
    } else if (skillTitle.includes('Database') || skillTitle.includes('SQL')) {
      return <Database className="w-6 h-6 text-primary-500" />;
    } else if (skillTitle.includes('API') || skillTitle.includes('REST')) {
      return <Globe className="w-6 h-6 text-primary-500" />;
    } else if (skillTitle.includes('Auth')) {
      return <KeyRound className="w-6 h-6 text-primary-500" />;
    } else if (skillTitle.includes('State') || skillTitle.includes('Data')) {
      return <Layers className="w-6 h-6 text-primary-500" />;
    } else if (skillTitle.includes('Git')) {
      return <GitBranch className="w-6 h-6 text-primary-500" />;
    } else if (skillTitle.includes('Node') || skillTitle.includes('Express')) {
      return <Server className="w-6 h-6 text-primary-500" />;
    } else if (skillTitle.includes('CSS')) {
      return <PenTool className="w-6 h-6 text-primary-500" />;
    } else if (skillTitle.includes('Next')) {
      return <Cpu className="w-6 h-6 text-primary-500" />;
    } else {
      return <Layout className="w-6 h-6 text-primary-500" />;
    }
  };

  return (
    <div className="mb-20">
      <h2 className="text-2xl font-bold text-gray-800 mb-10 flex items-center">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-600 flex items-center justify-center mr-4 shadow-lg">
          <span className="text-white font-bold">{title.charAt(0)}</span>
        </div>
        <span className="gradient-text text-2xl">{title}</span>
        <div className="flex-grow h-px bg-gradient-to-r from-primary-500/50 to-transparent ml-4"></div>
      </h2>
      
      {/* skills */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="card-3d bg-white rounded-xl p-6 shadow-md hover:shadow-xl border border-gray-100 flex group hover:-translate-y-1 transition-all duration-500"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="mr-5 rounded-xl h-12 w-12 flex items-center justify-center bg-gradient-to-br from-primary-500/10 to-secondary-500/10 group-hover:from-primary-500/20 group-hover:to-secondary-500/20 transition-all duration-300">
              <div className="group-hover:scale-110 transition-transform duration-300">
                {getIconForSkill(skill.title)}
              </div>
            </div>
            <div className="card-content">
              <h3 className="font-semibold text-gray-800 mb-2 text-lg group-hover:text-primary-600 transition-colors duration-300">
                {skill.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
