import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogIn, Phone, Home, Info, BookOpen, GraduationCap, Bell, PhoneCall } from 'lucide-react';
export const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };
  return <header className="w-full bg-white shadow-sm">
      <div className="bg-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
              <img src="/thumbnail_logo.png" alt="BSC Logo" className="h-12 w-12" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-brand-blue">
                  BSC IAS Academy
                </span>
                <span className="text-sm text-gray-600">
                  Excellence in Civil Services Coaching
                </span>
              </div>
            </Link>
            <div className="flex items-center gap-6">
              <a href="tel:+918073556254" className="hidden md:flex items-center gap-2 text-gray-600 hover:text-brand-blue">
                <Phone className="h-4 w-4" />
                <span>+91 80735 56254</span>
              </a>
              <a href="https://student.bscacademy.org" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brand-blue text-white px-4 py-2 rounded-lg hover:bg-gradient-blue-end transition-colors">
                <LogIn className="h-4 w-4" />
                Student Login
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-brand-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-between items-center py-4">
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className={`flex items-center gap-2 ${location.pathname === '/' ? 'text-brand-blue font-semibold' : 'text-gray-700 hover:text-brand-blue'}`}>
                <Home className="h-4 w-4" />
                Home
              </Link>
              <Link to="/about" className={`flex items-center gap-2 ${location.pathname === '/about' ? 'text-brand-blue font-semibold' : 'text-gray-700 hover:text-brand-blue'}`}>
                <Info className="h-4 w-4" />
                About Us
              </Link>
              <Link to="/courses" className={`flex items-center gap-2 ${location.pathname === '/courses' ? 'text-brand-blue font-semibold' : 'text-gray-700 hover:text-brand-blue'}`}>
                <BookOpen className="h-4 w-4" />
                Courses
              </Link>
              <Link to="/learning-hub" className={`flex items-center gap-2 ${location.pathname === '/learning-hub' ? 'text-brand-blue font-semibold' : 'text-gray-700 hover:text-brand-blue'}`}>
                <GraduationCap className="h-4 w-4" />
                Learning Hub
              </Link>
              <Link to="/news-events" className={`flex items-center gap-2 ${location.pathname === '/news-events' ? 'text-brand-blue font-semibold' : 'text-gray-700 hover:text-brand-blue'}`}>
                <Bell className="h-4 w-4" />
                News & Events
              </Link>
              <Link to="/contact" className={`flex items-center gap-2 ${location.pathname === '/contact' ? 'text-brand-blue font-semibold' : 'text-gray-700 hover:text-brand-blue'}`}>
                <PhoneCall className="h-4 w-4" />
                Contact
              </Link>
            </div>
            <button className="md:hidden p-2" onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isMenuOpen}>
              {isMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
            </button>
          </nav>
        </div>
      </div>
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={closeMenu} />
      <div className={`fixed top-0 right-0 bottom-0 w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4">
          <button onClick={closeMenu} className="absolute top-4 right-4" aria-label="Close menu">
            <X className="h-6 w-6 text-gray-700" />
          </button>
          <div className="mt-8 flex flex-col space-y-4">
            <Link to="/" className={`flex items-center gap-2 px-4 py-2 rounded-lg ${location.pathname === '/' ? 'bg-brand-blue text-white' : 'text-gray-700 hover:bg-brand-blue/5'}`} onClick={closeMenu}>
              <Home className="h-4 w-4" />
              Home
            </Link>
            <Link to="/about" className={`flex items-center gap-2 px-4 py-2 rounded-lg ${location.pathname === '/about' ? 'bg-brand-blue text-white' : 'text-gray-700 hover:bg-brand-blue/5'}`} onClick={closeMenu}>
              <Info className="h-4 w-4" />
              About Us
            </Link>
            <Link to="/courses" className={`flex items-center gap-2 px-4 py-2 rounded-lg ${location.pathname === '/courses' ? 'bg-brand-blue text-white' : 'text-gray-700 hover:bg-brand-blue/5'}`} onClick={closeMenu}>
              <BookOpen className="h-4 w-4" />
              Courses
            </Link>
            <Link to="/learning-hub" className={`flex items-center gap-2 px-4 py-2 rounded-lg ${location.pathname === '/learning-hub' ? 'bg-brand-blue text-white' : 'text-gray-700 hover:bg-brand-blue/5'}`} onClick={closeMenu}>
              <GraduationCap className="h-4 w-4" />
              Learning Hub
            </Link>
            <Link to="/news-events" className={`flex items-center gap-2 px-4 py-2 rounded-lg ${location.pathname === '/news-events' ? 'bg-brand-blue text-white' : 'text-gray-700 hover:bg-brand-blue/5'}`} onClick={closeMenu}>
              <Bell className="h-4 w-4" />
              News & Events
            </Link>
            <Link to="/contact" className={`flex items-center gap-2 px-4 py-2 rounded-lg ${location.pathname === '/contact' ? 'bg-brand-blue text-white' : 'text-gray-700 hover:bg-brand-blue/5'}`} onClick={closeMenu}>
              <PhoneCall className="h-4 w-4" />
              Contact
            </Link>
            <a href="tel:+918073556254" className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-brand-blue/5 rounded-lg" onClick={closeMenu}>
              <Phone className="h-4 w-4" />
              <span>+91 80735 56254</span>
            </a>
          </div>
        </div>
      </div>
    </header>;
};