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
      // Escala de fuentes aumentada ~1-2px por nivel (tipografía más legible)
      fontSize: {
        xs: ["0.8125rem", { lineHeight: "1.25rem" }],    // 13px
        sm: ["0.9375rem", { lineHeight: "1.375rem" }],   // 15px
        base: ["1.0625rem", { lineHeight: "1.625rem" }], // 17px
        lg: ["1.1875rem", { lineHeight: "1.75rem" }],    // 19px
        xl: ["1.3125rem", { lineHeight: "1.875rem" }],   // 21px
        "2xl": ["1.625rem", { lineHeight: "2.125rem" }], // 26px
        "3xl": ["2rem", { lineHeight: "2.5rem" }],       // 32px
        "4xl": ["2.375rem", { lineHeight: "2.75rem" }],  // 38px
        "5xl": ["3.125rem", { lineHeight: "1" }],        // 50px
        "6xl": ["3.875rem", { lineHeight: "1" }],        // 62px
        "7xl": ["4.625rem", { lineHeight: "1" }],        // 74px
      },
    },
  },
  plugins: [],
};
