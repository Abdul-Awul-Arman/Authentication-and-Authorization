import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center p-6 font-sans">
      <div className="max-w-4xl text-center flex flex-col items-center">
        <div className="mb-8">
          <Logo />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500">NexAuth</span>
        </h1>
        
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          The most secure, robust, and beautiful authorization platform built with React and Tailwind CSS.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/login"
            className="px-8 py-3 rounded-full bg-white text-gray-900 font-semibold hover:bg-gray-200 transition-colors shadow-lg shadow-white/10"
          >
            Sign In
          </Link>
          <Link 
            to="/register"
            className="px-8 py-3 rounded-full bg-gray-900/50 backdrop-blur-md text-white font-medium border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
