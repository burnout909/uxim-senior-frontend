/** @type {import('tailwindcss').Config} */
import krdsPlugin from "@krds-ui/tailwindcss-plugin";
import typography from "@tailwindcss/typography"; // ✅ 추가

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {},
  plugins: [krdsPlugin, typography], // 추가
  
};
