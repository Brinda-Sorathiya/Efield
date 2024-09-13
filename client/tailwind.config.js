module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        slide: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideRightToLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        zoomIn: {
          '0%': {
            opacity: 0,
            transform: 'scale(0.5)'
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1)'
          },
        },
      },
      animation: {
        'gradient-move': 'gradient 10s ease infinite',
        'slide-in': 'slide 1s ease-out forwards',
        'slide-in-right-to-left': 'slideRightToLeft 1s ease-out forwards',
        'zoom-in': 'zoomIn 0.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
