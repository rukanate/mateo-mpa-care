# MPA Detailer Car Care

Portfolio website for MPA Detailer Car Care, a car detailing business in
Bundall, Gold Coast (Australia).

**Live site:** https://rukanate.github.io/mateo-mpa-care/

## What it does

A one-page site that presents the business: the services it offers, photos of
finished jobs in a before/after comparison, packages, and a contact section.

It is a static site — no server, no database, no user accounts. The contact form
does not send an email: it takes what the visitor types, builds a message out of
it and opens WhatsApp with that message ready to send. Every "Book" and
"Enquire" button works the same way.

## Sections

| Section | File | What it shows |
|---|---|---|
| Hero | `Hero.tsx` | Headline, counters, main call to action |
| About | `About.tsx` | Four cards describing the work |
| Gallery | `Gallery.tsx` + `BeforeAfter.tsx` | Draggable before/after sliders |
| Services | `Services.tsx` | Automotive service, auto detailing, car wash |
| Process | `Process.tsx` | The four steps of a job |
| Pricing | `Pricing.tsx` | Three packages, quote-based |
| Portfolio | `Projects.tsx` | Photo grid with a lightbox |
| Testimonials | `Testimonials.tsx` | Customer reviews |
| FAQ | `Faq.tsx` | Common questions |
| Contact | `Contact.tsx` | Details, socials and the WhatsApp form |

Each section is one component plus its own stylesheet, and the order they appear
in is set in `src/App.tsx`.

## Stack

React 19 and TypeScript, bundled with Vite. Plain CSS, no UI framework. Scroll
animations come from a small `useReveal` hook built on `IntersectionObserver`,
which stays disabled when the visitor has reduced motion turned on.

## Repository layout

```
.github/workflows/deploy.yml   builds and deploys on every push to main
mpa-detailer/                  the site
├── public/img/                photos (gallery and portfolio)
├── src/components/            one component + one stylesheet per section
├── src/hooks/useReveal.ts     scroll animations
├── src/config.ts              business details
└── src/App.tsx                section order
```

## Editing content

**Business details** — phone, WhatsApp number, email, Instagram and opening
hours are all in `mpa-detailer/src/config.ts`. Changing them there updates the
whole site.

**Text** — the copy for services, packages, testimonials and FAQs sits in an
array at the top of each component, meant to be edited directly.

**Photos** — drop the files in and they appear; no code change needed:

| Where | Folder | File names |
|---|---|---|
| Gallery | `mpa-detailer/public/img/gallery/` | `1-antes.jpg` and `1-despues.jpg`, `2-antes.jpg` and `2-despues.jpg`, … |
| Portfolio | `mpa-detailer/public/img/` | `projecto1.jpg` … `projecto6.jpg` |
| Logo / favicon | `mpa-detailer/public/` | `logo.png` |

A gallery card with no photo yet shows "Photo coming soon" rather than breaking
the layout.

> **Placeholder content:** the reviews in `Testimonials.tsx` and the counters in
> `Hero.tsx` are examples, not real data. Replace them with real figures.

## Development

```bash
cd mpa-detailer
npm install
npm run dev       # local dev server
npm run build     # production build
npm run lint      # linter
```

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and
publishes it to GitHub Pages.

The Pages source must stay set to **GitHub Actions** (Settings → Pages). On
"Deploy from a branch" GitHub runs Jekyll instead, which publishes this README
as the site's home page rather than the built app.
