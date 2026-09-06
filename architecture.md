# Technical architecture

## Stack and scope

Use React, React DOM, Vite, and JavaScript/JSX with CSS Modules. Use React Router in declarative mode for client navigation. Choose supported, mutually compatible stable versions during the build and commit the npm lockfile. The router's declarative setup works with a Vite React app; no framework-mode migration is needed. [React Router installation](https://reactrouter.com/start/declarative/installation)

Use local data, regular React state, and small reusable components. No backend, database, authentication, CMS, payment integration, or global state library is required. Build-time photo processing uses Node and Sharp as development tooling. No image-processing code goes into the browser bundle.

These are proposed implementation paths, not files already supplied by this package:

| Path | Responsibility |
| --- | --- |
| `src/main.jsx` | Application bootstrap |
| `src/App.jsx` | Route composition and common layout |
| `src/pages/HomePage.jsx` | Featured project, Selected work, About, Contact |
| `src/pages/ProjectPage.jsx` | Slug-driven project story |
| `src/pages/NotFoundPage.jsx` | Explicit unknown-route state |
| `src/components/SiteHeader.jsx` | Brand and disclosure navigation |
| `src/components/SiteFooter.jsx` | Final brand and approved links |
| `src/components/ResponsiveImage.jsx` | Picture sources, dimensions, loading, failure state |
| `src/components/PhotoPlaceholder.jsx` | Visible draft or image-unavailable region |
| `src/components/ProjectLink.jsx` | Single linked figure with title and action |
| `src/components/BeforeAfter.jsx` | Paired figures and captions |
| `src/components/AboutSection.jsx` | Data-driven biography and optional image |
| `src/components/ContactSection.jsx` | Verified email action or draft unavailable state |
| `src/data/site.js` | Brand copy, optional contacts, mode, featured project id |
| `src/data/projects.js` | Project records matching content.md |
| `src/generated/image-manifest.json` | Derived public photo URLs and intrinsic metadata |
| `src/styles/tokens.css` | Palette, type, spacing, container tokens |
| `src/styles/global.css` | Reset, base elements, focus, and typography |
| `scripts/prepare-images.mjs` | Deterministic image derivative pipeline |
| `scripts/validate-content.mjs` | Draft/publish content and image checks |
| `assets/photos/` | Original client photography, never copied directly to production |
| `assets/photo-manifest.json` | Private build input describing each photo and approval state |
| `public/assets/images/` | Generated web photo derivatives only |
| `public/assets/brand/` | Selected logo/favicons copied from the supplied brand assets |
| `public/assets/fonts/` | Licensed, optimized WOFF2 files and their notices |

Component CSS Modules live beside their components. Do not create many single-line wrappers or a generic design-system package for this small site.

## Routes and navigation

| URL | Behavior |
| --- | --- |
| `/` | Landing page |
| `/#work` | Scroll to Selected work |
| `/#about` | Scroll to About |
| `/#contact` | Scroll to Contact |
| `/work/:slug` | Published project or visible draft project in preview mode |
| Unknown project or route | Helpful not-found page with a home/work link |

Use normal anchors or router links that preserve open-in-new-tab behavior. Do not implement click navigation on a `div`. On deliberate route navigation, update the document title, scroll to the intended position, and move focus to the new main heading without adding it to normal tab order. For homepage section links, wait until the route exists, then focus/scroll to that section. Set `scroll-margin-top` for the actual header height.

Browser Back should return to the previous portfolio scroll position. A deterministic “Back to selected work” link must also work when someone entered the project from a shared URL. Do not override history-pop scroll restoration by always forcing the page to the top.

The mobile navigation is a disclosure, as defined in design.md. Escape returns focus to its trigger. It closes on navigation, and its collapsed links must not remain focusable.

Keep the main route code eager initially unless measurement gives a reason to split it. Avoid a tiny loading screen between a clicked photograph and its project page. The project photos themselves load according to images.md.

## Content and preview behavior

Use an explicit content mode with values `preview` and `publish`, separate from Vite's production/development build flag. A production-optimized build may still be a draft preview. Default to preview until launch content is complete.

- Preview: display draft projects with a small persistent “Draft project” marker and honest photo slots. Add `noindex` metadata. A real missing asset must have a controlled fallback.
- Publish: include only approved records; require a valid approved featured project, approved About content, verified contact, and at least one real after image. Reject placeholder tokens and invalid published image references. Omit optional fields rather than fabricate them.
- The website UI must not expose asset paths, mode settings, approval plumbing, or developer TODOs to visitors. Draft markers communicate the content state, not implementation internals.

Project data resolves images by stable ids from the generated manifest. Missing ids become placeholders in preview; they are build validation failures for published required media. The same selected featured record drives the homepage photograph, caption, link, and preload metadata, preventing mismatched projects.

## Contact

The initial scope is a contact section with a verified `mailto:` link and optional verified `tel:`/social links. Store absent values as null. Show “Contact details will be added soon.” in a draft preview when email is missing. In publish mode, a missing verified inquiry email is a launch blocker.

Use “Email Kelly”, which opens the visitor's email app. Do not say “Message sent” after opening that link. Provide a visible address for copying. A `mailto:` action cannot prove that an email was delivered.

Only implement a form if the user requests one and provides or chooses an actual delivery service. Then handle validation, pending submission, confirmed success, recoverable failure, accessible status announcements, and spam controls appropriate to that service. Never put secret credentials in Vite-exposed variables or browser code. External service setup is outside the default scope.

## Images and static delivery

Use the build pipeline in images.md. Vite copies files in `public/` as static assets, so keep originals outside that folder and reference generated assets using the configured public base path. Standard imported source assets can be processed by Vite; generated public images need the pipeline's own content-hashed filenames. [Vite static assets](https://vite.dev/guide/assets)

Use the same base-path handling for images, router links, and metadata if the eventual host serves the site under a subdirectory. Test this if a non-root path is selected.

## Search, sharing, and hosting

Set a unique title and description on every route. Default home title: “Kelly Francis Design | Landscape Design”. Project title: “{Project title} | Kelly Francis Design”. Populate locality, structured business data, and social links only from verified information. Do not guess a business address.

Client-side head updates help browser navigation but are insufficient to promise working previews in every social crawler. For publish mode, add a small build-time prerender step for `/` and each published project so the initial HTML includes meaningful content, its title/description, canonical URL, and Open Graph fields. Use a compatible Vite/React prerender solution or React's server rendering at build time. Keep JavaScript/JSX and Vite; do not switch to Next.js or TypeScript. This does not require a running application server.

Serve a route-specific share image derived from approved photography. Create sitemap and robots output from the real domain and published records. Keep draft previews `noindex`; do not treat `noindex` as access control for private content.

Once a host is chosen, serve generated route HTML before any SPA fallback. Ensure direct `/work/:slug` visits and refreshes work, unknown URLs produce an appropriate not-found response where supported, and assets never rewrite to HTML. Configure long immutable caching for content-hashed files and revalidation for HTML. Hosting configuration can be prepared without deploying.

## Proposed scripts and evidence

During implementation add and document `dev`, `build`, `preview`, `lint`, `images:prepare`, `content:check`, and `test:smoke`. Make dev/build run the necessary image/content prerequisites, so a clean checkout works. Before claiming these commands pass, actually implement and execute them.

The final build should be reproducible from the documented Node version, lockfile, and supplied source assets. Original photos may be maintained outside public git if required, but the asset acquisition step must then be documented. Do not claim a clean checkout is self-contained when its required private originals are missing.
