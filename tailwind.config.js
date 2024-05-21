import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./equix/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [typography],
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
        border: "hsla(270, 100%, 85%, 15%)",
        accent: "hsl(270, 100%, 62%)",
        dark: "hsl(270, 100%, 10%)",
      },
    },
  },
};

export default config;
