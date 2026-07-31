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
      },
      boxShadow: {
        glow: "0 24px 80px rgba(0, 0, 0, 0.28)",
        "glow-blue": "0 16px 48px rgba(0, 0, 0, 0.3)"
      },
      backgroundImage: {
        "premium-mesh":
          "linear-gradient(180deg, #050607 0%, #0B0D0E 58%, #050607 100%)",
        "card-line":
          "linear-gradient(135deg, rgba(241,242,238,0.12), rgba(241,242,238,0.02))"
      }
    }
  },
  plugins: []
};

export default config;
