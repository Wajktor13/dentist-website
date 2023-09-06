/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{html,ts}"
];

export const theme = {
  extend: {},
  screens: {
    'sm': { 'max': '640px' },
    'md': { 'max': '800px' },
    'lg': { 'max': '1024px' },
    'xl': { 'max': '1280px' },
    '2xl': { 'max': '1536px' }
  }
};

export const darkMode = "class";
