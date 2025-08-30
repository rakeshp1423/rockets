// src/components/Introduction.jsx
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Introduction = () => {
    const targetRef = useRef(null);
    // Track scroll progress within this taller section
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start start', 'end end'],
    });

    // Animate "Why Rockets?" title: slides in during the first 15% of scroll
    const titleX = useTransform(scrollYProgress, [0, 0.15], ['100%', '0%']);
    const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

    // Animate paragraphs: fade in and scroll up
    const paragraphsOpacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
    const paragraphsY = useTransform(scrollYProgress, [0.25, 0.9], ['40%', '-100%']);

  return (
    // Section is now 300vh tall to create space for the scroll animation
    <section ref={targetRef} id="introduction" className="h-[300vh] w-full bg-cosmic-dark">
        {/* A sticky container holds the two-column layout, making it stay in view */}
        <div className="sticky top-0 h-screen w-full flex">
            {/* Column 1: Background Image (remains visible) */}
            <div className="w-1/2 h-full relative">
                <img
                    src="/rc1.jpg" // Add your image to the /public folder
                    alt="Rocket on launchpad"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Column 2: White Content Panel (serves as the animation stage) */}
            <div className="w-1/2 h-full bg-white flex flex-col justify-start p-12 md:p-20 relative overflow-hidden">
                {/* Animated Title */}
                <motion.h2
                    style={{ x: titleX, opacity: titleOpacity }}
                    className="text-4xl md:text-5xl font-bold font-orbitron text-blue-900 mb-8 relative z-10"
                >
                    WHY ROCKETS?
                </motion.h2>

                {/* Animated and Scrolling Paragraphs */}
                <motion.div
                    style={{ y: paragraphsY, opacity: paragraphsOpacity }}
                    className="w-full absolute left-0 top-0 h-full pt-40 px-12 md:px-20"
                >
                    {/* Masking div makes text appear to scroll 'under' the title */}
                    <div className="w-full h-full [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]">
                        <div className="space-y-6">
                            <p className="text-base text-gray-700 leading-relaxed">
                                The rocket is the ultimate symbol of human ambition. It represents our innate desire to look up, to question our place among the stars, and to challenge the very limits of our physical world. It is the culmination of centuries of scientific inquiry, driven by a relentless curiosity to understand the universe.
                            </p>
                            <p className="text-base text-gray-700 leading-relaxed">
                                Beyond pure science, rockets have been forged in the crucible of geopolitical rivalry, serving as powerful emblems of national pride and technological supremacy. Yet, their true purpose transcends conflict. They are the vessels of our courage, carrying our dreams into the silent, unforgiving frontier of space.
                            </p>
                            <p className="text-base text-gray-700 leading-relaxed">
                                They turn the abstract concept of 'there' into a tangible destination. With every launch, we don't just send metal and fuel into the void; we send a piece of ourselves, pushing the boundaries of what's possible and redefining our place in the cosmos. Each ascent is a testament to our persistence.
                            </p>
                             <p className="text-base text-gray-700 leading-relaxed">
                                Every launch is a carefully orchestrated symphony of physics and engineering, a violent yet controlled explosion that defies gravity. It's a spectacle of human ingenuity, where thousands of components work in perfect harmony to achieve a single, audacious goal: to leave our world behind, even if only for a short while.
                            </p>
                            <p className="text-base text-gray-700 leading-relaxed">
                                Rockets also serve as our remote eyes and hands in the cosmos. They deploy the telescopes that peer into the dawn of time, the satellites that connect our global village, and the probes that touch the surfaces of other worlds. They are the unsung heroes of modern science, extending our senses far beyond our physical reach.
                            </p>
                             <p className="text-base text-gray-700 leading-relaxed">
                                Ultimately, rockets represent hope. They are a tangible promise that our future is not confined to this single planet. They remind us that there are still frontiers to explore, mysteries to solve, and that humanity's greatest adventures are still ahead of us, waiting in the starlit darkness.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
  );
};

export default Introduction;

