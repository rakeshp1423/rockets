// src/components/Sidebar.jsx
import React from 'react';
import { useActiveSection } from '../context/ActiveSectionContext.jsx';

const eras = [
  { id: 'early-innovations', name: 'EARLY-INNOVATIONS' },
  { id: 'space-race', name: 'SPACE-RACE' },
  { id: 'shuttle-era', name: 'SHUTTLE-ERA' },
  { id: 'new-space-age', name: 'NEW-SPACE-AGE' },
  { id: 'future-of-rockets', name: 'FUTURE-OF-ROCKETS' },
];

const Sidebar = () => {
  const { activeSection } = useActiveSection();

  return (
    <nav className="fixed top-1/2 -translate-y-1/2 left-4 md:left-8 z-50">
      <ul className="flex flex-col space-y-3">
        {eras.map((era) => {
          const isActive = activeSection === era.id;

          return (
            <li key={era.id}>
              <a href={`#${era.id}`} className="flex items-center group">
                {/* Horizontal Line */}
                <span
                  className={`w-5 h-px mr-3 transition-colors duration-300 ${
                    isActive ? 'bg-white' : 'bg-gray-500 group-hover:bg-white'
                  }`}
                ></span>
                {/* Era Name */}
                <span
                  className={`font-sans text-xs tracking-widest uppercase transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'
                  }`}
                >
                  {era.name}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;
