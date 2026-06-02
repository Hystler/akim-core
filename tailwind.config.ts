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
          950: "#080A0F",
          900: "#0F172A",
          800: "#111827"
        },
        frost: "#F8FAFC",
        muted: "#94A3B8",
        electric: {
          blue: "#3B82F6",
          violet: "#8B5CF6",
          cyan: "#22D3EE"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(34, 211, 238, 0.18)",
        "glow-blue": "0 0 48px rgba(59, 130, 246, 0.22)"
      },
      backgroundImage: {
        "premium-mesh":
          "linear-gradient(135deg, rgba(59,130,246,0.12), transparent 28%), linear-gradient(225deg, rgba(139,92,246,0.14), transparent 30%), linear-gradient(180deg, #080A0F 0%, #0F172A 58%, #080A0F 100%)",
        "card-line":
          "linear-gradient(135deg, rgba(248,250,252,0.12), rgba(248,250,252,0.02))"
      }
    }
  },
  plugins: []
};

export default config;
