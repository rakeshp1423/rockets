// src/components/EarlyInnovations.jsx
import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView.js';

const EarlyInnovations = () => {
  const sectionRef = useRef(null);
  useInView(sectionRef, 'early-innovations', { threshold: 0.5 });

  return (
    <section ref={sectionRef} id="early-innovations" className="min-h-screen py-24 text-white flex items-center">
      <div className="container mx-auto px-10 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="md:pr-8">
            <h3 className="font-orbitron text-sm text-cyan-400 tracking-widest uppercase">
              1200s – 1940s
            </h3>
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold my-4">
              Early Innovations
            </h2>
            <p className="text-gray-300 leading-relaxed">
              The concept of rocketry began with Chinese 'fire arrows' in the 13th century. However, the scientific foundation was laid centuries later by pioneers like Konstantin Tsiolkovsky, who developed the rocket equation, and Robert Goddard, who launched the first liquid-fueled rocket in 1926. This era culminated in the German V-2 rocket during WWII—a terrifying weapon, but also the technological blueprint for all future space exploration.
            </p>
          </div>
          {/* Visual Content */}
          <div className="flex justify-center items-center">
             <div className="w-full h-80 bg-gray-900/50 rounded-lg border border-cyan-500/20 flex justify-center items-center shadow-2xl shadow-cyan-500/10">
                <p className="text-gray-500 font-orbitron">Visual Element Placeholder</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyInnovations;
