/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        primary: "#417F56",
        "dark-primary": "#315F41",
        "darker-primary": "#21402B",
        "darkest-primary": "#102016",

        secondary: "#B7D9D6",
        "dark-secondary": "#87C1BB",
        "darker-secondary": "#57A7A0",
        "darkest-secondary": "#278F85",

        error: "#ED2E2E",
        "error-bg": "#FFF2F2",
      },
    },
  },
  plugins: [],
};
