/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["oswald", ...fontFamily.sans],
        kelly: ['Kelly Slab', 'serif'],
      },
      colors: {
        customBg: '#121618', // Custom background color
        customBlue: '#0796EF',
      },
      height: {
        '76px': '76px', // Custom height
      },
      width: {
        '86px': '86px', // Custom width
      },
    },
  },
  plugins: [],
};
