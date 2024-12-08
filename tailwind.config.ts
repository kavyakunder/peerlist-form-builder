import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        green: {
          "medium": "#00AA45",
          "dark": "#1e874b",
          "light": "#8cc7a7",
        },
        gray: {
          "medium": "#E1E4E8",
        },
      },

    },
  },
  plugins: [],
} satisfies Config;


