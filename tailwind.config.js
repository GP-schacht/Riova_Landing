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

     transitionDelay: {
            '150': '150ms',
            '300': '300ms',
        },
  keyframes: {
    'fade-in-up': {
      '0%': { opacity: '0', transform: 'translateY(20px)' },
      '100%': { opacity: '1', transform: 'translateY(0)' },
    },

    'fade-out-down': {
      '0%': { opacity: '1', transform: 'translateY(0)' },
      '100%': { opacity: '0', transform: 'translateY(20px)' },
    },

    'slide-in-left': {
      '0%': { opacity: '0', transform: 'translateX(-40px)' },
      '100%': { opacity: '1', transform: 'translateX(0)' },
    },

    'slide-out-left': {
      '0%': { opacity: '1', transform: 'translateX(0)' },
      '100%': { opacity: '0', transform: 'translateX(-40px)' },
    },

    'slide-in-right': {
      '0%': { opacity: '0', transform: 'translateX(40px)' },
      '100%': { opacity: '1', transform: 'translateX(0)' },
    },

    'slide-out-right': {
      '0%': { opacity: '1', transform: 'translateX(0)' },
      '100%': { opacity: '0', transform: 'translateX(40px)' },
    },
  },

  animation: {
    'fade-in-up': 'fade-in-up 600ms ease-out',
    'fade-out-down': 'fade-out-down 600ms ease-in',

    'slide-in-left': 'slide-in-left 500ms ease-out',
    'slide-out-left': 'slide-out-left 500ms ease-in',

    'slide-in-right': 'slide-in-right 500ms ease-out',
    'slide-out-right': 'slide-out-right 500ms ease-in',
  },
},
  },
  plugins: [],
};