/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
  ],
  theme: {
    extend: {
      backgroundImage: {
        'plus-pattern': "url('~/assets/plus.svg')",
        'plus-pattern-dark': "url('~/assets/plus_dark.svg')",
      }
    }
  },
  plugins: [],
}

