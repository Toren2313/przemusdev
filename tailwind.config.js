/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
import withMT from "@material-tailwind/react/utils/withMT";

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
      keyframes: {
        appearance: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        disappearance: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        expand: {
          "0%": { width: "0px" },
          "100%": { width: "100%" },
        },
        move_background: {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
      },
      animation: {
        /**
         * Apperance
         *
         * fast - 0.2s
         * normal - 1s
         * slow - 2s
         */
        "appearance-fast": "appearance 0.3s ease-out forwards",
        "appearance-normal": "appearance 1s ease-out forwards",
        "appearance-slow": "appearance 2s ease-out forwards",

        /**
         * disapperance
         *
         * delay-0 - 0s
         * delay-300 - 0.25s (only in this duration 0.5s)
         * delay-500 - 0.5s
         * delay-1600 - 1.6s
         */
        "disappearance-delay-0": "disappearance 0.9s ease-out 0s forwards",
        "disappearance-delay-300": "disappearance 0.5s ease-out 300ms forwards",
        "disappearance-delay-500": "disappearance 0.9s ease-out 500ms forwards",
        "disappearance-delay-1600": "disappearance 0.9s ease-out 1600ms forwards",

        /**
         * expand
         *
         * fast - 0.2s
         * normal - 1s
         * slow - 2s
         */

        "expand-fast": "expand 0.2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards",
        "expand-normal": "expand 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards",
        "expand-slow": "expand 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards",
        /**
         * move bg
         *
         */
        "move-background": "move_background 3s ease infinite",
      },
      transitionTimingFunction: {
        "ease-out-quad": "cubic-bezier(0.165, 0.84, 0.44, 1)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
