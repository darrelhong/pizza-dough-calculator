import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import tailwindcssformsplugin from "@tailwindcss/forms";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [tailwindcssformsplugin],
  darkMode: "class",
} satisfies Config;
