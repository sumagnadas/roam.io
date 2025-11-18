import React, { useState } from 'react';
import { Calendar, Clock, MapPin, DollarSign } from 'lucide-react';
import { colors } from '../utils/colors';
import { events } from '../data/mockData';

const EventsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All Events');
  const categories = ['All Events', 'Music', 'Food & Drink', 'Comedy', 'Workshops'];

  return (
    <div style={{ backgroundColor: colors.cream }} className="min-h-screen">
      <div className="px-6 py-8">
        <h1 className="text-3xl font-bold mb-4" style={{ color: colors.darkBlue }}>
          Live Events
        </h1>
        <p className="mb-6 opacity-70" style={{ color: colors.darkBlue }}>
          Discover exciting happenings around the city
        </p>
        
        <div className="flex gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className="px-4 py-2 rounded-lg border transition hover:scale-105"
              style={{
                backgroundColor: category === activeCategory ? colors.sage : 'white',
                color: category === activeCategory ? 'white' : colors.darkBlue,
                borderColor: colors.sage
              }}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative">
                <img src={event.image} alt={event.name} className="w-full h-64 object-cover" />
                {event.isTrending && (
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: colors.sage, color: 'white' }}>
                    ⚡ Trending
                  </div>
                )}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-lg text-xs font-semibold" style={{ backgroundColor: colors.darkBlue, color: 'white' }}>
                  {event.type}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4" style={{ color: colors.darkBlue }}>
                  {event.name}
                </h3>
                
                <div className="space-y-2 mb-4 text-sm" style={{ color: colors.slateBlue }}>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    <span>{event.price}</span>
                  </div>
                </div>
                
                {event.tickets && (
                  <p className="text-sm mb-4 opacity-70" style={{ color: colors.darkBlue }}>
                    {event.tickets}
                  </p>
                )}
                
                <button
                  className="w-full py-3 rounded-lg font-semibold transition hover:opacity-90"
                  style={{ backgroundColor: colors.sage, color: 'white' }}
                >
                  {event.price === 'Free' ? 'Free Entry - Add to Calendar' : 'Get Tickets'}
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