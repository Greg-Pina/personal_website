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

The GitHub Actions workflow builds the site and publishes the `public/` output to the `gh-pages` branch.

## Resume

The resume is served from `/docs/greg_pina_resume.pdf`. Update the file in `static/docs/` to change the deployed resume.

## Update content

- Projects: [src/data/projects.json](src/data/projects.json)
- Videos (YouTube IDs + blog links): [src/data/videos.json](src/data/videos.json)
- Blog posts: [content/blog](content/blog)
