import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'py-3 glass shadow-xl' : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-lg flex items-center justify-center mr-3 shadow-lg group-hover:shadow-primary-500/30 transition-all duration-300 group-hover:scale-110">
                <span className="font-bold text-xl text-white">D</span>
              </div>
              <span className={`font-bold text-2xl ${
                isScrolled 
                  ? 'bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent' 
                  : 'bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent'
              }`}>
                Portfolio
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link 
              to="/" 
              className={`relative px-1 py-2 group ${
                isActive('/') 
                  ? 'text-primary-600 font-medium' 
                  : 'text-gray-600 hover:text-primary-600'
              } transition-colors`}
            >
              <span className="relative z-10">Home</span>
              {isActive('/') ? (
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></span>
              ) : (
                <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full group-hover:w-full transition-all duration-300"></span>
              )}
            </Link>
            
            <Link 
              to="/projects" 
              className={`relative px-1 py-2 group ${
                isActive('/projects') 
                  ? 'text-primary-600 font-medium' 
                  : 'text-gray-600 hover:text-primary-600'
              } transition-colors`}
            >
              <span className="relative z-10">Projects</span>
              {isActive('/projects') ? (
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></span>
              ) : (
                <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full group-hover:w-full transition-all duration-300"></span>
              )}
            </Link>
            
            <Link 
              to="https://github.com/ShadowOfHumanity" 
              className="relative px-1 py-2 group text-gray-600 hover:text-primary-600 transition-colors"
            >
              <span className="relative z-10">GitHub</span>
              <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <Link 
              to="https://www.linkedin.com/in/darian-baker-1402b2327/" 
              className="relative px-1 py-2 group text-gray-600 hover:text-primary-600 transition-colors"
            >
              <span className="relative z-10">LinkedIn</span>
              <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <Link 
              to="/contact" 
              className="px-5 py-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-600 text-white font-medium hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact Me
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-primary-600 focus:outline-none bg-white/80 rounded-full backdrop-blur-sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 glass rounded-2xl backdrop-blur-md animate-fade-in">
            <div className="flex flex-col space-y-2 px-4">
              <Link 
                to="/" 
                className={`${isActive('/') ? 'text-primary-600 font-medium' : 'text-gray-700'} py-3 px-3 rounded-lg hover:bg-white/10`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/projects" 
                className={`${isActive('/projects') ? 'text-primary-600 font-medium' : 'text-gray-700'} py-3 px-3 rounded-lg hover:bg-white/10`}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                to="/github" 
                className="text-gray-700 py-3 px-3 rounded-lg hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                GitHub
              </Link>
              <Link 
                to="/linkedin" 
                className="text-gray-700 py-3 px-3 rounded-lg hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                LinkedIn
              </Link>
              <Link 
                to="/contact"
                className="mt-2 py-3 text-center rounded-lg bg-gradient-to-r from-primary-500 to-secondary-600 text-white font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Me
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
