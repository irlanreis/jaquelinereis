/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px', // FullHD
        '4xl': '2560px',
        '5xl': '3840px',
        '6xl': '5120px',
        '7xl': '7680px',
        '8xl': '8192px', // 8k
        'mbl': { 'max': '639px' }, // Tamanho de tela para dispositivos móveis
        'lt': '480px'
      },
      fontFamily: {
        rasa: ['rasa']
      }
    },
  },
  plugins: [],
}

