import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        extending: "extending 1s",
      },
      colors: {
        primary: "var(--primary)",
        primaryDark: "var(--primary-dark)",
        primaryDarkest: "var(--primary-darkest)",
        black: "var(--black)",
        white: "var(--white)",
        gray: "var(--grey)",
        b5: "var(--b5)",
        a0: "var(--a0)",
      },
      fontFamily: {
        // setting default font
        sans: "Actay",
      }
    },
  },
  plugins: [],
} satisfies Config;
