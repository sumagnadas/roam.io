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
      console.log('Form submitted:', formData);
      alert('Contact request sent!');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: '#1a1f2e' }}>
      <div className="w-full max-w-3xl rounded-lg overflow-hidden shadow-2xl" style={{ backgroundColor: '#313647' }}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b" style={{ borderColor: '#435663' }}>
          <div className="flex items-center gap-4">
            <img 
                src={guide?.image} 
                alt={guide?.name}
                className="w-16 h-16 rounded-full object-cover"
            />

            <div>
              <h2 className="text-white text-2xl font-semibold">
  Contact {guide?.name}
</h2>

              <p className="text-gray-400 text-sm">Send a tour request</p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X size={28} />
            </button>

        </div>

        {/* Info Banner */}
        <div className="p-4 flex items-center gap-3" style={{ backgroundColor: '#FFF8D4' }}>
          <Mail size={20} style={{ color: '#313647' }} />
          <p style={{ color: '#313647' }} className="text-sm">
            Fill out the form below and Maria will respond within 24 hours
          </p>
        </div>

        {/* Form */}
        <div className="p-6 space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-white text-base font-medium mb-2">
              Your Name *
            </label>
            <div className="relative">
              <User 
                size={20} 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-white border-2 border-gray-200 focus:border-opacity-50 focus:outline-none text-gray-700 placeholder-gray-400"
                style={{ borderColor: '#e5e7eb' }}
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-white text-base font-medium mb-2">
              Email Address *
            </label>
            <div className="relative">
              <Mail 
                size={20} 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-white border-2 border-gray-200 focus:border-opacity-50 focus:outline-none text-gray-700 placeholder-gray-400"
                style={{ borderColor: '#e5e7eb' }}
              />
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-white text-base font-medium mb-2">
              Your Message / Intent *
            </label>
            <textarea
              placeholder="Tell the guide about your interests, preferred dates, group size, or any special requests..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={6}
              className="w-full px-4 py-3 rounded-lg bg-white border-2 border-gray-200 focus:border-opacity-50 focus:outline-none text-gray-700 placeholder-gray-400 resize-none"
              style={{ borderColor: '#e5e7eb' }}
            />
            <p className="text-gray-400 text-xs mt-2">
              Be specific about what you're looking for to get the best recommendations
            </p>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full py-4 rounded-lg text-white font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#A3B087' }}
          >
            <Send size={20} />
            Send Contact Request
          </button>

          {/* Privacy Notice */}
          <p className="text-center text-gray-400 text-sm">
            Your contact information will only be shared with Maria
          </p>
        </div>
      </div>
    </div>
  );
}
