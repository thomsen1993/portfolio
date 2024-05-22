/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   primary: 'rgb(var(--primary-color) / <alpha-value>)',
      //   secondary: 'rgb(var(--secondary-color) / <alpha-value>)',
      //   tertiary: 'rgb(var(--tertiary-color) / <alpha-value>)',
      //   quaternary: 'rgb(var(--quaternary-color) / <alpha-value>)',
      //   quinary: 'rgb(var(--quinary-color) / <alpha-value>)'
      // },
    },
  },
  plugins: [],
};
