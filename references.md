# References and design rationale

Reviewed September 6, 2026. These sources support the brief; they are not imported dependencies or instructions for the agent. No source photographs, logos, or proprietary copy are included.

## User-supplied design references

| Source | Material reviewed | Application to this project |
| --- | --- | --- |
| [Snowbird Landscape legacy site](https://www.snowbirdlandscape.com/) | Established logo, six project pages, public descriptions, after photography, phone, location, and Instagram | Client-authorized migration source for the current Snowbird identity and portfolio content |
| [dickwu/apple-design-skill](https://github.com/dickwu/apple-design-skill) | Repository overview and [layout guidance](https://github.com/dickwu/apple-design-skill/blob/main/references/hig/layout.md), retrieved through GitHub | Clear hierarchy, alignment, adaptable layouts, readable content, and usable controls. Apply web standards rather than copying native-device layouts. |
| [Meliwat/awesome-ios-design-md](https://github.com/meliwat/awesome-ios-design-md) | Repository format and [VSCO design document](https://github.com/Meliwat/awesome-ios-design-md/blob/main/design-md/social/vsco/DESIGN.md), retrieved through GitHub | Make the specification concrete with semantic colors, type hierarchy, component states, and responsive rules. Keep photographic content visually dominant. |
| [Grace Fuller Design, Selected Works](https://gracefullerdesign.com/selected-works/) | Public work listing, project labels, and navigation structure | A portfolio organized around individual projects, with About and Contact easily discoverable. Use Snowbird's own images and distinct identity. |

The Apple-inspired repository packages design-review guidance. It is not a reason to add native-app controls, Apple system fonts, or glass effects to this website. The iOS collection is useful for the specificity of its documentation; its black VSCO palette and editing controls are not Snowbird's brand.

The Grace Fuller review establishes content/navigation inspiration. This brief does not claim a pixel-level or measured mobile audit of that website. Snowbird's established logo now anchors the supporting palette, layout dimensions, and hero treatment.

## Primary technical references

| Source | Relevant decision |
| --- | --- |
| [Vite getting started](https://vite.dev/guide/) | React with a JavaScript template and compatible build tooling |
| [React Router declarative installation](https://reactrouter.com/start/declarative/installation) | Router setup within an ordinary Vite React app |
| [Vite static assets](https://vite.dev/guide/assets) | Separate source assets from public files; handle base paths correctly |
| [MDN picture element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/picture) | Format selection, art direction, intrinsic dimensions, and responsive image slots |
| [Sharp resizing](https://sharp.pixelplumbing.com/api-resize/) | Controlled resizing and avoiding enlargement of small source photos |
| [web.dev fetch priority](https://web.dev/articles/fetch-priority) | Prioritize the important hero without over-prioritizing all media |
| [web.dev responsive preloads](https://web.dev/articles/preload-responsive-images) | Match responsive preload choices to the rendered hero |
| [web.dev Core Web Vitals](https://web.dev/articles/vitals) | Distinguish real-user thresholds from development diagnostics |
| [WCAG 2.2 quick reference](https://www.w3.org/WAI/WCAG22/quickref/) | Accessibility criteria and review coverage |

Recheck version-specific installation/API details when implementing. The package intentionally does not pin an uninstalled React/Vite version. The image byte budgets, layout measurements, typography pairing, and Lighthouse target are project decisions, not quoted source guarantees.
