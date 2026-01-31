import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  base: '/',
  lang: 'en-US',
  title: 'Spokane DSA',
  description: 'Democratic Socialists of America - Spokane Chapter',

  bundler: viteBundler(),

  theme: plumeTheme({
    // DSA color scheme - red as primary
    appearance: true,
    
    profile: {
      name: 'Spokane DSA',
      description: 'Democratic Socialists of America - Spokane Chapter',
      avatar: '/images/hero.svg',
    },

    navbar: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Join', link: '/join/' },
      { text: 'Events', link: '/events/' },
      { text: 'Contact', link: '/contact/' },
    ],

    social: [
      { icon: 'github', link: 'https://github.com/SpokaneDSA' },
    ],

    footer: {
      message: 'Democratic Socialists of America - Spokane Chapter',
      copyright: 'Copyright © 2026 Spokane DSA',
    },
  }),
})
