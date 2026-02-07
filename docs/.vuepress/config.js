module.exports = {
  base: '/',
  lang: 'en-US',
  title: 'Spokane DSA',
  description: 'Spokane Democratic Socialists of America',

  theme: 'yuu',

  themeConfig: {
    yuu: {
      // Disable dark theme toggling to keep it always dark
      disableDarkTheme: false,
      // Set default theme to dark
      defaultDarkTheme: true,
      // Enable only the red color theme
      colorThemes: ['red'],
      // Set default color theme to red
      defaultColorTheme: 'red',
    },

    // Navigation bar links
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Join', link: '/join/' },
      { text: 'Events', link: '/events/' },
      { text: 'Contact', link: '/contact/' },
    ],

    // Sidebar configuration (optional, can be enabled if needed)
    // sidebar: 'auto',

    // Repository information
    repo: 'SpokaneDSA',
    repoLabel: 'GitHub',

    // Social links (displayed in navbar dropdown)
    // Note: Yuu theme doesn't have built-in social links like Plume
    // These would need to be added manually in the navbar or footer

    // Footer configuration
    // Note: Yuu theme uses markdown-based footer, configured in markdown files
  },

  // Head metadata
  head: [
    ['link', { rel: 'icon', href: '/images/hero.svg' }],
  ],
}
