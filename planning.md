# Implementation plan

Status: **Snowbird rebrand preview complete. Not ready to publish.**

The React preview now uses Snowbird Landscape's established logo, six projects, prior-site after photography, the client-supplied updated-before set, verified phone/location/Instagram details, and a dedicated collage route. Shady Planters has no supplied before photograph and intentionally retains a neutral placeholder.

## Current foundation

| Topic | Decision |
| --- | --- |
| Client/site title | Snowbird Landscape |
| Logo descriptor | Landscape + Interiors |
| Stack | React, JavaScript, JSX, Vite, React Router, CSS Modules |
| Main page | Featured after image, six Selected work entries, About, Contact |
| Project exploration | Dedicated `/work/:slug` stories and `/collage` visual index |
| Look | Editorial garden portfolio supporting Snowbird's olive-and-blue identity |
| Mobile | First-class, including 320px width, touch labels, and text enlargement |
| Photography | 26 prior-site after photos plus nine supplied before photos; build-time responsive derivatives |
| Contact | Verified phone, Eagle Rock location, and Instagram; no unverified email |
| Current deliverable | Full local preview, responsive image pipeline, tests, and maintenance notes |

## Completed implementation

- [x] Preserve the React/Vite/CSS Modules architecture and data-driven project model.
- [x] Replace the former placeholder identity and metadata with Snowbird Landscape.
- [x] Preserve the original Snowbird logo and generate a cleaned transparent website logo, bird favicon, and refreshed social card.
- [x] Import all 26 after photographs from Snowbird's prior site into project-oriented authoring folders.
- [x] Map all nine `updatedBefore` photographs to the correct five projects.
- [x] Keep a controlled blank-gray before placeholder for Shady Planters.
- [x] Build responsive AVIF, WebP, and JPEG derivatives with stripped source metadata.
- [x] Replace the three draft project stories with Canyon Retreat, Nautical Inspired, Bungalow Haven, Family Living, Hillside Textures, and Shady Planters.
- [x] Preserve keyboard/touch thumbnail switching for projects with multiple before views.
- [x] Add `/collage` with one linked cover per project, hover/focus titles on pointer devices, and always-visible titles on touch devices.
- [x] Add the collage destination to desktop and mobile navigation.
- [x] Update home, project, not-found, and social metadata naming.
- [x] Add verified call and Instagram actions without claiming an email delivery workflow.
- [x] Update data and browser tests for the six-project structure and missing-before state.

## Verification record

- Runtime: Node 22.19.0 and npm 11.12.1; the package requires Node 22.12 or newer.
- Runtime dependencies remain React, React DOM, and React Router DOM only.
- `npm run brand:prepare`: passed; produced a 482 × 160 transparent logo, 192 × 192 favicon, and 1200 × 630 social preview.
- `npm run images:prepare`: passed; produced 35 generated image records from 35 selected sources.
- `npm run content:check`: passed in preview mode with six draft records.
- `npm run lint`: passed.
- `npm test`: four data-contract tests passed.
- `npm run build`: passed; JavaScript 95.88KB gzip and CSS 4.65KB gzip, both below project budgets.
- Browser smoke suite: 20 checks passed with 4 intentional device-specific skips after correcting the one 320px grid-specificity regression found by the preceding run. Coverage includes the requested desktop collage-hover behavior.
- Final review captures cover home, collage, a complete Canyon Retreat story, the mobile menu, before-image selector, and Shady Planters missing-before state at 390px and/or 1440px.
- `VITE_CONTENT_MODE=publish npm run content:check`: correctly rejects publication until project/About/brand approval, a verified email, and canonical domain are supplied.

## Launch gates

- [ ] Client approves or revises the new Vision, Transformation, detail-caption, About, and hero copy.
- [ ] Client confirms every before/after pairing, image order, right to publish, privacy crop, and photographer credit.
- [ ] Client confirms whether a Shady Planters before photograph exists.
- [ ] Client confirms the preferred inquiry workflow and supplies a verified email if email should be offered.
- [ ] Add the real domain to canonical, Open Graph, robots, and sitemap output.
- [ ] Add per-route initial HTML/prerendering and selected-host direct-route handling.
- [ ] Complete Safari/iOS Safari, Firefox, real-phone, screen-reader, 400% zoom, throttled-network, and Lighthouse checks.
- [ ] User requests deployment.

## Decision log

| Date | Decision | Reason |
| --- | --- | --- |
| 2026-09-06 | Use a complete project page for the featured image | Supports shareable stories, mobile reading, and browser navigation |
| 2026-09-06 | Use separately labeled paired images instead of a drag slider | Supplied camera positions differ; the interface should not imply exact alignment |
| 2026-09-06 | Show multiple before views as thumbnail buttons | Makes every supplied starting view available without crowding the comparison |
| 2026-09-07 | Rebrand the site to Snowbird Landscape using the established logo | Client confirmed the prior site is Snowbird's and requested the actual identity |
| 2026-09-07 | Use all six prior-site projects and their after photography | Client explicitly authorized reuse of the old site content and imagery |
| 2026-09-07 | Use `updatedBefore` for five matched projects and a blank Shady Planters placeholder | Reflects the actual supplied asset set without fabricating a missing comparison |
| 2026-09-07 | Add a dedicated collage route | Provides the requested photography-first project index while retaining accessible touch labels |
