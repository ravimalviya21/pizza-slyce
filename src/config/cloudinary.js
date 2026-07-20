export const CLOUDINARY_BASE = 'https://res.cloudinary.com/x2xum6xd/image/upload'

export const MODEL_VERSION = 'v1'

export const MODEL_URL = (index) =>
  `${CLOUDINARY_BASE}/${MODEL_VERSION}/pizza_${String(index).padStart(2, '0')}.glb`
