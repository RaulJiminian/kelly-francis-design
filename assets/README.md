# Asset handoff

This folder contains Snowbird's supplied brand artwork and four photo working sets:

- `raw/` is the unselected source set and is not referenced by the app or build manifest.
- `starter/` is the retired first-pass preview set and is no longer referenced.
- `updatedBefore/` contains the nine selected before photographs for five projects.
- `photos/<project-slug>/originals/` contains the 26 after photographs from Snowbird's prior website.

Before publication, the client must confirm the new before/after pairings, captions, rights, credits, and that each frame is safe to show. Shady Planters currently has no before photograph and intentionally uses a neutral placeholder.

## Add photos

1. Create a folder such as `assets/photos/canyon-retreat/originals/` for each project.
2. Put full-quality original files there. Name related images clearly, for example `canyon-retreat-before-01.jpg` and `canyon-retreat-after-01.jpg`.
3. Copy [photo-manifest.example.json](photo-manifest.example.json) to `assets/photo-manifest.json` and fill in the source paths, project ids, stages, and approval information.
4. Include the strongest finished view, a before view if available, and a few details. Keep any required photographer credit with the inventory.
5. The implementation agent will generate smaller web copies according to [images.md](../images.md). Do not manually overwrite the originals with compressed versions.

For replacement photography, prefer the `assets/photos/<project-slug>/originals/` structure above. Do not point new records at `raw/` as a shortcut; first curate and privacy-review a working copy.

For About, use `assets/photos/about/originals/` for a portrait or approved garden detail. No portrait is required to begin the preview.

Before and after photographs should show the same space. Tell the developer when the viewpoints differ. The initial paired-image design works without aligned camera positions.

## Included brand assets

See [brand/README.md](brand/README.md). The original supplied logo remains intact, while the transparent web logo, bird favicon, and social image are reproducibly derived by `npm run brand:prepare`.

## Rights and content

Use only photographs the client owns or is authorized to publish. The current after set was explicitly authorized for reuse from Snowbird's prior site. Keep provenance and approval notes with any future additions.
