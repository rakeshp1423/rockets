// src/components/NewSpaceAge.jsx
import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView.js';

const NewSpaceAge = () => {
  const sectionRef = useRef(null);
  useInView(sectionRef, 'new-space-age', { threshold: 0.5 });

  return (
    <section ref={sectionRef} id="new-space-age" className="min-h-screen py-24 text-white flex items-center">
      <div className="container mx-auto px-10 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Visual Content */}
          <div className="flex justify-center items-center md:order-first order-last">
             <div className="w-full h-80 bg-gray-900/50 rounded-lg border border-teal-500/20 flex justify-center items-center shadow-2xl shadow-teal-500/10">
                <p className="text-gray-500 font-orbitron">Visual Element Placeholder</p>
             </div>
          </div>
          {/* Text Content */}
          <div className="md:pl-8">
            <h3 className="font-orbitron text-sm text-teal-400 tracking-widest uppercase">
              2010s – Present
            </h3>
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold my-4">
              The New Space Age
            </h2>
            <p className="text-gray-300 leading-relaxed">
              A paradigm shift occurred as private companies like SpaceX and Blue Origin entered the scene, driving innovation and competition. SpaceX's successful landing and reuse of the Falcon 9 rocket booster dramatically lowered launch costs. This era is defined by commercialization, with companies launching satellite constellations, flying astronauts for NASA, and making space more accessible than ever before.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewSpaceAge;
