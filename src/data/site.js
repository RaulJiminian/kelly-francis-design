const requestedMode = import.meta.env?.VITE_CONTENT_MODE

export const site = {
  name: 'Kelly Francis Design',
  ownerName: 'Kelly Francis',
  contentMode: requestedMode === 'publish' ? 'publish' : 'preview',
  featuredProjectId: 'garden-01',
  hero: {
    eyebrow: 'Landscape design',
    title: 'Outdoor spaces, thoughtfully composed.',
    description: 'Explore gardens, outdoor spaces, and the details that bring them to life.',
  },
  workIntro: 'A closer look at the spaces, textures, and transformations.',
  about: {
    heading: 'Meet Kelly.',
    paragraphs: [
      'Kelly Francis Design brings a thoughtful eye to outdoor spaces, with an appreciation for planting, texture, and the way a garden is experienced.',
      'From the first ideas to the details that make a space feel complete, the work begins with understanding how the garden will be used and what makes the setting unique.',
    ],
    imageId: null,
    approved: false,
  },
  contact: {
    eyebrow: "Let's talk",
    heading: "Let's make room for something beautiful.",
    description: 'Tell Kelly a little about your space and what you have in mind.',
    email: null,
    emailVerified: false,
    phone: null,
    instagramUrl: null,
  },
  services: [],
  serviceArea: null,
  canonicalOrigin: null,
  brandCopyApproved: false,
}
