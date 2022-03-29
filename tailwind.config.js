const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/pages/**/*.tsx", "./src/components/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      colors: {
        slate: {
          1: "#f8fafc",
          2: "#f1f5f9",
          3: "#e2e8f0",
          4: "#cbd5e1",
          5: "#94a3b8",
          6: "#64748b",
          7: "#475569",
          8: "#1e293b",
          9: "#0f172a",
        },
        primary: "hsl(197, 57%, 18%)",
        "primary-light": "hsl(198, 68%, 19%)",
        "primary-dark": "hsl(198, 60%, 9%)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
