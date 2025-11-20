import React from 'react';
import { Compass, MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const exploreLinks = [
    { label: 'Discover Places', href: '#' },
    { label: 'Local Events', href: '#' },
    { label: 'Meet Local Guides', href: '#' },
    { label: 'Hidden Gems', href: '#' },
    { label: 'Mood-Based Discovery', href: '#' }
  ];

  const companyLinks = [
    { label: 'About Us', href: '#' },
    { label: 'Become a Guide', href: '#' },
    { label: 'Partner With Us', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press & Media', href: '#' }
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Accessibility', href: '#' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-[#313647] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Compass className="w-8 h-8" />
              <span className="text-2xl font-bold">Roam.io</span>
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              Your intelligent city exploration companion. Discover hidden gems, connect with local guides, and create unforgettable experiences.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#A3B087] flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Explore Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Explore</h3>
            <ul className="space-y-3">
              {exploreLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[#A3B087] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[#A3B087] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 ">Get In Touch</h3>
            <ul className="space-y-4 space-x-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#A3B087] flex-shrink-0 mt-0.5" />
                <div className="text-white/70 text-sm leading-relaxed">
                  IIT Bhilai<br />
                  Chhattisgarh, India
                </div>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#A3B087] flex-shrink-0" />
                <a
                  href="mailto:hello@roam.io"
                  className="text-white/70 hover:text-[#A3B087] transition-colors duration-300"
                >
                  hello@roam.io
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#A3B087] flex-shrink-0" />
                <a
                  className="text-white/70 hover:text-[#A3B087] transition-colors duration-300"
                >
                    +91 55512 34567
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="text-white/60 text-sm flex items-center gap-1">
            © 2025 Roam.io. All rights reserved. 
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6 flex-wrap">
            {legalLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-white/60 hover:text-[#A3B087] text-sm transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;