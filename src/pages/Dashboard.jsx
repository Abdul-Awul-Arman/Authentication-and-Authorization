import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/dashboard/Sidebar';
import Header from '../components/dashboard/Header';
import StatsGrid from '../components/dashboard/StatsGrid';
import ProfileOverview from '../components/dashboard/ProfileOverview';
import RecentActivity from '../components/dashboard/RecentActivity';
import SecurityAlert from '../components/dashboard/SecurityAlert';
import { Zap } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans flex">
      <Sidebar handleLogout={handleLogout} />

      <main className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Dashboard Overview</h2>
              <p className="text-gray-400 mt-1">Welcome back, here's what's happening today.</p>
            </div>
            <button className="bg-white text-gray-900 px-6 py-2.5 rounded-xl font-semibold hover:bg-gray-200 transition-all flex items-center gap-2 shadow-lg shadow-white/5">
              <Zap className="w-4 h-4" />
              Upgrade Plan
            </button>
          </div>

          <StatsGrid />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <ProfileOverview />
            <RecentActivity />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              {/* You can add more components here later */}
            </div>
            <SecurityAlert />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
