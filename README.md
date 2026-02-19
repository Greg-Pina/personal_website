# Personal Website

Gatsby-based portfolio + blog.

## Local development

```bash
npm install
npm run develop
```

## Build

```bash
npm run build
npm run serve
```

## Deploy (GitHub Pages)

### Current Build Process

The site uses an automated deployment workflow:

1. **Commit & Push**: Push changes to the `master` branch
2. **GitHub Actions**: The workflow automatically triggers (`.github/workflows/deploy-to-master.yml`)
   - Installs dependencies with `npm ci`
   - Builds the Gatsby site with `npm run build` (includes `--prefix-paths`)
   - Publishes the `public/` directory to the `gh-pages` branch
3. **GitHub Pages**: Serves the site from the `gh-pages` branch at https://greg-pina.github.io/personal_website/
4. **View Changes**: After the workflow completes (1-2 minutes), changes should be live
   - **Note**: If you don't see updates immediately, do a hard refresh (Ctrl+Shift+R / Cmd+Shift+R) or open the site in a private browsing window to clear cached content

## Linting & formatting

```bash
npm run lint
npm run format
```

## Resume

The resume is served from `/docs/greg_pina_resume.pdf`. Update the file in `static/docs/` to change the deployed resume.

## Update content

- Projects: [src/data/projects.json](src/data/projects.json)
- Videos (YouTube IDs + blog links): [src/data/videos.json](src/data/videos.json)
- Blog posts: [content/blog](content/blog)
