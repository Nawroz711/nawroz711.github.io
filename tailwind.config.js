// tailwind.config.js
// @type {import('tailwindcss').Config} 
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          green: '#00F050',
          light: '#DEDEDE',
          dark: '#212121',
          grey: '#9A9A9A'
        },
        fontFamily: {
          heading: ['Montserrat' , 'sans-serif']
        }
      },
    },
    plugins: [],
  };