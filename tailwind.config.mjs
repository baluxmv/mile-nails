/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Soft Feminine Palette
        cream: '#fdf6f6',
        'cream-dark': '#fef0f0',
        surface: '#fff9f9',
        blush: {
          light: '#e8c4c4',
          DEFAULT: '#d4a5a5',
          dark: '#c48b8b',
          deep: '#a67070',
          glow: 'rgba(212, 165, 165, 0.2)',
        },
        text: {
          dark: '#3d2f2f',
          medium: '#6b5c5c',
          light: '#8a7a7a',
          muted: '#a99999',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['Quicksand', 'sans-serif'],
      },
      transitionDuration: {
        '400': '400ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease forwards',
        'text-reveal': 'textReveal 0.8s ease forwards',
        'dot-bounce': 'dotBounce 1.4s ease-in-out infinite',
        'wa-pulse': 'waPulse 2s ease infinite',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        textReveal: {
          'from': { transform: 'translateY(100%)' },
          'to': { transform: 'translateY(0)' },
        },
        dotBounce: {
          '0%, 80%, 100%': { transform: 'scale(0.6)', opacity: '0.5' },
          '40%': { transform: 'scale(1)', opacity: '1' },
        },
        waPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.15)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
