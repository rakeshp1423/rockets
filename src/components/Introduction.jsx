// src/components/Introduction.jsx
import React from 'react';
import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const Introduction = () => {
  return (
    <section
      id="introduction"
      // Changed background to a solid color to create the parallax effect
      className="min-h-screen w-full bg-[#101935] text-white flex items-center"
    >
      <div className="container mx-auto px-10 max-w-6xl">
        <div className="flex justify-end">
          <div className="w-full md:w-2/3 text-right">
            <motion.h2
              className="text-4xl md:text-6xl font-bold font-orbitron text-cyan-300 mb-8"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              Why Rockets?
            </motion.h2>
            <motion.div
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
                The rocket is the ultimate symbol of human ambition. It represents our innate desire to look up, to question our place among the stars, and to challenge the very limits of our physical world. It is the culmination of centuries of scientific inquiry, driven by a relentless curiosity to understand the universe.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Beyond pure science, rockets have been forged in the crucible of geopolitical rivalry, serving as powerful emblems of national pride and technological supremacy. Yet, their true purpose transcends conflict. They are the vessels of our courage, carrying our dreams and our proxies into the silent, unforgiving frontier of space, turning the abstract concept of 'there' into a tangible destination.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
