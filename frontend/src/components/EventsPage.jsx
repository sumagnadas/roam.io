// src/components/EventsPage.jsx
import React, { useState } from 'react';
import { Calendar, Clock, MapPin, DollarSign, Ticket, Sparkles, TrendingUp } from 'lucide-react';
import { events } from '../data/mockData';

const EventsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All Events');
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const categories = ['All Events', 'Music', 'Food & Drink', 'Comedy', 'Workshops'];

  return (
    <div className="min-h-screen bg-[#FFF8D4] px-8 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#A3B087]/20 rounded-full mb-4">
            <TrendingUp className="w-4 h-4 text-[#A3B087]" />
            <span className="text-[#A3B087] text-sm font-semibold">Happening Now</span>
          </div>
          
          <h1 className="text-5xl font-bold mb-2 text-[#313647] tracking-tight">
            Live Events
          </h1>
          <p className="text-lg text-[#435663]/80 mb-8">
            Discover exciting happenings around the city
          </p>
          
          {/* Category Filters */}
          <div className="flex gap-3 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full border-2 font-semibold transition-all duration-300 ${
                  category === activeCategory
                    ? 'bg-[#A3B087] text-white border-[#A3B087] shadow-lg'
                    : 'bg-white text-[#313647] border-transparent shadow-sm hover:-translate-y-1 hover:shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Events Grid */}
        <div className="grid grid-cols-2 gap-10">
          {events.map((event) => (
            <div
              key={event.id}
              onMouseEnter={() => setHoveredCard(event.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`bg-white rounded-3xl overflow-hidden border border-black/5 transition-all duration-500 ${
                hoveredCard === event.id 
                  ? 'shadow-2xl transform -translate-y-3' 
                  : 'shadow-lg'
              }`}
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.name}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    hoveredCard === event.id ? 'scale-110' : 'scale-100'
                  }`}
                />
                
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>
                
                {/* Badges */}
                <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                  {event.isTrending && (
                    <div className="px-5 py-2 rounded-full text-sm font-semibold bg-[#A3B087] text-white shadow-lg backdrop-blur-sm flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      Trending
                    </div>
                  )}
                  
                  <div className="ml-auto px-5 py-2 rounded-full text-sm font-semibold bg-[#313647] text-white shadow-lg">
                    {event.type}
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-6 text-[#313647] leading-tight">
                  {event.name}
                </h3>
                
                {/* Event Details */}
                <div className="grid gap-4 mb-6">
                  <div className="flex items-center gap-4 p-3 bg-[#FFF8D4] rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-[#A3B087]/30 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-[#A3B087]" />
                    </div>
                    <span className="text-sm font-medium text-[#313647]">{event.date}</span>
                  </div>
                  
                  <div className="flex items-center gap-4 p-3 bg-[#FFF8D4] rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-[#A3B087]/30 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-[#A3B087]" />
                    </div>
                    <span className="text-sm font-medium text-[#313647]">{event.time}</span>
                  </div>
                  
                  <div className="flex items-center gap-4 p-3 bg-[#FFF8D4] rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-[#A3B087]/30 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-[#A3B087]" />
                    </div>
                    <span className="text-sm font-medium text-[#313647]">{event.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-4 p-3 bg-[#FFF8D4] rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-[#A3B087]/30 flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-[#A3B087]" />
                    </div>
                    <span className="text-sm font-medium text-[#313647]">{event.price}</span>
                  </div>
                </div>
                
                {event.tickets && (
                  <div className="p-4 bg-[#A3B087]/15 rounded-xl mb-6 border-l-4 border-[#A3B087]">
                    <p className="text-sm text-[#313647] font-medium">
                      🎫 {event.tickets}
                    </p>
                  </div>
                )}
                
                {/* Button */}
                <button className="w-full py-4 rounded-xl bg-[#A3B087] text-white font-semibold transition-all duration-300 flex items-center justify-center gap-3 hover:bg-[#8FA077] hover:-translate-y-1 hover:shadow-xl">
                  {event.price === 'Free' ? (
                    <>
                      <Calendar className="w-5 h-5" />
                      Add to Calendar - Free Entry
                    </>
                  ) : (
                    <>
                      <Ticket className="w-5 h-5" />
                      Get Tickets
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;