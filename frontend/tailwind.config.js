/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': '#6EC266'
      },
      fontFamily: {
        'schwifty': ['get-schwifty', 'sans-serif']
      }
    },
  },
  plugins: [],
}

