"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

interface ClientLogo {
  name: string;
  logo: string;
  width: number;
  height: number;
  description?: string;
}

// Client testimonials data - No names, just positions
interface Testimonial {
  id: number;
  position: string;
  company: string;
  quote: string;
  rating: number;
  projectType?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    position: "Project Manager",
    company: "First Sky Limited",
    quote: "Deckscaff has been our go-to scaffolding partner for over 5 years. Their professionalism, safety standards, and timely delivery are unmatched.",
    rating: 5,
    projectType: "High-rise Construction",
  },
  {
    id: 2,
    position: "Site Engineer",
    company: "LC Limited",
    quote: "The team at Deckscaff is exceptional. They provided custom scaffolding solutions for our complex industrial project. Their engineering support gave us complete confidence.",
    rating: 5,
    projectType: "Industrial Facility",
  },
  {
    id: 3,
    position: "Operations Director",
    company: "Nestle Ghana",
    quote: "Safety is our top priority, and Deckscaff delivered beyond expectations. Their equipment is top-quality, and their crew is highly trained.",
    rating: 5,
    projectType: "Factory Maintenance",
  },
  {
    id: 4,
    position: "Facility Manager",
    company: "Accra Mall",
    quote: "We needed scaffolding for a complex renovation while the mall remained open. Deckscaff handled it perfectly - minimal disruption, maximum safety.",
    rating: 5,
    projectType: "Commercial Renovation",
  },
  {
    id: 5,
    position: "Project Director",
    company: "Jenspak Limited",
    quote: "The most reliable scaffolding company we've worked with. Their rapid deployment and 24/7 support saved us during a critical project phase.",
    rating: 5,
    projectType: "Factory Expansion",
  },
  {
    id: 6,
    position: "Construction Manager",
    company: "Chicos Construction",
    quote: "Deckscaff's team is professional, punctual, and thorough. They provided detailed safety briefings and their equipment is always in perfect condition.",
    rating: 5,
    projectType: "Residential Tower",
  },
];

const clientLogos: ClientLogo[] = [
  {
    name: "Nestle Ghana",
    logo: "/images/clients/chico.jpeg",
    width: 140,
    height: 70,
    description: "Global food & beverage leader",
  },
  {
    name: "LC Limited",
    logo: "/images/clients/lc.jpeg",
    width: 140,
    height: 70,
    description: "Construction & engineering",
  },
  {
    name: "First Sky Limited",
    logo: "/images/clients/first.jpeg",
    width: 140,
    height: 70,
    description: "Real estate development",
  },
  {
    name: "Jenspak Limited",
    logo: "/images/clients/jen.jpeg",
    width: 140,
    height: 70,
    description: "Packaging solutions",
  },
  {
    name: "Lynks Entertainment",
    logo: "/images/clients/lynx.jpeg",
    width: 140,
    height: 70,
    description: "Entertainment & media",
  },
  {
    name: "Chicos Construction",
    logo: "/images/clients/china.jpeg",
    width: 140,
    height: 70,
    description: "Construction services",
  },
  {
    name: "White Beam Concepts",
    logo: "/images/clients/lyco.jpeg",
    width: 140,
    height: 70,
    description: "Design & architecture",
  },
];

// Featured clients
const featuredClients = clientLogos.slice(0, 3);

// Counter Component
function ClientCounter() {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const target = 100;
          const duration = 2000;
          const increment = target / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div ref={counterRef} className="text-4xl md:text-5xl font-black text-orange-500">
      {count}+
    </div>
  );
}

// Testimonial Card Component - No names, just position & company
function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 flex flex-col h-full ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Quote Icon */}
      <div className="mb-4">
        <svg className="w-10 h-10 text-orange-300/50" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* Quote */}
      <p className="text-gray-600 leading-relaxed mb-4 flex-grow">
        "{testimonial.quote}"
      </p>

      {/* Rating Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>

      {/* Client Position & Company - No name */}
      <div className="pt-4 border-t border-gray-100">
        <p className="font-semibold text-gray-900">{testimonial.position}</p>
        <p className="text-sm text-gray-500">{testimonial.company}</p>
        {testimonial.projectType && (
          <span className="inline-block mt-1 text-xs text-orange-500 font-medium">
            {testimonial.projectType}
          </span>
        )}
      </div>
    </div>
  );
}

export default function ClientLogos() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Auto-rotate carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentTestimonial = testimonials[currentTestimonialIndex];

  // Duplicate logos for seamless scrolling
  const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos];
  const scrollDuration = clientLogos.length * 4;

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-200 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by <span className="text-orange-500">Industry Leaders</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're proud to have collaborated with reputable companies across Ghana
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
            <ClientCounter />
            <p className="text-gray-600 font-medium mt-2">Happy Clients</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-4xl md:text-5xl font-black text-orange-500">15+</div>
            <p className="text-gray-600 font-medium mt-2">Years Experience</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-4xl md:text-5xl font-black text-orange-500">100+</div>
            <p className="text-gray-600 font-medium mt-2">Projects Completed</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-4xl md:text-5xl font-black text-orange-500">98%</div>
            <p className="text-gray-600 font-medium mt-2">Would Recommend</p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            What Our <span className="text-orange-500">Clients Say</span>
          </h3>
          
          {/* Featured Testimonial Carousel */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Quote Icon Background */}
            <div className="absolute top-6 right-6 opacity-10">
              <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <p className="text-xl md:text-2xl leading-relaxed mb-6">
                "{currentTestimonial.quote}"
              </p>
              
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="flex gap-1 mb-2">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="font-semibold text-lg">{currentTestimonial.position}</p>
                  <p className="text-white/70 text-sm">{currentTestimonial.company}</p>
                  {currentTestimonial.projectType && (
                    <span className="inline-block mt-1 text-xs text-orange-400">
                      {currentTestimonial.projectType}
                    </span>
                  )}
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Dot Indicators */}
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setCurrentTestimonialIndex(index);
                      setTimeout(() => setIsAutoPlaying(true), 10000);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === currentTestimonialIndex ? "w-8 bg-orange-500" : "w-1.5 bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Clients Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Featured <span className="text-orange-500">Partnerships</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredClients.map((client, index) => (
              <div
                key={`featured-${client.name}`}
                className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center border border-gray-100 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-24 mb-4 flex items-center justify-center">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={client.width}
                    height={client.height}
                    className="object-contain grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {client.name}
                </h4>
                <p className="text-sm text-gray-500">{client.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scrolling Logos Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Our Valued <span className="text-orange-500">Clients</span>
          </h3>
          
          <div className="relative overflow-hidden rounded-2xl bg-white/50 backdrop-blur-sm py-8">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 rounded-l-2xl"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 rounded-r-2xl"></div>

            {/* Scrolling Logos */}
            <div
              className="flex space-x-12"
              style={{
                animation: `scroll ${scrollDuration}s linear infinite`,
                width: "fit-content",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.animationPlayState = "paused";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.animationPlayState = "running";
              }}
            >
              {duplicatedLogos.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                  style={{
                    width: `${client.width}px`,
                    height: `${client.height}px`,
                  }}
                >
                  <Image
                    src={client.logo}
                    alt={`${client.name} - Trusted Client`}
                    width={client.width}
                    height={client.height}
                    className="object-contain max-h-full"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-140px * ${clientLogos.length} - 48px * ${clientLogos.length}));
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}