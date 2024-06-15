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
      },
    },
  },
  plugins: [],
};
