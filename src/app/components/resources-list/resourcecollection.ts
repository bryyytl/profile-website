interface ResourceItem {
  href: string;
  description: string;
}

interface ResourceCollection {
  items: ResourceItem[];
  title: string;
}

const resourceCollectionList: ResourceCollection[] = [
  {
    items: [
      {
        description: "NPM Search Engine",
        href: "https://www.npmjs.com/",
      },
      {
        description: "MDN Array Docs",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
      },
      {
        description: "Next.js Docs",
        href: "https://nextjs.org/docs/app/getting-started/installation",
      },
      {
        description: "Next.js MDX Guide",
        href: "https://nextjs.org/docs/pages/guides/mdx",
      },
      {
        description: "React Virtuoso",
        href: "https://virtuoso.dev/",
      },
    ],
    title: "General",
  },
  {
    items: [
      {
        description: "CSS Flexbox Guide",
        href: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
      },
      {
        description: "Tailwind CSS",
        href: "https://tailwindcss.com/docs",
      },
      {
        description: "Sass / SCSS",
        href: "https://sass-lang.com/documentation/",
      },
      {
        description: "PX to Rem Converter",
        href: "https://nekocalc.com/px-to-rem-converter",
      },
    ],
    title: "Styling",
  },
  {
    items: [
      {
        description: "Mantine Core",
        href: "https://mantine.dev/getting-started/",
      },
      {
        description: "Mantine UI",
        href: "https://ui.mantine.dev/",
      },
      {
        description: "Material UI",
        href: "https://mui.com/material-ui/",
      },
    ],
    title: "Design Systems",
  },
  {
    items: [
      {
        description: "React API Docs",
        href: "https://react.dev/reference/react/hooks",
      },
      {
        description: "React Hook Form",
        href: "https://react-hook-form.com/",
      },
      {
        description: "Zod - JSON Schema Validation",
        href: "https://zod.dev/",
      },
      {
        description: "Immer",
        href: "https://immerjs.github.io/immer/",
      },
    ],
    title: "State Management",
  },
  {
    items: [
      {
        description: "Prettier",
        href: "https://prettier.io/docs/",
      },
      {
        description: "ESLint",
        href: "https://eslint.org/",
      },
      {
        description: "TypeScript ESLint",
        href: "https://typescript-eslint.io/getting-started/",
      },
      {
        description: "Stylelint",
        href: "https://stylelint.io/",
      },
    ],
    title: "Linters",
  },
  {
    items: [
      {
        description: "React Testing Library",
        href: "https://testing-library.com/docs/react-testing-library/intro/",
      },
      {
        description: "Jest",
        href: "https://jestjs.io/",
      },
      {
        description: "Cypress",
        href: "https://docs.cypress.io/",
      },
      {
        description: "Common Mistakes with React Testing Library",
        href: "https://kentcdodds.com/blog/common-mistakes-with-react-testing-library",
      },
    ],
    title: "Testing",
  },
  {
    items: [
      {
        description: "Lottie Dashboard",
        href: "https://app.lottiefiles.com/",
      },
      {
        description: "Tabler Icons",
        href: "https://tabler.io/icons/",
      },
      {
        description: "React Open Source SVGs",
        href: "https://reactsvgicons.com/",
      },
      {
        description: "Phosphor Icons",
        href: "https://phosphoricons.com/",
      },
      {
        description: "Nivo",
        href: "https://nivo.rocks/",
      },
      {
        description: "Recharts",
        href: "https://recharts.org/en-US/examples",
      },
    ],
    title: "Icons, Charts, & Other Graphics",
  },
  {
    items: [
      {
        description: "Overreacted — A blog by Dan Abramov",
        href: "https://overreacted.io/",
      },
      {
        description: "Kent C. Dodd's Blog",
        href: "https://kentcdodds.com/blog",
      },
      {
        description: "Daishi Kato's Blog - React Context Optimization",
        href: "https://blog.axlight.com/posts/4-options-to-prevent-extra-rerenders-with-react-context/",
      },
    ],
    title: "Blog Posts",
  },
  {
    items: [
      {
        description: "Moonlander",
        href: "https://www.zsa.io/moonlander",
      },
      {
        description: "Moonlander - Platform",
        href: "https://www.zsa.io/moonlander/platform",
      },
      {
        description: "ORYX - Moonlander Programming",
        href: "https://configure.zsa.io/home",
      },
      {
        description: "Keychron Keyboards",
        href: "https://www.keychron.com/",
      },
    ],
    title: "Hardware",
  },
];

export default resourceCollectionList;
