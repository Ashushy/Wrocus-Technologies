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
      width: {
        '1/3': '80.3333%', // Custom width for one-third
      },
     colors: {
      customBlue: '#43baff',
      customPurple: '#6a0dad',
      customNavyBlue:'#262051',
      customPrimary:'#0f97d1',
      customBorder:'1px solid rgba(255, 255, 255, 0.3)',
      serviceBlue:'#231F3C',
      servicecard:'#262051',
      customvoilet:'#211F3B',
      customPurplee:'#7141b1',
      custommBlue: '#45B9FB',
      aboutBackground:'#262051'

      },
      
      
    },
  },
  plugins: [],
};
