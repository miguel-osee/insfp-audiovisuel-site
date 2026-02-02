/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],

  theme: {
    // ✅ CONFIG CONTAINER (AU BON ENDROIT)
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        md: "3rem",
        lg: "4rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },

      fontSize: {
      xs: "0.85rem",
      sm: "0.95rem",
      base: "1.05rem", // ← taille normale augmentée
      lg: "1.125rem",
      xl: "1.5rem",
      "2xl": "2rem",
      },

    extend: {
      // 🎨 COULEURS PROJET
      colors: {
        primary: "#FF584D",
        secondary: "#1F0B0A",
        background: "#FCFCFC",
      },

      // 🎞️ ANIMATION DÉFILEMENT HORIZONTAL
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },

      animation: {
        marquee: "marquee 30s linear infinite",
      },
    },
  },

  plugins: [
    require("tailwind-scrollbar-hide"),
  ],
};
