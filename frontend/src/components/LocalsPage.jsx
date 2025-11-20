import React, { useState } from 'react';
import { Check, Star, MapPin, MessageCircle, Award, Globe } from 'lucide-react';
import { localGuides } from '../data/mockData';
import TourContactForm from "../components/TourContactForm";


const LocalsPage = () => {

  const [selectedGuide, setSelectedGuide] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-[#FFF8D4] px-8 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#A3B087]/20 rounded-full mb-4">
            <Award className="w-4 h-4 text-[#A3B087]" />
            <span className="text-[#A3B087] text-sm font-semibold">Verified & Trusted</span>
          </div>
          
          <h1 className="text-5xl font-bold mb-2 text-[#313647] tracking-tight">
            Meet Verified Local Guides
          </h1>
          <p className="text-lg text-[#435663]/80 mb-8">
            Connect with authentic community ambassadors who know the city inside out
          </p>
          
          {/* Verification Banner */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-[#A3B087] to-[#8FA077] shadow-xl mb-12">
            <div className="flex items-center gap-6 text-white">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                <Check className="w-8 h-8" />
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">All Guides Are Verified</div>
                <div className="text-white/95 leading-relaxed">
                  Every guide undergoes identity verification and background checks. Your safety and authentic experience are our top priorities.
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Guides Grid */}
        <div className="grid grid-cols-2 gap-8">
          {localGuides.map((guide) => (
            <div
              key={guide.id}
              onMouseEnter={() => setHoveredCard(guide.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`bg-white rounded-3xl p-8 border border-black/5 transition-all duration-500 ${
                hoveredCard === guide.id 
                  ? 'shadow-2xl transform -translate-y-2' 
                  : 'shadow-lg'
              }`}
            >
              {/* Profile Header */}
              <div className="flex items-start gap-6 mb-6">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-xl border-3 border-[#A3B087]">
                    <img 
                      src={guide.image} 
                      alt={guide.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Verification Badge */}
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-[#A3B087] flex items-center justify-center shadow-lg border-3 border-white">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                {/* Info */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#313647] mb-2">
                    {guide.name}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-3 text-[#435663]">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-medium">{guide.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="flex items-center gap-1.5 px-3 py-2 bg-[#FFF8D4] rounded-lg">
                      <Star className="w-4 h-4 fill-[#FDB813] text-[#FDB813]" />
                      <span className="font-bold text-[#313647] text-sm">{guide.rating}</span>
                      <span className="text-[#435663] text-sm">({guide.reviews})</span>
                    </div>
                    
                    <div className="px-3 py-2 bg-[#A3B087]/20 rounded-lg text-[#A3B087] text-sm font-semibold">
                      {guide.tours} tours
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bio */}
              <p className="text-sm mb-6 text-[#435663] leading-relaxed p-4 bg-[#FFF8D4] rounded-xl border-l-4 border-[#A3B087]">
                {guide.bio}
              </p>
              
              {/* Languages */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-4.5 h-4.5 text-[#A3B087]" />
                  <span className="text-xs font-semibold text-[#435663] uppercase tracking-wider">
                    Languages
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {guide.languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-4 py-2 rounded-full text-sm font-medium bg-white text-[#313647] border-2 border-[#FFF8D4]"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Specialties */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-4.5 h-4.5 text-[#A3B087]" />
                  <span className="text-xs font-semibold text-[#435663] uppercase tracking-wider">
                    Specialties
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {guide.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="px-4 py-2 rounded-full text-sm font-medium bg-[#A3B087] text-white"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Contact Button */}
              <button
  className="w-full py-4 rounded-xl bg-[#313647] text-white font-semibold transition-all duration-300 flex items-center justify-center gap-3 hover:bg-[#475569] hover:-translate-y-1 hover:shadow-xl"
  onClick={() => {
    setSelectedGuide(guide);
    setIsFormOpen(true);
  }}
>
  <MessageCircle className="w-5 h-5" />
  Contact {guide.name.split(' ')[0]}
</button>

            </div>
          ))}
        </div>
      </div>
      {isFormOpen && (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
    <TourContactForm 
      guide={selectedGuide}
      onClose={() => setIsFormOpen(false)}
    />
  </div>
)}

    </div>
  );
};

export default LocalsPage;