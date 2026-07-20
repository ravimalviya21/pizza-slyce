export const PIZZA_STYLE_COUNT = 40
export const DEFAULT_PIZZA_INDEX = 1

export const PIZZA_ID_TO_INDEX = {
  veg: 3,
  mushroom: 2,
  mixveg: 1,
}

export const FALLBACK_BASE_PRICE = 12.99

export const AVAILABLE_TOPPINGS = [
  { id: 'pepperoni', name: 'Pepperoni', emoji: '🍕', price: 1.50 },
  { id: 'olives', name: 'Black Olives', emoji: '🫒', price: 1.20 },
  { id: 'mushrooms', name: 'Mushrooms', emoji: '🍄', price: 1.50 },
  { id: 'peppers', name: 'Green Peppers', emoji: '🫑', price: 1.00 },
  { id: 'tomatoes', name: 'Fresh Tomatoes', emoji: '🍅', price: 1.00 },
]

export const createDefaultToppings = () =>
  Object.fromEntries(AVAILABLE_TOPPINGS.map((t) => [t.id, false]))

export const TOPPING_SEEDS = {
  pepperoni: [
    { pos: [-0.18, 0.018, -0.1], rot: [0, 0.4, 0] },
    { pos: [0.15, 0.018, 0.2], rot: [0, 1.2, 0] },
    { pos: [-0.1, 0.018, 0.25], rot: [0, -0.5, 0] },
    { pos: [0.28, 0.018, -0.15], rot: [0, 0.8, 0] },
    { pos: [-0.25, 0.018, 0.1], rot: [0, -1.1, 0] },
    { pos: [0.05, 0.018, -0.25], rot: [0, 0.2, 0] },
    { pos: [0.22, 0.018, 0.02], rot: [0, 2.1, 0] },
    { pos: [-0.05, 0.018, -0.05], rot: [0, 1.5, 0] },
    { pos: [-0.3, 0.018, -0.18], rot: [0, -0.8, 0] },
    { pos: [0.1, 0.018, 0.32], rot: [0, 0.6, 0] },
  ],
  olives: [
    { pos: [-0.22, 0.025, -0.05], rot: [Math.PI / 2, 0.5, 0] },
    { pos: [0.2, 0.025, 0.15], rot: [Math.PI / 2, -0.8, 0] },
    { pos: [-0.05, 0.025, 0.26], rot: [Math.PI / 2, 1.1, 0] },
    { pos: [0.28, 0.025, -0.08], rot: [Math.PI / 2, -0.2, 0] },
    { pos: [-0.15, 0.025, 0.18], rot: [Math.PI / 2, 0.6, 0] },
    { pos: [0.1, 0.025, -0.2], rot: [Math.PI / 2, 1.4, 0] },
    { pos: [0.25, 0.025, -0.22], rot: [Math.PI / 2, -1.2, 0] },
    { pos: [-0.1, 0.025, -0.15], rot: [Math.PI / 2, 0.3, 0] },
    { pos: [-0.28, 0.025, 0.2], rot: [Math.PI / 2, -0.5, 0] },
    { pos: [0.0, 0.025, 0.05], rot: [Math.PI / 2, 1.8, 0] },
  ],
  mushrooms: [
    { pos: [-0.15, 0.018, -0.2], rot: [0, 1.2, 0] },
    { pos: [0.22, 0.018, 0.1], rot: [0, -0.8, 0] },
    { pos: [-0.2, 0.018, 0.2], rot: [0, 0.3, 0] },
    { pos: [0.1, 0.018, -0.28], rot: [0, 2.1, 0] },
    { pos: [-0.05, 0.018, 0.14], rot: [0, -1.4, 0] },
    { pos: [0.28, 0.018, -0.16], rot: [0, 0.7, 0] },
    { pos: [-0.26, 0.018, -0.02], rot: [0, -0.4, 0] },
    { pos: [0.15, 0.018, 0.3], rot: [0, 1.6, 0] },
  ],
  peppers: [
    { pos: [-0.25, 0.02, 0.08], rot: [Math.PI / 2, 0.2, 2.1] },
    { pos: [0.25, 0.02, -0.1], rot: [Math.PI / 2, -0.5, 1.2] },
    { pos: [-0.12, 0.02, -0.25], rot: [Math.PI / 2, 0.8, 0.5] },
    { pos: [0.12, 0.02, 0.25], rot: [Math.PI / 2, -1.1, -0.8] },
    { pos: [-0.08, 0.02, 0.12], rot: [Math.PI / 2, 0.4, 1.6] },
    { pos: [0.2, 0.02, 0.2], rot: [Math.PI / 2, 1.2, -1.2] },
    { pos: [-0.2, 0.02, -0.18], rot: [Math.PI / 2, -0.6, 0.8] },
    { pos: [0.02, 0.02, -0.12], rot: [Math.PI / 2, -1.4, -0.2] },
  ],
  tomatoes: [
    { pos: [-0.18, 0.018, 0.15], rot: [0, 0.5, 0] },
    { pos: [0.18, 0.018, -0.2], rot: [0, -0.9, 0] },
    { pos: [0.22, 0.018, 0.22], rot: [0, 1.1, 0] },
    { pos: [-0.22, 0.018, -0.12], rot: [0, -0.3, 0] },
    { pos: [0.02, 0.018, 0.28], rot: [0, 2.1, 0] },
    { pos: [-0.02, 0.018, -0.26], rot: [0, -1.2, 0] },
  ],
}

export const TOPPING_GEOMETRY = {
  pepperoni: { args: [0.08, 0.08, 0.015, 16], color: '#b31d1d', roughness: 0.6, metalness: 0.1 },
  olives: { args: [0.04, 0.016, 8, 16], color: '#1a1a1a', roughness: 0.5 },
  mushroomCap: { args: [0.05, 12, 6, 0, Math.PI * 2, 0, Math.PI / 2], color: '#ded2be', roughness: 0.7 },
  mushroomStem: { args: [0.015, 0.015, 0.03, 8], color: '#f0e6d2', roughness: 0.8 },
  peppers: { args: [0.06, 0.015, 8, 12, Math.PI * 0.8], color: '#2d7a2d', roughness: 0.6 },
  tomatoes: { args: [0.07, 0.07, 0.01, 12], color: '#d12c2c', roughness: 0.5 },
}
