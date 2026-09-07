# Content and project data

## Known facts

The practice is branded **Snowbird Landscape**, and the supplied logo includes the descriptor **Landscape + Interiors**. Snowbird's prior public site verifies six project names, one-sentence project descriptions, Eagle Rock, California, the phone number `(424) 750-0230`, and the Instagram account `@snowbird_landscape`.

The client directed this preview to reuse the logo, project names, descriptions, and after photography from that prior site. The client also supplied matching before photography in `assets/updatedBefore/`. No before photograph was supplied for Shady Planters.

The longer Vision, Transformation, detail captions, and About paragraphs are new working copy based only on visible project features and the prior-site descriptions. They require client review before publication. Do not add credentials, testimonials, plant-performance claims, project dates, street locations, services, or an email address without verification.

## Current interface copy

| Location | Text | Status |
| --- | --- | --- |
| Hero eyebrow | Landscape + interiors | Established logo descriptor |
| Hero heading | Living landscapes, thoughtfully composed. | Working brand copy |
| Hero support | Explore six Snowbird projects shaped by planting, material, and the way each outdoor space is lived in. | Working brand copy |
| Work heading | Selected work | Interface label |
| Collage heading | Six gardens, one view. | Interface label |
| About heading | About Snowbird. | Interface label |
| Contact heading | Make room for something beautiful. | Working brand copy |
| Contact action | Call Snowbird | Verified phone action |

## Current projects

| Stable id / slug | Project name | After photos | Before photos |
| --- | --- | ---: | ---: |
| `canyon-retreat` | Canyon Retreat | 3 | 2 |
| `nautical-inspired` | Nautical Inspired | 5 | 3 |
| `bungalow-haven` | Bungalow Haven | 4 | 1 |
| `family-living` | Family Living | 5 | 2 |
| `hillside-textures` | Hillside Textures | 6 | 1 |
| `shady-planters` | Shady Planters | 3 | 0; neutral placeholder |

The first after image is each project's cover. Remaining after images appear under “A closer look.” Before-image arrays drive the accessible thumbnail selector; the first before is displayed initially.

## Site data contract

`src/data/site.js` stores the canonical business name, descriptor, content mode, featured project id, home copy, About copy, verified contact values, and publishing state. Unknown values remain `null` or empty. `VITE_CONTENT_MODE=publish` is separate from Vite's production build mode.

## Project data contract

Each `src/data/projects.js` record includes:

- stable `id`, URL-safe `slug`, title, status, approval state, and sort order;
- optional general location, year, and confirmed services;
- introduction, Vision, Transformation, and SEO copy;
- one `coverImageId`, ordered `galleryImageIds`, and keyed gallery captions;
- `comparisonPairs` with an ordered `beforeImageIds` array, an `afterImageId`, paired captions, and an `aligned` flag.

A missing before image does not invalidate a project. Keep the after story visible and use the deliberate neutral placeholder until a real before is supplied. Before and after views are separately labeled because camera positions may differ.

## Photo and alt-text rules

Source records live in `assets/photo-manifest.json`. Alt text describes only visible, relevant details and does not infer plant species, private locations, or performance outcomes. Linked project thumbnails use empty image alt because the surrounding link already announces the project name; detail-page images retain descriptive alt text.

## Approval checklist

Before publication, confirm every pairing and image order; all new narrative copy; photo rights, credits, and privacy; the About text; the preferred contact method; and whether Shady Planters has a before image. A domain/host and publish-mode metadata remain separate launch inputs.
