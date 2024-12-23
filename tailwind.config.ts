import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "light-primary": "var(--light-primary)",
        secondary: "var(--secondary)",
        foreground: "var(--foreground)",
        "foreground-primary": "var(--primary-foreground)",
        "secondary-border": "var(--border)",
      },
      fontFamily: {
        epilogue: ["var(--font-epilogue)"],
      },
      animation: {
        "fade-in": "fadeIn 2s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
