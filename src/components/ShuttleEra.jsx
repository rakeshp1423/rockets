// src/components/ShuttleEra.jsx
import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView.js';

const ShuttleEra = () => {
  const sectionRef = useRef(null);
  useInView(sectionRef, 'shuttle-era', { threshold: 0.5 });

  return (
    <section ref={sectionRef} id="shuttle-era" className="min-h-screen py-24 text-white flex items-center">
      <div className="container mx-auto px-10 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="md:pr-8">
            <h3 className="font-orbitron text-sm text-orange-400 tracking-widest uppercase">
              1980s – 2011
            </h3>
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold my-4">
              The Shuttle Era
            </h2>
            <p className="text-gray-300 leading-relaxed">
              After the race to the Moon, the focus shifted to creating a reusable spaceplane. NASA's Space Shuttle fleet became the workhorse of low-Earth orbit for three decades. It was instrumental in building the International Space Station (ISS), deploying the Hubble Space Telescope, and conducting vital scientific research. The Shuttle program made space access routine and demonstrated the potential of reusable spacecraft.
            </p>
          </div>
          {/* Visual Content */}
          <div className="flex justify-center items-center">
             <div className="w-full h-80 bg-gray-900/50 rounded-lg border border-orange-500/20 flex justify-center items-center shadow-2xl shadow-orange-500/10">
                <p className="text-gray-500 font-orbitron">Visual Element Placeholder</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShuttleEra;
