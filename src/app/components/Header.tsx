'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Materials', href: '#materials' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section - Round shape, no extra text */}
      {/* Logo Section - Premium */}
<a href="#home" className="flex items-center gap-3 group cursor-pointer">
  {/* Logo Container with Glow */}
  <div className="relative">
    <div className={`absolute inset-0 rounded-full transition-opacity duration-300 ${
      isScrolled 
        ? 'bg-orange-500/20 blur-md opacity-100' 
        : 'bg-orange-500/30 blur-md opacity-0 group-hover:opacity-100'
    }`} />
    <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-md overflow-hidden">
      <Image 
        src="/images/deckstaff-logo1.png" 
        alt="Deckscaff Ghana Ltd" 
        width={50}
        height={50}
        className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
        priority
      />
    </div>
  </div>
  
  {/* Company Name with Gradient */}
  <div className="flex flex-col">
    <span
      className={`font-bold text-lg sm:text-xl leading-tight transition-all duration-300 ${
        isScrolled 
          ? 'bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent' 
          : 'text-white'
      }`}
    >
      DECKSCAFF
    </span>
    <span
      className={`text-xs sm:text-sm font-semibold leading-tight tracking-wide transition-all duration-300 ${
        isScrolled ? 'text-orange-500' : 'text-orange-400'
      }`}
    >
      GHANA LTD
    </span>
  </div>
</a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative font-medium transition-all duration-300 hover:text-orange-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contact"
              className={`px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                isScrolled
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md'
                  : 'bg-orange-500 text-white hover:bg-orange-600'
              }`}
            >
              Get Quote
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 rounded-full transition-all duration-300 ${
                isScrolled ? 'bg-gray-900' : 'bg-white'
              } ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 rounded-full transition-all duration-300 ${
                isScrolled ? 'bg-gray-900' : 'bg-white'
              } ${isMenuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 rounded-full transition-all duration-300 ${
                isScrolled ? 'bg-gray-900' : 'bg-white'
              } ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden fixed inset-0 top-0 bg-white z-40 transition-all duration-500 ease-in-out ${
            isMenuOpen
              ? 'opacity-100 visible translate-x-0'
              : 'opacity-0 invisible translate-x-full'
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full">
            {/* Mobile Logo at top of menu */}
            <div className="absolute top-8 left-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md overflow-hidden">
                  <Image 
                    src="/images/deckstaff-logo1.png" 
                    alt="Deckscaff Ghana Ltd" 
                    width={36}
                    height={36}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div>
                  <div className="text-gray-900 font-bold text-lg">DECKSCAFF</div>
                  <div className="text-orange-500 text-xs font-medium">GHANA LTD</div>
                </div>
              </div>
            </div>
            
            <nav className="flex flex-col items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-900 text-2xl font-semibold hover:text-orange-500 transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold text-lg hover:scale-105 transition-transform"
              >
                Get Quote
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}