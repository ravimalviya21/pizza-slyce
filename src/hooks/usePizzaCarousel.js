import { useCallback } from 'react'
import { DEFAULT_PIZZA_INDEX, PIZZA_STYLE_COUNT } from '../constant/index.js'

export function usePizzaCarousel(setPizzaIndex) {
  const prev = useCallback(() => {
    setPizzaIndex((current) =>
      current === DEFAULT_PIZZA_INDEX ? PIZZA_STYLE_COUNT : current - 1,
    )
  }, [setPizzaIndex])

  const next = useCallback(() => {
    setPizzaIndex((current) =>
      current === PIZZA_STYLE_COUNT ? DEFAULT_PIZZA_INDEX : current + 1,
    )
  }, [setPizzaIndex])

  return { prev, next }
}
