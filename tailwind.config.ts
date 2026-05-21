import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
        editorial: ['var(--font-editorial)', 'serif'],
        chunk: ['var(--font-chunk)', 'sans-serif'],
        hand: ['var(--font-hand)', 'cursive'],
        jp: ['var(--font-jp)', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
