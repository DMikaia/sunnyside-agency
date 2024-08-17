/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      mobile: "375px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    fontFamily: {
      "barlow-600": "var(--barlow-600)",
      "fraunces-700": "var(--fraunces-700)",
      "fraunces-900": "var(--fraunces-900)",
    },
    extend: {
      colors: {
        "soft-red": "hsl(var(--soft-red))",
        yellow: "hsl(var(--yellow))",
        "dark-desaturated-cyan": "hsl(var(--dark-desaturated-cyan))",
        "dark-blue": "hsl(var(--dark-blue))",
        "dark-moderate-cyan": "hsl(var(--dark-moderate-cyan))",
        "very-dark-desaturated-blue": "hsl(var(--very-dark-desaturated-blue))",
        "very-dark-grayish-blue": "hsl(var(--very-dark-grayish-blue))",
        "dark-grayish-blue": "hsl(var(--dark-grayish-blue))",
        "grayish-blue": "hsl(var(--grayish-blue))",
        White: "hsl(var(--grayish-blue))",
      },
    },
  },
  plugins: [],
};
