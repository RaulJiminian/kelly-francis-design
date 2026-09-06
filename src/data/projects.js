const storyPrompts = {
  intro: '[Add a one-sentence introduction to this project.]',
  vision: "[Describe the client's goals, how the space was used, and the starting conditions.]",
  transformation: '[Describe the changes Kelly made and the planting or material choices, using confirmed details.]',
  before: '[Describe what this photograph shows before the work began.]',
  after: '[Describe what changed in this view and one detail visitors should notice.]',
  detail: '[Explain this planting, material, or spatial detail.]',
}

export const projects = [
  {
    id: 'garden-01',
    slug: 'garden-project-01',
    title: 'A garden in balance',
    status: 'draft',
    contentApproved: false,
    sortOrder: 1,
    locationLabel: null,
    year: null,
    services: [],
    intro: storyPrompts.intro,
    vision: storyPrompts.vision,
    transformation: storyPrompts.transformation,
    coverImageId: 'garden-01-after-01',
    galleryImageIds: ['garden-01-detail-01'],
    comparisonPairs: [
      {
        id: 'garden-01-comparison-01',
        beforeImageId: 'garden-01-before-01',
        afterImageId: 'garden-01-after-01',
        caption: { before: storyPrompts.before, after: storyPrompts.after },
        aligned: false,
      },
    ],
    detailCaption: storyPrompts.detail,
    seoDescription: 'A draft project story for Kelly Francis Design.',
  },
  {
    id: 'garden-02',
    slug: 'garden-project-02',
    title: 'An outdoor room',
    status: 'draft',
    contentApproved: false,
    sortOrder: 2,
    locationLabel: null,
    year: null,
    services: [],
    intro: storyPrompts.intro,
    vision: storyPrompts.vision,
    transformation: storyPrompts.transformation,
    coverImageId: 'garden-02-after-01',
    galleryImageIds: ['garden-02-detail-01'],
    comparisonPairs: [
      {
        id: 'garden-02-comparison-01',
        beforeImageId: 'garden-02-before-01',
        afterImageId: 'garden-02-after-01',
        caption: { before: storyPrompts.before, after: storyPrompts.after },
        aligned: false,
      },
    ],
    detailCaption: storyPrompts.detail,
    seoDescription: 'A draft project story for Kelly Francis Design.',
  },
  {
    id: 'garden-03',
    slug: 'garden-project-03',
    title: 'A softer arrival',
    status: 'draft',
    contentApproved: false,
    sortOrder: 3,
    locationLabel: null,
    year: null,
    services: [],
    intro: storyPrompts.intro,
    vision: storyPrompts.vision,
    transformation: storyPrompts.transformation,
    coverImageId: 'garden-03-after-01',
    galleryImageIds: ['garden-03-detail-01'],
    comparisonPairs: [
      {
        id: 'garden-03-comparison-01',
        beforeImageId: 'garden-03-before-01',
        afterImageId: 'garden-03-after-01',
        caption: { before: storyPrompts.before, after: storyPrompts.after },
        aligned: false,
      },
    ],
    detailCaption: storyPrompts.detail,
    seoDescription: 'A draft project story for Kelly Francis Design.',
  },
]

export const getVisibleProjects = (mode) =>
  projects
    .filter((project) => mode === 'preview' || project.status === 'published')
    .sort((a, b) => a.sortOrder - b.sortOrder)

export const getProjectBySlug = (slug, mode) =>
  getVisibleProjects(mode).find((project) => project.slug === slug)
