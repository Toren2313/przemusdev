/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
const { fontFamily } = require("tailwindcss/defaultTheme");

export default withMT = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      bg_color: "#0F0F0F",
      secondary_bg: "#211e1d",
      secondary_text: "#424242",
      main_pink: "#b50094",
      neon_violet: "#B026FF",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", ...fontFamily.sans],
        dm_sans: ["DM Sans", ...fontFamily.sans],
        inter: ["Inter", ...fontFamily.serif],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
