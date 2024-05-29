/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./equix/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
  theme: {
    extend: {
      borderRadius: {
        DEFAULT: "8px",
      },
      padding: {
        DEFAULT: "8px",
      },
      gap: {
        DEFAULT: "8px",
      },
      colors: {
        light: "hsl(270, 100%, 99%)",
        border: "hsla(270, 100%, 96%)",
        accent: "hsl(270, 100%, 61%)",
        dark: "hsl(270, 100%, 12%)",
      },
    },
  },
};
