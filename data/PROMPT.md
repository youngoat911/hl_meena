Build a personal portfolio website for **Heeralal Meena (H.L. Meena)**: certified Master Life Coach (Sneh Academy, 2025). All copy is in `content.md` in this folder. Treat it as the single source of truth and use the text as written. Don't invent testimonials, stats, prices, credentials or contact details. Wherever `content.md` says `TODO`, show a clearly marked placeholder and list it in the README.

## Tech stack
- Vite + React + TypeScript
- Tailwind CSS v4
- Framer Motion, for subtle scroll-reveal animations only
- lucide-react for icons (no emoji icons in the final UI)
- No backend. The contact form opens a pre-filled WhatsApp message, or uses a `mailto:` fallback until a phone number is added.
- Must deploy to Vercel as a static site with zero config

## Project structure
```
src/
  data/site.ts        # ALL copy, links, stats, media list as typed constants (parsed by hand from content.md)
  components/         # Navbar, Hero, StatStrip, About, Story, Approach, WhoIHelp,
                      # Services, Testimonials,
                      # Certification, Videos, CtaBanner, Contact, Footer, SectionHeading, Button
  App.tsx             # single page, sections in the order of content.md
public/
  images/             # already provided: portrait-*.jpg and certificate-master-life-coach.jpg (convert to WebP)
```
Components must never hardcode copy. Everything comes from `src/data/site.ts`, so the client's edits only touch that one file.

## Design direction
- **Palette:** deep navy `#1B2A4A` (primary/headings), warm gold `#C9A227` (accent/CTAs, use sparingly), off-white `#FAF7F0` (background), white cards, muted grey body text. Define these as Tailwind theme tokens.
- **Typography:** a strong sans for headings (Poppins or Outfit) and a readable body font (Inter). If Hindi is enabled, add **Noto Sans Devanagari** / **Hind** for Devanagari text.
- **Feel:** warm, approachable, trustworthy. He's a people-first coach, so it should feel friendly rather than corporate. Lots of whitespace and real photos; no stock imagery, no generic SaaS gradients.
- **Hero:** headline, subtitle, two CTAs, and `portrait-seated-smile.jpg` in a rounded frame with a soft gold accent shape behind it. Text on the left and image on the right on desktop, stacked on mobile.
- **Photos:** they're casual office shots with busy backgrounds. Use `object-cover` with sensible `object-position` (keep his face in the upper third), a subtle navy overlay/vignette where text sits near them, and consistent rounded corners.
- **Certification section:** a framed card showing the certificate image (click to open a lightbox) next to the details (title "Master Life Coach", issuer Sneh Academy, signed by Sneh Desai, 30 Sep 2025) and a gold seal icon.
- **Videos section:** a responsive grid of YouTube embeds driven by an array in `site.ts` (empty array = hide grid, show a "Watch on YouTube" button). Use a lite-YouTube facade (thumbnail first, iframe loads on click) for performance.
- **Stat strip:** render only the stats that have real values in `site.ts`; skip any marked TODO.
- **Bilingual (if content.md confirms):** EN/हिंदी toggle in the navbar, with all copy in `site.ts` as `{ en, hi }` objects. Build the structure for it even if only English is filled in now.

## Behaviour
- Sticky navbar that turns solid on scroll, smooth-scrolls to section anchors, highlights the active section, and has a mobile hamburger drawer.
- Floating WhatsApp button, bottom-right, on every screen.
- **Contact form:** fields as listed in `content.md` with basic validation. On submit, build a WhatsApp `wa.me` URL with the form contents URL-encoded. If the number is still TODO, fall back to a `mailto:` link to his email (also TODO), and show a friendly "coming soon" note if both are missing.
- **Social links:** YouTube (@h_l_meena) and any others that `content.md` provides. Hide icons whose URL is still TODO. Strip tracking query params such as `?si=`.
- Respect `prefers-reduced-motion`.

## Quality bar
- Fully responsive at 360px, 768px, 1024px and 1440px. Check the hero and the stat strip at 360px especially.
- Accessible: semantic landmarks, one `<h1>`, ordered headings, alt text, visible focus states, colour contrast AA. Gold on off-white fails AA for small text, so use gold only for large text, icons and buttons with navy text.
- **SEO:** title, meta description, keywords, Open Graph and Twitter tags (from section 0 of `content.md`), a favicon ("HL" monogram in navy/gold), `robots.txt`, and JSON-LD `Person` schema with `jobTitle`, `hasCredential` (the certificate) and `sameAs` social links.
- Lighthouse aim: 95+ on Performance, Accessibility, Best Practices and SEO. Lazy-load images and serve images as WebP.
- No console errors, no unused dependencies, and `npm run build` passes with no TypeScript errors.

## Workflow
1. Read `content.md` fully first. Sections 13–14 are notes for me, not website content. Then then propose the section list and the component plan in a short message before writing code.
2. Scaffold the project, set up the Tailwind theme and fonts, then build section by section.
3. Run `npm run dev` and check every section on mobile and desktop widths. Fix layout issues before moving on.
4. Finish with a `README.md` that covers: how to run, how to edit content (`src/data/site.ts`), where to drop the images, the list of remaining TODOs (everything marked TODO in content.md), and how to deploy to Vercel.
