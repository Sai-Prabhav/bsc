import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
export const Footer = () => {
  return <footer className="w-full bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-bold mb-3">BSC IAS Academy</h3>
            <p className="text-sm text-gray-300">
              Empowering aspirants through quality civil services coaching since
              1991.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">Contact</h3>
            <div className="space-y-2 text-sm">
              <div className="flex gap-2 text-gray-300">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-white">
                    The Bangalore South Center
                  </p>
                  <p># 2267, 1st Floor, 22nd Cross, K R Road</p>
                  <p>Banshankari 2nd Stage, Bangalore - 560070</p>
                  <a href="https://maps.google.com/?q=12.9416,77.5712" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 text-sm inline-block mt-1">
                    View on Map
                  </a>
                </div>
              </div>
              <div className="flex gap-2 items-center text-gray-300">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+918073556254" className="text-white hover:text-yellow-400">
                  +91 80735 56254
                </a>
              </div>
              <div className="flex gap-2 items-center text-gray-300">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:ContactUs@TheBangaloreSouthCenter.Org" className="text-white hover:text-yellow-400 break-words">
                  ContactUs@TheBangaloreSouthCenter.Org
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
              <Link to="/about" className="hover:text-yellow-400">
                About Us
              </Link>
              <Link to="/courses" className="hover:text-yellow-400">
                Courses
              </Link>
              <Link to="/learning-hub" className="hover:text-yellow-400">
                Learning Hub
              </Link>
              <Link to="/" className="hover:text-yellow-400">
                Scholarships
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-6 pt-4 text-center text-sm text-gray-400">
          <p>© 2024 Bangalore South Centre. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};