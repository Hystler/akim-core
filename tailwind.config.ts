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
        ink: {
          950: "#04100D",
          900: "#0A1813",
          800: "#14251D"
        },
        frost: "#F4EBDD",
        paper: "#E7DDCA",
        muted: "#9B9D8C",
        steel: "#B7B39F",
        electric: {
          blue: "#CDB57C",
          violet: "#A8A891",
          cyan: "#D8B875"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["var(--font-manrope)", "var(--font-inter)", "ui-sans-serif", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
