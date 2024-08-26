module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        dark: {
          DEFAULT: '#1a202c',
          light: '#2d3748',
          lighter: '#4a5568',
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