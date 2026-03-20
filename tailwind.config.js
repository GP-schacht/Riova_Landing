// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
 
  theme: {
    extend: {
      transitionDelay: {
        '150': '150ms',
        '300': '300ms',
      },

      keyframes: {
  'enter-up': {
    from: { opacity: '0', transform: 'translateY(40px)' },
    to:   { opacity: '1', transform: 'translateY(0)' },
  },
  'exit-down': {
    from: { opacity: '1', transform: 'translateY(0)' },
    to:   { opacity: '0', transform: 'translateY(40px)' },
  },
  'enter-left': {
    from: { opacity: '0', transform: 'translateX(-40px)' },
    to:   { opacity: '1', transform: 'translateX(0)' },
  },
  'exit-left': {
    from: { opacity: '1', transform: 'translateX(0)' },
    to:   { opacity: '0', transform: 'translateX(-40px)' },
  },
  'enter-right': {
    from: { opacity: '0', transform: 'translateX(40px)' },
    to:   { opacity: '1', transform: 'translateX(0)' },
  },
  'exit-right': {
    from: { opacity: '1', transform: 'translateX(0)' },
    to:   { opacity: '0', transform: 'translateX(40px)' },
  },
},

animation: {
  'fade-in-up':     'enter-up    600ms cubic-bezier(0.22,1,0.36,1) both',
  'fade-out-down':  'exit-down   450ms cubic-bezier(0.64,0,0.78,0) both',
  'slide-in-left':  'enter-left  550ms cubic-bezier(0.22,1,0.36,1) both',
  'slide-out-left': 'exit-left   400ms cubic-bezier(0.64,0,0.78,0) both',
  'slide-in-right': 'enter-right 550ms cubic-bezier(0.22,1,0.36,1) both',
  'slide-out-right':'exit-right  400ms cubic-bezier(0.64,0,0.78,0) both',
},
    },
  },
  plugins: [],
};