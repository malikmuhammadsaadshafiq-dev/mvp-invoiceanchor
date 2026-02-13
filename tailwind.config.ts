import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#FAF9F6',
        accent: '#f97316',
        primary: '#f97316',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      borderRadius: {
        '2rem': '2rem',
      },
      boxShadow: {
        'card': '0 8px 30px rgba(0,0,0,.06)',
        'card-hover': '0 12px 40px rgba(0,0,0,.12)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(.22,1,.36,1) forwards',
        'slide-in-right': 'slideInRight 0.4s cubic-bezier(.22,1,.36,1) forwards',
        'slide-out-left': 'slideOutLeft 0.4s cubic-bezier(.22,1,.36,1) forwards',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideOutLeft: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(-100%)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
export default config