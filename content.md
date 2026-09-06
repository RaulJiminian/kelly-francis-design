# Content and project data

## Known facts

The client is Kelly Francis. The site is called Kelly Francis Design. Her work involves landscaping. No verified location, service list, biography, project history, credentials, business contact, or original project photos have been supplied.

Everything below beyond those facts is **suggested copy or a schema**, ready for revision. Do not present draft project descriptions as completed client work. Use warm, concise language and avoid em dashes.

## Starter copy

| Location | Suggested text | Status |
| --- | --- | --- |
| Hero eyebrow | Landscape design | Proposed descriptor |
| Hero heading | Outdoor spaces, thoughtfully composed. | Draft brand copy |
| Hero support | Explore gardens, outdoor spaces, and the details that bring them to life. | Draft brand copy |
| Hero navigation | Explore selected work | Interface label |
| Featured image action | View transformation | Interface label |
| Work heading | Selected work | Interface label |
| Work introduction | A closer look at the spaces, textures, and transformations. | Draft brand copy |
| About heading | Meet Kelly. | Interface heading |
| About paragraph one | Kelly Francis Design brings a thoughtful eye to outdoor spaces, with an appreciation for planting, texture, and the way a garden is experienced. | Draft positioning, needs approval |
| About paragraph two | From the first ideas to the details that make a space feel complete, the work begins with understanding how the garden will be used and what makes the setting unique. | Draft process, needs approval |
| Contact eyebrow | Let's talk | Interface label |
| Contact heading | Let's make room for something beautiful. | Draft brand copy |
| Contact paragraph | Tell Kelly a little about your space and what you have in mind. | Draft invitation |
| Contact action | Email Kelly | Only with a verified email |
| Missing contact | Contact details will be added soon. | Preview state |

Keep these drafts in centralized data. In preview, place a small “Draft copy” note near unapproved About and project narratives. Draft project titles must have a visible “Draft project” marker. The hero brand language may remain clean in the preview, but its approval state still belongs in the content data.

## Project story template

Use up to three draft records initially. Suggested **working titles**, not verified projects:

| Stable id / slug | Working title | Useful photo slots |
| --- | --- | --- |
| `garden-01` / `garden-project-01` | A garden in balance | After overview, before overview, planting detail |
| `garden-02` / `garden-project-02` | An outdoor room | After overview, before overview, seating/material detail |
| `garden-03` / `garden-project-03` | A softer arrival | After overview, before overview, entrance/planting detail |

Replace the title and slug with Kelly's approved project names when available. If changing a slug after public launch, provide a redirect from the old URL.

Each draft story uses a short visible prompt instead of invented accomplishments:

- **Introduction:** “[Add a one-sentence introduction to this project.]”
- **The vision:** “[Describe the client's goals, how the space was used, and the starting conditions.]”
- **The transformation:** “[Describe the changes Kelly made and the planting or material choices, using confirmed details.]”
- **Before caption:** “[Describe what this photograph shows before the work began.]”
- **After caption:** “[Describe what changed in this view and one detail visitors should notice.]”
- **Additional detail:** “[Explain this planting, material, or spatial detail.]”

For the final site, aim for a 15 to 30-word introduction, 40 to 90 words per story subsection, and captions of 10 to 30 words. Shorter is fine. Omit an empty subsection instead of filling it with generic claims.

Do not describe irrigation savings, sustainability benefits, maintenance reductions, accessibility improvements, or return on investment unless Kelly provides an accurate basis for the claim.

## Site data contract

Implement this shape in `src/data/site.js`; this is a specification, not supplied application code.

| Field | Type / example | Rule |
| --- | --- | --- |
| `name` | string / `Kelly Francis Design` | Canonical visible business name |
| `ownerName` | string / `Kelly Francis` | Verified client name |
| `contentMode` | `preview` or `publish` | Separate from Vite build mode |
| `featuredProjectId` | string / `garden-01` | Must resolve to an eligible project |
| `hero` | object with eyebrow, title, description | Draft wording from above |
| `about` | object with heading, paragraphs, imageId, approved | `imageId` may be null |
| `contact` | object with email, emailVerified, phone, instagramUrl | Unknown values null; emailVerified false |
| `services` | array of approved strings | Empty until supplied |
| `serviceArea` | string or null | Do not infer from the site owner's location |
| `canonicalOrigin` | absolute origin or null | Fill only after domain selection |
| `brandCopyApproved` | boolean | False until confirmed |

## Project data contract

Each entry in `src/data/projects.js` follows this shape:

| Field | Type | Rule |
| --- | --- | --- |
| `id` | string | Unique stable internal id |
| `slug` | string | Unique URL-safe slug |
| `title` | string | Approved name or visible draft working title |
| `status` | `draft` or `published` | Drafts appear only in preview |
| `contentApproved` | boolean | Required true for publish eligibility |
| `sortOrder` | integer | Same order in UI and DOM |
| `locationLabel` | string or null | General approved location; no private street address |
| `year` | integer or null | Omit when unknown |
| `services` | string array | Only services actually supplied on this project |
| `intro` | string | Short summary |
| `vision` | string or null | Starting goals and constraints |
| `transformation` | string or null | Confirmed design changes |
| `coverImageId` | string or null | Must resolve to an approved after image for publication |
| `galleryImageIds` | string array | Ordered photograph ids |
| `comparisonPairs` | object array | See comparison rules below |
| `seoDescription` | string or null | Accurate route description |

A comparison record contains `id`, `beforeImageId`, `afterImageId`, `caption`, and `aligned` (default false). Both images must belong to this same project and represent an honest comparison. A missing before image does not invalidate an otherwise complete project: omit its comparison section in publish mode. In preview, the pending slot can remain labeled.

## Photo data and alt text

Source photo records belong in `assets/photo-manifest.json`, following [images.md](images.md) and [assets/photo-manifest.example.json](assets/photo-manifest.example.json). Do not confuse authoring metadata with the public generated manifest.

Write alt text only after viewing the actual photo. Describe visible, relevant details without guessing plant species, outcomes, or private locations. In a before/after pair, include the stage and a concise observable description. Credit photographers in visible captions when required, not in alt text.

A project link must have an accessible project name. If its visible text already fully names the destination, its image may use empty alt to avoid repeating the same label; the full image on the detail page should then have a descriptive alternative. Decorative branding uses empty alt when adjacent text already names the business. The primary linked wordmark must still have an accessible name.

## Approval checklist for Kelly

For each project: confirm title, general location if desired, completion date if desired, what Kelly did, which photo is the lead after image, which before photos match, and whether there are required credits or limits on publication. Ask what the client wanted and what changed, then turn those answers into short factual captions.

For About: ask how Kelly describes her practice, the services she wants to promote, where she works, and what makes her approach distinctive. Do not add a professional designation such as “landscape architect” without confirmation.

For Contact: confirm the business email, optional phone/social URL, and the preferred inquiry method. Do not assume an address or create a fake email on an unregistered domain.
