import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        darkMode: {
          "50": "#f6f7f9",
          "100": "#ebeef3",
          "200": "#d4dbe3",
          "300": "#adbbcc",
          "400": "#8197af",
          "500": "#627a95",
          "600": "#4d617c",
          "700": "#3f4e65",
          "800": "#374455",
          "900": "#313b49",
          "950": "#111419",
        },
        modernblack: {
          "01": "hsla(210, 20%, 98%, 1)",
          "02": "hsla(220, 14%, 96%, 1)",
          "03": "hsla(220, 13%, 91%, 1)",
          "04": "hsla(216, 12%, 84%, 1)",
          "05": "hsla(218, 11%, 65%, 1)",
          "06": "hsla(220, 9%, 46%, 1)",
          "07": "hsla(215, 14%, 34%, 1)",
          "08": "hsla(217, 19%, 27%, 1)",
          "09": "hsla(215, 28%, 17%, 1)",
          "10": "hsla(221, 39%, 15%, 1)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
