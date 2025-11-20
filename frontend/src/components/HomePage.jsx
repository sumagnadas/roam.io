import React from 'react';
import { Sunset, Check, MapPin, Zap, Users, Sparkles, Award } from 'lucide-react';
import { moods } from '../data/mockData';

const HomePage = ({ selectedMood, setSelectedMood, setCurrentPage }) => {
  const handleMoodClick = (moodId) => {
    setSelectedMood(moodId);
    setCurrentPage('discover');
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative px-8 py-20 text-center bg-gradient-to-br from-[#435663] to-[#313647] overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-[-50px] right-[-50px] w-[300px] h-[300px] rounded-full bg-[#A3B087]/10 blur-3xl"></div>
        <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-[#A3B087]/10 blur-3xl"></div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#A3B087]/20 backdrop-blur-md rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#A3B087]" />
            <span className="text-white text-sm font-medium">Discover Your Perfect Experience</span>
          </div>

          <h1 className="text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            Discover Your City's<br />
            <span className="bg-gradient-to-r from-[#A3B087] to-[#C4D4A0] bg-clip-text text-transparent">
              Hidden Soul
            </span>
          </h1>
          
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Intelligent, mood-based exploration that connects you with authentic experiences, hidden gems, and local culture
          </p>
          
          {/* Weather Widget */}
          <div className="inline-block p-8 rounded-3xl bg-[#435663]/40 backdrop-blur-xl border border-white/10 shadow-2xl hover:scale-105 hover:shadow-2xl cursor-pointer transition-all duration-300">
            <div className="flex items-center justify-between gap-12">
              <div className="text-left">
                <div className="text-6xl font-bold text-white mb-2">77°F</div>
                <div className="text-xl text-white/90 mb-1">Sunny</div>
                <div className="text-sm text-white/70">H: 78° L: 65°</div>
              </div>
              <Sunset className="w-20 h-20 text-yellow-300 drop-shadow-[0_0_20px_rgba(253,184,19,0.4)]" />
            </div>
            <div className="mt-6 px-4 py-3 bg-[#A3B087]/30 rounded-xl flex items-center gap-2">
              <Check className="w-5 h-5 text-[#A3B087]" />
              <span className="text-white">Perfect weather for exploring!</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mood Selection */}
      <div className="px-8 py-20 bg-[#FFF8D4]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 text-[#313647] tracking-tight">
            How Are You Feeling Today?
          </h2>
          <p className="text-center mb-12 text-[#313647]/70 text-lg">
            Select your mood and we'll curate the perfect experiences for you
          </p>
          
          <div className="grid grid-cols-4 gap-6">
            {moods.map((mood) => {
              const Icon = mood.icon;
              const isSelected = selectedMood === mood.id;
              
              return (
                <button
                  key={mood.id}
                  onClick={() => handleMoodClick(mood.id)}
                  className={`p-8 rounded-2xl border-3 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden ${
                    isSelected 
                      ? 'border-[#313647] scale-105 shadow-2xl' 
                      : 'border-transparent shadow-md'
                  }`}
                  style={{ backgroundColor: mood.color }}
                >
                  {isSelected && (
                    <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-[#A3B087] flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <Icon className="w-14 h-14 mx-auto mb-4 text-[#313647]" />
                  <div className="font-semibold text-lg text-[#313647]">
                    {mood.name}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="px-8 py-20 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-10">
          {[
            { icon: MapPin, title: 'Hidden Gems', description: 'Discover underrated local favorites that tourists miss' },
            { icon: Zap, title: 'Smart Recommendations', description: 'AI-powered suggestions based on your mood and preferences' },
            { icon: Users, title: 'Verified Locals', description: 'Connect with authentic guides who know the city inside out' }
          ].map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="text-center p-10 rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl cursor-pointer"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#A3B087] to-[#8FA077] flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#313647]">{feature.title}</h3>
                <p className="text-[#313647]/70 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;