# Implementation plan

Status: **Preview complete with starter photography. Not ready to publish.**

The React website is implemented and locally reviewable. All 16 files in `assets/starter/` are mapped to the three draft projects; `assets/raw/` is not referenced or shipped. Copy, photograph grouping, permissions, privacy, brand direction, About content, and contact details still require Kelly's approval.

## Agreed foundation

| Topic | Decision |
| --- | --- |
| Client and site title | Kelly Francis / Kelly Francis Design |
| Purpose | Showcase landscaping work and generate inquiries |
| Stack | React, JavaScript, JSX, Vite, React Router, CSS Modules |
| Main page | Featured after image, Selected work, About, Contact |
| Project exploration | Dedicated `/work/:slug` page per project |
| Look | Editorial garden portfolio, ivory and forest palette, generous photographs |
| Mobile | First-class, including 320px width, touch access, and text enlargement |
| Content | Local data files; visibly identified drafts until replaced |
| Photography | Preview uses only `assets/starter/`; build-time responsive derivatives |
| Contact default | Verified email link; honest unavailable state until supplied |
| Current deliverable | Full local preview, tests, responsive image pipeline, and maintenance notes |

## Phase 1: Repository and foundations

- [x] Read AGENTS.md and linked documents; inspect repository and source assets.
- [x] Record compatible Node, npm, React, Vite, and router versions below.
- [x] Add the JavaScript Vite scaffold without overwriting the handoff files.
- [x] Add semantic layout, base tokens, CSS Modules, skip link, and route shell.
- [x] Set up local draft data, including `featuredProjectId` and null contact values.
- [x] Add preview/publish content-mode validation. Keep publishing an explicit separate action.

## Phase 2: Photo pipeline and first working slice

- [x] Create the build-time Sharp workflow and generated image manifest.
- [x] Handle null photo sources as controlled preview placeholders.
- [x] Build shared `ResponsiveImage` and `PhotoPlaceholder` components.
- [x] Map all 16 starter files without referencing the raw photo folder.
- [x] Create responsive AVIF, WebP, and JPEG variants with source metadata removed.
- [x] Build the featured project link, all project pages, and working return navigation.
- [x] Add keyboard/touch thumbnail selection for each project's multiple before views.
- [x] Inspect phone and desktop framing with the real starter files.
- [x] Confirm originals, source paths, private manifest fields, source maps, and the brand board are absent from `dist/`.

## Phase 3: Complete visual composition

- [x] Build the header, mobile disclosure navigation, and home hero.
- [x] Build the three-project Selected work composition.
- [x] Build About with visibly labeled draft biography and image placeholder.
- [x] Build Contact with the honest unavailable state for a missing verified email.
- [x] Build project overview, multi-view before/after, closer-look gallery, and next-project navigation.
- [x] Add optional logo assets, self-hosted licensed fonts, favicon, and abstract social preview.
- [x] Inspect the complete homepage and project pages below the fold on phone and desktop.

## Phase 4: Accessibility, reliability, and polish

- [x] Verify route focus, browser Back context, mobile menu controls, and anchor offsets in Chromium.
- [x] Verify comparison labels, image alternatives, unknown slugs, and controlled image fallback code.
- [x] Verify keyboard navigation, reduced-motion CSS, 200% text enlargement, landmark order, and touch-sized controls.
- [x] Check color contrast with axe; no serious or critical violations remain on the homepage or representative project.
- [x] Add visible hover, pressed, and focus states for project and thumbnail controls.
- [ ] Complete a manual screen-reader session and 400% browser-zoom review.
- [ ] Add initial per-route HTML metadata/prerendering for publish mode after a domain and approved route set exist.
- [ ] Configure the chosen host's static route resolution after hosting is selected; do not deploy without a request.

## Phase 5: Production verification and handoff

- [x] Run build, lint, content validation, data tests, and the browser smoke suite.
- [x] Check horizontal overflow at all eight required viewports on home and project routes.
- [x] Measure current JS, CSS, font, and selected hero image bytes.
- [x] Capture homepage, project, mobile-menu, and before-selector review screenshots.
- [x] Document how to add a project, replace a photo, change a focal point, and update contact details.
- [ ] Run final Safari/iOS Safari, Firefox, real-phone, throttled-network, and Lighthouse checks after approved photographs replace the starter set.

## Launch gates

- [ ] Kelly approves the visual direction and final logo/wordmark.
- [ ] Kelly confirms that each starter photograph belongs with its assigned project, or supplies replacements.
- [ ] Every published photo, comparison sequence, caption, credit, privacy crop, and permission is approved.
- [ ] Project names, Vision, Transformation, and Closer Look copy are confirmed as accurate.
- [ ] About text and any published services are approved. Unknown service area remains omitted.
- [ ] A real contact email is supplied, verified, and tested.
- [ ] No draft labels, ambiguous photo stages, or unresolved claims remain publicly visible.
- [ ] The real domain is configured in metadata, canonical URLs, sitemap, and social previews.
- [ ] Initial HTML contains per-route share/search metadata and direct project URLs load on the selected host.
- [ ] Final-image visual and performance checks pass, including a real phone where available.
- [ ] The user requests publishing.

## Client follow-up list

| Input | Current preview treatment | Needed before publishing? |
| --- | --- | --- |
| Project names and stories | Three working titles with draft copy inferred from visible photo content | Yes |
| Starter photo grouping | Used exactly as named by the user | Yes, client confirmation |
| `gardenBalance-before3` stage | Labeled as a supplied starting view with a confirmation note | Yes |
| `softerArrival-before3` stage | Labeled as a construction-stage view with a confirmation note | Yes |
| Replacement hero for Garden in Balance | Current main is only 640×480 and can look soft on large screens | Recommended |
| Photograph permission/privacy | Images remain unapproved and preview-only | Yes |
| Kelly's bio | Draft copy | Yes |
| Portrait or planting detail | Branded placeholder | No; approved garden detail is acceptable |
| Services and service area | Omitted | Only if displayed |
| Email | Honest unavailable notice | Yes |
| Phone/Instagram | Omitted | No |
| Domain/host | Local preview only | Yes for publishing |

## Decision log

| Date | Decision | Reason |
| --- | --- | --- |
| 2026-09-06 | Use a complete project page for the featured image | Supports shareable stories, mobile reading, and browser navigation |
| 2026-09-06 | Use separately labeled paired images instead of a drag slider | Supplied camera positions differ; the interface should not imply exact alignment |
| 2026-09-06 | Process only `assets/starter/`; never reference `assets/raw/` | Honors the user's curated first set and keeps unselected sources out of the build |
| 2026-09-06 | Show multiple before views as thumbnail buttons | Makes every supplied starting view available without crowding the comparison |
| 2026-09-06 | Keep all photo and story content in preview/draft state | Grouping, rights, privacy, sequence, and prose still need Kelly's confirmation |
| 2026-09-06 | Use an email contact link only after verification | Avoids a pretend submission flow or invented address |

## Implementation record

- Runtime: Node 22.19.0 and npm 11.12.1. The package requires Node 22.12 or newer.
- Runtime dependencies: React 19.2.8, React DOM 19.2.8, and React Router DOM 7.18.3.
- Build tooling: Vite 8.2.2, React plugin 6.1.1, Sharp 0.35.4, ESLint 10.10.0, Vitest 5.0.0, Playwright 1.63.0, and axe-playwright 4.13.0.
- Photo output: 16 manifest records, 225 generated responsive files, zero placeholders for project imagery, and no `raw/` references. Generated sample metadata contains no EXIF, ICC, or XMP block.
- Main-image AVIF ranges: Garden in Balance 26,740–51,441 bytes; Outdoor Room 19,644–205,413 bytes; Softer Arrival 20,540–323,654 bytes.
- Initial code budgets: JavaScript 87.29KB gzip, CSS 4.18KB gzip, and 48KB of WOFF2 font files. All remain under the project targets.
- Commands passed: `npm run lint`; `npm test` with 4 data tests; `npm run build`; and `npm run test:smoke` with 15 passed and 3 intentional project-conditional skips.
- Browser coverage: Playwright Chromium mobile and desktop; all required viewport widths from 320 to 1920 had no horizontal overflow. Axe reported no serious or critical violations on the homepage or representative project.
- Visual review: live in-app browser at 390×844 and 1440×900, including project heroes and the before selector. Captures live in `artifacts/review/`.
- Publish guard: `VITE_CONTENT_MODE=publish npm run content:check` correctly fails on the unapproved featured project, missing published project, About/brand approval, verified email, and canonical domain.
- Not yet measured: final-photo Lighthouse/LCP/CLS under throttle and real-user INP. These would be misleading before the final images and host exist.
- Browser gaps: Safari/iOS Safari, Firefox, manual screen reader, 400% browser zoom, and a real phone remain for the launch pass.
