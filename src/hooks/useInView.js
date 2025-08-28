// src/hooks/useInView.js
import { useEffect } from 'react';
import { useActiveSection } from '../context/ActiveSectionContext.jsx';

export const useInView = (ref, sectionId, options) => {
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(sectionId);
        }
      },
      options
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, sectionId, setActiveSection, options]);
};