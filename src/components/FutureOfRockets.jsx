// src/components/FutureOfRockets.jsx
import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView.js';

const FutureOfRockets = () => {
  const sectionRef = useRef(null);
  useInView(sectionRef, 'future-of-rockets', { threshold: 0.5 });

  return (
    <section ref={sectionRef} id="future-of-rockets" className="min-h-screen py-24 text-white flex items-center">
      <div className="container mx-auto px-10 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="md:pr-8">
            <h3 className="font-orbitron text-sm text-red-400 tracking-widest uppercase">
              Beyond 2030
            </h3>
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold my-4">
              Future of Rockets
            </h2>
            <p className="text-gray-300 leading-relaxed">
              The next giant leap is focused on interplanetary travel. SpaceX's Starship aims to make humanity a multi-planetary species by colonizing Mars. NASA's Artemis program plans to establish a sustainable human presence on the Moon as a stepping stone to deep space. Advanced concepts like nuclear thermal and fusion propulsion are also in development, promising to drastically reduce travel times across our solar system and beyond.
            </p>
          </div>
          {/* Visual Content */}
          <div className="flex justify-center items-center">
             <div className="w-full h-80 bg-gray-900/50 rounded-lg border border-red-500/20 flex justify-center items-center shadow-2xl shadow-red-500/10">
                <p className="text-gray-500 font-orbitron">Visual Element Placeholder</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureOfRockets;
