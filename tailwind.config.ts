import type { Config } from 'tailwindcss'
import plaiceholder from "@plaiceholder/tailwindcss";
import path from 'path';
import { readFileSync } from 'fs';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [ plaiceholder({
    resolver: (src) =>
      readFileSync(path.join("./public", `${src}.jpg`)),
  })],
}
export default config
