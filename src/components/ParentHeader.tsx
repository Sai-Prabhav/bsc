import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Facebook, Twitter, Instagram } from "lucide-react";
export const ParentHeader = () => {
  const location = useLocation();
  return <header className="w-full">
      <div className="bg-gradient-blue-end py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <a href="#" className="text-white/90 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/90 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/90 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <div className="flex space-x-4">
              <button className="text-sm text-white/90 hover:text-white px-3 py-1 border border-white/20 rounded">
                Become a Member
              </button>
              <button className="text-sm bg-brand-yellow text-gray-900 px-3 py-1 rounded hover:bg-brand-yellow/90">
                Make a Donation
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex flex-col">
              <span className="text-2xl font-bold text-brand-blue">
                Bangalore South Centre
              </span>
              <span className="text-sm text-gray-600">
                Empowering Communities Since 1991
              </span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link to="/about" className={`${location.pathname === "/about" ? "text-brand-blue font-semibold" : "text-gray-600 hover:text-brand-blue"}`}>
                About Us
              </Link>
              <Link to="/committee" className={`${location.pathname === "/committee" ? "text-brand-blue font-semibold" : "text-gray-600 hover:text-brand-blue"}`}>
                Committee Members
              </Link>
              <Link to="/ias-academy" className={`${location.pathname === "/ias-academy" ? "text-brand-blue font-semibold" : "text-gray-600 hover:text-brand-blue"}`}>
                BSC IAS Academy
              </Link>
              <Link to="/mahila-bank" className={`${location.pathname === "/mahila-bank" ? "text-brand-blue font-semibold" : "text-gray-600 hover:text-brand-blue"}`}>
                Mahila Bank
              </Link>
              <Link to="/news-events" className={`${location.pathname === "/news-events" ? "text-brand-blue font-semibold" : "text-gray-600 hover:text-brand-blue"}`}>
                News & Events
              </Link>
              <Link to="/gallery" className={`${location.pathname === "/gallery" ? "text-brand-blue font-semibold" : "text-gray-600 hover:text-brand-blue"}`}>
                Photo Gallery
              </Link>
              <Link to="/contact" className={`${location.pathname === "/contact" ? "text-brand-blue font-semibold" : "text-gray-600 hover:text-brand-blue"}`}>
                Contact Us
              </Link>
            </nav>
            <button className="md:hidden">
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>;
};