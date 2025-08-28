// src/context/ActiveSectionContext.jsx
import React, { createContext, useState, useContext } from 'react';

const ActiveSectionContext = createContext();

export const ActiveSectionProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSection = () => useContext(ActiveSectionContext);