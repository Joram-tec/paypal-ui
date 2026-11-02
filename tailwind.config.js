/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paypal: {
          dark: '#003087',
          blue: '#0070BA',
          light: '#005EA6',
          bg: '#F5F7FA',
          green: '#008563',
        }
      }
    },
  },
  plugins: [],
}
