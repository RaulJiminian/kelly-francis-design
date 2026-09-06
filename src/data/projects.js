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
    intro: 'A backyard composition that connects open lawn, mature canopy, and a raised place to gather.',
    vision: 'The draft direction is to create a clearer relationship between the lawn, existing trees, and elevated dining area while making movement through the yard feel intentional.',
    transformation: 'A renewed lawn anchors the garden. Curved brick paths, low planting beds, simple steps, and pale retaining walls connect distinct outdoor zones without competing with the mature trees.',
    coverImageId: 'garden-01-after-01',
    galleryImageIds: ['garden-01-detail-01', 'garden-01-detail-02'],
    galleryCaptions: {
      'garden-01-detail-01': 'A curved border softens the lawn edge and draws the eye toward the covered deck.',
      'garden-01-detail-02': "Gravel, raised metal planters, and a restrained planting palette shape the garden's quieter edge.",
    },
    comparisonPairs: [
      {
        id: 'garden-01-comparison-01',
        beforeImageIds: ['garden-01-before-01', 'garden-01-before-02', 'garden-01-before-03'],
        afterImageId: 'garden-01-after-01',
        caption: {
          before: [
            'The original backyard had a broad dry lawn, mature canopy, and loosely connected circulation.',
            'A compact side-yard area before planting and circulation were resolved.',
            'A third supplied starting view toward the dining terrace; its project stage needs client confirmation.',
          ],
          after: 'Curved paths connect the open lawn with a shaded dining terrace and layered planting.',
        },
        aligned: false,
      },
    ],
    seoDescription: 'Preview a draft Kelly Francis Design garden story with a renewed lawn, curved paths, and shaded gathering space.',
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
    intro: 'A broad patio recast as a more comfortable outdoor room for dining, cooking, and gathering.',
    vision: 'The draft goal is to bring human scale and clearer purpose to an exposed concrete court, balancing generous circulation with places to cook, dine, and relax.',
    transformation: 'Warm brick paving unifies the courtyard, while an overhead shade sail tempers the open sky. A long outdoor counter, framed planting, and distinct seating areas turn the space into an extension of the home.',
    coverImageId: 'garden-02-after-01',
    galleryImageIds: ['garden-02-detail-01'],
    galleryCaptions: {
      'garden-02-detail-01': 'Brick underfoot and filtered shade give the courtyard a warmer, more settled character.',
    },
    comparisonPairs: [
      {
        id: 'garden-02-comparison-01',
        beforeImageIds: ['garden-02-before-01', 'garden-02-before-02'],
        afterImageId: 'garden-02-after-01',
        caption: {
          before: [
            'The original court offered generous space but little visual structure or shelter.',
            'The reverse angle shows the open edge and mix of storage, seating, and planting before the update.',
          ],
          after: 'A warm paved court, overhead shade, and a working outdoor counter define the finished gathering space.',
        },
        aligned: false,
      },
    ],
    seoDescription: 'Preview a draft Kelly Francis Design courtyard story with brick paving, filtered shade, and outdoor gathering areas.',
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
    intro: 'A layered backyard where stone, shade, and planting create an easy progression between gathering spaces.',
    vision: 'The draft direction is to replace a patchwork of lawn and small platforms with a more generous terrace, clearer connections between levels, and comfortable shade for everyday use.',
    transformation: 'An irregular stone terrace now carries dining and lounge areas through the center of the garden. Shade sails, integrated seating, rounded stonework, and layered planting soften the transitions around it.',
    coverImageId: 'garden-03-after-01',
    galleryImageIds: ['garden-03-detail-01', 'garden-03-detail-02'],
    galleryCaptions: {
      'garden-03-detail-01': 'Rounded stone walls and integrated timber seating make the change in level feel useful and intentional.',
      'garden-03-detail-02': 'Layered planting frames the terrace while leaving generous room for dining and circulation.',
    },
    comparisonPairs: [
      {
        id: 'garden-03-comparison-01',
        beforeImageIds: ['garden-03-before-01', 'garden-03-before-02', 'garden-03-before-03'],
        afterImageId: 'garden-03-after-01',
        caption: {
          before: [
            'The original yard combined a small deck with an open, uneven lawn and disconnected seating.',
            "A wider starting view reveals the yard's separate levels and scattered outdoor functions.",
            'An additional supplied view records a hardscape construction stage; its sequence needs client confirmation.',
          ],
          after: 'A broad stone terrace settles into the garden with shade, seating, and planting at its edges.',
        },
        aligned: false,
      },
    ],
    seoDescription: 'Preview a draft Kelly Francis Design backyard story with a stone terrace, shade, and layered planting.',
  },
]

export const getVisibleProjects = (mode) =>
  projects
    .filter((project) => mode === 'preview' || project.status === 'published')
    .sort((a, b) => a.sortOrder - b.sortOrder)

export const getProjectBySlug = (slug, mode) =>
  getVisibleProjects(mode).find((project) => project.slug === slug)
