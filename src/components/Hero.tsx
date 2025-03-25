
import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      
      const scrollPosition = window.scrollY;
      const opacity = 1 - scrollPosition / 700;
      const translateY = scrollPosition * 0.3;
      
      heroRef.current.style.opacity = Math.max(opacity, 0).toString();
      heroRef.current.style.transform = `translateY(${translateY}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section className="relative h-screen overflow-hidden flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-background"
          style={{ mixBlendMode: 'multiply' }}
        ></div>
        <div 
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2070')`,
            backgroundAttachment: 'fixed'
          }}
        ></div>
      </div>
      
      {/* Content */}
      <div 
        ref={heroRef}
        className="container mx-auto px-4 pt-16 relative z-10 transition-transform duration-200 ease-out"
      >
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium uppercase tracking-wider text-white rounded-full bg-accent/80 backdrop-blur-sm animate-fade-in">
            Discover Culinary Excellence
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight animate-fade-in text-balance text-shadow-sm">
            Elevate Your Culinary Journey
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in opacity-90 max-w-2xl mx-auto text-balance">
            Explore our handpicked selection of exquisite dishes from around the world, crafted to inspire your next meal.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
            <button className="w-full sm:w-auto px-8 py-3 font-medium text-base transition-all bg-accent hover:bg-accent/90 text-white rounded-full flex items-center justify-center group">
              Explore Dishes
              <svg 
                className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            
            <button className="w-full sm:w-auto px-8 py-3 font-medium text-base transition-all bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-full">
              Popular Categories
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-white/80 rounded-full animate-slide-in"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
