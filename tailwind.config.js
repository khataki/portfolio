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
          darker: '#2d3748',  // Темный текст на светлом фоне
        },
      },
      textColor: {
        dark: '#1a202c', // Цвет текста для светлой темы (темный)
        light: '#f7fafc', // Цвет текста для темной темы (светлый)
      },
      backgroundColor: {
        dark: '#1a202c', // Основной темный фон
        light: '#f7fafc', // Основной светлый фон
      },
    },
  },
  plugins: [],
}