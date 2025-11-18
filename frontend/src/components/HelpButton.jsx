import React from 'react';
import { HelpCircle } from 'lucide-react';
import { colors } from '../utils/colors';

const HelpButton = () => {
  return (
    <button
      className="fixed bottom-6 right-6 w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition"
      style={{ backgroundColor: colors.darkBlue }}
      onClick={() => alert('Help & Support Coming Soon!')}
    >
      <HelpCircle className="w-6 h-6 text-white" />
    </button>
  );
};

export default HelpButton;