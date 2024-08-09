import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
       wiggle: 'wiggle 3s ease-in-out',
       pop: 'pop 0.5s ease forwards',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-9deg)' },
          '50%': { transform: 'rotate(9deg)' },
        },
      pop: {
           '0%': {opacity: '0', transform: 'translateY(10px)' },
           '100%': {opacity: '1', transform: 'translateY(0)'},
      }  
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        cursive: ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'),require('tailwindcss-animate')],
};
export default config;
