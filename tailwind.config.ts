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
        base: "#F1ECE3",
        main: "#2B211F",
        chocolate: "#291D1A",
        burgundy: "#7F102B",
        terracotta: "#8D7D72",
        paper: "#EFE4D5",
        gold: {
          DEFAULT: "#A88952",
          dark: "#6E5838",
          light: "#C9B07A"
        }
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["var(--font-manrope)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"]
      },
      boxShadow: {
        tactile:
          "0 30px 62px rgba(43, 33, 31, 0.25), 0 8px 20px rgba(43, 33, 31, 0.15)",
        "tactile-lg":
          "0 52px 108px rgba(32, 19, 15, 0.38), 0 16px 36px rgba(32, 19, 15, 0.23)",
        press: "0 14px 34px rgba(43, 33, 31, 0.23), 0 4px 10px rgba(43, 33, 31, 0.13)"
      }
    }
  },
  plugins: []
};

export default config;
