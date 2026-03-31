import React from 'react';
import { ShieldCheck } from 'lucide-react';

const SecurityAlert = () => {
  return (
    <div className="p-8 rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-700 text-white relative overflow-hidden">
      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-2">Security Alert</h3>
        <p className="text-indigo-100/80 text-sm mb-6 leading-relaxed">
          We've detected a new login from a device you don't usually use. Please verify.
        </p>
        <button className="w-full py-3 bg-white text-indigo-600 rounded-xl font-bold hover:bg-indigo-50 transition-colors">
          Review Security
        </button>
      </div>
      <ShieldCheck className="absolute -bottom-4 -right-4 w-32 h-32 text-white/10" />
    </div>
  );
};

export default SecurityAlert;
