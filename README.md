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

Set the production URL in `astro.config.mjs`; it is used for canonical and social metadata.

### Projects

Each file in `src/content/projects/` creates a case-study page and is automatically listed in the
Projects menu. Copy an existing Markdown file, then change its frontmatter and body. Use `order` to
control its position in both the menu and home page.

Set `featured: true` for the home-page card to reuse the project title, summary, and cover. To give
the home-page feature its own shorter story or different image without changing the full case study,
use an object instead:

```yaml
featured:
  label: Featured product work
  title: A short home-page title
  summary: A focused introduction written specifically for the home page.
  cover:
    src: /images/project-feature.jpg
    alt: Description of the feature image
```

Set `featured: false` to keep the project out of the selected-work section. It will still have its own
page and remain available from the Projects menu.

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

### Life, hobbies, and interests

Personal stories live in `src/content/life/` and are intentionally separated from professional work
under `/life/`. Every Markdown file creates its own page and appears on the Life landing page. Copy
`src/content/life/china.md` to add another subject, then update its title, summary, category, cover,
accent color, and Markdown body.

The included China entry is structured for language-learning milestones, trips, photographs, and
future goals. Replace its bracketed prompts and sample locations with your actual experience. The
cover is optional; entries without one use a neutral blank placeholder until you add your own image.

## Cloudflare Pages

The project uses Astro's static output and requires no server adapter.

- Build command: `npm run build`
- Build output directory: `dist`
- Node version: current LTS

Cloudflare Pages can continue deploying from the connected GitHub branch. No GitHub Actions workflow
is required for the existing direct integration.