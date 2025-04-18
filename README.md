# News App Documentation

This is the documentation site for the News App ecosystem, built with [Docusaurus 2](https://docusaurus.io/).

## Installation

```bash
npm install
```

## Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static content hosting service.

## Deployment

You can deploy the `build` directory to any static site hosting service like Netlify, Vercel, GitHub Pages, etc.

## Project Structure

- `/docs`: Documentation content in Markdown format
- `/static`: Static assets like images
- `/src/css`: Custom CSS files
- `/docusaurus.config.js`: Main configuration file
- `/sidebars.js`: Sidebar configuration

## Adding Content

1. Add new Markdown files to the `/docs` directory or its subdirectories
2. Update the sidebar configuration in `/sidebars.js` if needed
3. Add images to the `/static/img` directory and reference them in your Markdown files
