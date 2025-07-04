import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#213966',
          1: '#f0f3fa',
          2: '#e0e7f5',
          3: '#d1dbf0',
          4: '#c1cfeb',
          5: '#b2c3e6',
          6: '#a3b7e1',
          7: '#93aadc',
          8: '#849ed7',
          9: '#7492d2',
          10: '#6586cd',
          11: '#567ac8',
          12: '#466ec3',
          13: '#3c64b9',
          14: '#375ba9',
          15: '#32539a',
          16: '#2d4b8b',
          17: '#28427b',
          18: '#233a6c',
          19: '#1e325c',
          20: '#19294d',
          21: '#14203e',
          22: '#0f182e',
          23: '#0a101f',
          24: '#05080f',
          text: '#28427b',
          dark: '#19294d',
        },
        secondary: {
          DEFAULT: '#58a645',
          1: '#c7e4bc',
          2: '#a9d286',
          3: '#8bc852',
          4: '#6db01f',
          5: '#4faa00',
          6: '#58a645',
          7: '#488b33',
          8: '#397322',
          9: '#2b5a10',
          10: '#1d3d00',
          dark: '#488b33',
        },
        success: '#17c964',
        warning: '#f5a524',
        error: '#f31260',
        info: '#3498db',
        inlet: '#5cb85c',
        outlet: '#428bca',
        discharge: '#f0ad4e',
        drying: '#d9534f',
        gray: {
          1: '#ffffff',
          2: '#fafafa',
          3: '#f5f5f5',
          4: '#f0f0f0',
          5: '#d9d9d9',
          6: '#bfbfbf',
          7: '#8c8c8c',
          8: '#595959',
          9: '#434343',
          10: '#262626',
          11: '#1f1f1f',
          12: '#141414',
          13: '#000000',
        },
      },
      fontSize: {
        // Enhanced font sizes for better readability
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '92': '23rem',
        '96': '24rem',
        '128': '32rem',
      },
      borderRadius: {
        'large': '1.2rem',
        'x-large': '1.5rem',
        'xx-large': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'medium': '0 4px 15px rgba(0, 0, 0, 0.1)',
        'strong': '0 8px 25px rgba(0, 0, 0, 0.15)',
        'primary': '0 4px 12px rgba(33, 57, 102, 0.3)',
        'secondary': '0 4px 15px rgba(88, 166, 69, 0.4)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config