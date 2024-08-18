/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      mobile: "375px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
      tv: "1440px",
    },
    fontFamily: {
      "sans-serif": "sans-serif",
      "barlow-600": "var(--barlow-600)",
      "fraunces-700": "var(--fraunces-700)",
      "fraunces-900": "var(--fraunces-900)",
    },
    extend: {
      backgroundImage: {
        "hero-desktop": "url(/illustration/desktop/image-header.jpg)",
        "hero-mobile": "url(/illustration/mobile/image-header.jpg)",
        "graphic-design-desktop":
          "url(/illustration/desktop/image-graphic-design.jpg)",
        "graphic-design-mobile":
          "url(/illustration/mobile/image-graphic-design.jpg)",
        "photography-desktop":
          "url(/illustration/desktop/image-photography.jpg)",
        "photography-mobile":
          "url(/illustration/mobile/image-photography.jpg)",
      },
      colors: {
        "soft-red": "hsl(var(--soft-red) / <alpha-value>)",
        yellow: "hsl(var(--yellow) / <alpha-value>)",
        "dark-desaturated-cyan":
          "hsl(var(--dark-desaturated-cyan) / <alpha-value>)",
        "dark-blue": "hsl(var(--dark-blue))",
        "dark-moderate-cyan": "hsl(var(--dark-moderate-cyan) / <alpha-value>)",
        "very-dark-desaturated-blue":
          "hsl(var(--very-dark-desaturated-blue) / <alpha-value>)",
        "very-dark-grayish-blue":
          "hsl(var(--very-dark-grayish-blue) / <alpha-value>)",
        "dark-grayish-blue": "hsl(var(--dark-grayish-blue) / <alpha-value>)",
        "grayish-blue": "hsl(var(--grayish-blue) / <alpha-value>)",
        white: "hsl(var(--white) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
