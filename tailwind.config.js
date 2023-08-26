import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        red_background: "var(--red_background)",
        pink_background: "var(--pink_background)",
        blue_background: "var(--blue_background)",
        purple_background: "var(--purple_background)",
        teal_background: "var(--teal_background)",
        yellow_background: "var(--yellow_background)",
        orange_background: "var(--orange_background)",
        brown_background: "var(--brow_background)",
        gray_background: "var(--gray_background)",
        red_background_co: "var(--red_background_co)",
        pink_background_co: "var(--pink_background_co)",
        blue_background_co: "var(--blue_background_co)",
        purple_background_co: "var(--purple_background_co)",
        teal_background_co: "var(--teal_background_co)",
        yellow_background_co: "var(--yellow_background_co)",
        orange_background_co: "var(--orange_background_co)",
        brown_background_co: "var(--brow_background_co)",
        gray_background_co: "var(--gray_background_co)",
        item_blue: "var(--item-blue)",
        item_orange: "var(--item-orange)",
        item_green: "var(--item-green)",
        item_pink: "var(--item-pink)",
        item_brown: "var(--item-brown)",
        item_red: "var(--item-red)",
        item_yellow: "var(--item-yellow)",
        item_default: "var(--item-default)",
        item_purple: "var(--item-purple)",
        item_gray: "var(--item-gray)",
      }
    },
  },
  plugins: [],
}
export default config
