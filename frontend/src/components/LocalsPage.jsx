// src/components/LocalsPage.jsx
import React from 'react';
import { Check, Star, MapPin } from 'lucide-react';
import { colors } from '../utils/colors';
import { localGuides } from '../data/mockData';

const LocalsPage = () => {
  return (
    <div style={{ backgroundColor: colors.cream }} className="min-h-screen">
      <div className="px-6 py-8">
        <h1 className="text-3xl font-bold mb-4" style={{ color: colors.darkBlue }}>
          Meet Verified Local Guides
        </h1>
        <p className="mb-6 opacity-70" style={{ color: colors.darkBlue }}>
          Connect with authentic community ambassadors who know the city inside out
        </p>
        
        <div className="mb-8 p-6 rounded-xl" style={{ backgroundColor: colors.sage }}>
          <div className="flex items-center gap-3 text-white">
            <Check className="w-6 h-6" />
            <div>
              <div className="font-bold text-lg">All Guides Are Verified</div>
              <div className="text-sm opacity-90">
                Every guide undergoes identity verification and background checks. Your safety and authentic experience are our top priorities.
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          {localGuides.map((guide) => (
            <div key={guide.id} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="relative">
                  <img src={guide.image} alt={guide.name} className="w-20 h-20 rounded-full object-cover" />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.sage }}>
                    <Check className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold" style={{ color: colors.darkBlue }}>
                    {guide.name}
                  </h3>
                  <div className="flex items-center gap-1 text-sm mb-2" style={{ color: colors.slateBlue }}>
                    <MapPin className="w-4 h-4" />
                    <span>{guide.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm" style={{ color: colors.slateBlue }}>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current text-yellow-500" />
                      <span className="font-semibold">{guide.rating}</span>
                      <span className="opacity-70">({guide.reviews})</span>
                    </div>
                    <span className="opacity-70">{guide.tours} tours</span>
                  </div>
                </div>
              </div>
              
              <p className="text-sm mb-4 opacity-70" style={{ color: colors.darkBlue }}>
                {guide.bio}
              </p>
              
              <div className="mb-4">
                <div className="text-xs font-semibold mb-2" style={{ color: colors.slateBlue }}>
                  Languages:
                </div>
                <div className="flex flex-wrap gap-2">
                  {guide.languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-2 py-1 rounded text-xs"
                      style={{ backgroundColor: colors.cream, color: colors.darkBlue }}
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <div className="text-xs font-semibold mb-2" style={{ color: colors.slateBlue }}>
                  Specialties:
                </div>
                <div className="flex flex-wrap gap-2">
                  {guide.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="px-2 py-1 rounded text-xs text-white"
                      style={{ backgroundColor: colors.sage }}
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
              
              <button
                className="w-full py-3 rounded-lg font-semibold transition hover:opacity-90"
                style={{ backgroundColor: colors.darkBlue, color: 'white' }}
              >
                Contact {guide.name.split(' ')[0]}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocalsPage;