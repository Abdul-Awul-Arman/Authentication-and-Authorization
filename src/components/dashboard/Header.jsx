import React from 'react';
import { Search, Bell } from 'lucide-react';

const Header = () => {
  return (
    <header className="h-20 border-b border-white/5 bg-gray-950/50 backdrop-blur-md px-8 flex items-center justify-between z-10">
      <div className="relative w-96 group">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-cyan-400 transition-colors" />
        <input 
          type="text" 
          placeholder="Search anything..." 
          className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all text-sm"
        />
      </div>

      <div className="flex items-center gap-6">
        <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
          <Bell className="w-5 h-5" strokeWidth={1.5} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-purple-500 rounded-full border-2 border-gray-950" />
        </button>
        <div className="flex items-center gap-3 pl-6 border-l border-white/10">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-500 p-[1px]">
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center font-bold text-xs">
              AA
            </div>
          </div>
          <div className="hidden lg:block text-left">
            <p className="text-sm font-semibold">Abdul Ali</p>
            <p className="text-xs text-gray-500">Pro Account</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
