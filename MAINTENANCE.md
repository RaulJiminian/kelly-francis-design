# Maintaining Kelly Francis Design

The site is data-driven. Project copy belongs in `src/data/projects.js`, site-wide copy and contact details belong in `src/data/site.js`, and photo source records belong in `assets/photo-manifest.json`. Keep camera originals outside `public/`; only generated web derivatives may be shipped.

## Add or update a project

1. Add or revise one record in `src/data/projects.js`. Keep `id` stable and use a lowercase, URL-safe `slug`.
2. Use only confirmed facts. Leave unknown optional values `null` or empty, and keep the record `draft` until its copy is approved.
3. Add the project photo records described below and reference their stable ids from `coverImageId`, `galleryImageIds`, and `comparisonPairs`.
4. Set `featuredProjectId` in `src/data/site.js` if this should be the homepage feature.
5. Run `npm test`, `npm run build`, and `npm run test:smoke`.

Changing a public slug requires a redirect from the old URL once hosting is selected. Do not duplicate photographs or claims merely to fill a layout.

## Add or replace a photograph

1. Confirm Kelly has permission to publish it and that the frame does not expose a private address, house number, license plate, face, or another identifying detail without consent.
2. Put an approved working source beneath `assets/photos/<project-slug>/originals/`. Preserve the original separately if this copy was privacy-cropped or retouched.
3. Update the matching entry in `assets/photo-manifest.json`: set `source`, accurate `alt` and `caption`, the approval flag, any credit, and a focal point from 0 to 1 on each axis.
4. Run `npm run images:prepare`. This creates content-hashed AVIF, WebP, and JPEG derivatives beneath `public/assets/images/` and updates `src/generated/image-manifest.json`.
5. Inspect the result on the homepage and project page at phone and desktop sizes. Before/after photographs must honestly show the same space and remain explicitly labeled.

Never copy `assets/raw/`, the brand board, private approval notes, or camera originals into `public/`.

## Change a focal point or crop

Update `focalPoint` or a named recipe in the photo's `crops` object in `assets/photo-manifest.json`, then rerun `npm run images:prepare`. Values use normalized coordinates: `{ "x": 0, "y": 0 }` is top-left and `{ "x": 1, "y": 1 }` is bottom-right. Recheck all responsive sizes because a good desktop crop may not work on a narrow phone.

## Approve copy and contact details

Revise the draft narratives in `src/data/projects.js`, then set `contentApproved: true` only after Kelly confirms them. Update About and contact values in `src/data/site.js`; never invent services, location, credentials, or project outcomes. A contact email needs both a real address and `emailVerified: true`.

The site defaults to `preview`. Before setting `VITE_CONTENT_MODE=publish`, complete every launch gate in `planning.md`, set the real canonical origin, add initial per-route HTML metadata/prerendering, and configure the selected host. A publish-mode build is intentionally rejected while required approvals, contact information, or featured photography are missing.
