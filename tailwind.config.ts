import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "pay-red": {
          "50": "#fff0f1",
          "100": "#ffe2e5",
          "200": "#ffcad1",
          "300": "#ff9fab",
          "400": "#ff697f",
          "500": "#ff2b50",
          "600": "#ed1142",
          "700": "#c80838",
          "800": "#a80936",
          "900": "#8f0c34",
          "950": "#500117",
        },
      },
    },
  },
  plugins: [],
};
export default config;
