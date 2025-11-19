import React from 'react';
import { Sunset, Check, MapPin, Zap, Users } from 'lucide-react';
import { colors } from '../utils/colors';
import { moods } from '../data/mockData';

const HomePage = ({ selectedMood, setSelectedMood, setCurrentPage }) => {
  const handleMoodClick = (moodId) => {
    setSelectedMood(moodId);
    setCurrentPage('discover');
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative px-6 py-20 text-center" style={{ backgroundColor: colors.slateBlue }}>
        <h1 className="text-5xl font-bold text-white mb-4">
          Discover Your City's Hidden Soul
        </h1>
        <p className="text-lg text-white mb-8 opacity-90">
          Intelligent, mood-based exploration that connects you with authentic experiences, hidden gems, and local culture
        </p>

        {/* Weather Widget */}
        <div className="inline-block p-6 rounded-xl" style={{ backgroundColor: 'rgba(67, 86, 99, 0.6)' }}>
          <div className="flex items-center justify-between gap-8">
            <div className="text-left">
              <div className="text-5xl font-bold text-white">77°F</div>
              <div className="text-white opacity-80">Sunny</div>
              <div className="text-sm text-white opacity-70 mt-1">H: 78° L: 65°</div>
            </div>
            <Sunset className="w-16 h-16 text-yellow-300" />
          </div>
          <div className="mt-4 text-sm text-white flex items-center gap-2">
            <Check className="w-4 h-4" />
            <span>Perfect weather for exploring!</span>
          </div>
        </div>
      </div>

      {/* Mood Selection */}
      <div className="px-6 py-20" style={{ backgroundColor: colors.cream }}>
        <h2 className="text-3xl font-bold text-center mb-4" style={{ color: colors.darkBlue }}>
          How Are You Feeling Today?
        </h2>
        <p className="text-center mb-8 opacity-70" style={{ color: colors.darkBlue }}>
          Select your mood and we'll curate the perfect experiences for you
        </p>

        <div className="grid grid-cols-4 gap-4 max-w-5xl mx-auto">
          {moods.map((mood) => {
            const Icon = mood.icon;
            return (
              <button
                key={mood.id}
                onClick={() => handleMoodClick(mood.id)}
                className="p-6 rounded-xl border-2 hover:scale-105 transition transform"
                style={{
                  backgroundColor: mood.color,
                  borderColor: selectedMood === mood.id ? colors.darkBlue : 'transparent'
                }}
              >
                <Icon className="w-12 h-12 mx-auto mb-2" style={{ color: colors.darkBlue }} />
                <div className="font-semibold" style={{ color: colors.darkBlue }}>
                  {mood.name}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Features */}
      <div className="px-6 py-16 bg-white">
        <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: colors.sage }}>
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2" style={{ color: colors.darkBlue }}>Hidden Gems</h3>
            <p className="opacity-70" style={{ color: colors.darkBlue }}>
              Discover underrated local favorites that tourists miss
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: colors.sage }}>
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2" style={{ color: colors.darkBlue }}>Smart Recommendations</h3>
            <p className="opacity-70" style={{ color: colors.darkBlue }}>
              AI-powered suggestions based on your mood and preferences
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: colors.sage }}>
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2" style={{ color: colors.darkBlue }}>Verified Locals</h3>
            <p className="opacity-70" style={{ color: colors.darkBlue }}>
              Connect with authentic guides who know the city inside out
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
