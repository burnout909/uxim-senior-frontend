/** @type {import('tailwindcss').Config} */
import krdsPlugin from "@krds-ui/tailwindcss-plugin";
import typography from "@tailwindcss/typography";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [krdsPlugin, typography],
};
