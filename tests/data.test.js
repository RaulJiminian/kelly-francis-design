import { readFile } from 'node:fs/promises'
import { describe, expect, test } from 'vitest'
import { getProjectBySlug, getVisibleProjects, projects } from '../src/data/projects.js'
import { site } from '../src/data/site.js'

describe('preview content contracts', () => {
  test('the featured project resolves to the same linked record', () => {
    const visible = getVisibleProjects(site.contentMode)
    const featured = visible.find((project) => project.id === site.featuredProjectId)
    expect(featured).toBeDefined()
    expect(getProjectBySlug(featured.slug, site.contentMode)).toEqual(featured)
  })

  test('project ids and slugs are unique', () => {
    expect(new Set(projects.map((project) => project.id)).size).toBe(projects.length)
    expect(new Set(projects.map((project) => project.slug)).size).toBe(projects.length)
  })

  test('the first pass uses placeholders, not client residence photos', async () => {
    const sourceManifest = JSON.parse(await readFile('assets/photo-manifest.json', 'utf8'))
    expect(sourceManifest.photos.length).toBeGreaterThan(0)
    expect(sourceManifest.photos.every((photo) => photo.source === null)).toBe(true)
  })
})
