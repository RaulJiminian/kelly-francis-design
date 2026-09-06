# Kelly Francis Design

Website design and implementation handoff • September 6, 2026

A photography-led landscaping portfolio for Kelly Francis, designed to feel like a beautifully edited garden journal. Large finished-project photographs, warm ivory, expressive serif typography, and forest green establish the visual identity. Visitors can open a featured after photograph, explore a transformation, learn about Kelly, and make contact.

**This package contains specifications and optional brand assets. No website has been built, dependencies installed, or hosting configured.**

## Start here

1. Extract this entire folder into the project directory. Keep the filenames and relative paths intact.
2. Read [AGENTS.md](AGENTS.md). It routes a coding agent to every required specification.
3. Add Kelly's original photos beneath `assets/photos/<project-slug>/originals/`. Follow [assets/README.md](assets/README.md).
4. Fill in the known information in [content.md](content.md). Missing content does not prevent an initial design preview.
5. When ready to build, give the agent the prompt below. [CLAUDE.md](CLAUDE.md) provides the same entry point for Claude Code.

## Suggested build prompt

> Read AGENTS.md and every document in its required reading list. Implement Kelly Francis Design according to planning.md, using React, JavaScript, JSX, and Vite. Do not use TypeScript or Next.js. Follow design.md closely, including its mobile layouts. Use supplied assets, preserve originals, and build the photo pipeline in images.md. Keep missing information visibly marked in the preview. Complete the implementation and verification phases that are possible with the available content, update planning.md with evidence, and report any remaining launch blockers. Do not deploy unless I request it.

This is a prompt to use later. Merely opening this handoff is not an instruction to build.

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

## Brand concept

The supplied vector concept combines an arched garden entrance and a winding path with a serif wordmark. It is a starting point for Kelly's review, not a claim of an approved existing identity. View [brand-board.png](assets/brand/brand-board.png) for the palette and logo presentation. The SVG logo artwork has outlined lettering, so it does not depend on an installed font.

No stock or AI-generated landscaping photographs are included. Real project photography is the main ingredient needed to realize this design. Missing image slots must remain recognizable as placeholders in a preview.

## What Kelly will need to supply

- Finished-project photos, before photos where available, and permission to display them.
- A short bio, services, service area, and any photographer credits.
- A verified inquiry email, optional phone/social links, and a preferred contact workflow.
- Project titles, short descriptions, and an approved featured project.

The initial implementation may proceed with placeholders. Publishing the client site requires replacing or omitting unfinished content and verifying the contact destination.
