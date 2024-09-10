import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const colors = {
  light: "#cdd3d5",
  dark: "#393e41",
  primary: "#75b8c8",
  secondary: "#75b8c8",
  accent: "#c2e812",
  success: "#91f5ad",
  error: "#fc5130",
  warning: "#ffad05",
};

export default {
  darkMode: ["class"],
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  important: "#app",
  theme: {
    extend: {
      colors: {
        color: {
          ...colors,
        },
      },
      fontFamily: {
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
      },
      fontWeight: {
        "font-regular": "400",
        "font-medium": "500",
        "font-semibold": "600",
      },
      screens: {
        xs: "340px",
        sm: "600px",
        md: "900px",
        lg: "1200px",
        xl: "1536px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
