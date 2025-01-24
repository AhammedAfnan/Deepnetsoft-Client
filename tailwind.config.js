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
      },
      colors: {
        customBg: '#121618', // Custom background color
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
