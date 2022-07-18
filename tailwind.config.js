const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF0230",
        "nice-red": "#FF0230",
        "clean-white": "#FFFFFF",
        "darkest-dark": "#000000",
        "clean-dark": "#111111",
        delorean: "#6B6B6B",
        concrete: "#989898",
        gray: colors.neutral,
      },
      fontFamily: {
        sans: ["Euclid Circular A"],
      },
      transitionProperty: {
        border:
          "border-width, border-bottom-width, border-left-width, border-right-width, border-top-width",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
