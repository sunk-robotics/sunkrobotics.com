/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./content/**/*.{html, js}",
    "./layouts/**/*.{html, js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter", "sans-serif"]
      },
      backgroundImage: {
        'about': "url('/images/about.jpg')"
      },
      colors: {
        "blue-trans": "rgba(30, 58, 138, .8)",
        "sky-trans": "rgba(59, 130, 246, .8)"
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}

