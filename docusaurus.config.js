// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Emerson Bossi',
  tagline: 'Technical Writer Portfolio',
  favicon: 'img/favicon.ico',
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://bossiwriter.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'bossiwriter', // Usually your GitHub org/user name.
  projectName: 'bossiwriter.github.io', // Usually your repo name.

  onBrokenLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/bossiwriter/bossiwriter.github.io/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
  title: 'Emerson Bossi - Technical Writer',
  items: [
    // Search na esquerda
    { type: 'search', position: 'left' },

    // Rotas principais (esquerda)
    { to: '/', label: 'Start Here', position: 'left' },
    { to: '/github-api-doc/guides/overview', label: 'GitHub API Docs', position: 'left' },
    { to: '/behind-the-docs', label: 'Case Studies', position: 'left' },
    { to: '/secureboot-troubleshooting', label: 'Technical Documentation', position: 'left' },
    { to: '/about-me', label: 'About Me', position: 'left' },
    { to: '/documentation-approach', label: 'Documentation Approach', position: 'left' },

    // GitHub (direita)
    {
      href: 'https://github.com/BossiWriter/bossiwriter.github.io',
      label: 'GitHub',
      position: 'right',
    },
  ],
},

      footer: {
  style: 'dark',
  links: [
    {
      title: 'Portfolio',
      items: [
        { label: 'Start Here', to: '/' },
        { label: 'GitHub API Docs', to: '/github-api-doc/guides/overview' },
        { label: 'Case Studies', to: '/case-studies/behind-the-docs' },
        { label: 'Technical Documentation', to: '/documentation-samples' },
      ],
    },
    {
      title: 'Profile',
      items: [
        { label: 'About Me', to: '/about-me' },
        { label: 'Documentation Approach', to: '/documentation-approach' },
      ],
    },
    {
      title: 'Contact',
      items: [
        { label: 'LinkedIn - /in/bossiwriter', href: 'https://www.linkedin.com/in/bossiwriter' },
        { label: 'Email - bossiwriter@gmail.com', href: 'mailto:bossiwriter@gmail.com' },
        { label: 'Wix Portfolio Hub', href: 'https://bossiwriter.wixsite.com/content-writer' },
      ],
    },
  ],
  copyright: `Copyright © ${new Date().getFullYear()} Emerson Bossi. Built with Docusaurus.`,
            },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
plugins: [
  [
    require.resolve('@easyops-cn/docusaurus-search-local'),
    {
      hashed: true,
      language: ['en'],
      docsRouteBasePath: '/', // docs na raiz
    },
  ],
],

};



export default config;

