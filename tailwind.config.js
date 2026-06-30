/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#07141c',
        'navy-deep': '#091925',
        teal: '#2b8f89',
        'teal-bright': '#49d8ca',
        forest: '#255443',
        'green-accent': '#5dc79a',
        'off-white': '#f5f8f6',
        'text-soft': '#4d5c56',
        'text-soft-dark': '#c7d1cc',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        sora: ['var(--font-sora)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      boxShadow: {
        custom: '0 18px 40px rgba(8, 22, 32, 0.18)',
      }
    },
  },
  plugins: [],
};