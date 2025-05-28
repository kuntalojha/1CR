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
            text: 'Algorithms',link: '/dsa/algo/algo',
            items: [
              { text: 'Analysing Algorithm', link: '/dsa/algo/algo-1' },
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
          { text: 'Hello World', link: '/frontend/hello-world' },
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



// import { defineConfig } from 'vitepress';

// // https://vitepress.dev/reference/site-config
// export default defineConfig({
//   title: '! CR',
//   base: '/1CR/',
//   description: 'NOTE',

//   themeConfig: {
//     // https://vitepress.dev/reference/default-theme-config
//     nav: [{ text: 'Home', link: '/' }],

//     sidebar: [
//       {
//         text: 'DSA',
//         items: [
//           { text: 'DSA', link: '/dsa/dsa' },
//           // { text: 'DSA', link: '/onecr/dsa' },
//           // { text: 'Competitive Programming', link: '/onecr/cp' },
//           // { text: 'Interview Preparation', link: '/onecr/interview-preparation' },
//           // { text: 'System Design', link: '/onecr/system-design' },
//           // { text: 'Coding Challenges', link: '/onecr/coding-challenges' },
//           // { text: 'Resources', link: '/onecr/resources' },
//         ],
//       },
//       {
//         text: 'FRONTEND',
//         items: [
//           { text: 'Hello World', link: '/frontend/hello-world' },
//           { text: 'HTML', link: '/frontend/html' },
//           // { text: 'CSS', link: '/frontend/css' },
//           // { text: 'Tailwind CSS', link: '/frontend/tailwind' },
//           // { text: 'JavaScript', link: '/frontend/javascript' },
//           // { text: 'TypeScript', link: '/frontend/typescript' },
//           // { text: 'React', link: '/frontend/react' },
//         ],
//       },
//       {
//         text: 'BACKEND',
//         items: [
//           { text: 'NODE.JS', link: '/backend/node-js' },
//           // { text: 'Express.js', link: '/backend/expressjs' },
//           // { text: 'MongoDB', link: '/backend/mongodb' },
//           // { text: 'SQL', link: '/backend/sql' },
//           // { text: 'GraphQL', link: '/backend/graphql' },
//           // { text: 'REST API', link: '/backend/rest-api' },
//         ],
//       },
//     ],

//     socialLinks: [
//       { icon: 'github', link: 'https://github.com/kuntalojha' },
//       { icon: 'linkedin', link: 'https://www.linkedin.com/in/mrkuntalojha/' },
//       { icon: 'twitter', link: 'https://x.com/kuntalojha' },
//     ],
//   },
// });
