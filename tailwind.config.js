// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Add your custom colors
      colors: {
        'cosmic-dark': '#0a0f1f',
      },
      // Add your custom font
      fontFamily: {
        orbitron: ['"Orbitron"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}