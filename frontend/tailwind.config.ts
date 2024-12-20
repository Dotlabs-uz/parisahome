import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "440px",
      sm: "540px",
      md: "720px",
      lg: "960px",
      xl: "1140px",
      "2xl": "1285px",
    },
    colors: {
      'green': '#022B26',
      'yellow': '#EF9D4E',
      'black': '#040404',
      'white': '#FFFFFF',
      'milky': '#FAFAFA',
    },
    extend: {},
  },
  plugins: [],
};
export default config;