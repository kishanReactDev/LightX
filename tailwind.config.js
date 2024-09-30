/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        sm: { 'min': '0px', 'max': '767px' },
        md: { 'min': '767px', 'max': '1000px' },
        lg: { 'min': '1001px' },
        xmd: { 'min': '1001px', 'max': '1073px' },
      }
    },
  },
  plugins: [],
};
