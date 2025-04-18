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
        // BBQ Theme Colors
        'bbq': {
          red: '#FF4B3E',      // Vibrant BBQ red
          'red-light': '#FF6B61',
          'red-dark': '#CC3C32',
          grey: '#2C2C2C',     // Smoke grey
          'grey-light': '#4A4A4A',
          'grey-dark': '#1A1A1A',
          yellow: '#FFB800',   // Warm yellow
          'yellow-light': '#FFC833',
          'yellow-dark': '#CC9300',
          green: '#2E7D32',    // Fresh green
          'green-light': '#4CAF50',
          'green-dark': '#1B5E20',
          brown: '#795548',    // Earth tone
          'brown-light': '#8D6E63',
          'brown-dark': '#5D4037',
        },
      },
      fontFamily: {
        // Typography
        'display': ['var(--font-display)', 'cursive'],  // For headlines
        'body': ['var(--font-body)', 'sans-serif'],     // For body text
      },
      animation: {
        // Custom animations
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        // Custom gradients and patterns
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'grill-pattern': "url('/patterns/grill-pattern.svg')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

export default config 