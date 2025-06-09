/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        background: 'hsl(var(--background) / <alpha-value>)',
      },
      textColor: {
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
      },
      borderColor: {
        border: 'hsl(var(--border) / <alpha-value>)',
      },
      ringColor: {
        ring: 'hsl(var(--ring) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
