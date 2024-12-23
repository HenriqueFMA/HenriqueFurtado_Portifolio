/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ajuste o caminho conforme a estrutura do seu projeto
  ],
  theme: {
    extend: {
      keyframes: {
        borderPulse: {
          '0%': { borderColor: 'transparent' },
          '25%': { borderColor: 'rgb(59, 130, 246)' },  // Cor azul
          '50%': { borderColor: 'rgb(59, 130, 246, 0.5)' },  // Azul mais claro
          '75%': { borderColor: 'rgb(59, 130, 246)' },
          '100%': { borderColor: 'transparent' },
        },
      },
      animation: {
        'border-glow': 'borderPulse 1.5s infinite linear', // Animação contínua
      },
    },
  },
  plugins: [],
}
