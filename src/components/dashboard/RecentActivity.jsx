import React from 'react';
import { Activity, ChevronRight } from 'lucide-react';

const RecentActivity = () => {
  return (
    <div className="lg:col-span-2 p-8 rounded-3xl bg-gray-900/50 border border-white/5 relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
        <Activity className="w-32 h-32" />
      </div>
      <h3 className="text-xl font-bold mb-6">Recent Activity</h3>
      <div className="space-y-6">
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">New deployment successful</p>
              <p className="text-xs text-gray-500">24 minutes ago in Production</p>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
