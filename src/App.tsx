import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // loading simulation on web join
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return (
      //  spinner
      <div className="flex justify-center items-center h-screen bg-white">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-b-secondary-600 rounded-full animate-spin animation-delay-150 opacity-70"></div>
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <div className="w-6 h-6 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    // main router
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800 noise-bg">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        
        {/* footer */}
        <footer className="relative overflow-hidden py-16 mt-16">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-secondary-900"></div>
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="footer-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#footer-grid)" />
            </svg>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="flex flex-col">
                <div className="flex items-center mb-5">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mr-3">
                    <span className="font-bold text-xl text-white">D</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Full-Stack Dev</h3>
                </div>
                <p className="text-primary-100 mb-6">Building robust applications with modern technologies that solve real-world problems</p>
                <div className="flex gap-4 mt-auto">
                  <a href="https://github.com/ShadowOfHumanity?tab=repositories" target="_blank" rel="noopener noreferrer" 
                     className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/5 hover:bg-white/10 text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.169 6.839 9.489.5.092.682-.217.682-.48 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.165 22 16.418 22 12c0-5.523-4.477-10-10-10z"></path>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/darian-baker-1402b2327/" target="_blank" rel="noopener noreferrer"
                     className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/5 hover:bg-white/10 text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="mailto:darianbakerbray@gmail.com"
                     className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/5 hover:bg-white/10 text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-4 text-lg">Navigation</h4>
                  <ul className="space-y-2">
                    <li><a href="/" className="text-primary-200 hover:text-white transition-colors">Home</a></li>
                    <li><a href="/projects" className="text-primary-200 hover:text-white transition-colors">Projects</a></li>
                    <li><a href="/#skills" className="text-primary-200 hover:text-white transition-colors">Skills</a></li>
                    <li><a href="/#contact" className="text-primary-200 hover:text-white transition-colors">Contact</a></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-4 text-lg">Resources</h4>
                  <ul className="space-y-2">
                    <li><a href="/resume.pdf" className="text-primary-200 hover:text-white transition-colors">Resume</a></li>
                    <li><a href="https://github.com/ShadowOfHumanity?tab=repositories" className="text-primary-200 hover:text-white transition-colors">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/darian-baker-1402b2327/" className="text-primary-200 hover:text-white transition-colors">LinkedIn</a></li>
                  </ul>
                </div>
                
                <div className="col-span-2 md:col-span-1">
                  <h4 className="text-white font-semibold mb-4 text-lg">Contact Me</h4>
                  <p className="text-primary-200 mb-4">Feel free to reach out for collaborations or just a friendly hello</p>
                  <a 
                    href="mailto:darianbakerbray@gmail.com" 
                    className="inline-block px-5 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/10 text-center text-primary-200 text-sm">
              <p>© {new Date().getFullYear()} - Full-Stack Developer Portfolio. All rights reserved.</p>
            </div>
          </div>
          
          
          <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-primary-600/10 blur-3xl"></div>
          <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-secondary-600/10 blur-3xl"></div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
