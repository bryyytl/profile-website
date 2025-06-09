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
    ],
    title: "Front-end Development - General",
  },
  {
    items: [
      {
        description: "Next.js Docs",
        href: "https://nextjs.org/docs/app/getting-started/installation",
      },
      {
        description: "Next.js MDX Guide",
        href: "https://nextjs.org/docs/pages/guides/mdx",
      },
    ],
    title: "Front-end Development - Next.js Helpful Links",
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
    title: "Front-end Development - Styling & UX",
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
    title: "Front-end Development - State Management",
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
    ],
    title: "Front-end Development - Testing",
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
    ],
    title: "Icons & Other Graphics",
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
    title: "Hardware - Keyboards",
  },
];

export default resourceCollectionList;
