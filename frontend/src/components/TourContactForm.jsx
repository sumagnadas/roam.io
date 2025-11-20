import React, { useState } from 'react';
import { X, Mail, User, Send } from 'lucide-react';

export default function TourContactForm({ guide, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      alert('Contact request sent!');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div>
      <div 
        className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-[0_8px_28px_rgba(0,0,0,0.55)]"
        style={{ backgroundColor: '#2A3040' }}
      >
        
        {/* Header */}
        <div 
          className="flex items-center justify-between p-6"
          style={{ backgroundColor: '#313647' }}
        >
          <div className="flex items-center gap-4">
            <img
              src={guide?.image}
              alt={guide?.name}
              className="w-20 h-20 rounded-full object-cover ring-2 ring-[#A3B087]"
            />

            <div>
              <h2 className="text-white text-2xl font-bold tracking-tight">
                Contact {guide?.name}
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                Start planning your personalised tour
              </p>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-white transition"
          >
            <X size={28} />
          </button>
        </div>

        {/* Info Alert */}
        <div className="p-4 flex gap-3 items-start" style={{ backgroundColor: '#FFF8D4' }}>
          <Mail size={20} className="mt-1" style={{ color: '#313647' }} />
          <p className="text-sm" style={{ color: '#313647' }}>
            Fill out the form below and <strong>{guide?.name}</strong> will get back to you
            within 24 hours.
          </p>
        </div>

        {/* Form Body */}
        <div className="p-8 space-y-6">
          
          {/* Name */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Your Name
            </label>
            <div className="relative">
              <User 
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-[#ECECEC] border border-gray-300 text-gray-800 focus:ring-2 focus:ring-[#A3B087] outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail 
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-[#ECECEC] border border-gray-300 text-gray-800 focus:ring-2 focus:ring-[#A3B087] outline-none"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Your Message
            </label>
            <textarea
              rows={5}
              placeholder="Tell the guide what you're looking for..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-[#ECECEC] border border-gray-300 text-gray-800 focus:ring-2 focus:ring-[#A3B087] outline-none resize-none"
            />
            <p className="text-gray-400 text-xs mt-2">
              Share your dates, group size, interests, or anything important.
            </p>
          </div>

          {/* Button */}
          <button
            onClick={handleSubmit}
            className="w-full py-4 rounded-xl text-white text-lg font-medium shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
            style={{ backgroundColor: '#A3B087' }}
          >
            <Send size={20} />
            Send Request
          </button>

          {/* Privacy */}
          <p className="text-center text-gray-500 text-xs mt-3">
            Your contact details will only be shared with {guide?.name}.
          </p>

        </div>
      </div>
    </div>
  );
}
