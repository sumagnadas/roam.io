import React from 'react';
import { Star, MapPin, DollarSign } from 'lucide-react';
import { colors } from '../utils/colors';
import { spots } from '../data/mockData';

const DiscoverPage = () => {
  return (
    <div style={{ backgroundColor: colors.cream }} className="min-h-screen">
      <div className="px-6 py-8">
        <h1 className="text-3xl font-bold mb-8" style={{ color: colors.darkBlue }}>
          Discover Amazing Places
        </h1>
        
        <div className="grid grid-cols-3 gap-6">
          {spots.map((spot) => (
            <div key={spot.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="relative">
                <img src={spot.image} alt={spot.name} className="w-full h-48 object-cover" />
                {spot.isHiddenGem && (
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1" style={{ backgroundColor: colors.sage, color: 'white' }}>
                    <Star className="w-3 h-3" />
                    Hidden Gem
                  </div>
                )}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-lg text-xs font-semibold" style={{ backgroundColor: colors.darkBlue, color: 'white' }}>
                  {spot.type}
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2" style={{ color: colors.darkBlue }}>
                  {spot.name}
                </h3>
                
                <div className="flex items-center gap-4 mb-3 text-sm" style={{ color: colors.slateBlue }}>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current text-yellow-500" />
                    <span className="font-semibold">{spot.rating}</span>
                    <span className="opacity-70">({spot.reviews})</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{spot.distance}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4" />
                    <span>{spot.price}</span>
                  </div>
                </div>
                
                <p className="text-sm mb-3 opacity-70" style={{ color: colors.darkBlue }}>
                  {spot.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {spot.badges.map((badge, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded text-xs"
                      style={{ backgroundColor: colors.cream, color: colors.darkBlue }}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverPage;