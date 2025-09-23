/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],
        monoton: ["Monoton", "cursive"],
        playfair: ["Playfair Display", "serif"],
      },
      colors: {
        'light-pink': '#F8C8DC',  // Background
        'rose-gold': '#B76E79',   // Buttons & Highlights
        'white': '#FFFFFF',       // Text background & sections
        'dark-grey': '#4A4A4A',   // Text
      },
    },
  },
  plugins: [],
}

