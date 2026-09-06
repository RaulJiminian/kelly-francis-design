# Acceptance and verification

Use this as the implementation gate. Record actual outcomes in [planning.md](planning.md). These checks are not complete at the documentation stage.

## Functional acceptance

- [ ] The hero displays the selected project's after image and opens that same project's URL.
- [ ] Every project link works with pointer, keyboard, touch, and open-in-new-tab.
- [ ] Direct project URLs, refresh, unknown slugs, homepage anchors, and browser Back behave correctly.
- [ ] Project pages show the correct overview, captions, before/after relationship, and image order.
- [ ] About and Contact are reachable from both homepage and project navigation.
- [ ] The verified email action opens the correct email destination and never claims delivery.
- [ ] A missing email produces an honest preview notice and fails the publish content gate.
- [ ] Empty photos, missing before images, absent optional fields, one project, and two projects have deliberate layouts.
- [ ] A failed image preserves its frame and displays a controlled fallback without an endless loader.
- [ ] Published views exclude draft projects and unresolved placeholder content.

## Responsive and visual review

Review the actual rendered page at these CSS viewport sizes. Use ordinary browser zoom initially, then repeat the relevant text/reflow checks.

| Viewport | Review focus |
| --- | --- |
| 320 × 740 | Header fit, long words, controls, no horizontal overflow |
| 390 × 844 | Primary mobile composition, hero crop, captions, touch navigation |
| 430 × 932 | Larger phone layout, image candidate selection |
| 844 × 390 | Landscape phone, header height, menu access |
| 768 × 1024 | Tablet navigation and project grid transition |
| 1024 × 768 | Desktop grid breakpoint, About layout |
| 1440 × 900 | Full editorial composition, photo/text hierarchy |
| 1920 × 1080 | Maximum widths and intentional outer margins |

- [ ] No horizontal page overflow, clipped labels, collision with sticky headers, or overlapping content.
- [ ] At 200% text enlargement, copy and controls wrap without disappearing. At 400% browser zoom from a 1280px-wide desktop viewport, the page reflows to a usable narrow layout.
- [ ] Important image subjects survive mobile crops. No image is stretched or unintentionally low resolution.
- [ ] Captions and actions are visible without hover. Essential text stays off busy mobile photographs.
- [ ] Typography, spacing, borders, and colors consistently match design.md.
- [ ] The entire homepage and a complete project page have been reviewed, including below-fold regions.
- [ ] Inspect at least Chrome and Safari/iOS Safari when available, plus Firefox smoke navigation. Record browser/version and any browser or real-device check that could not be performed.

Capture at least homepage and project screenshots at 390px and 1440px. Add expanded mobile menu and an image-unavailable state. Final photographic approval requires real images; a placeholder screenshot cannot prove final art direction.

## Accessibility

Aim for WCAG 2.2 AA. Use semantic markup, visible keyboard focus, adequate contrast, meaningful alternatives, and labels. This project's 44px touch-target rule is a chosen usability baseline; it is not a statement of the WCAG AA minimum. [WCAG 2.2 quick reference](https://www.w3.org/WAI/WCAG22/quickref/)

- [ ] One H1 per page, sensible heading hierarchy, main/navigation/footer landmarks, working skip link.
- [ ] All controls reachable by Tab; Enter/Space activate according to native element behavior.
- [ ] No keyboard traps; mobile menu Escape handling and hidden-link focus behavior work.
- [ ] Route titles, focus destination, anchor focus, and back-navigation scroll restoration are coherent.
- [ ] Body text meets 4.5:1 contrast; large text and relevant interactive graphics meet applicable 3:1 requirements. Check photo labels against the actual image.
- [ ] Informative images have meaningful alternatives; decorative/redundant images avoid duplicate announcements.
- [ ] Before and after labels are explicit. Comparison operation never depends on color or dragging alone.
- [ ] Reduced-motion preference disables optional transforms and smooth scrolling.
- [ ] Pinch zoom is available, and form fields, if separately requested, have real labels and accessible errors.
- [ ] Run an automated accessibility scan and manually inspect a screen reader's navigation and project reading order. Do not claim automated results alone prove conformance.

## Image and performance verification

Use a production build served locally or in a requested preview environment. Test a cold cache, a documented mobile network/CPU throttle, and the actual DPR. Do not use the Vite development server to claim final performance.

- [ ] Responsive `currentSrc` values match rendered size, DPR, format, and crop.
- [ ] Exactly one hero crop/format is downloaded for the active viewport unless a documented fallback requires more.
- [ ] Hero is not lazy loaded. Below-fold photos use native lazy loading. No hidden gallery is fetched eagerly.
- [ ] Dimension reservations prevent layout movement as photos/fonts load.
- [ ] JPEG fallback and failed-photo behavior both work.
- [ ] Build output contains no camera originals, GPS metadata, private inventory notes, or presentation-board files.
- [ ] Actual selected-image sizes and initial JS/CSS/font transfers meet images.md's budgets or have a documented visual-quality exception.
- [ ] Run three mobile Lighthouse navigation audits for the home and a representative project; record median performance score, LCP, CLS, settings, and initial bytes.
- [ ] Aim for mobile Lighthouse performance at least 90, with lab LCP at most 2.5s and CLS at most 0.1 under recorded conditions. A score alone is not acceptance.
- [ ] Exercise menu, route navigation, and optional comparisons on a throttled phone. Record long-task or delayed-input issues; do not label this a field INP pass.

These budgets and scores are project targets. They are not guaranteed until measured with the actual assets. Real-user Core Web Vitals require sufficient field data after launch.

## Bounded automated checks

Add only tests that cover meaningful behavior: selected hero-to-project mapping, direct/unknown routes, keyboard menu behavior, publish rejection of invalid required content, valid image output references, and missing-image fallback. A small browser smoke suite is sufficient. No snapshot of every decorative element or test that merely repeats a constant.

Run build, lint, content validation, image validation, and that smoke suite. Report exact commands and failures. If a testing tool or browser is unavailable, state the gap rather than invent a passing result.

## Two completion levels

**Preview complete:** required pages and interactions work, the design has been visually checked, responsive/accessibility checks pass for available content, and every missing client input is recorded.

**Ready to publish:** preview complete plus all launch gates in planning.md, actual client-photo QA, real contact verification, per-route initial HTML metadata, and hosting URL checks. Publishing itself still requires the user's request.
