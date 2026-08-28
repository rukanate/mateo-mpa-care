# MPA Detailer Car Care

Website and portfolio for **MPA Detailer Car Care**, a car care studio based in
Bundall, on the Gold Coast, Australia. The site showcases the business's work,
explains what it offers, and turns visitors into bookings through WhatsApp.

**Live site:** https://rukanate.github.io/mateo-mpa-care/

## What this project is

A single-page site built for one purpose: getting people who are looking for a
detailer to message the business. Everything on the page is built around that.

- **Before/after gallery** — draggable sliders that show real transformations,
  the strongest sales tool for a detailing business.
- **Services** — automotive service, auto detailing and car wash, with what each
  one includes.
- **Packages** — three tiers (Express Wash, Full Detail, Premium Detail) with
  quote-based pricing, since the final price depends on the vehicle.
- **Portfolio, process, testimonials and FAQ** — the context a customer needs
  before getting in touch.
- **WhatsApp everywhere** — every button and the contact form open a
  pre-written message in WhatsApp. There is no backend and no database.

The site is a static build, so it costs nothing to host and loads fast.

## Built with

React 19 + TypeScript, bundled with Vite. Plain CSS — no UI framework — with a
dark red-and-black theme, scroll animations that respect
`prefers-reduced-motion`, and a layout that works from phone to desktop.
Deployed automatically to GitHub Pages by GitHub Actions.

## Repository layout

```
.github/workflows/deploy.yml   build + deploy on every push to main
mpa-detailer/                  the site itself
├── public/img/                photos (gallery and portfolio)
├── src/components/            one component + one stylesheet per section
├── src/config.ts              business details, edited in one place
└── src/App.tsx                section order
```

## Adding photos (no code required)

| Section | Folder | File names |
|---|---|---|
| Before/after gallery | `mpa-detailer/public/img/gallery/` | `1-antes.jpg` and `1-despues.jpg`, `2-antes.jpg` and `2-despues.jpg`, … |
| Portfolio | `mpa-detailer/public/img/` | `projecto1.jpg` … `projecto6.jpg` |
| Logo / favicon | `mpa-detailer/public/` | `logo.png` |

While a gallery photo is missing, that card shows "Photo coming soon" instead of
breaking the layout.

## Business details

Phone, WhatsApp number, email, Instagram and opening hours all live in
`mpa-detailer/src/config.ts`. Change them there and they update across the whole
site. Copy for services, packages, testimonials and FAQs lives in the matching
component under `mpa-detailer/src/components/`.

> **Still to replace:** the reviews in `src/components/Testimonials.tsx` are
> placeholders, and the counters in the hero (cars detailed, years of
> experience) are examples. Swap them for real figures before relying on them.

## Development

```bash
cd mpa-detailer
npm install
npm run dev       # local dev server
npm run build     # production build
npm run lint      # linter
```

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes it to GitHub Pages. The Pages source must stay set to
**GitHub Actions** (Settings → Pages); on "Deploy from a branch" GitHub renders
this README as the site instead of the built app.
