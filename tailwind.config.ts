import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        base: {
          50: "#f5f8f6",
          100: "#eaf1ed",
          900: "#0a1712",
          950: "#050d0a",
        },
        brand: {
          green: {
            50: "#eaf3ef",
            DEFAULT: "#0b2e22",
            dark: "#071f17",
            light: "#123f2e",
          },
          gold: {
            soft: "#faf1d7",
            DEFAULT: "#d4af37",
            light: "#f0d878",
            dark: "#a3821f",
          },
          emerald: "#10b981",
          purple: "#7c5cff",
          blue: "#3b82f6",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 24px -6px rgba(0,0,0,0.25)",
        "card-lg": "0 12px 40px -12px rgba(7,31,23,0.35)",
        gold: "0 0 0 1px rgba(212,175,55,0.4), 0 4px 20px -4px rgba(212,175,55,0.25)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
