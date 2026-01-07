import React, { useState, useEffect } from 'react';
import logo from "./images/logo.png";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href')?.slice(1);
    if (targetId) {
      const element = document.getElementById(targetId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${isScrolled || isMenuOpen 
        ? 'bg-black/80 backdrop-blur-lg border-b border-gray-800' 
        : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-32 w-auto object-contain select-none"
          />
        </div>

        <div className="flex items-center">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#moods" onClick={handleNavClick} className="text-gray-300 hover:text-white transition">
              Moods
            </a>
            <a href="#how-it-works" onClick={handleNavClick} className="text-gray-300 hover:text-white transition">
              How It Works
            </a>
            <a href="#demo" onClick={handleNavClick} className="text-gray-300 hover:text-white transition">
              Demo
            </a>
          </nav>

          {/* Buy Now */}
          <a
            href="https://wa.me/918219021478"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block md:ml-8 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold px-5 py-2 rounded-lg transition-all hover:scale-105 shadow-lg"
          >
            Buy Now
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-4 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-gray-800">
          <nav className="px-6 py-4 flex flex-col space-y-3">
            <a href="#moods" onClick={handleNavClick} className="text-gray-300 hover:text-white">
              Moods
            </a>
            <a href="#how-it-works" onClick={handleNavClick} className="text-gray-300 hover:text-white">
              How It Works
            </a>
            <a href="#demo" onClick={handleNavClick} className="text-gray-300 hover:text-white">
              Demo
            </a>
            <a
              href="https://wa.me/918219021478"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold px-4 py-2 rounded-lg text-center"
            >
              Buy Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
