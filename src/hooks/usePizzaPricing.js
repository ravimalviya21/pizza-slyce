import { useMemo } from 'react'
import { AVAILABLE_TOPPINGS, FALLBACK_BASE_PRICE } from '../constant/index.js'

export function usePizzaPricing(pizza, customToppings) {
  return useMemo(() => {
    const basePrice = pizza?.price || FALLBACK_BASE_PRICE
    const toppingsPrice = AVAILABLE_TOPPINGS.reduce(
      (sum, topping) => sum + (customToppings[topping.id] ? topping.price : 0),
      0,
    )

    return {
      basePrice,
      toppingsPrice,
      totalPrice: basePrice + toppingsPrice,
    }
  }, [pizza, customToppings])
}
