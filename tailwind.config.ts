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
          950: "#050607",
          900: "#0B0D0E",
          800: "#15181A"
        },
        frost: "#F1F2EE",
        paper: "#E7E7E1",
        muted: "#9A9EA2",
        steel: "#B7BDC2",
        electric: {
          blue: "#8EB8FF",
          violet: "#AAA4BC",
          cyan: "#7DD3FC"
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
