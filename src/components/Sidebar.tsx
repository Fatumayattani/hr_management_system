import React from 'react';
import { Users, Calendar, Star, Menu } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const menuItems = [
    { id: 'employees', label: 'Employees', icon: Users },
    { id: 'leave', label: 'Leave Requests', icon: Calendar },
    { id: 'performance', label: 'Performance', icon: Star },
  ];

  return (
    <div className="h-screen w-64 bg-gray-900 text-white p-4">
      <div className="flex items-center gap-2 mb-8">
        <Menu className="h-6 w-6" />
        <h1 className="text-xl font-bold">HR Manager</h1>
      </div>
      <nav>
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                activeTab === item.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
}