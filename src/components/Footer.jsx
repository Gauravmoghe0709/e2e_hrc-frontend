import React, { useEffect, useMemo, useState } from 'react';
import { MapPin, Phone, Mail, Loader2 } from 'lucide-react';
import logoImage from '../assets/images/logo.png';
import mapImage from '../assets/images/location.png';
import { getFooterCompany } from '../services/footer/footerCompanyService';
import { getFooterContact } from '../services/footer/footerContactService';
import { getFooterNavigation } from '../services/footer/footerNavigationService';
import { getFooterOfficeLocation } from '../services/footer/footerOfficeLocationService';

export default function FooterWithImages() {
  const [company, setCompany] = useState(null);
  const [contact, setContact] = useState(null);
  const [navigation, setNavigation] = useState(null);
  const [officeLocation, setOfficeLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    const loadFooterData = async () => {
      try {
        setLoading(true);
        setError('');

        const [companyRes, contactRes, navigationRes, officeLocationRes] = await Promise.all([
          getFooterCompany(),
          getFooterContact(),
          getFooterNavigation(),
          getFooterOfficeLocation(),
        ]);

        if (!isMounted) return;

        setCompany(companyRes?.data || null);
        setContact(contactRes?.data || null);
        setNavigation(navigationRes?.data || null);
        setOfficeLocation(officeLocationRes?.data || null);
      } catch (err) {
        if (!isMounted) return;
        setError(err.message || 'Unable to load footer content.');
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadFooterData();

    return () => {
      isMounted = false;
    };
  }, []);

  const logoSrc = useMemo(() => company?.logo || logoImage, [company]);
  const mapSrc = useMemo(() => officeLocation?.image || mapImage, [officeLocation]);
  const navigationItems = useMemo(() => {
    if (!navigation?.menuItems) {
      return [];
    }

    return [...navigation.menuItems]
      .filter((item) => item?.isActive !== false)
      .sort((a, b) => (a.order || 0) - (b.order || 0));
  }, [navigation]);

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
                {loading ? (
                  <div className="flex h-full items-center text-sm text-gray-400">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Loading...
                  </div>
                ) : (
                  <img 
                    src={logoSrc} 
                    alt={company?.description ? 'Footer company logo' : 'E2E Human Resource Consultancy'} 
                    className="h-full object-contain"
                  />
                )}
              </div>
            </div>
            
            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed">
              {loading ? 'Loading footer content...' : (company?.description || error || 'Connecting exceptional talent with exceptional businesses across the UK, Europe, South Asia, and the GCC since 2007.')}
            </p>
          </div>

          {/* Section 2 - Contact */}
          <div className="space-y-6">
            <h3 className="text-amber-400 font-bold text-lg tracking-wide">
              {contact?.sectionTitle || 'UK HEAD OFFICE'}
            </h3>
            
            <div className="space-y-4">
              {/* Address */}
              {contact?.address && (
                <div className="flex gap-3">
                  <MapPin size={20} className="text-amber-400 flex-shrink-0 mt-1" />
                  <div className="text-sm text-gray-300">
                    {contact.address.split('\n').map((line, index) => (
                      <p key={`${line}-${index}`}>{line}</p>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Phone */}
              {contact?.phone && (
                <div className="flex gap-3">
                  <Phone size={20} className="text-amber-400 flex-shrink-0 mt-1" />
                  <a href={`tel:${contact.phone}`} className="text-sm text-gray-300 hover:text-amber-400 transition-colors">
                    {contact.phone}
                  </a>
                </div>
              )}
              
              {/* Email */}
              {contact?.email && (
                <div className="flex gap-3">
                  <Mail size={20} className="text-amber-400 flex-shrink-0 mt-1" />
                  <a href={`mailto:${contact.email}`} className="text-sm text-gray-300 hover:text-amber-400 transition-colors">
                    {contact.email}
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Section 3 - Navigation */}
          <div className="space-y-6">
            <h3 className="text-amber-400 font-bold text-lg tracking-wide">
              {navigation?.title || 'NAVIGATION'}
            </h3>
            
            <nav className="space-y-3">
              {loading ? (
                <p className="text-sm text-gray-400">Loading navigation...</p>
              ) : navigationItems.length > 0 ? (
                navigationItems.map((item) => (
                  <a
                    key={`${item.label}-${item.order}`}
                    href={item.url || '#'}
                    className="block text-gray-300 hover:text-amber-400 transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                ))
              ) : (
                <p className="text-sm text-gray-400">No navigation links available.</p>
              )}
            </nav>
          </div>

          {/* Section 4 - Office Locations Map */}
          <div className="space-y-8">
            <h3 className="text-amber-400 font-bold text-lg tracking-wide">
              {officeLocation?.title || 'OUR OFFICE'}<br />LOCATIONS
            </h3>
            
            {/* Office Location Image */}
            <div className="relative h-48 overflow-hidden">
              <img 
                src={mapSrc}
                alt={officeLocation?.title || 'Office locations'}
                className="w-full h-full object-cover"
              />
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
