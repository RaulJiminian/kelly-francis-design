const requestedMode = import.meta.env?.VITE_CONTENT_MODE

export const site = {
  name: 'Snowbird Landscape',
  descriptor: 'Landscape + Interiors',
  contentMode: requestedMode === 'publish' ? 'publish' : 'preview',
  featuredProjectId: 'hillside-textures',
  hero: {
    eyebrow: 'Landscape + interiors',
    title: 'Living landscapes, thoughtfully composed.',
    description: 'Explore six Snowbird projects shaped by planting, material, and the way each outdoor space is lived in.',
  },
  workIntro: 'Six distinctive gardens, each grounded in its setting and made for everyday life.',
  collageIntro: 'A visual index of Snowbird gardens—six projects, one frame from each story.',
  about: {
    heading: 'About Snowbird.',
    paragraphs: [
      'Snowbird Landscape creates considered outdoor spaces through planting, structure, and a close reading of the site.',
      'From steep hillsides to intimate garden rooms, each project is shaped around how the landscape will be used and how it can feel at home in its surroundings.',
    ],
    imageId: 'hillside-textures-after-02',
    approved: false,
  },
  contact: {
    eyebrow: "Let's talk",
    heading: 'Make room for something beautiful.',
    description: 'Tell Snowbird a little about your landscape and what you have in mind.',
    email: null,
    emailVerified: false,
    phone: '(424) 750-0230',
    phoneHref: 'tel:+14247500230',
    instagramUrl: 'https://www.instagram.com/snowbird_landscape/',
    location: 'Eagle Rock, California',
  },
  services: [],
  serviceArea: null,
  canonicalOrigin: null,
  brandCopyApproved: false,
}
