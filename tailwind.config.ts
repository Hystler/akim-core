import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        base: "#DCD3CB",
        main: "#2A2120",
        burgundy: "#6B1A2C",
        terracotta: "#B7A99B",
        paper: "#EAE5DE",
        gold: {
          DEFAULT: "#B79B64",
          dark: "#786435",
          light: "#D6BD76"
        }
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["var(--font-manrope)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"]
      },
      boxShadow: {
        tactile:
          "0 24px 60px rgba(42, 33, 32, 0.16), 0 4px 12px rgba(42, 33, 32, 0.1)",
        "tactile-lg":
          "0 36px 90px rgba(42, 33, 32, 0.22), 0 10px 24px rgba(42, 33, 32, 0.12)",
        press: "0 10px 24px rgba(42, 33, 32, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
