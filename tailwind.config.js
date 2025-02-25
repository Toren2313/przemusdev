/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
const { fontFamily, colors } = require("tailwindcss/defaultTheme");

export default withMT = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg_color: "#0f0f0f",
        secondary_bg: "#211e1d",
        text_icons_bg: "#1a1817",
        secondary_text: "#424242",
        main_pink: "#b50094",
        neon_violet: "#b026ff",
      },
      fontFamily: {
        poppins: ["Poppins", ...fontFamily.sans],
        dm_sans: ["DM Sans", ...fontFamily.sans],
        inter: ["Inter", ...fontFamily.serif],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
