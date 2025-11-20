import React, { useState } from 'react';
import { Star, MapPin, DollarSign, Navigation, Heart, Share2, Sparkles, IndianRupee } from 'lucide-react';
import { spots } from '../data/mockData';

const DiscoverPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-[#FFF8D4] px-8 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#A3B087]/20 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-[#A3B087]" />
            <span className="text-[#A3B087] text-sm font-semibold">Curated For You</span>
          </div>
          
          <h1 className="text-5xl font-bold mb-2 text-[#313647] tracking-tight">
            Discover Amazing Places
          </h1>
          <p className="text-lg text-[#435663]/80">
            Handpicked locations that match your vibe
          </p>
        </div>
        
        {/* Spots Grid */}
        <div className="grid grid-cols-3 gap-8">
          {spots.map((spot) => (
            <div
              key={spot.id}
              onMouseEnter={() => setHoveredCard(spot.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`bg-white rounded-3xl overflow-hidden border border-black/5 transition-all duration-500 cursor-pointer ${
                hoveredCard === spot.id 
                  ? 'shadow-2xl transform -translate-y-3' 
                  : 'shadow-lg'
              }`}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={spot.image} 
                  alt={spot.name}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    hoveredCard === spot.id ? 'scale-110' : 'scale-100'
                  }`}
                />
                
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent"></div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  {spot.isHiddenGem && (
                    <div className="px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 bg-[#A3B087] text-white shadow-lg backdrop-blur-sm">
                      <Star className="w-3.5 h-3.5" />
                      Hidden Gem
                    </div>
                  )}
                  
                  <div className="ml-auto px-4 py-2 rounded-full text-xs font-semibold bg-[#313647] text-white shadow-lg">
                    {spot.type}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className={`absolute bottom-4 right-4 flex gap-2 transition-opacity duration-300 ${
                  hoveredCard === spot.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <button className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-transform hover:scale-110">
                    <Heart className="w-4.5 h-4.5 text-[#313647]" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-transform hover:scale-110">
                    <Share2 className="w-4.5 h-4.5 text-[#313647]" />
                  </button>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-[#313647] leading-tight">
                  {spot.name}
                </h3>
                
                {/* Info Row */}
                <div className="flex items-center gap-6 mb-4 text-sm text-[#435663] flex-wrap">
                  <div className="flex items-center gap-1.5 font-semibold">
                    <Star className="w-4 h-4 fill-[#FDB813] text-[#FDB813]" />
                    <span className="text-[#313647]">{spot.rating}</span>
                    <span className="opacity-60">({spot.reviews})</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    <span>{spot.distance}</span>
                  </div>
                  <div className="flex items-center gap-0.5 font-semibold text-[#A3B087]">
                    <IndianRupee className="w-4 h-4" />
                    <span>{spot.price}</span>
                  </div>
                </div>
                
                <p className="text-sm mb-5 text-[#435663]/80 leading-relaxed">
                  {spot.description}
                </p>
                
                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {spot.badges.map((badge, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#FFF8D4] text-[#313647] border border-[#A3B087]/40"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <button className="w-full py-3.5 rounded-xl bg-[#A3B087] text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:bg-[#8FA077] hover:-translate-y-1 hover:shadow-lg">
                  <Navigation className="w-4.5 h-4.5" />
                  Get Directions
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverPage;