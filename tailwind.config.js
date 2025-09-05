/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'IBM Plex Mono', 'Courier New', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        cosmic: {
          black: '#0a0a0a',
          dark: '#1a1a2e',
          purple: '#16213e',
          blue: '#0f3460',
          accent: '#e94560',
          glow: '#64ffda'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        glow: {
          'from': { boxShadow: '0 0 20px rgba(100, 255, 218, 0.3)' },
          'to': { boxShadow: '0 0 30px rgba(100, 255, 218, 0.6)' }
        }
      }
    },
  },
  plugins: [],
}
