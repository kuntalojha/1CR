import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '! CR',
  base: '/1CR/',
  description: 'NOTE',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: 'Home', link: '/' }],

    sidebar: [
      {
        text: 'DSA',
        items: [
          { text: 'Overview', link: '/dsa/dsa' },
          {
            text: 'Algorithms', link: '/dsa/algo/algo',
            items: [
              { text: 'Analysing Algo-1', link: '/dsa/algo/algo-1' },
              { text: 'Analysing Algo-2', link: '/dsa/algo/algo-2' },
              // { text: 'Searching', link: '/dsa/algo/searching' },
              // { text: 'Recursion', link: '/dsa/algo/recursion' },
            ],
          },
          {
            text: 'Data Structures',
            items: [
              // { text: 'Arrays', link: '/dsa/ds/arrays' },
              // { text: 'Linked Lists', link: '/dsa/ds/linked-lists' },
              // { text: 'Stacks & Queues', link: '/dsa/ds/stacks-queues' },
            ],
          },
        ],
      },
      {
        text: 'FRONTEND',
        items: [
          { text: 'Overview', link: '/frontend/frontend' },
          {
            text: 'HTML',
            link: '/frontend/html/html',
            items: [
              { text: 'HTML-1', link: '/frontend/html/html-1' },
              { text: 'HTML-2', link: '/frontend/html/html-2' },
            ],
          },
          {
            text: 'CSS',
            link: '/frontend/css/css',
            items: [
              { text: 'CSS-1', link: '/frontend/css/css-1' },
              { text: 'CSS-2', link: '/frontend/css/css-2' },
            ],
          },
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

