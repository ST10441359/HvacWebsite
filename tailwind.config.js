/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          // The deep, professional background color
          navy:      '#091B2C', 
          // A slightly lighter navy for sections that need to sit above the background
          blue:      '#112D4A', 
          // The vibrant red from the logo (used for primary buttons and accents)
          red:       '#E31E24', 
          redHover:  '#C5161C', 
          // The bright, icy blue from the logo (used for badges and secondary accents)
          babyBlue:  '#3A8EE6', 
          lightBlue: '#EAF4FF',
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