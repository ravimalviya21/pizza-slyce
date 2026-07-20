import { useCallback, useState } from 'react'
import { MENU_ITEMS, MIN_QUANTITY } from '../constant/index.js'

const initialQuantities = () =>
  Object.fromEntries(MENU_ITEMS.map((item) => [item.id, MIN_QUANTITY]))

export function useQuantities() {
  const [quantities, setQuantities] = useState(initialQuantities)

  const increment = useCallback((id) => {
    setQuantities((prev) => ({ ...prev, [id]: prev[id] + 1 }))
  }, [])

  const decrement = useCallback((id) => {
    setQuantities((prev) => ({ ...prev, [id]: Math.max(MIN_QUANTITY, prev[id] - 1) }))
  }, [])

  return { quantities, increment, decrement }
}
