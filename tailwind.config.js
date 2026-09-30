/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy:      '#0B1B33',
          blue:      '#1E3A5F',
          babyBlue:  '#4FA8D8',
          lightBlue: '#E1F1FB',
          red:       '#D32029',
          redHover:  '#B01820',
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