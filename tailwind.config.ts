import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mikh: ["mikh", "sans-serif"],
        kalame: ["kalame", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
