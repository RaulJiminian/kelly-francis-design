# Implementation plan

Status: **Handoff prepared. Website implementation has not started.**

## Agreed foundation

| Topic | Decision |
| --- | --- |
| Client and site title | Kelly Francis / Kelly Francis Design |
| Purpose | Showcase landscaping work and generate inquiries |
| Stack | React, JavaScript, JSX, Vite, plain CSS/CSS Modules |
| Main page | Featured after image, Selected work, About, Contact |
| Project exploration | Dedicated `/work/:slug` page per project |
| Look | Editorial garden portfolio, ivory and forest palette, generous photographs |
| Mobile | Essential, including 320px width, touch access, and text enlargement |
| Content | Local data files; explicitly identified drafts until replaced |
| Photography | Local originals in `assets/`; optimized static derivatives for delivery |
| Contact default | Verified email link; no pretend form submission |
| Current deliverable | Instructions, specifications, and optional vector brand assets only |

## Assumptions to use without blocking a preview

- Start with three draft project records so the layout can be reviewed. Show fewer when only one or two projects are available; never clone photographs to inflate the portfolio.
- Keep About and Contact on the landing page. Header links use `/#work`, `/#about`, and `/#contact` so they also work from a detail page.
- Default before/after comparison to two clearly labeled photographs. A draggable comparison is an optional later enhancement for genuinely aligned image pairs.
- Start with a light color scheme and a dark green contact/footer region. No theme switcher.
- Use the provided SVG identity as an optional proposal until Kelly approves or replaces it.
- The website's development preview can show missing content. The public site must omit unfinished projects and unresolved claims.

## Phase 1: Repository and foundations

- [ ] Read AGENTS.md and linked documents; inspect repository and source assets.
- [ ] Record chosen compatible Node, npm, React, Vite, and router versions below.
- [ ] Add the JavaScript Vite scaffold without overwriting the handoff files.
- [ ] Add semantic layout, base tokens, CSS Modules, skip link, and route shell.
- [ ] Set up local draft data, including `featuredProjectId` and null contact values.
- [ ] Add preview/publish content-mode validation. Keep publishing an explicit separate action.

**Exit:** App boots, pages resolve, no TypeScript is present, and draft content renders without missing-file errors.

## Phase 2: Photo pipeline and first working slice

- [ ] Create the build-time image workflow and generated image manifest from images.md.
- [ ] Handle an empty photo folder without a broken build in preview mode.
- [ ] Build the shared ResponsiveImage and PhotoPlaceholder components.
- [ ] Create the featured project link, one full project page, and working return navigation.
- [ ] Test portrait and landscape hero crops at 390px and 1440px.
- [ ] Check that originals and private metadata are absent from build output.

**Exit:** The key journey works by mouse, touch, and keyboard; the photo system serves responsive derivatives and honest placeholders.

## Phase 3: Complete visual composition

- [ ] Build the header, mobile disclosure navigation, and home hero from design.md.
- [ ] Build Selected work with natural empty, one-project, and multi-project states.
- [ ] Build About with draft biography and a portrait-or-planting-detail slot.
- [ ] Build Contact with a verified email destination or honest preview unavailable state.
- [ ] Finish project details with overview, before/after, full image captions, and related navigation.
- [ ] Add optional logo assets and self-hosted licensed fonts, with sensible fallbacks.
- [ ] Inspect the full desktop page and complete mobile page, not just the hero.

**Exit:** All required sections exist and the site follows the intended composition with a consistent palette and hierarchy.

## Phase 4: Accessibility, reliability, and polish

- [ ] Verify route focus, browser back behavior, mobile menu controls, and anchor offsets.
- [ ] Verify comparison labels, photo alternatives, missing images, and unknown slugs.
- [ ] Test reduced motion, keyboard navigation, screen reader landmarks, and zoom/reflow.
- [ ] Polish hover/focus states and only then add the small optional transitions in design.md.
- [ ] Add page titles and descriptions; implement initial HTML metadata and route prerendering for publish mode as described in architecture.md.
- [ ] Configure the chosen host's static route resolution when hosting is selected; do not deploy.

**Exit:** Preview acceptance passes. Record which checks used actual client photos and which used placeholders.

## Phase 5: Production verification and handoff

- [ ] Run build, lint, image validation, and the bounded behavioral checks in acceptance.md.
- [ ] Audit the production preview using the prescribed viewport/network matrix.
- [ ] Measure selected-image bytes, total initial transfer, LCP, CLS, and interaction behavior.
- [ ] Capture review screenshots and a concise verification record.
- [ ] Document how to add a project, replace a photo, change a focal point, and update contact details.
- [ ] Separate completed preview items from the unresolved launch gates below.

**Exit:** A reviewable implementation and clear maintenance instructions are delivered. Hosting or publishing remains a separate user-requested action.

## Launch gates

- [ ] Kelly approves the visual direction and the final logo/wordmark.
- [ ] At least one genuine approved project has an after photograph and accurate title/copy.
- [ ] Every published project, comparison pairing, caption, credit, and permission is confirmed.
- [ ] About text and published services are approved. Unknown service area is omitted.
- [ ] The contact email is verified and the email link opens the correct destination.
- [ ] If a form was separately requested, the real destination and success/failure behavior are tested.
- [ ] No placeholder labels, dummy URLs, draft metadata, or invented business claims remain publicly visible.
- [ ] The real domain is configured in metadata, canonical URLs, sitemap, and social previews.
- [ ] Initial HTML contains per-route share/search metadata, and direct project URLs load on the selected host.
- [ ] Final-image visual and performance checks pass, including a real phone check where available.
- [ ] The user requests publishing.

## Inputs to collect

| Input | Preview treatment | Needed before publishing? |
| --- | --- | --- |
| Best finished-project photo | Labeled featured photo slot | Yes |
| Additional projects | Draft slots | Only if displayed |
| Before photographs | Labeled pending slot | Only if a comparison is displayed |
| Project titles/descriptions | Clearly marked draft text | Yes for displayed projects |
| Kelly's bio | Draft copy | Yes |
| Portrait | Neutral photo slot | No; approved planting detail is acceptable |
| Service area/services | Omit or mark draft | Only if displayed |
| Email | Contact unavailable notice | Yes |
| Phone/Instagram | Omit | No |
| Domain/host | Local preview | Yes for publishing |

## Decision log

| Date | Decision | Reason |
| --- | --- | --- |
| 2026-09-06 | Use a complete project page for the featured image | Supports shareable stories, mobile reading, and browser navigation |
| 2026-09-06 | Keep comparison as paired images initially | Works with ordinary client photos and avoids requiring precise alignment |
| 2026-09-06 | Deliver vector branding but no fabricated project photos | Gives the build a visual identity while preserving portfolio authenticity |
| 2026-09-06 | Use an email contact link initially | Provides a simple real contact path once an address is supplied |

## Implementation record

Fill this in during the build. Do not report planned checks as completed.

- Runtime/dependency versions: not selected.
- Available approved project assets: not supplied.
- Commands run and outcomes: none; documentation-only stage.
- Tested routes/viewports/browsers: none.
- Measured performance and image sizes: not measured.
- Screenshots/review artifacts: brand concept only; no website screenshots.
- Known gaps and next action: supply photographs and request implementation.
