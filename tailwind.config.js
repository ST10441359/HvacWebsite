/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          // The core brand colours from the logo
          red:       '#D32029', // The red swoosh
          redHover:  '#B01820',
          blue:      '#2C2A6B', // The deep blue text
          blueHover: '#1F1E4E',
          
          // The dark background 
          navy:      '#0B0B1A', 
          
          // Replacing the old light blues with neutral/grey tones
          lightBlue: '#F1F5F9', // For subtle backgrounds/badges
          grey:      '#9CA3AF', // For outlines/secondary text
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Bebas Neue', 'Impact', 'sans-serif'],
      },
    },
  },
  plugins: [],
}