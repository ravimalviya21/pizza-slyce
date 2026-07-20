import { useCallback, useMemo } from 'react'
import { AVAILABLE_TOPPINGS, createDefaultToppings } from '../constant/index.js'

export function useToppings(customToppings, setCustomToppings) {
  const toggleTopping = useCallback(
    (id) => {
      setCustomToppings((prev) => ({ ...prev, [id]: !prev[id] }))
    },
    [setCustomToppings],
  )

  const resetToppings = useCallback(() => {
    setCustomToppings(createDefaultToppings())
  }, [setCustomToppings])

  const activeToppingNames = useMemo(
    () => AVAILABLE_TOPPINGS.filter((t) => customToppings[t.id]).map((t) => t.name),
    [customToppings],
  )

  return { toggleTopping, resetToppings, activeToppingNames }
}
