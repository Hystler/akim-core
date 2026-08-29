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
          "0 22px 48px rgba(43, 33, 31, 0.18), 0 5px 14px rgba(43, 33, 31, 0.10)",
        "tactile-lg":
          "0 42px 88px rgba(32, 19, 15, 0.28), 0 12px 28px rgba(32, 19, 15, 0.16)",
        press: "0 10px 24px rgba(43, 33, 31, 0.16), 0 2px 7px rgba(43, 33, 31, 0.09)"
      }
    }
  },
  plugins: []
};

export default config;
