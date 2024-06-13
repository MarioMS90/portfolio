/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        'black-1': 'var(--color-black-1)',
        'header-light': 'rgba(var(--color-background-light), 0.6)',
        'header-dark': 'rgba(var(--color-primary), 0.6)',
      },
      fontFamily: {
        inter: ['Inter Variable', 'system-ui', 'sans-serif'],
        source: ['Open Sans Variable', 'system-ui', 'sans-serif'],
      },
      animation: {
        pop: 'pop 0.6s ease-out',
        'fade-in': 'fade-in 0.6s ease-in forwards',
        'fade-in-up': 'fade-in-up 0.6s ease-in-out forwards',
        'fade-in-right': 'fade-in-right 0.6s ease-in-out forwards',
        'fade-in-left': 'fade-in-left 0.6s ease-in-out forwards',
        'fade-in-down': 'fade-in-down 0.6s ease-in-out forwards',
      },
      keyframes: {
        pop: {
          '0%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(1.1)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fade-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
};
