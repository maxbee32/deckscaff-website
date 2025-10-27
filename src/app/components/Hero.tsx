'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 hero-pattern"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <div className="size-2 bg-orange-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-white/90 text-sm font-medium">Trusted Industry Leader Since 2008</span>
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Premium
              <span className="text-orange-400 block">Scaffolding</span>
              Solutions
            </h1>

            <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
              Deckscaff Ghana Ltd delivers professional scaffolding services, equipment rental, and custom engineering solutions for construction, industrial maintenance, and infrastructure projects across Ghana.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a href="#contact" className="bg-orange-500 text-white hover:bg-orange-600 font-semibold text-center text-lg py-4 px-8 rounded-lg transition-colors duration-300 shadow-lg">
                Start Your Project
              </a>
              <a href="#services" className="border-2 border-white text-white hover:bg-white/10 font-semibold text-center text-lg py-4 px-8 rounded-lg transition-colors duration-300">
                Explore Services
              </a>
            </div>

            {/* Professional Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-white/70 text-sm font-medium">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">100+</div>
                <div className="text-white/70 text-sm font-medium">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-white/70 text-sm font-medium">Professional Support</div>
              </div>
            </div>
          </div>

          {/* Professional Hero Visual - Updated with larger image */}
          <div className={`relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
              {/* Larger Hero Image */}
              <div className="h-80 relative">
                <Image 
                  src="/images/hero.jpeg" 
                  alt="Professional Scaffolding Solutions - Deckscaff Ghana Ltd"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-3">Engineering Excellence</h3>
                  <p className="text-white/90 mb-6">Certified scaffolding systems meeting international safety standards</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div className="text-white font-bold text-lg">ISO 9001</div>
                      <div className="text-white/80 text-sm">Certified</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div className="text-white font-bold text-lg">OSHA</div>
                      <div className="text-white/80 text-sm">Compliant</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="size-6 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}