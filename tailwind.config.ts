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
          "0 4px 8px rgba(20, 12, 8, 0.10), 0 18px 35px rgba(20, 12, 8, 0.11), 0 38px 72px rgba(20, 12, 8, 0.065)",
        "tactile-lg":
          "0 5px 10px rgba(20, 12, 8, 0.12), 0 22px 44px rgba(20, 12, 8, 0.15), 0 50px 92px rgba(20, 12, 8, 0.09)",
        press:
          "0 3px 7px rgba(43, 33, 31, 0.11), 0 12px 24px rgba(43, 33, 31, 0.09)"
      }
    }
  },
  plugins: []
};

export default config;
