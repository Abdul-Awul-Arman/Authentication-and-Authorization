import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import { 
  LayoutDashboard, 
  Users, 
  ShieldCheck, 
  Activity, 
  Settings, 
  ShieldAlert, 
  LogOut 
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Sidebar = ({ handleLogout }) => {

  const { userInfo } = useAuth()

  // const user={...userInfo,role:"admin"};
  const user={...userInfo,role:"user"};
  return (
    <aside className="w-64 border-r border-white/5 bg-gray-900/20 backdrop-blur-xl flex flex-col">
      <div className="p-6 flex items-center gap-3">
        <div className="scale-75 origin-left">
          <Logo />
        </div>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-2">
        {[
          { icon: LayoutDashboard, label: 'Overview', active: true },
          { icon: Users, label: 'Team Members' },
          { icon: ShieldCheck, label: 'Security' },
          { icon: Activity, label: 'Analytics' },
          { icon: Settings, label: 'Settings' },
        ].map((item, i) => (
          <button
            key={i}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
              item.active 
              ? 'bg-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.05)]' 
              : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <item.icon className="w-5 h-5" strokeWidth={1.5} />
            <span className="font-medium">{item.label}</span>
            {item.active && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />}
          </button>
        ))}

        {user?.role === "admin" && (
          <Link
            to="/admin"
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-red-400 hover:text-red-300 hover:bg-red-400/5 group"
          >
            <ShieldAlert className="w-5 h-5 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
            <span className="font-medium">Admin Panel</span>
          </Link>
        )}
      </nav>

      <div className="p-4 mt-auto">
        <button 
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-400/10 transition-all duration-200 group"
        >
          <LogOut className="w-5 h-5 group-hover:-translate-x-1 transition-transform" strokeWidth={1.5} />
          <span className="font-medium">Sign Out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
