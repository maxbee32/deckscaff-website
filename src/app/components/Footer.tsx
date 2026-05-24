"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2024);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500"></div>
      
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Company Info - Column 1 */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                <Image 
                  src="/images/c logo.png" 
                  alt="Deckscaff Ghana Ltd" 
                  width={44}
                  height={44}
                  className="w-10 h-10 object-contain"
                  priority
                />
              </div>
              <div>
                <div className="font-bold text-xl tracking-tight">DECKSCAFF</div>
                <div className="text-orange-400 text-xs font-semibold tracking-wide">GHANA LTD</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional scaffolding services, equipment rental, and custom engineering solutions for construction projects across Ghana.
            </p>
            
            {/* Social Links - Improved */}
            <div className="flex gap-3 pt-2">
              <a 
                href="https://www.facebook.com/share/1aZNjxkRD6/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com/deckscaffgh" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com/in/deckscaff-ghana-ltd-65a6043b0" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links - Column 2 */}
          <div>
            <h3 className="font-bold text-white text-lg mb-5 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-orange-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-orange-400 transition-all duration-300 flex items-center gap-2 group">
                  <svg className="w-3 h-3 text-gray-600 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-orange-400 transition-all duration-300 flex items-center gap-2 group">
                  <svg className="w-3 h-3 text-gray-600 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  Our Services
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-orange-400 transition-all duration-300 flex items-center gap-2 group">
                  <svg className="w-3 h-3 text-gray-600 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  Projects
                </a>
              </li>
              <li>
                <a href="#materials" className="text-gray-400 hover:text-orange-400 transition-all duration-300 flex items-center gap-2 group">
                  <svg className="w-3 h-3 text-gray-600 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  Materials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-orange-400 transition-all duration-300 flex items-center gap-2 group">
                  <svg className="w-3 h-3 text-gray-600 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services - Column 3 */}
          <div>
            <h3 className="font-bold text-white text-lg mb-5 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-orange-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-orange-400 transition-all duration-300 flex items-center gap-2 group">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  Access Scaffolding
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-orange-400 transition-all duration-300 flex items-center gap-2 group">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  Formwork Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-orange-400 transition-all duration-300 flex items-center gap-2 group">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  Equipment Rental
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-orange-400 transition-all duration-300 flex items-center gap-2 group">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  Civil Engineering
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info - Column 4 */}
          <div>
            <h3 className="font-bold text-white text-lg mb-5 relative inline-block">
              Get in Touch
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-orange-500 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <svg className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <a href="mailto:deckscaffgh@outlook.com" className="text-gray-400 hover:text-orange-400 transition-all duration-300 text-sm break-all">
                  deckscaffgh@outlook.com
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <svg className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <div>
                  <a href="tel:+233544993344" className="text-gray-400 hover:text-orange-400 transition-all duration-300 block text-sm">+233 54 499 3344</a>
                  <a href="tel:+233598049762" className="text-gray-400 hover:text-orange-400 transition-all duration-300 block text-sm mt-1">+233 59 804 9762</a>
                  <a href="tel:+233245446160" className="text-gray-400 hover:text-orange-400 transition-all duration-300 block text-sm mt-1">+233 24 544 6160</a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <svg className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <a href="#location" className="text-gray-400 hover:text-orange-400 transition-all duration-300 text-sm">
                  Medie, Off Accra Nsawam Rd.
                  <br />
                  Ghana
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section - NEW
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h4 className="font-semibold text-white mb-1">Stay Updated</h4>
              <p className="text-gray-400 text-sm">Get the latest updates on our services and projects.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                />
              </div>
              <button className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div> */}

        {/* Bottom Bar - Improved */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {currentYear} Deckscaff Ghana Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-xs">
            <a href="#" className="text-gray-500 hover:text-orange-400 transition-colors duration-300">Privacy Policy</a>
            <span className="text-gray-700">|</span>
            <a href="#" className="text-gray-500 hover:text-orange-400 transition-colors duration-300">Terms of Service</a>
            <span className="text-gray-700">|</span>
            <a href="#contact" className="text-gray-500 hover:text-orange-400 transition-colors duration-300">Support</a>
          </div>
          <div className="text-gray-500 text-xs">
            Website designed by{" "}
            <a 
              href="https://nexovate-two.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 transition-colors duration-300 font-medium"
            >
              Nexovate Solutions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}