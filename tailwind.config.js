/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Custom dark theme colors
        'jet-black': '#0C0C0C',
        'tactical-yellow': '#FFD700',
        'military-green': '#3A5F3A',
        'soft-white': '#F5F5F5',
        // Additional shades for better design flexibility
        'tactical-yellow-dark': '#E6C200',
        'tactical-yellow-light': '#FFED4E',
        'military-green-dark': '#2D4A2D',
        'military-green-light': '#4A7A4A',
        'jet-black-light': '#1A1A1A',
        'soft-white-dim': '#E0E0E0',
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-tactical': 'linear-gradient(135deg, #FFD700 0%, #E6C200 100%)',
        'gradient-military': 'linear-gradient(135deg, #3A5F3A 0%, #2D4A2D 100%)',
      },
    },
  },
  plugins: [],
};