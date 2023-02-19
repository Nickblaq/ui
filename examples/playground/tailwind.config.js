const baseConfig = require("../../tailwind.config")

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...baseConfig,
  darkMode: ["class"],
  content: [...baseConfig.content, "../../packages/ui/**/*.{ts,tsx}"],
}
