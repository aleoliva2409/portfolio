import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      width: {
        wrapper: '53.125rem',
      },
      fontFamily: {
        sans: ['Onest Variable', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
