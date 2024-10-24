import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-digital-lines-background-27464-large.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Motion
          <span className="text-indigo-400">Scroll</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto animate-slide-up">
          Where creativity meets motion in perfect harmony
        </p>
        <a
          href="#portfolio"
          className="inline-block px-8 py-3 text-lg font-medium text-white bg-indigo-600 rounded-full transition-all duration-300 hover:bg-indigo-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 animate-bounce"
        >
          View Our Work
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
};

export default Hero;