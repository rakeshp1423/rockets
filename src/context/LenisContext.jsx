// src/context/LenisContext.jsx
import { createContext, useContext, useEffect, useState } from 'react'
import Lenis from 'lenis'

// 1. Create the context
const LenisContext = createContext()

// 2. Create the provider component
export const LenisProvider = ({ children }) => {
  const [lenis, setLenis] = useState(null)

  useEffect(() => {
    // Initialize Lenis
    const newLenis = new Lenis()
    setLenis(newLenis)

    // Animation frame loop
    function raf(time) {
      newLenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // Cleanup on unmount
    return () => {
      newLenis.destroy()
    }
  }, [])

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  )
}

// 3. Create a custom hook for easy access
export const useLenis = () => {
  return useContext(LenisContext)
}