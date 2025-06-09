/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        'card-foreground': 'hsl(var(--card-foreground) / <alpha-value>)',
        'dark-slate': '#1e293b', // <- Replace with your desired hex if different
        'royal-blue': '#4169e1',
      },
      ringColor: {
        'royal-blue': '#4169e1',
      }
    },
  },
  plugins: [],
}
