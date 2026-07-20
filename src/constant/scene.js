export const HERO_STATE = { position: [0, -1.7, 0.8], scale: 5, tilt: 0 }
export const FEATURES_STATE = { position: [-3, 0, 0], scale: 2.5, tilt: 0 }
export const MENU_STATE = { position: [0, 1.45, -1], scale: 0.72, tilt: 1.05 }
export const EXIT_STATE = { position: [0, 4.5, -1], scale: 0, tilt: 1.05 }

export const MENU_Y_OFFSET = -0.60
export const MENU_SCALE_FACTOR = 0.85

export const CANVAS_Z_BEHIND = '0'
export const CANVAS_Z_FRONT = '5'

export const PIZZA_LERP_FACTOR = 0.1
export const PIZZA_SPIN_SPEED = 0.3

export const LANDING_CAMERA = { position: [0, 0.5, 6], fov: 45 }
export const CANVAS_DPR = [1, 2]
export const AMBIENT_LIGHT_INTENSITY = 0.5
export const DIRECTIONAL_LIGHT = { position: [5, 5, 5], intensity: 0.7 }

export const CUSTOMIZER_CAMERA = { position: [0, 1.3, 3.8], fov: 45 }
export const CUSTOMIZER_AMBIENT_INTENSITY = 0.65
export const CUSTOMIZER_DIRECTIONAL_LIGHT = {
  position: [5, 10, 5],
  intensity: 0.8,
  shadowMapSize: 1024,
}
export const CUSTOMIZER_GROUP_POSITION = [0, -0.15, 0]
export const CUSTOMIZER_GROUP_ROTATION = [0.4, 0, 0]
export const CUSTOMIZER_ORBIT = {
  minDistance: 2.5,
  maxDistance: 6,
  maxPolarAngle: Math.PI / 2.1,
}

export const ENVIRONMENT_PRESET = 'city'

export const PLACEHOLDER_SELECTORS = {
  hero: '.hero-pizza-placeholder',
  features: '.features-pizza-placeholder',
  menu: '.menu-card-3d-placeholder',
}
