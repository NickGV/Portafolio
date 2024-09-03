/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0f0e17",
        paragraph: "#b3b5c4",
        title: "#ffffff",
        button: "#ff7e36",
        "button-hover": "#ff6f24",
        "button-text": "#ffffff",
        "link-text": "#e94b75",
        "card-background": "#252332",
      },
      fontFamily: {
        title: ["Poppins", "sans-serif"],
        paragraph: ["Inter", "sans-serif"],
      },
      width: {
        "max-w-prose": "65ch",
        "profile-img": "35rem",
      },
      boxShadow: {
        custom: "4px 4px 4px 0px #fffffe20",
        "custom-hover": "2px 2px px 2px #fffffe20",
        "btn": "2px 2px 2px 0px #a7a9be20",
      }
    },
  },
  plugins: [],
};
