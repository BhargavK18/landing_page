/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#047857', // Emerald-700 (Deeper, Richer Green)
          dark: '#064E3B',    // Emerald-900
          light: '#D1FAE5',   // Emerald-100
        },
        secondary: '#022C22', // Emerald-950 (Very dark for text)
        accent: '#10B981',    // Emerald-500 (Brighter green for highlights)
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
}
