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
          DEFAULT: '#000000', // Black
          dark: '#000000',    // Black
          light: '#333333',   // Dark Gray
        },
        secondary: '#111111', // Very Dark Gray
        accent: '#D4AF37',    // Gold
        gold: '#FFD700',      // Bright Gold
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'jiggle': 'jiggle 3s ease-in-out infinite',
        'fade-in': 'fadeIn 1.5s ease-out forwards',
      },
      keyframes: {
        jiggle: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
          '5%': { transform: 'scale(1.05) rotate(-2deg)' },
          '10%': { transform: 'scale(1.05) rotate(2deg)' },
          '15%': { transform: 'scale(1.05) rotate(-2deg)' },
          '20%': { transform: 'scale(1) rotate(0deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
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
