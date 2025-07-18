// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  // ... other config
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Make sure this covers all your relevant folders and file types
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        // ... and so on for your other variables
      },
    },
  },
  plugins: [],
};
