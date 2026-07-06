/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    colors: {
      bgPrimary: "#030712",
      bgSecondary: "#0b0f19",
      accentCyan: "#06b6d4",
      accentPurple: "#8b5cf6",
    },
    animation: {
      'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    }
  },
};
export const plugins = [];