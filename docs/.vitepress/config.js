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
        text: 'Data Structure',
        items: [
          { text: 'Module 01', link: '/ds/module-1' },
          { text: 'Module 02', link: '/ds/module-2' },

        ],
      },
      {
        text: 'Data Structure Lab',
        items: [
          { text: 'Experiment 01', link: '/dslab/exp-1.md' },
          { text: 'Experiment 02', link: '/dslab/exp-2.md' },
          { text: 'Experiment 03', link: '/dslab/exp-3.md' },
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
