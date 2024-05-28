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
      },
      keyframes: {
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
          '50%': { transform: 'translateY(-50px) scale(2)' },
          '75%': { transform: 'rotate(50deg) scale(2)' },
          '100%': { transform: 'translateY(100vh) scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
