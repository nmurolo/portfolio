# Nicholas Murolo Portfolio

A static, content-driven portfolio built with [Astro](https://astro.build). It includes a responsive
home page, project case studies, About and Contact pages, light/dark themes, and reduced-motion support.

## Run locally

```sh
npm install
npm run dev
```

Production output is generated in `dist/`:

```sh
npm run build
npm run preview
```

## Customize the site

### Name, bio, links, and navigation

Edit `src/data/site.ts`. This is the main place for:

- Name, title, description, email, and location
- Home-page headline, introduction, bio, and services
- Navigation and social profile links
- The production URL used for canonical and social metadata

Also replace `https://example.com` in `astro.config.mjs` with the final domain.

### Projects

Each file in `src/content/projects/` creates a case-study page. Copy an existing Markdown file and
change its frontmatter and body. Set `featured: true` to show a project on the home page and use
`order` to control its position.

Project fields support:

- Title, summary, year, role, services, and project links
- A cover image and configurable accent color
- Image galleries, local video files, YouTube embeds, or Vimeo embeds
- Optional poster images and WebVTT caption files for local videos
- Any Markdown headings, paragraphs, lists, and links in the case study body

For an external video, use the provider's embed URL (for example,
`https://www.youtube-nocookie.com/embed/VIDEO_ID`), not its regular watch URL.

### Images and video

Put static media in `public/images/` and reference it from content as `/images/file-name.jpg`.
The included SVG artwork is placeholder content and can be replaced without changing components.
For good performance, export photographs as AVIF or WebP and provide enough resolution for large
screens (roughly 1800–2400 pixels wide).

### Colors, type, spacing, and motion

Edit the custom properties at the top of `src/styles/global.css`. Light and dark palettes are separate,
and components inherit these values. The blue-purple identity is controlled primarily by `--accent`,
`--accent-strong`, and `--accent-soft`.

Reusable page sections live in `src/components/`. Sections in `src/pages/index.astro` can be reordered
or removed without changing the project content model.

## Cloudflare Pages

The project uses Astro's static output and requires no server adapter.

- Build command: `npm run build`
- Build output directory: `dist`
- Node version: current LTS

Cloudflare Pages can continue deploying from the connected GitHub branch. No GitHub Actions workflow
is required for the existing direct integration.