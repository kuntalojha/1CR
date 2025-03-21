import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '! CR',
  base: '/1CR/',
  description: 'NOTE',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'FRONTEND',
        items: [
          { text: 'HTML', link: '/frontend/html' },
          // { text: 'CSS', link: '/frontend/css' },
          // { text: 'Tailwind CSS', link: '/frontend/tailwind' },
          // { text: 'JavaScript', link: '/frontend/javascript' },
          // { text: 'TypeScript', link: '/frontend/typescript' },
          // { text: 'React', link: '/frontend/react' },
        ],
      },
      {
        text: 'BACKEND',
        items: [
          { text: 'NODE.JS', link: '/backend/node-js' },
          // { text: 'Express.js', link: '/backend/expressjs' },
          // { text: 'MongoDB', link: '/backend/mongodb' },
          // { text: 'SQL', link: '/backend/sql' },
          // { text: 'GraphQL', link: '/backend/graphql' },
          // { text: 'REST API', link: '/backend/rest-api' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kuntalojha' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/mrkuntalojha/' },
      { icon: 'twitter', link: 'https://x.com/kuntalojha' },
    ],
  },
});
