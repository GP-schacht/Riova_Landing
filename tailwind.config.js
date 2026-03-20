// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  safelist: [
    'animate-fade-in-up',  'animate-fade-out-down',
    'animate-slide-in-left',  'animate-slide-out-left',
    'animate-slide-in-right', 'animate-slide-out-right',
  ],
  theme: {
    extend: {
      transitionDelay: {
        '150': '150ms',
        '300': '300ms',
      },

      keyframes: {
        // Una sola definición reutilizable por eje
        'enter-up':    { from: { opacity: '0', transform: 'translateY(20px)' } },
        'exit-down':   { to:   { opacity: '0', transform: 'translateY(20px)' } },
        'enter-left':  { from: { opacity: '0', transform: 'translateX(-40px)' } },
        'exit-left':   { to:   { opacity: '0', transform: 'translateX(-40px)' } },
        'enter-right': { from: { opacity: '0', transform: 'translateX(40px)' } },
        'exit-right':  { to:   { opacity: '0', transform: 'translateX(40px)' } },
      },

      animation: {
        // ease-out para entradas, ease-in para salidas — más natural
        // forwards mantiene el estado final sin parpadeo
        'fade-in-up':      'enter-up    600ms cubic-bezier(0.22,1,0.36,1) both',
        'fade-out-down':   'exit-down   450ms cubic-bezier(0.64,0,0.78,0) both',

        'slide-in-left':   'enter-left  550ms cubic-bezier(0.22,1,0.36,1) both',
        'slide-out-left':  'exit-left   400ms cubic-bezier(0.64,0,0.78,0) both',

        'slide-in-right':  'enter-right 550ms cubic-bezier(0.22,1,0.36,1) both',
        'slide-out-right': 'exit-right  400ms cubic-bezier(0.64,0,0.78,0) both',
      },
    },
  },
  plugins: [],
};