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
        'grey-1': 'var(--color-grey-1)',
        'grey-2': 'var(--color-grey-2)',
      },
      fontFamily: {
        inter: ['Inter Variable', 'system-ui', 'sans-serif'],
        source: ['Open Sans Variable', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
