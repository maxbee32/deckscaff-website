'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <header className="fixed top-0 w-full bg-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center">
              <Image 
                src="/images/deckstaff-logo1.png" 
                alt="Deckscaff Ghana Ltd" 
                width={60}
                height={60}
                className="h-16 w-auto"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-gray-900 font-bold text-xl leading-tight">DECKSCAFF</div>
              <div className="text-orange-500 text-sm font-medium leading-tight">GHANA LTD</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-300">Home</a>
            <a href="#services" className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-300">Services</a>
            <a href="#materials" className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-300">Materials</a>
            <a href="#projects" className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-300">Projects</a>
            <a href="#contact" className="bg-orange-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors duration-300">
              Get Quote
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col space-y-1">
              <div className="h-0.5 bg-gray-700 w-full"></div>
              <div className="h-0.5 bg-gray-700 w-full"></div>
              <div className="h-0.5 bg-gray-700 w-full"></div>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-orange-500 font-medium py-2">Home</a>
              <a href="#services" className="text-gray-700 hover:text-orange-500 font-medium py-2">Services</a>
              <a href="#materials" className="text-gray-700 hover:text-orange-500 font-medium py-2">Materials</a>
              <a href="#projects" className="text-gray-700 hover:text-orange-500 font-medium py-2">Projects</a>
              <a href="#contact" className="bg-orange-500 text-white px-4 py-2 rounded-lg font-medium text-center hover:bg-orange-600">
                Get Quote
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}