/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'selector',
  theme: {
    extend: {
      screens: {
        //xl: '1140px',
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        'black-1': 'var(--color-black-1)',
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
