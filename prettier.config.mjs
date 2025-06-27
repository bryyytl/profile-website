/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  tabWidth: 2,
  tailwindStylesheet: "./src/styles/tailwind.css",
};

export default config;
