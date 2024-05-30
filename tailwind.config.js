/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary-color) / <alpha-value>)',
        secondary: 'rgb(var(--secondary-color) / <alpha-value>)',
        borderColor: 'rgb(var(--border) / .5)',
        shadowColor: 'rgb(var(--shadow) / .3)',
        quinary: 'rgb(var(--quinary-color) / <alpha-value>)'
      },
      animation: {
        movingPlusX: 'movingPlusX 10s linear infinite',
        movingMinusX: 'movingMinusX 10s linear infinite',
        bar: 'bar 1s ease-in-out'
      },
      keyframes: {
        bar: {
          '0%': {width: '0%'},
          '100%': {width: '100%'},
        },
        movingPlusX: {
          '0%': { transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(780deg)', left: '105%'},
        },
        movingMinusX: {
          '0%': { transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(780deg)', right: '105%'},
        },
        throw: {
          '0%': { transform: 'translateY(0) scale(0)' },
          '20%': { transform: 'translateY(-100px) scale(2)' },
          '25%': { transform: 'translateY(-100px) scale(1.8)' },
          '30%': { transform: 'translateY(-100px) scale(2)' },
          '35%': { transform: 'translateY(-100px) scale(1.8)' },
          '40%': { transform: 'translateY(-100px) scale(2)' },
          '75%': { transform: 'translateY(-80px) rotate(50deg) scale(1.8)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        throw2: {
          '0%': { transform: 'translateY(0) scale(0)' },
          '20%': { transform: 'translateY(-100px) scale(2)' },
          '25%': { transform: 'translateY(-100px) scale(1.8)' },
          '30%': { transform: 'translateY(-100px) scale(2)' },
          '35%': { transform: 'translateY(-100px) scale(1.8)' },
          '40%': { transform: 'translateY(-100px) scale(2)' },
          '75%': { transform: 'translateY(-80px) rotate(50deg) scale(2)' },
          '95%': { transform: 'translateY(-20px) rotate(-50deg) scale(2)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        throw3: {
          '0%': { transform: 'translateY(0) scale(0)' },
          '20%': { transform: 'translateY(-100px) scale(2)' },
          '25%': { transform: 'translateY(-100px) scale(1.8)' },
          '30%': { transform: 'translateY(-100px) scale(2)' },
          '35%': { transform: 'translateY(-100px) scale(1.8)' },
          '40%': { transform: 'translateY(-100px) scale(2)' },
          '75%': { transform: 'translateY(-80px) rotate(50deg) scale(2)' },
          '85%': { transform: 'translateY(-20px) rotate(-50deg) scale(2)' },
          '95%': { transform: 'translateY(10px) rotate(50deg) scale(2)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
};
