import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A66C2', // Deep Blue
          light: '#1E88E5',
          dark: '#0D47A1',
        },
        secondary: {
          DEFAULT: '#00B8A9', // Teal
          light: '#26C6DA',
          dark: '#00838F',
        },
        accent: {
          DEFAULT: '#FFB400', // Warm Yellow
          light: '#FFCA28',
          dark: '#FFA000',
        },
        background: 'rgb(255, 255, 255)',
        foreground: 'rgb(0, 0, 0)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(to right, #0A66C2, #00B8A9)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { 
            opacity: '0',
            transform: 'translateY(20px)'
          },
          to: { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fadeIn 0.5s ease-in forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            h1: {
              color: 'inherit',
            },
            h2: {
              color: 'inherit',
            },
            h3: {
              color: 'inherit',
            },
            strong: {
              color: 'inherit',
            },
            a: {
              color: '#0A66C2',
              '&:hover': {
                color: '#0D47A1',
              },
            },
            code: {
              color: '#1E88E5',
            },
            pre: {
              backgroundColor: '#1a1a1a',
              color: '#ffffff',
            },
          },
        },
      },
    },
  
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-animate'),require('@tailwindcss/typography'),],
};

export default config;