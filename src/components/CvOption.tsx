interface CvOptionProps {
  title: string;
  subtitle: string;
  filename: string;
}

const CvOption = ({ title, subtitle, filename }: CvOptionProps) => {
  return (
    <div className="relative duration-500 hover:rotate-0 -rotate-3 group overflow-hidden rounded-2xl h-60 w-80 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-800 p-5 flex flex-col items-start gap-4 shadow-lg hover:shadow-primary-500/30 transform hover:scale-105">
      <div className="absolute top-0 left-0 w-full h-full opacity-50 overflow-hidden">
        <svg className="w-full h-full transform scale-150 opacity-10" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="text-gray-50 z-10">
        <span className="font-bold text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">{title}</span>
        <p className="text-sm mt-1 text-primary-100 font-medium tracking-wide">{subtitle}</p>
      </div>
      
      <a 
        href={filename} 
        download 
        className="duration-300 hover:bg-white/10 border border-white/30 hover:border-white/70 text-white px-5 py-3 rounded-lg flex flex-row items-center gap-3 backdrop-blur-sm z-10 mt-auto group-hover:shadow-lg"
      >
        Download CV 
        <svg className="w-6 h-6 fill-current animate-bounce-slow" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
          <path d="M22.1,77.9a4,4,0,0,1,4-4H73.9a4,4,0,0,1,0,8H26.1A4,4,0,0,1,22.1,77.9ZM35.2,47.2a4,4,0,0,1,5.7,0L46,52.3V22.1a4,4,0,1,1,8,0V52.3l5.1-5.1a4,4,0,0,1,5.7,0,4,4,0,0,1,0,5.6l-12,12a3.9,3.9,0,0,1-5.6,0l-12-12A4,4,0,0,1,35.2,47.2Z" fillRule="evenodd"></path>
        </svg>
      </a>

      {/* Decorative elements */}
      <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-white/5 rounded-full z-0 group-hover:bg-white/10 transition-all duration-500"></div>
      <div className="absolute top-10 -left-10 w-20 h-20 bg-white/5 rounded-full z-0 group-hover:bg-white/10 transition-all duration-500"></div>
      
      <svg className="group-hover:scale-125 duration-500 absolute -bottom-2 -right-5 w-32 h-32 z-10 -my-2 fill-white/50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
        <path data-name="layer1" d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z" strokeMiterlimit="10" strokeWidth="1"></path>
      </svg>
      
      <div className="absolute top-0 right-0 p-3">
        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
          {subtitle.includes("Front") ? (
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          ) : (
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default CvOption;
