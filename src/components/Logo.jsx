import React from 'react';

const Logo = () => {

  
  return (
    <div className="relative group cursor-pointer">
      {/* Glowing background that appears on hover */}
      <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
      
      <div className="relative flex items-center justify-center w-24 h-24 rounded-2xl bg-gray-900/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-500">
        {/* Inner gradient element */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600/20 to-transparent"></div>
        
        {/* The actual SVG Logo */}
        <svg 
          className="w-12 h-12 text-white drop-shadow-[0_0_15px_rgba(14,165,233,0.5)]" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="url(#react-logo-gradient)" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <defs>
            <linearGradient id="react-logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#c084fc" />
            </linearGradient>
          </defs>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <path d="m9 12 2 2 4-4"></path>
        </svg>

        {/* Ambient glow */}
        <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-cyan-500/30 rounded-full blur-xl animate-spin"></div>
      </div>
    </div>
  );
};

export default Logo;
