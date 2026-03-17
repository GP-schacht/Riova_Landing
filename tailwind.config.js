// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    // agrega aquí otras rutas donde tengas componentes
  ],
  safelist: [
    'animate-fade-in-up',
    'animate-slide-in-left',
    'animate-slide-in-right',
  ],
  theme: {
    extend: { 
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-12px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(12px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 300ms ease-out',
        'slide-in-left': 'slide-in-left 280ms ease-out',
        'slide-in-right': 'slide-in-right 280ms ease-out',
      },
    },
  },
  plugins: [],
};