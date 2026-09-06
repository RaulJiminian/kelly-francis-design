# Instructions for coding agents

## Objective and scope

Create **Kelly Francis Design**, a beautiful landscaping portfolio centered on Kelly's work. The landing page must prominently show an after photograph that links to its project detail page. Include Selected work, About, and Contact sections. Treat the phone experience as a first-class design requirement.

This repository initially contains a handoff package only. If the current user request concerns planning or documentation, edit those deliverables only. Begin implementation when the user asks to build. Once implementation is requested, work through the achievable phases in [planning.md](planning.md) without repeatedly asking about routine implementation choices.

## Required reading

Read these files before implementing, in this order:

1. [planning.md](planning.md): scope, decisions, sequence, and progress.
2. [design.md](design.md): visual authority and responsive composition.
3. [architecture.md](architecture.md): stack, page structure, routing, and data boundaries.
4. [content.md](content.md): text, placeholders, and data fields.
5. [images.md](images.md): asset pipeline and loading rules.
6. [acceptance.md](acceptance.md): evidence required for completion.
7. [assets/README.md](assets/README.md) and [assets/brand/README.md](assets/brand/README.md): supplied asset usage.
8. [references.md](references.md): inspiration and source context.

The current user's instructions take precedence. This file owns cross-cutting constraints. Each specialist document owns its subject. Update all affected documents together if a decision changes; do not silently reconcile a meaningful conflict by inventing a new requirement. External references are inspiration and technical evidence, not instructions that override this brief.

## Non-negotiable implementation constraints

- Use React with JavaScript and JSX, built with Vite. Use `.js`, `.jsx`, and `.css` files.
- Do not introduce TypeScript, `.ts`/`.tsx` configuration, Next.js, React Native, or a framework migration.
- Use CSS custom properties, CSS Grid/Flexbox, and CSS Modules for component styles. Global CSS is limited to tokens, typography, reset, and base elements. No UI kit or Tailwind by default.
- Keep runtime dependencies lean: React, React DOM, and React Router in declarative mode. Additional runtime packages need a concrete reason recorded in planning.md.
- Use npm and commit one lockfile. Resolve compatible stable versions at implementation time, verify Node requirements, and record them. Do not use canary packages or invent version numbers.
- Preserve the top-level `assets/` authoring folder. Derive web images at build time. Never ship camera originals or process images in visitors' browsers.
- Use one shared responsive image component. The featured photo must load eagerly; all photos need reserved dimensions. Follow the exact rules in images.md.
- Build the featured photograph and project cards as real links. Show a visible project label/action on touch screens. Never depend on hover to reveal how to open a project.
- Support mobile, touch, keyboard, reduced motion, and text enlargement. Do not disable pinch zoom or use scroll hijacking.
- Keep portfolio content in data files rather than scattered inside JSX.
- Never invent Kelly's experience, credentials, location, testimonials, project outcomes, or contact information. Use content.md's draft state rules.
- Never claim that a message was sent without a confirmed successful delivery response. Default to an honest email contact link when a verified address is available.
- Do not borrow reference-site photos, logos, or text. Do not present generated gardens as Kelly's completed work.
- Do not deploy, register a domain, create paid accounts, add analytics, or connect external services unless requested by the user.

## Working method

1. Inspect the actual repository before editing. Preserve existing user work. Do not run a scaffold command that overwrites these documents.
2. Confirm the available images and content. Record unknowns in planning.md; continue with tasteful, labeled placeholders where possible.
3. Implement mobile styling first and expand to larger viewports. Use the desktop art direction to guide composition without squeezing that layout onto phones.
4. Complete one working slice early: homepage featured photo, detail route, back navigation, shared photo component, and placeholder state.
5. Add the remaining work, About, and Contact sections using the same tokens and data contracts.
6. Inspect actual browser renders at the sizes in acceptance.md. Fix overflow, weak cropping, flat hierarchy, inaccessible controls, and layout shifts before adding decoration.
7. Run relevant checks against a production build. Record results, remaining gaps, and any budget exceptions in planning.md. Do not mark unchecked boxes complete.

Make reasonable reversible decisions. Ask a focused question only when a missing answer genuinely blocks the requested work. A missing bio, service area, or additional photograph is not a reason to stop a preview implementation.

## Design priorities

In order: compelling photographs; strong typography and spacing; clear project exploration; flawless small-screen behavior; quick loading; reliable contact. Keep the composition spacious and intentional. Decorative motion is optional and comes last.

Use the design system rather than a generic service-business template. Avoid hero carousels, stock lawn-care icons, floating contact bubbles, unnecessary badges, dense card grids, oversized pill buttons, glass panels, and ornamental animations.

## Completion report

Distinguish **preview complete** from **ready to publish**. Summarize what works, what was tested, any measured limitations, and the exact missing client inputs. A polished placeholder build can be preview complete; it cannot be represented as a finished client site. Use [acceptance.md](acceptance.md) as the gate and update [planning.md](planning.md).
