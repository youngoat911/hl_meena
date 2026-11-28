# Heeralal Meena (H.L. Meena): portfolio site

Single-page static site: Vite, React, TypeScript, Tailwind CSS v4, Framer Motion.

## Run

```bash
npm install
npm run dev       # local development
npm run build     # type-check, build and prerender into dist/
npm run preview   # serve the production build
```

Needs Node 22.12 or newer.

## Edit content

All copy, links, stats and media are in **`src/data/site.ts`**. Nothing else needs editing.

- Text is `{ en: '...', hi: '...' }`. `hi` is optional and falls back to English.
- `showTodos` (top of the file): `false` hides everything still missing; `true` shows it as dashed TODO boxes.
- `null` means "still TODO". Replace it with the real value and its placeholder goes away (or the hidden stat or icon appears).
- A `todo: { en: '...' }` entry on a service or on `whoIHelp` is a placeholder: set it to `null` once confirmed.
- **WhatsApp:** set `contact.phone` with country code. This switches on the form, all booking buttons and the floating button. Until then booking links go to the contact form. With only `contact.email` set, the form opens an email.
- **Videos:** add `{ url, title }` to `videos.items`. Any YouTube link format works.
- **Hindi:** fill in the `hi` values and set `hindiEnabled = true` to show the EN/हिंदी toggle. Also install `@fontsource/noto-sans-devanagari` and `@fontsource/hind` and import them in `src/index.css`; the font stacks already name both.
- **Custom domain:** set `meta.siteUrl`. Until then, Vercel's production URL is used for social previews.

## Images

The site shows one photo, in the hero (`hero.image`).

Source photos are in `data/images/`; the site serves WebP from `public/images/`, in four widths named `<name>-480.webp`, `<name>-640.webp`, `<name>-800.webp` and `<name>-1087.webp`. To replace it (needs ImageMagick):

```bash
for w in 480 640 800 1087; do
  magick data/images/NAME.jpg -resize ${w}x -strip -quality 70 public/images/NAME-$w.webp
done
```

Then set `hero.image.name` to `NAME`. `position` and `zoom` control the crop. `og.jpg` (1200×630) is the social preview.

## Remaining TODOs

| Item | Where in `site.ts` |
|---|---|
| English only, or Hindi + English | `hindiEnabled` |
| Years of experience, people coached, YouTube subscribers | `stats` |
| Coaching methods | `approach.methods` |
| 1-on-1 mode, duration and fee | `services.items[0]` |
| Whether to offer the free discovery call | `services.items[1]` |
| Workshops / group sessions | `services.items[2]` |
| Education, other certifications, awards (including the office trophy) | `certification.others`, then set `othersTodo` to `null` |
| 3–6 YouTube video links | `videos.items` |
| Facebook: direct profile/page URL (a share link is used for now) | `socials` |
| Phone/WhatsApp and email (the form and the floating WhatsApp button appear once either is set) | `contact` |
| Office address (the city is shown for now) | `contact.address` |
| Instagram, LinkedIn URLs | `socials` |

Also to confirm: the brand line (`brandLine`, three options in `data/content.md`), and the starter copy in "How I Coach" and "Who I Help".

## Deploy to Vercel

Push to a Git repository and import it in Vercel. It detects Vite (build `npm run build`, output `dist`); no settings or environment variables are needed. Or run `npx vercel --prod` in this folder.

Clear the visible TODO placeholders before sharing the site publicly.
# hl_meena
