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
        'dark-slate': 'hsl(222.2 47.4% 11.2%)', // Customize this HSL to match your intent
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
