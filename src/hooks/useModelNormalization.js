import { useLayoutEffect, useRef } from 'react'
import { Box3, Vector3 } from 'three'

export function useModelNormalization(scene) {
  const groupRef = useRef()
  const normalizationCache = useRef(new Map())

  useLayoutEffect(() => {
    if (!scene) return

    let params = normalizationCache.current.get(scene)
    if (!params) {
      const parent = scene.parent
      if (parent) {
        parent.remove(scene)
      }

      scene.scale.setScalar(1)
      scene.position.set(0, 0, 0)
      scene.updateMatrixWorld(true)

      const box = new Box3().setFromObject(scene)
      const size = box.getSize(new Vector3())
      const center = box.getCenter(new Vector3())
      const maxDim = Math.max(size.x, size.y, size.z) || 1
      const scale = 1 / maxDim
      params = {
        scale,
        position: [-center.x * scale, -center.y * scale, -center.z * scale],
      }
      normalizationCache.current.set(scene, params)

      if (parent) {
        parent.add(scene)
      }
    }

    groupRef.current.scale.setScalar(params.scale)
    groupRef.current.position.set(...params.position)
  }, [scene])

  return groupRef
}
