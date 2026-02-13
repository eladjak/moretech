# EduTech B2B - Progress

## Status: WEBSITE DEPLOYED
## Last Updated: 2026-02-13

## Current State
Full launch package for MoreTech completed and website deployed to GitHub Pages. All deliverables verified complete. Ready for market entry.

## What Was Done
- [x] Initial market mapping - 5 customer segments identified
- [x] Pain points hypothesis - teacher shortage as primary focus
- [x] Service catalog draft - "MoreTech" package concept
- [x] Skills & tools audit - mapped all relevant skills for B2B workflow
- [x] Value proposition design - 3-tier pricing model
- [x] Sales process outline - 8-week funnel
- [x] Market research deep-dive (see RESEARCH.md)
- [x] Pitch Deck - 12 slides PPTX (see pitch-deck/)
- [x] Professional Website - Next.js 16 + 10 components (see website/)
- [x] Email Outreach Templates - 5 templates + timeline (see outreach/emails.md)
- [x] Competitive Analysis - 13 competitors + SWOT (see competitive-analysis.md)
- [x] Business Plan - 10 sections + financials (see business-plan/plan.md)
- [x] GitHub repo created (github.com/eladjak/moretech)
- [x] Website deployed to GitHub Pages (https://eladjak.github.io/moretech/)
- [x] GitHub Actions CI/CD workflow for automatic deployment on push
- [x] Next.js configured for static export (output: 'export', basePath: '/moretech')

## Key Decisions Made
1. **Target segment**: Private education networks (ORT, AMIT, Atid, Amal, Darca, Mofet)
2. **Primary pain**: Teacher shortage in technology/CS (22% drop)
3. **Solution concept**: "MoreTech" - turn existing teachers into tech teachers
4. **Pricing model**: Per-teacher-per-year (8K-22K range)
5. **Differentiation**: Full package (training + curriculum + mentoring + dashboard)
6. **First target**: AMIT network (already in Program 720, open to innovation)
7. **Strategic approach**: Position as implementation partner of CET/government, not competitor
8. **Defensive moat**: Build internal teaching capacity vs external vendor dependency

## Financial Projections (Conservative/Realistic)
| Year | Revenue | Margin | Teachers | Networks |
|------|---------|--------|----------|----------|
| 1 | 900K NIS | -38% (investment) | ~60 | 2 |
| 2 | 2.7M NIS | 20% | ~180 | 4 |
| 3 | 5.25M NIS | 39% | ~350 | 7 |
- Break-even: Q2 2027
- LTV/CAC ratio: 20x

## Deliverables
| File | Description |
|------|-------------|
| RESEARCH.md | Full market research (Hebrew) |
| pitch-deck/moretech-pitch.pptx | 12-slide pitch deck (555KB) |
| pitch-deck/slides.html | HTML source for pitch deck |
| pitch-deck/presentation-script.md | Talking points per slide |
| website/ | Next.js 16 professional website |
| outreach/emails.md | 5 email templates + outreach timeline |
| competitive-analysis.md | 13 competitors + SWOT + positioning |
| business-plan/plan.md | 10-section business plan + financials |
| .github/workflows/deploy.yml | GitHub Actions CI/CD for Pages deployment |

## Deployment Info
- **GitHub Repo**: https://github.com/eladjak/moretech
- **Live Website**: https://eladjak.github.io/moretech/
- **CI/CD**: GitHub Actions auto-deploys on push to `main`
- **Custom Domain**: When moretech.co.il is ready, update `basePath` in next.config.ts and add CNAME

## Next Steps
1. Review all deliverables and refine messaging
2. ~~Set up domain (moretech.co.il) and deploy website to Vercel~~ -- Deployed to GitHub Pages
3. Purchase moretech.co.il domain and configure custom domain in GitHub Pages
4. Update contact info in Contact.tsx (replace placeholder phone +972-XX-XXX-XXXX)
5. Create WhatsApp outreach messages (whatsapp skill)
6. Identify specific contacts at AMIT and ORT networks
7. Send first outreach emails
8. Schedule pilot workshops
9. Build one-pager PDF (html-to-pdf skill)
10. Set up CRM tracking for outreach

## Smart Tools Workflow
- **Research**: WebSearch + dispatching-parallel-agents
- **Strategy/Plans**: writing-plans + personal-agent
- **Pitch Deck**: presentation-architect -> html-to-pptx (Hebrew RTL)
- **Proposals/PDFs**: html-to-pdf (Hebrew RTL)
- **Outreach emails**: email-writer
- **WhatsApp outreach**: whatsapp skill
- **Blog/Content marketing**: wordpress-publisher
- **Meeting prep**: meeting-scheduler + calendar
- **Voice messages**: speech-generator
- **Pattern**: OBSERVE -> ANALYZE -> LEARN -> APPLY
