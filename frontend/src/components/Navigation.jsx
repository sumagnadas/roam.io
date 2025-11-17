import React from 'react';
import { Compass, Home, Calendar, Users } from 'lucide-react';
import { colors } from '../utils/colors';

const Navigation = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'discover', label: 'Discover', icon: Compass },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'locals', label: 'Locals', icon: Users }
  ];

  return (
    <nav className="flex items-center justify-between px-6 py-4" style={{ backgroundColor: colors.darkBlue }}>
      <div className="flex items-center gap-2 text-white">
        <Compass className="w-6 h-6" />
        <span className="text-xl font-bold">Roam.io</span>
      </div>
      
      <div className="flex gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                currentPage === item.id ? 'bg-opacity-100' : 'bg-opacity-0 hover:bg-opacity-20'
              }`}
              style={{ 
                backgroundColor: currentPage === item.id ? colors.sage : 'transparent', 
                color: 'white' 
              }}
            >
              <Icon className="w-4 h-4" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;