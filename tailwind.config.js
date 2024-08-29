/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#0f0e17',
        'paragraph': '#a7a9be',
        'title': '#fffffe',
        'button': '#ff8906',
        'button-hover': '#ff8906',
        'button-text': '#fffffe',
        'button-text-active': '#fffffe',
        'link-text': '#e53170',
      }
    },
  },
  plugins: [],
}