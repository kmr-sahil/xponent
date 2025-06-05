import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
