import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import logoImage from '../assets/images/logo.png';
import mapImage from '../assets/images/location.png';


export default function FooterWithImages() {
  // Replace these with your actual image imports
  const logoSrc = logoImage;
  const mapSrc = mapImage;   

  return (
    <footer className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 pb-12 border-b border-gray-700">
          
          {/* Left Section - Logo & Description */}
          <div className="space-y-4">
            <div className="space-y-2">
              {/* Logo Image */}
              <div className="h-16 mb-4">
                <img 
                  src={logoSrc} 
                  alt="E2E Human Resource Consultancy" 
                  className="h-full object-contain"
                />
              </div>
            </div>
            
            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed">
              Connecting exceptional talent with exceptional businesses across the UK, Europe, South Asia, and the GCC since 2007.
            </p>
          </div>

          {/* Section 2 - UK Head Office */}
          <div className="space-y-6">
            <h3 className="text-amber-400 font-bold text-lg tracking-wide">
              UK HEAD OFFICE
            </h3>
            
            <div className="space-y-4">
              {/* Address */}
              <div className="flex gap-3">
                <MapPin size={20} className="text-amber-400 flex-shrink-0 mt-1" />
                <div className="text-sm text-gray-300">
                  <p>Unit 2, 12048 Stratford Road, Hall</p>
                  <p>Green, Birmingham, B28 8HN, UK</p>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex gap-3">
                <Phone size={20} className="text-amber-400 flex-shrink-0 mt-1" />
                <a href="tel:+441217782400" className="text-sm text-gray-300 hover:text-amber-400 transition-colors">
                  +44 (0) 121 778 2400
                </a>
              </div>
              
              {/* Email */}
              <div className="flex gap-3">
                <Mail size={20} className="text-amber-400 flex-shrink-0 mt-1" />
                <a href="mailto:info@e2ehrc.co.uk" className="text-sm text-gray-300 hover:text-amber-400 transition-colors">
                  info@e2ehrc.co.uk
                </a>
              </div>
            </div>
          </div>

          {/* Section 3 - Navigation */}
          <div className="space-y-6">
            <h3 className="text-amber-400 font-bold text-lg tracking-wide">
              NAVIGATION
            </h3>
            
            <nav className="space-y-3">
              <a href="#" className="block text-gray-300 hover:text-amber-400 transition-colors text-sm">
                Home
              </a>
              <a href="#" className="block text-gray-300 hover:text-amber-400 transition-colors text-sm">
                About Us
              </a>
              <a href="#" className="block text-gray-300 hover:text-amber-400 transition-colors text-sm">
                Our Services
              </a>
              <a href="#" className="block text-gray-300 hover:text-amber-400 transition-colors text-sm">
                Latest Jobs
              </a>
              <a href="#" className="block text-gray-300 hover:text-amber-400 transition-colors text-sm">
                Expert Blogs
              </a>
            </nav>
          </div>

          {/* Section 4 - Office Locations Map */}
          <div className="space-y-8">
            <h3 className="text-amber-400 font-bold text-lg tracking-wide">
              OUR OFFICE<br />LOCATIONS
            </h3>
            
            {/* World Map with Pins */}
            <div className="relative h-48 overflow-hidden">
              <img 
                src={mapSrc}
                alt="World Map with Office Locations" 
                className="w-full h-full object-cover"
              />
              {/* Red Location Pins - Positioned for major cities */}
              <div className="absolute inset-0 pointer-events-none">
                {/* UK Pin */}
                <div className="absolute" style={{ top: '25%', left: '48%' }}>
                  <div className="relative">
                    <div className="w-3 h-3 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
                  </div>
                </div>
                {/* Middle East Pin */}
                <div className="absolute" style={{ top: '40%', left: '58%' }}>
                  <div className="relative">
                    <div className="w-3 h-3 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
                  </div>
                </div>
                {/* India Pin */}
                <div className="absolute" style={{ top: '42%', left: '70%' }}>
                  <div className="relative">
                    <div className="w-3 h-3 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center">
          <p className="text-gray-500 text-xs tracking-wide">
            COPYRIGHT © 2024 BY E2E HUMAN RESOURCE CONSULTANCY LTD | ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}
