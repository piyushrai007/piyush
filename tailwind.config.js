/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "240px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
    },
    extend: {
      colors: {
        ink: {
          950: "#07080b",
          900: "#0c0e13",
          850: "#11141b",
          800: "#161a23",
          700: "#222836",
          600: "#2f3647",
        },
        accent: {
          DEFAULT: "#f2a64a",
          soft: "#f7c58a",
          deep: "#d9822b",
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
