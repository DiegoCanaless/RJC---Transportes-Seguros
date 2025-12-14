/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fcd34d",   // amber custom
        secondary: "#0284c7", // sky
        black: "#0F172A",
        light: "#ffffff",
        gris: "#f8fafc",
        yellowPrimary: "#f59e0b"
      },
    },
  },
  plugins: [],
};
