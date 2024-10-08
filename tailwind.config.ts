import type { Config } from 'tailwindcss';

const config: Config = {
 darkMode: ['class', '[data-app-mode]="dark"'],
 content: [
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
 ],
 theme: {
  extend: {
   container: {
    center: true,
    padding: {
     DEFAULT: '2rem',
     lg: '1.6rem',
     '2xl': '2rem',
    },
    screens: {
     lg: '100vw',
     '2xl': '1440px',
    },
   },
   colors: {
    background: 'hsl(var(--background))',
    foreground: 'hsl(var(--foreground))',
    primary: {
     DEFAULT: 'hsl(var(--primary))',
     light: 'hsl(var(--primary-light))',
     dark: 'hsl(var(--primary-dark))',
     foreground: 'hsl(var(--primary-foreground))',
    },
    accent: {
     DEFAULT: 'hsl(var(--accent))',
     light: 'hsl(var(--accent-light))',
     dark: 'hsl(var(--accent-dark))',
    },
   },
   fontFamily: {
    fa: 'ir-sans, ir-yekan, Arial',
    en: 'en-roboto',
   },
  },
 },
 plugins: [],
};
export default config;
