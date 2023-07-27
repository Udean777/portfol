/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gradientColors: {
        'custom-gradient': ['#9333ea', '#e11d48', '#0f766e'],
      },
      color: {
        darkBackground: '#111111',
        darkText: '#ffffff'
      },
      spacing:{
        '95': '357px',
        '97': '400px',
        '98': '600px',
        '99': '800px',
        '100': '1000px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
