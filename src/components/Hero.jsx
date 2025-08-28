// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    // Added "sticky top-0" to make the section stick to the top during scroll
    <section className="h-screen w-full relative overflow-hidden flex items-center sticky top-0">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/hero1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>

      {/* Content Container */}
      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="flex items-center">
          {/* Left Column (Empty Spacer) */}
          <div className="hidden md:block md:w-1/2"></div>

          {/* Right Column (Text Content) */}
          <div className="w-full md:w-1/2 text-white text-right">
            <h1 className="font-sans text-5xl md:text-7xl font-light tracking-wider uppercase">
              The
              <br />
              Journey
              <br />
              Of
              <br />
              <span className="font-bold">Rockets</span>
            </h1>
            <p className="font-sans text-lg text-gray-300 mt-2 tracking-widest">
              FROM FIRE TO STAR
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
