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

  test('the photo manifest uses only the Snowbird after set and updated before set', async () => {
    const sourceManifest = JSON.parse(await readFile('assets/photo-manifest.json', 'utf8'))
    expect(sourceManifest.photos).toHaveLength(35)
    expect(sourceManifest.photos.every((photo) =>
      photo.source?.startsWith('assets/photos/') || photo.source?.startsWith('assets/updatedBefore/'),
    )).toBe(true)
    expect(sourceManifest.photos.every((photo) => !photo.source?.includes('/raw/'))).toBe(true)
    expect(sourceManifest.photos.every((photo) => !photo.source?.includes('/starter/'))).toBe(true)
  })

  test('all six projects have after imagery and only Shady Planters lacks a before', () => {
    expect(projects).toHaveLength(6)
    for (const project of projects) {
      expect(project.coverImageId).toMatch(/after/)
      expect(project.galleryImageIds.length).toBeGreaterThan(0)
      if (project.slug === 'shady-planters') {
        expect(project.comparisonPairs[0].beforeImageIds).toHaveLength(0)
      } else {
        expect(project.comparisonPairs[0].beforeImageIds.length).toBeGreaterThan(0)
      }
    }
  })
})
