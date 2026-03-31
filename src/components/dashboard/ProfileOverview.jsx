import { Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';



const ProfileOverview = () => {
  
  const { userInfo } = useAuth()

  const user=userInfo;


  return (
    <div className="p-8 rounded-3xl bg-gray-900/50 border border-white/5 relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
        <Users className="w-32 h-32" />
      </div>
      <h3 className="text-xl font-bold mb-6">Profile Overview</h3>
      <div className="flex items-center gap-6 mb-8">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-cyan-500 to-purple-500 p-[1px]">
          <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center font-bold text-2xl">
            AA
          </div>
        </div>
        <div>
          <p className="text-2xl font-bold">{user?.name}</p>
          <p className="text-gray-400">{user?.role}</p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between text-sm py-3 border-b border-white/5">
          <span className="text-gray-500">Email</span>
          <span className="text-gray-300">{user?.email}</span>
        </div>
        <div className="flex justify-between text-sm py-3 border-b border-white/5">
          <span className="text-gray-500">Location</span>
          <span className="text-gray-300">{user?.address}</span>
        </div>
        <div className="flex justify-between text-sm py-3">
          <span className="text-gray-500">Created Date</span>
          <span className="text-gray-300">{user?.createdAt}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileOverview;
