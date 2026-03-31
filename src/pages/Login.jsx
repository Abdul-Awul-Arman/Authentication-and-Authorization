import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import { Mail, Lock, ArrowRight, UserCircle2 } from 'lucide-react';

import { useAuth } from '../context/AuthContext';


const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('user');
  
  const { login } = useAuth();



  const handleSubmit = (e) => {
    e.preventDefault();
    const paylod = {
      email: e.target.email.value,
      password: e.target.password.value,
      role: role
    };
    login(paylod);
   
  };



  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center p-6 font-sans relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-screen filter blur-3xl shadow-2xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-screen filter blur-3xl shadow-2xl"></div>

      <div className="z-10 w-full max-w-md">
        <div className="text-center mb-10 flex flex-col items-center">
          <Link to="/">
            <Logo />
          </Link>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Securely access your account manager
          </p>
          
          {/* Test Credentials Helper */}
          <div className="mt-6 p-3 rounded-xl bg-cyan-500/5 border border-cyan-500/10 flex flex-col gap-1 items-center">
             <p className="text-[10px] uppercase font-bold tracking-widest text-cyan-400/60 mb-1">Testing Credentials</p>
             <div className="flex gap-3 text-xs">
                <span className="text-gray-400">Email: <span className="text-cyan-300 font-mono select-all">john@mail.com</span></span>
                <span className="text-gray-400">Pass: <span className="text-cyan-300 font-mono select-all">changeme</span></span>
             </div>
          </div>
        </div>

        <div className="bg-gray-900/50 backdrop-blur-xl border border-white/5 shadow-2xl rounded-2xl p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email address
              </label>
              <div className="mt-2 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-500" strokeWidth={1.5} />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-xl bg-gray-950/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all sm:text-sm"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-medium text-cyan-400 hover:text-cyan-300 transition-colors">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-500" strokeWidth={1.5} />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-xl bg-gray-950/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all sm:text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Simulate Role
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setRole('user')}
                  className={`py-2 px-4 rounded-xl border text-xs font-bold transition-all ${
                    role === 'user' 
                    ? 'border-cyan-500 bg-cyan-500/10 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)]' 
                    : 'border-white/10 text-gray-500 hover:border-white/20'
                  }`}
                >
                  Regular User
                </button>
                <button
                  type="button"
                  onClick={() => setRole('admin')}
                  className={`py-2 px-4 rounded-xl border text-xs font-bold transition-all ${
                    role === 'admin' 
                    ? 'border-purple-500 bg-purple-500/10 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.2)]' 
                    : 'border-white/10 text-gray-500 hover:border-white/20'
                  }`}
                >
                  Admin Access
                </button>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-gray-900 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-950 focus:ring-cyan-500 transition-all group items-center"
              >
                Sign in
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
          
          <div className="mt-8 text-center text-sm text-gray-400">
            Don't have an account?{' '}
            <Link to="/register" className="font-medium text-cyan-400 hover:text-cyan-300 transition-colors">
              Sign up now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
