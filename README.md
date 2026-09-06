# Kelly Francis Design

Working website preview • September 6, 2026

A photography-led landscaping portfolio for Kelly Francis, designed to feel like a beautifully edited garden journal. Large finished-project photographs, warm ivory, expressive serif typography, and forest green establish the visual identity. Visitors can open a featured after photograph, explore a transformation, learn about Kelly, and make contact.

**A complete React preview is implemented.** It uses the user-curated photographs in `assets/starter/`; `assets/raw/` remains unreferenced. Every project title and narrative is still visibly marked as draft, and the starter images remain preview-only until Kelly confirms their accuracy, privacy, rights, and captions.

## Start here

1. Use Node 22.12 or newer and run `npm install`.
2. Run `npm run dev`, then open the local URL Vite prints.
3. Run `npm run build` for a production preview. The build validates content and prepares responsive photo derivatives first.
4. Run `npm run test:smoke` for the bounded mobile/desktop browser checks.
5. Follow [MAINTENANCE.md](MAINTENANCE.md) when approved copy, contact details, or replacement photos arrive.

## Available commands

```sh
npm run dev
npm run lint
npm test
npm run build
npm run test:smoke
npm run review:capture
```

`review:capture` writes the review set to `artifacts/review/`.

## Package map

| File | Purpose |
| --- | --- |
| [AGENTS.md](AGENTS.md) | Mandatory constraints, reading order, agent workflow, definition of done |
| [CLAUDE.md](CLAUDE.md) | Thin entry point pointing Claude Code to the same instructions |
| [planning.md](planning.md) | Phased implementation checklist, decisions, dependencies, launch gates |
| [design.md](design.md) | Visual direction, exact tokens, page composition, responsive layouts, interaction states |
| [architecture.md](architecture.md) | React structure, URLs, component responsibilities, contact behavior, metadata |
| [content.md](content.md) | Starter copy, project data contract, content collection checklist |
| [images.md](images.md) | Asset folders, responsive derivatives, loading priorities, byte budgets |
| [acceptance.md](acceptance.md) | Functional, mobile, accessibility, visual, and performance checks |
| [references.md](references.md) | Reviewed inspiration, technical sources, and how each informed the brief |
| [assets/README.md](assets/README.md) | Where to place client photos and how to label them |
| [assets/brand/README.md](assets/brand/README.md) | Optional logo concept, variants, sizing, provenance |
| [MAINTENANCE.md](MAINTENANCE.md) | How to update projects, images, focal points, copy, and contact details |

## Brand concept

The supplied vector concept combines an arched garden entrance and a winding path with a serif wordmark. It is a starting point for Kelly's review, not a claim of an approved existing identity. View [brand-board.png](assets/brand/brand-board.png) for the palette and logo presentation. The SVG logo artwork has outlined lettering, so it does not depend on an installed font.

No stock or AI-generated landscaping photographs are used. The social image is original abstract brand artwork, not a representation of Kelly's work. Website project imagery comes only from `assets/starter/` and is processed into metadata-free responsive derivatives at build time.

## What Kelly will need to supply

- Finished-project photos, before photos where available, and permission to display them.
- A short bio, services, service area, and any photographer credits.
- A verified inquiry email, optional phone/social links, and a preferred contact workflow.
- Project titles, short descriptions, and an approved featured project.

The current implementation is suitable for local review. Publishing requires Kelly to approve or replace each starter photograph, confirm every project story, approve the identity and About copy, and provide a verified contact destination.
