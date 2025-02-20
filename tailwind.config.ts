/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",  // Next.js Pages
    "./components/**/*.{js,ts,jsx,tsx}", // Components
    "./app/**/*.{js,ts,jsx,tsx}", // App Router (if using Next.js 13+)
    "./src/**/*.{js,ts,jsx,tsx}", // If using a `src/` directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
