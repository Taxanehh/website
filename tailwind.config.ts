import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'fade-in': 'fadeIn 1.5s ease-out',
        'fade-left': 'fadeLeft 1.5s ease-out',
        'fade-right': 'fadeRight 1.5s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
        'title': 'fadeIn 2s ease-out 1.2s forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },  // Wrap numbers in strings
          '100%': { opacity: '1' }, // Wrap numbers in strings
        },
        fadeLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' }, // Wrap numbers
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { opacity: '1' },  // Wrap numbers
          '50%': { opacity: '0.5' },     // Wrap numbers
        },
      },
    },
  },
  plugins: [],
};

export default config;
