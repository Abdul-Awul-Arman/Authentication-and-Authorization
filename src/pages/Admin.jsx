import React from 'react';
import { ShieldAlert, AlertTriangle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center p-6 text-white text-center">
      <div className="w-24 h-24 bg-red-500/10 rounded-full flex items-center justify-center mb-8 border border-red-500/20 shadow-[0_0_50px_rgba(239,68,68,0.2)]">
        <ShieldAlert className="w-12 h-12 text-red-500" />
      </div>
      
      <h1 className="text-4xl font-bold mb-4">Admin Control Center</h1>
      <p className="text-gray-400 max-w-md mb-12">
        This is a restricted administrative zone. If you can see this, you have the <span className="text-red-400 font-mono">admin</span> role assigned to your account.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl mb-12">
        <div className="p-8 rounded-3xl bg-gray-900/50 border border-red-500/10 text-left">
          <AlertTriangle className="text-red-400 mb-4" />
          <h3 className="font-bold mb-2">Delete All Logs</h3>
          <p className="text-xs text-gray-500">Irreversible action that clears entire system history.</p>
        </div>
        <div className="p-8 rounded-3xl bg-gray-900/50 border border-red-500/10 text-left opacity-50">
          <h3 className="font-bold mb-2">Global Lockdown</h3>
          <p className="text-xs text-gray-500">Temporarily disable all user authentication.</p>
        </div>
      </div>

      <Link 
        to="/dashboard" 
        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Dashboard
      </Link>
    </div>
  );
};

export default Admin;
