"use client";

import { useState, useEffect, useRef } from "react";

export default function VideoHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleVideoLoad = () => {
    console.log("Video loaded successfully");
    setIsVideoLoaded(true);
    if (videoRef.current) {
      videoRef.current
        .play()
        .catch((e) => console.log("Auto-play prevented:", e));
    }
  };

  const handleVideoError = (e: any) => {
    console.error("Video failed to load:", e);
    setVideoError(true);
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        {!isVideoLoaded && !videoError && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-950 animate-pulse" />
        )}

        {videoError ? (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-950">
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white/50 text-center">
                <svg
                  className="w-16 h-16 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                <p>Video failed to load. Please check the file path.</p>
              </div>
            </div>
          </div>
        ) : (
          <video
            ref={videoRef}
            className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2"
            style={{
              opacity: isVideoLoaded ? 1 : 0,
              transition: "opacity 0.5s ease",
            }}
            loop
            muted
            playsInline
            preload="auto"
            onLoadedData={handleVideoLoad}
            onError={handleVideoError}
            poster="/images/video-poster.jpg"
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content - Added padding-bottom to prevent overlap with scroll indicator */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div
            className={`max-w-3xl transition-all duration-1000 pb-20 sm:pb-24 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
    

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.2] mb-6">
              Premium
              <span className="block text-orange-500">Scaffolding</span>
              <span className="block text-3xl sm:text-4xl md:text-5xl text-white/80 mt-2">
                & Formwork Solutions
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mb-8 leading-relaxed">
              We combine engineering excellence with uncompromising safety
              standards. From high-rise towers to industrial complexes, we've
              been Ghana's trusted scaffolding partner since 2008.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 sm:mb-16">
              <a
                href="#contact"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/30 inline-flex items-center justify-center gap-2 text-white font-semibold text-base sm:text-lg"
              >
                <span className="relative z-10">START YOUR PROJECT</span>
                <svg
                  className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
              <a
                href="#projects"
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 rounded-lg text-white font-semibold text-base sm:text-lg hover:bg-white/10 hover:border-white/50 transition-all inline-flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                VIEW OUR WORK
              </a>
            </div>

            {/* Trust Indicators - Clean, no overlap */}
            <div className="flex flex-wrap justify-between sm:justify-start gap-4 sm:gap-8 pt-6 sm:pt-8 border-t border-white/20">
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  15<span className="text-orange-500">+</span>
                </div>
                <div className="text-white/60 text-xs sm:text-sm">
                  Years Excellence
                </div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  100<span className="text-orange-500">+</span>
                </div>
                <div className="text-white/60 text-xs sm:text-sm">
                  Projects Completed
                </div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  24<span className="text-orange-500">/7</span>
                </div>
                <div className="text-white/60 text-xs sm:text-sm">
                  Expert Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Positioned below content, won't overlap */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-1">
          <span className="text-white/40 text-[8px] sm:text-[10px] tracking-[0.2em]">
            EXPLORE
          </span>
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4 text-white/40"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 13l-7 7-7-7m7-7v14"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}