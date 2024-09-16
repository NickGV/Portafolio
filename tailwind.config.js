/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0f0e17",
        "background-light": "#252332",
        paragraph: "#d1d3e0",
        title: "#ffffff",
        button: "#ff8c40",
        "button-bg-gray": "#3e3e3e",
        "button-hover": "#ff7930",
        "button-text": "#ffffff",
        "link-text": "#e94b75",
        "card-background": "#2d2b3d",

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
        custom: "4px 4px 12px 0px rgba(255, 255, 254, 0.1)",
        "custom-hover": "2px 2px px 2px #fffffe20",
        btn: "2px 2px 2px 0px #a7a9be20",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
