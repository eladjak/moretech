# EduTech - Progress

## 2026-06-13 — REBUILT — premium B2B marketing site + live AI demo (LIVE)

**Status:** SHIPPED. Full rebuild of the EduTech/MoreTech site. Live: https://edutech-inky.vercel.app (HTTP 200, GEO 100/100).

**Architecture decision:** consolidated the two separate apps (`website/` + `platform/`) into ONE Next.js 16 app at repo root (`app/`). The old dirs are kept as historical reference (untouched). bun · TS · Tailwind 4 · Framer Motion · Vercel AI SDK.

**What was built (one premium RTL site):**
- Hero (motion + Gemini illustration + 3 real cited stats), Problem (real teacher-shortage data w/ sources), Solution (6 service lines), HowItWorks, ForWhom.
- **Activities Finder** (interactive): 18 ORIGINAL age-banded tech+AI activities, filter by theme/age/format, live count, theme illustrations, "request this" → prefilled contact. `app/data/activities.ts`.
- **Live AI lesson-planner demo** (`#demo` + `/api/generate-lesson`): free-degradation — Tier-0 deterministic Hebrew template ALWAYS works (no key), Tier-1 streams real AI when GEMINI/ANTHROPIC key present. Verified end-to-end via Playwright.
- Trust (real workshop photos + networks table + real source links), Pricing (REAL ranges from business-docs catalog + real discount/surcharge mechanics; network packages marked להמחשה), FAQ, Contact, Footer, /about.

**Brand:** EduTech blue #1B4D8E + green #2E9E3F + lime #A4D233 (from real logo). Heebo, RTL.
**SEO/GEO:** 100/100 (geo-scan). JSON-LD plain-<script> bundle: EducationalOrganization + Service + FAQPage + WebSite. robots/sitemap/llms, OG, canonical, single h1, alt on all imgs.
**Imagery:** hero + 6 theme icons generated via nano-banana-poster (Gemini, free). No placeholders.

**Decisions pending for Elad (see docs/REBUILD-PLAN-2026-06.md §10):** primary brand (EduTech vs MoreTech), domain (edutech.co.il DNS / subdomain / vercel.app), public pricing display, AI key for demo upgrade.

---

## 2026-05-28 — DORMANT — passive status entry

**Last git commit:** 098f84a 2026-04-19 — docs: correct retrospective — V1 was courses/workshops, not consulting + add agent-autonomous path (date: 2026-04-19)
**Status:** dormant — no recent work. PROGRESS.md not updated since the last commit. Reactivate by running a session and updating this file.

---


## Status: BUILDING MVP
## Last Updated: 2026-03-10

## Current State
Transitioned from strategic planning to active development. The EduTech AI platform is now a working Next.js project with a landing page and the first AI tool (lesson planner). All strategy docs, pitch deck, outreach materials, and AI Sandbox application are ready.

## What Was Done

### Phase 1: MoreTech (completed, now sub-brand)
- [x] Market research - teacher shortage, 5 customer segments
- [x] MoreTech website deployed (GitHub Pages)
- [x] 12-slide pitch deck
- [x] 5 email outreach templates
- [x] Competitive analysis (13 competitors)
- [x] Business plan (10 sections)
- [x] GitHub Actions CI/CD

### Phase 2: Strategic Reset (March 2026)
- [x] Read 11 original specification documents
- [x] Identified gap between original vision and what was built
- [x] Ran 6 parallel research agents (market, competitors, AI, global models, financials, assets)
- [x] Deep market research: Israeli EdTech $1.2B, 506 startups
- [x] Created comprehensive STRATEGIC-PLAN-2026.md

### Phase 3: Platform Development (March 2026)
- [x] Set up Next.js 16 + React 19 + TypeScript project (`platform/`)
- [x] Installed Supabase, AI SDK (Anthropic + Google), next-intl, shadcn/ui
- [x] Built Hebrew RTL landing page with:
  - Hero section with value proposition
  - Stats bar (market data)
  - 5 AI tools showcase (1 active, 4 coming soon)
  - Benefits section
  - Beta signup form (50 first teachers)
  - Footer with sub-brands
- [x] Built lesson planner AI tool (`/tools/lesson-planner`):
  - Form: subject, grade level, topic, duration, notes
  - Streaming AI response (Claude or Gemini backend)
  - Copy-to-clipboard functionality
  - Adapted to Israeli curriculum
  - 17 subjects, 7 grade levels
- [x] API route with Hebrew pedagogical system prompt
- [x] TypeScript passes with zero errors
- [x] Build compiles successfully
- [x] Added `edutech.co.il` to master plan domain purchases (high priority)

### Phase 3b: Business Materials (March 2026)
- [x] New EduTech pitch deck - 12 slides, full HTML (`pitch-deck/edutech-pitch-2026.html`)
- [x] MindCET outreach email (`outreach/mindcet-email.md`)
- [x] Beta teacher recruitment strategy (`outreach/beta-recruitment-strategy.md`)
- [x] AI Sandbox application draft (`outreach/ai-sandbox-application.md`)

## Key Strategic Decisions (March 2026)

1. **EduTech = platform company** (not consulting company)
2. **Core product: Hebrew AI tools for teachers** (Israeli MagicSchool)
3. **MoreTech becomes sub-brand** for B2B teacher training services
4. **HiTechKids stays as sub-brand** for kids camps/workshops
5. **PLG model**: Free for individual teachers → school/network contracts
6. **Hybrid delivery**: Platform + workshops = churn under 10%
7. **Target price under NIS 250K** per network deal (avoids tender)
8. **First target networks**: AMIT (63 schools) and ORT (237 schools)
9. **Key partnerships**: MindCET (CET incubator), AI Sandbox (10M NIS)
10. **AI Sandbox**: Pursuing - good fit, low effort, high potential reward

## Financial Projections

| Year | Workshops | Platform | Network | Total |
|------|-----------|----------|---------|-------|
| 1 | 200K | 50K | 0 | 250K NIS |
| 2 | 400K | 300K | 480K | 1.18M NIS |
| 3 | 500K | 900K | 1.2M | 2.6M NIS |
| 4 | 400K | 2.0M | 2.4M | 4.8M NIS |

## Next Steps (Immediate)

1. **Purchase `edutech.co.il` domain** (added to master plan)
2. **Configure Supabase project** - create project, set up auth, connect
3. **Wire up beta signup form** - save to Supabase
4. **Deploy platform to Vercel** - connect to domain when ready
5. **Add API keys** - Anthropic/Google for lesson planner to work
6. **Send MindCET email** - draft is ready
7. **Start beta recruitment** - strategy doc is ready, post in teacher communities
8. **Research AI Sandbox deadlines** - application draft is ready
9. **Build next 2 tools** - test generator, differentiator

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 + React 19 |
| Language | TypeScript |
| UI | shadcn/ui + Tailwind CSS |
| Auth | Supabase Auth (planned) |
| Database | Supabase (planned) |
| AI | Claude API + Gemini API (via Vercel AI SDK) |
| Hosting | Vercel (planned) |
| i18n | next-intl (planned) |

## Files

| File | Description |
|------|-------------|
| `platform/` | **NEW** - EduTech AI platform (Next.js) |
| `platform/src/app/page.tsx` | Landing page (Hebrew RTL) |
| `platform/src/app/tools/lesson-planner/page.tsx` | Lesson planner AI tool |
| `platform/src/app/api/generate-lesson/route.ts` | AI API route (streaming) |
| STRATEGIC-PLAN-2026.md | Full strategic plan |
| `pitch-deck/edutech-pitch-2026.html` | **NEW** - EduTech pitch deck |
| `outreach/mindcet-email.md` | **NEW** - MindCET outreach email |
| `outreach/beta-recruitment-strategy.md` | **NEW** - Beta recruitment plan |
| `outreach/ai-sandbox-application.md` | **NEW** - AI Sandbox application |
| RESEARCH.md | Market research (Hebrew) |
| competitive-analysis.md | 13 competitors + SWOT |
| business-plan/plan.md | Original MoreTech business plan |
| website/ | MoreTech website (stays as sub-page) |
| business-docs/ | Logos, photos, workshop materials |
