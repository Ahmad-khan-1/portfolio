/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: "#fef3e2",
        darkHover: "#1e293b",
        darkTheme: "#0F172A",
        accent: {
          DEFAULT: "#F59E0B",
          hover: "#FBBF24",
          dark: "#412402",
        },
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"],
      },
      boxShadow: {
        "hard-black": "4px 4px 0 #000",
        "hard-white": "4px 4px 0 #fff",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(250px, 1fr))",
      },
    },
  },
  darkMode: "selector",
  plugins: [],
};