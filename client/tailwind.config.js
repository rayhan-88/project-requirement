/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        plexMono: ["IBM Plex Mono", "monospace"],
        poppins: ['"Poppins"', "sans-serif"],
      },
    },
  },
  plugins: [],
}

