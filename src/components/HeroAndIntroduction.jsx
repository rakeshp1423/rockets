// src/components/HeroAndIntroduction.jsx
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroAndIntroduction = () => {
  // A ref to the main container for tracking scroll progress
  const targetRef = useRef(null);

  // useScroll listens to the scroll progress of the targetRef
  // offset defines the start and end points of the animation
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  // useTransform maps the scroll progress (0 to 1) to opacity values
  // Hero text fades out during the first half of the scroll (0 to 0.5)
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.4, 0.5], [1, 1, 0]);
  // Introduction text fades in during the second half (0.5 to 1)
  const introTextOpacity = useTransform(scrollYProgress, [0.5, 0.6, 1], [0, 1, 1]);

  return (
    <section ref={targetRef} className="relative h-[200vh]">
      {/* This div sticks to the top and acts as the viewport for our animation */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
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

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>

        {/* Animated Content Container */}
        <div className="relative z-20 h-full flex items-center justify-end">
          <div className="container mx-auto px-6 md:px-12 w-full md:w-1/2">
            
            {/* Hero Text */}
            <motion.div style={{ opacity: heroTextOpacity }} className="absolute inset-0 flex items-center justify-end">
              <div className="w-full text-white text-right pr-6 md:pr-12">
                <h1 className="font-sans text-5xl md:text-7xl font-light tracking-wider uppercase">
                  The<br />Journey<br />Of<br /><span className="font-bold">Rockets</span>
                </h1>
                <p className="font-sans text-lg text-gray-300 mt-2 tracking-widest">
                  FROM FIRE TO STAR
                </p>
              </div>
            </motion.div>

            {/* Introduction Text */}
            <motion.div style={{ opacity: introTextOpacity }} className="absolute inset-0 flex items-center justify-end">
               <div className="w-full md:w-5/6 text-white text-right pr-6 md:pr-12">
                <h2 className="text-4xl md:text-6xl font-bold font-orbitron text-cyan-300 mb-8">
                  Why Rockets?
                </h2>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
                  The rocket is the ultimate symbol of human ambition. It represents our innate desire to look up, to question our place among the stars, and to challenge the very limits of our physical world.
                </p>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  They are the vessels of our courage, carrying our dreams into the silent frontier of space, turning the abstract concept of 'there' into a tangible destination.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAndIntroduction;
