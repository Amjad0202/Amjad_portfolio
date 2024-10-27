/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tokyo-night-bg': '#1a1b26',
        'tokyo-night-text': '#a9b1d6',
        'tokyo-night-accent': '#7aa2f7',
      },
    },
  },
  plugins: [],
}