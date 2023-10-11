const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./public/**/*.{html,js}", "./**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        // center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      fontFamily: {
        montserrat: ['"Montserrat", sans-serif'],
        poppins: ['"Poppins", sans-serif'],
      },
      colors: {
        holy: "#fafafa",
        "holy-blur": "#f2f2f2",
        primary: "#0d6efd",
        dark: "#1e293b",
        "dark-scy": "#132c33",
        info: "#0dcaf0",
        warning: "#ffc107",
        danger: "#dc3545",
        secondary: "#4b5563",
        graysly: "#cbd5e1",
        start: "#126e82",
        tailwind: "#06B6D4",
      },
      boxShadow: {
        // "3xl": "0 -5px 10px rgba(0, 0, 0, 0.1)",
        "3xl": "0 5px 15px 0 rgb(0 0 0 / 8%)",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, prefix, config }) {
      addComponents({
        ".bg-hover-brand": {
          backgroundColor: "#f3f4f6",
          "&:hover": {
            backgroundColor: "#e5e5e5",
          },
        },
        ".bg-hover": {
          backgroundColor: "#1e293b",
          "&:hover": {
            backgroundColor: "#1f2937",
          },
        },
        ".bg-hover-darkside": {
          backgroundColor: "transparant",
          "&:hover": {
            backgroundColor: "#475569",
            opacity: ".3",
          },
        },
      });
    }),
  ],
};
