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
          DEFAULT: '#047857', // Emerald-700
          dark: '#064E3B',    // Emerald-900
          light: '#D1FAE5',   // Emerald-100
        },
        secondary: '#022C22', // Emerald-950
        accent: '#10B981',    // Emerald-500
        gold: '#F59E0B',      // Amber-500 for the CTA button
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'jiggle': 'jiggle 3s ease-in-out infinite',
      },
      keyframes: {
        jiggle: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
          '5%': { transform: 'scale(1.05) rotate(-2deg)' },
          '10%': { transform: 'scale(1.05) rotate(2deg)' },
          '15%': { transform: 'scale(1.05) rotate(-2deg)' },
          '20%': { transform: 'scale(1) rotate(0deg)' },
        }
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
}
