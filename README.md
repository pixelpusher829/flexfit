# FlexFit

Marketing site for FlexFit, a personal training and group fitness studio. Built with [Astro](https://astro.build) as a fast, fully static site.

## Commands

| Command           | Action                                    |
| :---------------- | :---------------------------------------- |
| `npm install`     | Install dependencies                      |
| `npm run dev`     | Start the dev server at `localhost:4321`  |
| `npm run build`   | Build the production site to `./dist/`    |
| `npm run preview` | Preview the production build locally      |

## Editing content

Almost everything on the site lives in **[`src/data/site.ts`](src/data/site.ts)**: business details, opening hours, social links, stats, services, class schedule, membership prices, team bios, testimonials and FAQs. Edit that file and the page, footer, structured data (for Google) and contact details update everywhere.

Images live in `src/images/` and are automatically resized and converted to WebP at build time.

## Before launch checklist

- [ ] Replace everything marked `PLACEHOLDER` in `src/data/site.ts` (phone, email, address, hours, prices, stats, schedule).
- [ ] Replace the sample testimonials with real member reviews (with their permission).
- [ ] Update the social links to the real profiles.
- [ ] Set up the contact form (see below).
- [ ] Have the privacy policy in `src/pages/privacy.astro` reviewed.
- [ ] If using a custom domain: set `site` in `astro.config.mjs`, remove `base`, and update `public/robots.txt`.

## Contact form

The form posts JSON to any form service (Formspree, Basin, Getform, etc.):

1. Create a form with your provider and copy its endpoint URL.
2. Paste it into `formEndpoint` in `src/data/site.ts`.

Until an endpoint is set, submitting the form opens the visitor's email app with their message pre-filled, so enquiries are never lost.

## Deployment

Pushing to `main` deploys to GitHub Pages via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). In the repository settings, set **Pages → Source** to **GitHub Actions**.

## Project structure

```text
src/
├── components/
│   ├── sections/      # One component per page section (Hero, Pricing, FAQ…)
│   ├── Header.astro   # Sticky header with mobile menu
│   ├── Footer.astro
│   └── Icon.astro     # Inline SVG icons
├── data/site.ts       # All editable business content
├── images/
├── layouts/BaseLayout.astro   # <head>, SEO, social tags, structured data
├── pages/             # index, privacy, 404
└── styles/global.css  # Design tokens and all styles
```
