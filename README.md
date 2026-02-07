# SpokaneDSA.github.io

Official website for the Spokane Democratic Socialists of America.

This site is built with [VuePress](https://vuepress.vuejs.org/) using the [Yuu theme](https://github.com/Danktuary/vuepress-theme-yuu) and automatically deploys to GitHub Pages.

## Development

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run docs:dev
   ```

3. Open your browser to `http://localhost:8080`

### Building for Production

```bash
npm run docs:build
```

The built files will be in `docs/.vuepress/dist/`.

## Project Structure

```
.
├── docs/                    # Site content
│   ├── .vuepress/
│   │   ├── config.ts       # VuePress configuration
│   │   ├── public/         # Static assets
│   │   │   └── images/     # Images
│   │   └── styles/         # Custom styles
│   │       ├── palette.css # Color variables
│   │       └── index.css   # Additional styles
│   ├── README.md           # Home page
│   ├── about/              # About page
│   ├── join/               # Join page
│   ├── events/             # Events page
│   └── contact/            # Contact page
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions deployment
└── package.json
```

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch via GitHub Actions.

### First-Time Setup

To enable GitHub Pages deployment:

1. Go to your repository Settings
2. Navigate to Pages (in the sidebar)
3. Under "Build and deployment", set Source to "GitHub Actions"

## Content Management

### Adding a New Page

1. Create a new directory in `docs/` (e.g., `docs/campaigns/`)
2. Add a `README.md` file in that directory
3. Add the page to the navbar in `docs/.vuepress/config.ts`:
   ```typescript
   navbar: [
     // ... existing items
     { text: 'Campaigns', link: '/campaigns/' },
   ],
   ```

### Editing Existing Content

Simply edit the markdown files in the `docs/` directory. The site will rebuild automatically when changes are pushed.

### Customizing Styles

- Edit `docs/.vuepress/styles/palette.css` for color variables
- Edit `docs/.vuepress/styles/index.css` for additional custom styles

### Replacing the Hero Image

1. Download your hero image
2. Save it as `docs/.vuepress/public/images/hero.jpg`
3. Update `docs/README.md` to reference the new image:
   ```yaml
   hero:
     image: /images/hero.jpg
   ```
4. Update `docs/.vuepress/config.ts` profile avatar if needed

## Theme Documentation

For more information about available features and configuration options, see the [Yuu theme documentation](https://github.com/Danktuary/vuepress-theme-yuu).

The site is configured with:
- **Dark mode enabled by default** - Users can toggle between light and dark themes
- **Red color theme** - Matching the DSA brand colors

## Contributing

Please follow these guidelines when contributing:

1. Create a new branch for your changes
2. Test locally before pushing
3. Create a pull request with a clear description of changes

## License

See [LICENSE](LICENSE) file for details.
