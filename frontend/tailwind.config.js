/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Orbitron"', 'sans-serif'],
      },
      colors: {
        'space-dark': '#0B0F18',
        'space-darker': '#05070B',
        'orange-glow': '#F97316',
        'violet-glow': '#8B5CF6',
        'dark-orange-glow': '#EA580C',
        'dark-violet-glow': '#7C3AED',
        gray: {
          300: '#D1D5DB',
          400: '#9CA3AF',
          700: '#374151',
          800: '#1F2937',
        },
      },
      keyframes: {
        'galaxy-glow-slow': {
          '0%': { transform: 'scale(1) rotate(0deg)', opacity: '0.15' },
          '33%': { transform: 'scale(1.05) rotate(5deg)', opacity: '0.2' },
          '66%': { transform: 'scale(0.95) rotate(-5deg)', opacity: '0.1' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '0.15' },
        },
        'cursor-blink': {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'var(--tw-colors-orange-400)' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(-50%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'star-twinkle': {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.8)' },
          '50%': { opacity: '0.8', transform: 'scale(1.2)' },
        },
        'horizontal-bounce': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(8px)' },
        },
        fadeInScale: {
          '0%': { opacity: '0', transform: 'translateY(20px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
      },
      animation: {
        'galaxy-glow-slow': 'galaxy-glow-slow 20s ease-in-out infinite alternate',
        'cursor-blink': 'cursor-blink 1.2s step-end infinite',
        'bounce-slow': 'bounce-slow 2s infinite',
        'fade-in-content': 'fadeIn 1.2s ease-out forwards',
        'star-twinkle': 'star-twinkle 4s ease-in-out infinite alternate',
        'horizontal-bounce': 'horizontal-bounce 1.5s ease-in-out infinite alternate',
        'fade-in-scale': 'fadeInScale 0.7s ease-out forwards',
      },
    },
  },
  plugins: [],
}
