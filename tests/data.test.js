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

  test('the photo manifest uses only the user-selected starter set', async () => {
    const sourceManifest = JSON.parse(await readFile('assets/photo-manifest.json', 'utf8'))
    expect(sourceManifest.photos).toHaveLength(16)
    expect(sourceManifest.photos.every((photo) => photo.source?.startsWith('assets/starter/'))).toBe(true)
    expect(sourceManifest.photos.every((photo) => !photo.source?.includes('/raw/'))).toBe(true)
  })

  test('every project has a main image, detail image, and multiple before views', () => {
    for (const project of projects) {
      expect(project.coverImageId).toMatch(/after/)
      expect(project.galleryImageIds.length).toBeGreaterThan(0)
      expect(project.comparisonPairs[0].beforeImageIds.length).toBeGreaterThan(1)
    }
  })
})
