module.exports = {
  darkMode: 'class', // Активируем темную тему через класс
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
          DEFAULT: '#1a202c', // Основной темный цвет (например, почти черный)
          light: '#2d3748',   // Светлее (например, темно-серый)
          lighter: '#4a5568', // Еще светлее (например, серый)
        },
        light: {
          DEFAULT: '#f7fafc', // Основной светлый цвет (например, почти белый)
          lighter: '#edf2f7', // Немного темнее (например, очень светло-серый)
        },
      },
      textColor: {
        light: '#f7fafc', // Цвет текста для темной темы
      },
    },
  },
  plugins: [],
}