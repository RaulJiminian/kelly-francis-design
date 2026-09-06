# Visual design specification

## Creative direction: A garden, thoughtfully composed

Make the site feel like a contemporary landscape designer's portfolio in a beautifully produced interiors magazine. The photography carries richness and color. Typography, space, and a few precise lines create the structure around it.

The memorable moments are a large finished garden at the top of the homepage, a restrained oversized headline, an asymmetric sequence of project images, and a dark forest-green closing invitation. Warmth comes from ivory and natural photography. Confidence comes from clear alignment and generous space.

This is an original proposed direction. The reference websites inform principles and information hierarchy; their exact visual identities are not reproduced. See [references.md](references.md).

## Palette

Use these semantic CSS variables as the starting tokens. Do not invent extra accent colors per component.

| Token | Value | Role |
| --- | --- | --- |
| `--color-paper` | `#F5F2EA` | Main page background |
| `--color-surface` | `#EAE5DA` | Photo placeholder fill and quiet inset regions |
| `--color-forest` | `#203D32` | Brand, primary buttons, contact/footer background |
| `--color-forest-hover` | `#152C23` | Primary hover/active treatment |
| `--color-ink` | `#252B25` | Headings and body copy on light surfaces |
| `--color-muted` | `#5F685C` | Supporting text on paper |
| `--color-olive` | `#758166` | Decorative small shapes; not small body text |
| `--color-clay` | `#AA6F50` | Rare decorative accent, brand-board accent |
| `--color-line` | `#D4D6C9` | Decorative dividers; not an input boundary |
| `--color-control-border` | `#737B6B` | Visible control boundaries on paper |
| `--color-focus` | `#203D32` | 3px outline on light backgrounds |
| `--color-error` | `#9B3328` | Error text paired with an icon or wording |

On forest surfaces use paper text and paper focus outlines. Do not use muted green body text there. Measure actual text and interactive contrast in the browser. A decorative divider does not satisfy a control's contrast requirement.

No gradients as the brand treatment. A localized dark photo scrim is allowed only to preserve contrast for desktop hero labels. No decorative textures that compete with foliage detail.

## Typography

Preferred website pairing: **Cormorant Garamond 500** for display headings and **Manrope 400/600** for body/navigation. Obtain properly licensed WOFF2 files during implementation, self-host them, and retain license notices. Fonts are not included in this package. If retrieval is unavailable, use `Georgia, serif` and `system-ui, sans-serif` and document the substitution.

Use the outlined SVG wordmark independently of the heading font. The wordmark's fixed letterforms are part of the proposed identity.

| Role | CSS-size target | Line height | Treatment |
| --- | --- | --- | --- |
| Home H1 | `clamp(2.75rem, 1.15rem + 4.2vw, 5.5rem)` | 0.98 to 1.06 | Serif, weight 500, tracking -0.025em |
| Section H2 | `clamp(2.25rem, 1.4rem + 2.5vw, 4.25rem)` | 1.06 | Serif, weight 500 |
| Project title | `clamp(1.75rem, 1.3rem + 1.1vw, 2.75rem)` | 1.12 | Serif, weight 500 |
| Body | `clamp(1rem, 0.96rem + 0.2vw, 1.125rem)` | 1.65 | Sans, weight 400 |
| Navigation/action | `0.9375rem` | 1.4 | Sans, weight 600 |
| Eyebrow/caption | `0.8125rem` to `0.875rem` | 1.5 | Sans; uppercase only for short eyebrows |

Use at most 0.14em tracking for short uppercase labels. Keep paragraph measures around 55 to 65 characters. Avoid uppercase sentences, ultra-light body text, artificial letter spacing in paragraphs, and fixed-height text boxes. Fluid values must retain rem scaling and work at 200% text size. Use natural wrapping; any editorial line break must be conditional on adequate width.

## Layout tokens

- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px, expressed in rem.
- Content width: maximum 1440px, centered. Main text regions may be narrower.
- Horizontal gutters: 20px under 640px, 32px from 640px, 48px from 1024px, 64px from 1440px.
- Section gaps: 64px on phones, 96px on tablets, 128px on wide screens.
- Desktop editorial grid: 12 columns with 24px gaps. Mobile uses a natural single column.
- Image corners: 0px, with 2px allowed for minor rendering cleanup. No rounded photo cards.
- Control corners: 2px. Primary buttons at least 48px high, with 20 to 24px horizontal padding.
- Borders: 1px. Shadows: none for editorial blocks; use only if a real overlay needs separation.

## Homepage composition

### 1. Header

Opaque paper background. Wordmark on the left; Selected work, About, and Contact on the right. Desktop header target 88px high, mobile target 72px; allow growth if fonts or zoom require it. Sticky positioning is acceptable, but the header must never consume excessive screen space or cover focused content.

At widths under 768px, use a visible “Menu” disclosure button with an optional small line icon. The expanded navigation occupies a paper panel in document flow directly below the header. It is not a modal: no focus trap, no background inert state. Manage `aria-expanded`, `aria-controls`, Escape-to-close, and close on route/anchor selection. Keep all targets at least 44 by 44 CSS pixels.

Wordmark width: approximately 240 to 260px desktop using the full logo, and 175 to 185px mobile using `kfd-logo-compact.svg`. The compact variant omits the emblem and gives the DESIGN line more room. At 320px, fit within the available header space without collision with the Menu target. Use responsive sources or equivalent CSS to select the appropriate logo; avoid duplicate accessible business names. A wordmark link always has the accessible name “Kelly Francis Design, home.”

### 2. Hero introduction and featured after photograph

Desktop introduction: a short eyebrow “LANDSCAPE DESIGN”, followed by “Outdoor spaces, thoughtfully composed.” in a broad left column. A short supporting sentence and “Explore selected work” anchor occupy the narrower right column, aligned toward the baseline. Allow 32 to 48px of space before the image.

Place one large finished-project photo underneath, nearly spanning the content width. Use a roughly 16:9 desktop frame, with an optional 16:10 frame if the photo needs more height. This is the strongest genuine after image Kelly supplies. Do not auto-cycle it.

The entire image and its caption form one real project link. Desktop caption may sit over the lower edge only when a tested scrim makes it clearly legible. Include “Featured project”, the project title, and “View transformation” with a small arrow. Maintain an obvious focus outline around the link. Do not nest another button/link inside it.

On phones: eyebrow, headline, short supporting text, photograph, then caption on solid paper. Use a 4:5 image crop only when the garden composition survives it. If it does not, use a 4:3 frame or an explicitly supplied portrait image. Keep the photograph visible within roughly the first 850px of a 390px-wide page under normal text settings. Do not force the whole hero into `100vh`; larger text may legitimately make it taller.

Hero image priority and art direction are governed by images.md. One accessible responsive picture must serve both layouts; do not mount separate hidden desktop/mobile images.

### 3. Selected work

Section heading “Selected work” and one short introduction. Use the same project order in the DOM and on screen.

For three or more projects on desktop, use an editorial rhythm: the first image spans 7 of 12 columns in landscape, the second spans 5 columns with a 4:5 portrait frame and a modest 64px downward offset, and a third image spans 8 columns on the next row. Reset the pattern thoughtfully for later projects. Use regular CSS Grid, not CSS columns or a masonry library. Avoid large offsets that leave artificial holes.

Each entry is a borderless figure-style link: image, title, optional verified locality, and the visible text “View project”. No surrounding card fill or shadows. Use one anchor per entry and no duplicated tab stops for the same destination.

Below 1024px, remove decorative offsets. At 640 to 1023px use two equal columns when there is room. Under 640px use one column, 4:3 photographs, and 40 to 48px between entries. If a project needs a portrait image, let it keep a deliberate 4:5 ratio; never distort it.

With one project, show one generous entry. With two, show two balanced entries. In preview mode draft slots are allowed. In publish mode omit unfinished records. Do not repeat a project as padding just to complete the layout pattern.

### 4. About

A quiet two-column block: left image at approximately 5/12 width, right heading and two short paragraphs at 6/12 width with a column of breathing room. Heading: “Meet Kelly.” A portrait is preferred; a genuine approved garden detail is an equally valid fallback. Never synthesize Kelly's likeness.

On mobile, show heading and copy first, followed by the image. Establish this reading order in the DOM; use desktop grid placement to align the visual columns. Keep draft indicators visible in previews. Any optional services line must use approved service names.

### 5. Contact and footer

Finish with a full-width forest background. Within the shared container: a small “LET'S TALK” eyebrow, large paper-colored heading “Let's make room for something beautiful.”, a brief invitation, and a prominent “Email Kelly” action when the address is verified. An optional plain-text email beneath the action may aid copying.

On mobile, stack everything, use 56 to 64px vertical padding, and keep the action inside the page gutters. Long email addresses must wrap without horizontal overflow. Do not show a working-looking button without a destination.

Footer contains the wordmark or brand name, current copyright year, and only verified optional links. No newsletter, chat widget, badges, social feed embed, or invented awards.

## Project detail composition

1. Header and an explicit “Back to selected work” link.
2. Project H1, optional approved locality/year, and a one-sentence introduction.
3. Large after image, natural landscape ratio where possible.
4. Short overview under “The vision” and “The transformation”. Omit empty production sections.
5. “Before & after” paired image section with persistent labels and a short factual caption for each photograph.
6. Additional image figures with captions. Use a vertical sequence with selective full-width images and occasional paired details on larger screens.
7. Next project link if another published project exists, plus an inquiry anchor.

On phones, the before and after images stack in that order with equal available widths. On desktop, show them side by side. Display each image in its natural ratio when viewpoints differ. Never stretch, deceptively align, recolor, or alter images to exaggerate a result.

An optional split comparison may be added later only for matching viewpoints and explicitly aligned crops. It must retain a separate “View both photos” presentation and a labeled native range input operable with keyboard and touch. It is not required for the initial build.

## Interaction and state rules

| Element | Default | Hover/focus | Touch, loading, or unavailable |
| --- | --- | --- | --- |
| Photo project link | Caption/action visible | Image scale no more than 1.025 on fine pointers; visible outline on focus | No hover prerequisite; preserve reserved frame during load |
| Text link | Visible underline or unmistakable link styling | Slight underline offset/color change | 44px target for navigation/actions |
| Primary contact action | Forest on paper or paper on forest | Darker forest or subtle paper shift; focus outline | If contact unknown, replace action with explanatory text |
| Photo placeholder | Surface fill, thin border, “After photo to be added” | No animated shimmer | Keep real section proportions; never a broken image icon |
| Missing project | Helpful unavailable heading | Return link has normal focus state | Do not redirect silently to an unrelated project |
| Menu | Clear text label | Focus outline | Show/hide controlled navigation, Escape closes |

Use 160 to 220ms transitions for color/opacity and up to 300ms for image scale. Avoid animated page entrances as a prerequisite to visibility. If adding a small section reveal, content must be visible by default and fully visible without animation support. Disable nonessential transforms and smooth scrolling for `prefers-reduced-motion: reduce`.

## Visual approval standard

At 390px and 1440px, the work should feel recognizably part of the same identity. Text must be readable, the featured image immediately meaningful, links obvious, and each section distinctly composed. Do a final review with real photographs because neutral placeholders cannot prove the final crop, palette balance, or photographic impact.
