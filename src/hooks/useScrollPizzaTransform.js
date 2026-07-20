import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import { MathUtils } from 'three'
import {
  CANVAS_Z_BEHIND,
  CANVAS_Z_FRONT,
  EXIT_STATE,
  FEATURES_END,
  FEATURES_STATE,
  HERO_END,
  HERO_STATE,
  MENU_ARRIVE,
  MENU_END,
  MENU_SCALE_FACTOR,
  MENU_STATE,
  MENU_Y_OFFSET,
  PIZZA_LERP_FACTOR,
  PIZZA_SPIN_SPEED,
  PLACEHOLDER_SELECTORS,
} from '../constant/index.js'

function getPlaceholderParams(el, zVal, state) {
  if (!el) return null
  const rect = el.getBoundingClientRect()
  if (rect.width === 0 || rect.height === 0) return null

  const { width: canvasWidth, height: canvasHeight } = state.size
  const camera = state.camera

  const dist = camera.position.z - zVal
  const vHeight = 2 * dist * Math.tan((camera.fov * Math.PI) / 360)
  const vWidth = vHeight * (canvasWidth / canvasHeight)

  const clientX = rect.left + rect.width / 2
  const clientY = rect.top + rect.height / 2

  const normX = clientX / canvasWidth
  const normY = 1 - clientY / canvasHeight

  const rectSize = Math.min(rect.width, rect.height)

  return {
    x: (normX - 0.5) * vWidth,
    y: camera.position.y + (normY - 0.5) * vHeight,
    scale: (rectSize / canvasWidth) * vWidth,
  }
}

function fallbackParams(phaseState) {
  return {
    x: phaseState.position[0],
    y: phaseState.position[1],
    scale: phaseState.scale,
  }
}

function resolveTarget(offset, heroParams, featuresParams, menuParams) {
  const menuY = menuParams.y + MENU_Y_OFFSET
  const menuScale = menuParams.scale * MENU_SCALE_FACTOR

  if (offset <= HERO_END) {
    return {
      x: heroParams.x,
      y: heroParams.y,
      z: HERO_STATE.position[2],
      scale: heroParams.scale,
      tilt: HERO_STATE.tilt,
    }
  }

  if (offset <= FEATURES_END) {
    const t = (offset - HERO_END) / (FEATURES_END - HERO_END)
    return {
      x: MathUtils.lerp(heroParams.x, featuresParams.x, t),
      y: MathUtils.lerp(heroParams.y, featuresParams.y, t),
      z: MathUtils.lerp(HERO_STATE.position[2], FEATURES_STATE.position[2], t),
      scale: MathUtils.lerp(heroParams.scale, featuresParams.scale, t),
      tilt: MathUtils.lerp(HERO_STATE.tilt, FEATURES_STATE.tilt, t),
    }
  }

  if (offset <= MENU_ARRIVE) {
    const t = (offset - FEATURES_END) / (MENU_ARRIVE - FEATURES_END)
    return {
      x: MathUtils.lerp(featuresParams.x, menuParams.x, t),
      y: MathUtils.lerp(featuresParams.y, menuY, t),
      z: MathUtils.lerp(FEATURES_STATE.position[2], MENU_STATE.position[2], t),
      scale: MathUtils.lerp(featuresParams.scale, menuParams.scale, t),
      tilt: MathUtils.lerp(FEATURES_STATE.tilt, MENU_STATE.tilt, t),
    }
  }

  if (offset <= MENU_END) {
    return {
      x: menuParams.x,
      y: menuY,
      z: MENU_STATE.position[2],
      scale: menuScale,
      tilt: MENU_STATE.tilt,
    }
  }

  const t = Math.min((offset - MENU_END) / (1 - MENU_END), 1)
  return {
    x: menuParams.x,
    y: MathUtils.lerp(menuY, EXIT_STATE.position[1], t),
    z: EXIT_STATE.position[2],
    scale: MathUtils.lerp(menuScale, EXIT_STATE.scale, t),
    tilt: EXIT_STATE.tilt,
  }
}

export function useScrollPizzaTransform() {
  const scroll = useScroll()
  const groupRef = useRef()
  const inFront = useRef(false)

  useFrame((state, delta) => {
    const group = groupRef.current
    if (!group) return

    group.rotation.y += delta * PIZZA_SPIN_SPEED

    const offset = scroll.offset

    const heroEl = document.querySelector(PLACEHOLDER_SELECTORS.hero)
    const featuresEl = document.querySelector(PLACEHOLDER_SELECTORS.features)
    const menuEl = document.querySelector(PLACEHOLDER_SELECTORS.menu)

    const heroParams =
      getPlaceholderParams(heroEl, HERO_STATE.position[2], state) || fallbackParams(HERO_STATE)
    const featuresParams =
      getPlaceholderParams(featuresEl, FEATURES_STATE.position[2], state) ||
      fallbackParams(FEATURES_STATE)
    const menuParams =
      getPlaceholderParams(menuEl, MENU_STATE.position[2], state) || fallbackParams(MENU_STATE)

    const shouldBeFront = offset > FEATURES_END
    if (shouldBeFront !== inFront.current) {
      inFront.current = shouldBeFront
      state.gl.domElement.style.zIndex = shouldBeFront ? CANVAS_Z_FRONT : CANVAS_Z_BEHIND
    }

    const target = resolveTarget(offset, heroParams, featuresParams, menuParams)

    group.position.x = MathUtils.lerp(group.position.x, target.x, PIZZA_LERP_FACTOR)
    group.position.y = MathUtils.lerp(group.position.y, target.y, PIZZA_LERP_FACTOR)
    group.position.z = MathUtils.lerp(group.position.z, target.z, PIZZA_LERP_FACTOR)
    group.scale.setScalar(MathUtils.lerp(group.scale.x, target.scale, PIZZA_LERP_FACTOR))
    group.rotation.x = MathUtils.lerp(group.rotation.x, target.tilt, PIZZA_LERP_FACTOR)
  })

  return groupRef
}
