module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        dark: {
          DEFAULT: '#edf2f7',
          light: '#e2e8f0',
          lighter: '#cbd5e0',
        },
        light: {
          DEFAULT: '#edf2f7',
          dark: '#e2e8f0',
          darker: '#cbd5e0',
        },
      },
    },
  },
  plugins: [],
}