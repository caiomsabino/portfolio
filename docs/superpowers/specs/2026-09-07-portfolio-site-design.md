# Portfolio Site — Design Spec

**Date:** 2026-09-07
**Owner:** Caio Sabino
**Status:** Approved, pending implementation plan

## Purpose

A personal portfolio site for Caio Sabino, a Software Engineering student at UnB
(graduating December 2027) seeking a software development internship. The site's
job is to convince a recruiter, within one screen and one scroll, that the
candidate has shipped real backend software — including an application running in
production for a paying client.

The primary distribution channel is a direct link: on the résumé, on LinkedIn, on
GitHub. It is not an SEO play. That assumption drives the routing and i18n
decisions below.

**Success criteria:**

- A recruiter landing on the page understands the role sought and the strongest
  proof point (gamakarate.com.br in production) without scrolling.
- The CV PDF is one click away from anywhere on the page.
- The page reads correctly in Portuguese and English.
- Lighthouse-clean on mobile: legible, no horizontal scroll, no layout shift.

## Scope

**In scope:** one static page, six sections, a PT/EN toggle, a CV download, dark
theme only.

**Explicitly out of scope (YAGNI):** blog, CMS, contact form, light/dark theme
toggle, analytics, per-project case-study pages, animation library, test
framework, database, API routes, authentication.

## Stack

| Concern | Choice | Rationale |
|---|---|---|
| Framework | Next.js, App Router, TypeScript | Matches the stack already used on gamakarate.com.br; deploys to Vercel with no configuration |
| Styling | Tailwind CSS v4 | Comes with the shadcn Next.js template |
| Components | shadcn/ui, `new-york` style, Radix base | Accessible primitives, source lives in the repo and can be edited |
| Icons | `lucide-react` | Ships with shadcn |
| Fonts | Geist Sans (interface), Geist Mono (dates, tech badges, metrics) | Bundled with the Next.js template |
| Hosting | Vercel | Consistent with existing personal projects |

shadcn components required: `button`, `card`, `badge`, `separator`, `tooltip`.
Nothing else is installed until a section actually needs it.

### Known setup hazards

**The target directory is not empty.** It already contains
`Caio_Sabino_curriculo.pdf` and this `docs/` tree, and it is not yet a git
repository. The scaffolding step must place the Next.js app in this directory
without discarding either — if the template generator refuses to write into a
non-empty directory, the existing files are moved aside and restored afterwards,
never deleted. The résumé PDF is **copied** into `public/`, and the copy at the
repository root is left in place.

**Font variables.** `shadcn init` rewrites `globals.css` and can emit
`--font-sans: var(--font-sans)`
inside `@theme inline` — a circular reference that silently breaks font loading,
because Tailwind v4 resolves `@theme inline` at parse time and cannot see the
runtime variable Next.js injects. After init, the theme block must use literal
family names:

```css
--font-sans: "Geist", "Geist Fallback", ui-sans-serif, system-ui, sans-serif;
--font-mono: "Geist Mono", "Geist Mono Fallback", ui-monospace, monospace;
```

and the font variable classNames must sit on `<html>`, not `<body>`.

## Architecture

A static single page. No server-side data fetching, no route handlers, no
persistence beyond one `localStorage` key.

```
app/
  layout.tsx              <html className="dark">, fonts, LanguageProvider
  page.tsx                composes sections in order
  globals.css             theme tokens
components/
  site-header.tsx         sticky nav, anchor links, PT/EN toggle
  site-footer.tsx
  sections/
    hero.tsx
    about.tsx
    experience.tsx
    projects.tsx
    skills.tsx
    contact.tsx
  ui/                     shadcn primitives
content/
  types.ts                SiteContent interface
  pt.ts
  en.ts
lib/
  language-context.tsx    LanguageProvider + useContent()
  utils.ts                cn()
public/
  Caio_Sabino_curriculo.pdf
```

Each section component is a leaf: it takes no props, calls `useContent()`, and
renders. A section can be understood and changed without reading any other
section. Content and presentation are separated — copy edits never require
touching a component, and layout edits never risk corrupting copy.

## Internationalization

Single route (`/`). Language is client state, not routing state.

- `content/types.ts` defines a `SiteContent` interface covering every string on
  the page.
- `content/pt.ts` and `content/en.ts` each export an object typed as
  `SiteContent`. TypeScript therefore makes it impossible for one language to
  miss a key or drift from the other — a missing translation is a build error,
  not a runtime blank.
- `LanguageProvider` holds `"pt" | "en"`, defaults to `"pt"`, and persists the
  choice under the `localStorage` key `portfolio-lang`.
- `useContent()` returns the active `SiteContent` object.
- The toggle is a two-state segmented button in the header, labeled `PT` / `EN`.

**Hydration requirement:** the server renders the default (`pt`). Reading
`localStorage` during render would produce a hydration mismatch, so the stored
preference is applied in an effect after mount. The rendered markup must be
identical on server and first client render.

**SEO consequence, accepted:** only Portuguese content is in the initial HTML, so
only Portuguese is indexed. This is an accepted trade-off — the site is
distributed by direct link, and locale routing (`/pt`, `/en` via `next-intl` and
middleware) is real added complexity for a benefit this site does not need. If
search visibility later matters, this is the decision to revisit.

## Sections

Order is fixed: Hero → About → Experience → Projects → Skills → Contact.

### Hero

Name, the title "Desenvolvedor Backend e Automação" / "Backend & Automation
Developer", and a one-line pitch: Software Engineering student at UnB seeking a
development internship, with an application in production for a real client.

Actions: **View projects** (anchor to `#projects`), **Download CV** (the PDF),
and icon links to GitHub and LinkedIn.

### About

Two to three sentences adapted from the résumé summary: backend work in Java,
Spring Boot, NestJS and Ruby; data modelling in PostgreSQL; automated testing;
AI-driven automation; and one self-built application maintained in production.

### Experience

A vertical timeline, most recent first. Each entry: organization, role, date
range (Geist Mono), location, and two or three bullets.

| Organization | Role | Dates |
|---|---|---|
| V360 | Project Management & Business Rules Development | 02/2026 – present |
| Engnet Consultoria (Empresa Júnior) | Fullstack Developer & Data Modeller | 10/2025 – 06/2026 |
| Universidade de Brasília (UnB) | BSc Software Engineering, expected Dec 2027 | 03/2023 – 12/2027 |

Education renders as the final timeline entry rather than as its own section —
one student-length education entry does not earn a heading of its own.

### Projects

Two cards.

**Plataforma de Gestão para Escola de Karatê** — live at gamakarate.com.br, link
opens in a new tab. Public site plus management system for a school with 12
active classes; PostgreSQL schema on Supabase; Supabase Auth isolating the admin
panel; technical SEO. Badges: Next.js, PostgreSQL, Supabase, Vercel.

**Sistema de Gestão para Barbearia** — REST API in Java and Spring Boot for
scheduling, users and financial records; stateless JWT auth with role-based
authorization via Spring Security; Spring Data JPA with the DTO pattern; JUnit
and Mockito coverage; CI/CD to Render. Badges: Java, Spring Boot, PostgreSQL,
JUnit.

**Visuals:** no screenshots exist yet. Each card uses a placeholder — a subtle
emerald-tinted gradient panel with the tech badges over it — structured so a real
screenshot can replace the gradient later without touching the card layout.

### Skills

Four labeled groups of badges, taken verbatim from the résumé:

- **Languages:** Java, Python, Ruby, JavaScript, TypeScript, SQL, HTML, CSS
- **Frameworks:** Spring Boot, Spring Security, Spring Data JPA, NestJS, Next.js,
  React, Express.js, Django
- **Databases:** PostgreSQL, Supabase, MongoDB, TypeORM, JPA/Hibernate
- **Testing, DevOps & AI:** JUnit, Mockito, Pytest, TDD, Docker, Docker Compose,
  Git, GitHub, CI/CD, Vercel, Render, Claude Cowork, Google Apps Script

Languages spoken (Portuguese native, English fluent, Spanish intermediate, French
basic) render as a single line under the groups.

### Contact

Email (`caiomsabino@gmail.com`, `mailto:`), GitHub
(`github.com/caiomsabino`), LinkedIn (`linkedin.com/in/caio-msabino`), CV
download, and location (Brasília, DF). No form, no backend.

**Privacy decision:** the phone number on the résumé is deliberately omitted from
the public page. A phone number on an indexed page is a scraping target; the
résumé PDF still carries it for recruiters who download it.

## Visual design

- Base palette zinc, dark only. `<html className="dark">`, no theme switcher.
- Single accent: **emerald**, set once as `--color-primary: oklch(0.696 0.17 162.48)`
  with `--color-ring` matching, and consumed everywhere through those tokens. Used
  for primary CTAs, links, and the project-card gradient. Nothing else competes
  with it — no second accent, and no raw emerald Tailwind classes bypassing the
  token.
- `--radius: 0.625rem` throughout.
- Comfortable density: `p-6` / `gap-6` / `text-sm` body.
- Content column `max-w-4xl`, centered, with generous vertical section padding.
- Every section opens with a small muted uppercase label in Geist Mono above its
  heading, giving the page a consistent rhythm.
- Surfaces are built from tokens (`bg-background`, `bg-card`, `text-foreground`,
  `text-muted-foreground`, `border-border`) — no ad-hoc hex values.
- Icons at `h-4 w-4` (inline) or `h-5 w-5` (standalone).
- Scroll reveal is CSS-only, and must be wrapped in
  `@media (prefers-reduced-motion: reduce)` so it is disabled for users who ask
  for that.

## Accessibility

- Semantic landmarks: `<header>`, `<main>`, `<section>` with `aria-labelledby`,
  `<footer>`.
- One `<h1>` (the name in the hero); section headings are `<h2>`.
- The language toggle uses `aria-pressed` on its two states.
- All interactive elements reachable by keyboard with a visible focus ring
  (`ring-ring`).
- External links carry `rel="noopener noreferrer"` and an accessible name that
  states the destination.
- Text contrast meets WCAG AA against the zinc background.

## Verification

There is no test framework — for a static content page with no logic beyond a
two-value toggle, unit tests would be ceremony rather than coverage. Correctness
is established by:

1. `npx tsc --noEmit` — clean. This is the real guarantee behind the bilingual
   content, since the shared `SiteContent` type is what prevents translation
   drift.
2. `npm run build` — clean, no warnings.
3. Browser verification on the running dev server, checking:
   - the page at desktop (1440px) and mobile (375px) widths, with no horizontal
     scroll at either;
   - the PT/EN toggle swapping every section, and the choice surviving a reload;
   - the CV downloading;
   - the gamakarate.com.br link opening in a new tab;
   - keyboard tab order through header, CTAs, project links and contact links.

Claims of completion follow the verification, not the other way round.

## Open follow-ups (not blocking)

- Replace project placeholder gradients with real screenshots when available.
- Register a domain and point it at the Vercel deployment.
- Revisit locale routing only if search visibility becomes a goal.
