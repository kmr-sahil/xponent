import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        geist: ['var(--font-geist)', 'monospace'],
        jakarta: ['var(--font-jakarta)', 'sans-serif'],
      },
      colors: {
        primary: "var(--text-primary)",
        accent: "var(--accent)",
        muted: "var(--muted)",
        background: "var(--background)",
      },
    },
  },
  plugins: [],
} satisfies Config;
