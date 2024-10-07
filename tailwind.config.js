/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#025595",
        secondary: "#EFF8FF",
        dimWhite: "#ffffff",
        dimBlack: "#222222",
      }
    },
  },
  plugins: [],
}

