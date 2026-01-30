/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#14213D",
        tertiary: "#E5E5E5",
        accent: "#FCA311",
        "accent-dark": "#E5A008",
        "black-100": "#FFFFFF",
        "black-200": "#E5E5E5",
        "white-100": "#000000",
      },
      boxShadow: {
        card: "0px 4px 20px rgba(0, 0, 0, 0.08)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "linear-gradient(135deg, #FFFFFF 0%, #E5E5E5 100%)",
      },
      textColor: {
        base: "#000000",
        muted: "#14213D",
      },
    },
  },
  plugins: [],
};
