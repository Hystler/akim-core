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
          "0 12px 32px rgba(43, 33, 31, 0.10), 0 2px 6px rgba(43, 33, 31, 0.05)",
        "tactile-lg":
          "0 30px 70px rgba(32, 19, 15, 0.16), 0 8px 20px rgba(32, 19, 15, 0.10)",
        press: "0 6px 18px rgba(43, 33, 31, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
