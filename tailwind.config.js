/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-170px * 10))' } // 8 основных + 2 дополнительных
        }
      },
      animation: {
        'scroll': 'scroll 40s linear infinite'
      }
    },
  },
  plugins: [],
}
