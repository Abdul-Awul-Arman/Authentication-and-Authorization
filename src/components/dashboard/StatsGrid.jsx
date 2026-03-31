import React from 'react';

const StatsGrid = () => {
  const stats = [
    { label: 'Total Users', value: '12,842', trend: '+12%', color: 'from-cyan-500/20' },
    { label: 'Active Sessions', value: '3,421', trend: '+5%', color: 'from-purple-500/20' },
    { label: 'API Requests', value: '45.2k', trend: '+24%', color: 'from-indigo-500/20' },
    { label: 'System Health', value: '99.9%', trend: 'Stable', color: 'from-emerald-500/20' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, i) => (
        <div key={i} className={`p-6 rounded-2xl bg-gray-900/50 border border-white/5 bg-gradient-to-br ${stat.color} to-transparent`}>
          <p className="text-sm text-gray-400 font-medium">{stat.label}</p>
          <div className="mt-2 flex items-end justify-between">
            <h3 className="text-2xl font-bold">{stat.value}</h3>
            <span className={`text-xs font-bold px-2 py-1 rounded-md ${stat.trend.startsWith('+') ? 'text-emerald-400 bg-emerald-400/10' : 'text-cyan-400 bg-cyan-400/10'}`}>
              {stat.trend}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;
