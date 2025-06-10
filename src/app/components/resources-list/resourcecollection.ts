export const resourceCategory = ["development", "design", "hardware"] as const;
export type ResourceCategory = (typeof resourceCategory)[number];

export const resourceItemMetatags = [
  "blogs",
  "charts",
  "CSS",
  "documentation",
  "graphics",
  "icons",
  "keyboards",
  "linter",
  "next",
  "react",
  "state management",
  "styling",
  "testing",
  "tools",
] as const;
export type ResourceItemMetatag = (typeof resourceItemMetatags)[number];

interface ResourceItem {
  category: ResourceCategory;
  href: string;
  description: string;
  metatags: ResourceItemMetatag[];
}

export const resourceCollectionList: ResourceItem[] = [
  {
    category: "development",
    description: "NPM Search Engine",
    href: "https://www.npmjs.com/",
    metatags: ["documentation", "tools"],
  },
  {
    category: "development",
    description: "MDN Array Docs",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
    metatags: ["documentation"],
  },
  {
    category: "development",
    description: "Next.js Docs",
    href: "https://nextjs.org/docs/app/getting-started/installation",
    metatags: ["documentation", "next", "react"],
  },
  {
    category: "development",
    description: "Next.js - MDX Guide",
    href: "https://nextjs.org/docs/pages/guides/mdx",
    metatags: ["documentation", "next", "react"],
  },
  {
    category: "development",
    description: "React Virtuoso",
    href: "https://virtuoso.dev/",
    metatags: ["documentation", "react"],
  },
  {
    category: "design",
    description: "CSS Flexbox Guide",
    href: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
    metatags: ["blogs", "CSS", "documentation", "styling"],
  },
  {
    category: "design",
    description: "Tailwind CSS",
    href: "https://tailwindcss.com/docs",
    metatags: ["CSS", "documentation", "styling"],
  },
  {
    category: "development",
    description: "SASS / SCSS",
    href: "https://sass-lang.com/documentation/",
    metatags: ["CSS", "documentation", "styling"],
  },
  {
    category: "design",
    description: "PX to Rem Converter",
    href: "https://nekocalc.com/px-to-rem-converter",
    metatags: ["styling", "tools"],
  },
  {
    category: "development",
    description: "Mantine Core",
    href: "https://mantine.dev/getting-started/",
    metatags: ["documentation", "react", "styling"],
  },
  {
    category: "development",
    description: "Mantine UI",
    href: "https://ui.mantine.dev/",
    metatags: ["documentation", "react", "styling"],
  },
  {
    category: "development",
    description: "Material UI",
    href: "https://mui.com/material-ui/",
    metatags: ["documentation", "react", "styling"],
  },
  {
    category: "development",
    description: "React API Docs",
    href: "https://react.dev/reference/react/hooks",
    metatags: ["documentation", "state management", "react"],
  },
  {
    category: "development",
    description: "React Hook Form",
    href: "https://react-hook-form.com/",
    metatags: ["documentation", "state management", "react"],
  },
  {
    category: "development",
    description: "Zod - JSON Schema Validation",
    href: "https://zod.dev/",
    metatags: ["documentation", "state management"],
  },
  {
    category: "development",
    description: "Immer",
    href: "https://immerjs.github.io/immer/",
    metatags: ["documentation", "state management"],
  },
  {
    category: "development",
    description: "Prettier",
    href: "https://prettier.io/docs/",
    metatags: ["documentation", "linter"],
  },
  {
    category: "development",
    description: "ESLint",
    href: "https://eslint.org/",
    metatags: ["documentation", "linter"],
  },
  {
    category: "development",
    description: "TypeScript ESLint",
    href: "https://typescript-eslint.io/getting-started/",
    metatags: ["documentation", "linter"],
  },
  {
    category: "development",
    description: "Stylelint",
    href: "https://stylelint.io/",
    metatags: ["documentation", "linter", "styling"],
  },
  {
    category: "development",
    description: "React Testing Library",
    href: "https://testing-library.com/docs/react-testing-library/intro/",
    metatags: ["documentation", "react", "testing"],
  },
  {
    category: "development",
    description: "Jest",
    href: "https://jestjs.io/",
    metatags: ["documentation", "testing"],
  },
  {
    category: "development",
    description: "Cypress",
    href: "https://docs.cypress.io/",
    metatags: ["documentation", "testing"],
  },
  {
    category: "development",
    description: "Common Mistakes with React Testing Library",
    href: "https://kentcdodds.com/blog/common-mistakes-with-react-testing-library",
    metatags: ["blogs", "documentation", "react", "testing"],
  },
  {
    category: "development",
    description: "Lottie Dashboard",
    href: "https://app.lottiefiles.com/",
    metatags: ["graphics"],
  },
  {
    category: "design",
    description: "Tabler Icons",
    href: "https://tabler.io/icons/",
    metatags: ["documentation", "icons", "react"],
  },
  {
    category: "design",
    description: "React Open Source SVGs",
    href: "https://reactsvgicons.com/",
    metatags: ["documentation", "icons", "react"],
  },
  {
    category: "design",
    description: "Phosphor Icons",
    href: "https://phosphoricons.com/",
    metatags: ["documentation", "icons", "react"],
  },
  {
    category: "development",
    description: "Nivo",
    href: "https://nivo.rocks/",
    metatags: ["charts", "documentation", "react"],
  },
  {
    category: "development",
    description: "Recharts",
    href: "https://recharts.org/en-US/examples",
    metatags: ["charts", "documentation", "react"],
  },
  {
    category: "development",
    description: "Overreacted — A blog by Dan Abramov",
    href: "https://overreacted.io/",
    metatags: ["blogs", "react"],
  },
  {
    category: "development",
    description: "Kent C. Dodd's Blog",
    href: "https://kentcdodds.com/blog",
    metatags: ["blogs", "react"],
  },
  {
    category: "development",
    description: "Daishi Kato's Blog - React Context Optimization",
    href: "https://blog.axlight.com/posts/4-options-to-prevent-extra-rerenders-with-react-context/",
    metatags: ["blogs", "react"],
  },
  {
    category: "hardware",
    description: "Moonlander",
    href: "https://www.zsa.io/moonlander",
    metatags: ["keyboards"],
  },
  {
    category: "hardware",
    description: "Moonlander - Platform",
    href: "https://www.zsa.io/moonlander/platform",
    metatags: ["keyboards"],
  },
  {
    category: "hardware",
    description: "ORYX - Moonlander Programming",
    href: "https://configure.zsa.io/home",
    metatags: ["keyboards"],
  },
  {
    category: "hardware",
    description: "Keychron Keyboards",
    href: "https://www.keychron.com/",
    metatags: ["keyboards"],
  },
];
