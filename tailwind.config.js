const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hcolor: "#474747",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        sunshiney: ["var(--font-sunshiney)"],
        recia: ["var(--font-recia)"],
        satoshi: ["var(--font-satoshi)"],
      },
      screens: {
        xs: "576px",
        ...defaultTheme.screens,
      },
      backgroundImage: {
        "church-front": "url('/images/church-front.png')",
        },
      boxShadow: {
        light: "0 12px 40px 8px rgba(140, 152, 164, .05)",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
