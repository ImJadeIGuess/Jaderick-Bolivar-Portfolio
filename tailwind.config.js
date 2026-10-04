/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#14151A", // page background — near-black with a cool violet undertone
        surface: "#1B1D24", // card / sidebar surface
        line: "#2A2C34", // hairline borders
        paper: "#EDEDEF", // primary text
        mist: "#8B8D98", // secondary / muted text
        ember: "#F2A65A", // single accent — warm amber, not the usual teal/green
        "ember-dim": "#8A5D2E", // muted ember for subtle borders/backgrounds
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["IBM Plex Sans", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      maxWidth: {
        prose: "38rem",
      },
    },
  },
  plugins: [],
};
