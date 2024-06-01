/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },

    fontFamily: {
      'hndReg': ["hnd-Reg", "sans-serif"],
      'hndRegIta': ["hnd-RegIta", "sans-serif"],
      'hndMedium': ["hnd-Medium", "sans-serif"],
      'hndMedIta': ["hnd-MedIta", "sans-serif"],
      'hndBold': ["hnd-Bold", "sans-serif"],
      'hndBoldIta': ["hnd-BoldIta", "sans-serif"],
      'hndExtBold': ["hnd-ExtBold", "sans-serif"],
    },
  },
  plugins: [],
};
