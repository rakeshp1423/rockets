// src/components/SpaceRace.jsx
import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView.js';

const SpaceRace = () => {
  const sectionRef = useRef(null);
  useInView(sectionRef, 'space-race', { threshold: 0.5 });

  return (
    <section ref={sectionRef} id="space-race" className="min-h-screen py-24 text-white flex items-center">
      <div className="container mx-auto px-10 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Visual Content */}
          <div className="flex justify-center items-center md:order-first order-last">
             <div className="w-full h-80 bg-gray-900/50 rounded-lg border border-purple-500/20 flex justify-center items-center shadow-2xl shadow-purple-500/10">
                <p className="text-gray-500 font-orbitron">Visual Element Placeholder</p>
             </div>
          </div>
          {/* Text Content */}
          <div className="md:pl-8">
            <h3 className="font-orbitron text-sm text-purple-400 tracking-widest uppercase">
              1950s – 1970s
            </h3>
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold my-4">
              The Space Race
            </h2>
            <p className="text-gray-300 leading-relaxed">
              The Cold War turned space into the ultimate competitive arena. The Soviet Union's launch of Sputnik 1 in 1957 and Yuri Gagarin's first human spaceflight in 1961 spurred the United States to action. President Kennedy's bold declaration to land a man on the Moon culminated in the Apollo 11 mission in 1969, a monumental achievement for humanity that was watched by millions across the globe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpaceRace;
