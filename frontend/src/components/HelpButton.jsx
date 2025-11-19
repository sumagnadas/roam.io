import React from 'react';
import { HelpCircle } from 'lucide-react';

const HelpButton = () => {
  return (
    <button
      onClick={() => alert('Help & Support Coming Soon!')}
      className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-gradient-to-br from-[#313647] to-[#475569] shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6 hover:from-[#A3B087] hover:to-[#8FA077] z-50 group"
    >
      <HelpCircle className="w-8 h-8 text-white transition-transform group-hover:-rotate-6" />
    </button>
  );
};

export default HelpButton;