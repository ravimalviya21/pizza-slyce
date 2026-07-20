import { useCallback, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { ArrowLeft, Check } from 'lucide-react'
import { PizzaModel } from '../../components/common/PizzaModel.jsx'
import { usePizzaPricing, useToppings } from '../../hooks/index.js'
import {
  AVAILABLE_TOPPINGS,
  CANVAS_DPR,
  CUSTOMIZER_AMBIENT_INTENSITY,
  CUSTOMIZER_CAMERA,
  CUSTOMIZER_DIRECTIONAL_LIGHT,
  CUSTOMIZER_FALLBACK_DESC,
  CUSTOMIZER_FALLBACK_NAME,
  CUSTOMIZER_GROUP_POSITION,
  CUSTOMIZER_GROUP_ROTATION,
  CUSTOMIZER_ORBIT,
  CUSTOMIZER_VIEWER_HINT,
  ENVIRONMENT_PRESET,
  PIZZA_STYLE_COUNT,
} from '../../constant/index.js'

export default function Cart({
  pizza,
  pizzaIndex,
  setPizzaIndex,
  customToppings,
  setCustomToppings,
  onBack,
}) {
  const { toggleTopping, resetToppings, activeToppingNames } = useToppings(
    customToppings,
    setCustomToppings,
  )
  const { totalPrice } = usePizzaPricing(pizza, customToppings)

  const handleAddToCart = useCallback(() => {
    alert(
      `Added Custom ${pizza?.name || 'Pizza'} to Cart!\n` +
      `Base Style: Pizza_${String(pizzaIndex).padStart(2, '0')}\n` +
      `Toppings: ${activeToppingNames.length > 0 ? activeToppingNames.join(', ') : 'None'}\n` +
      `Total Price: $${totalPrice.toFixed(2)}`
    )
    onBack()
  }, [pizza, activeToppingNames, pizzaIndex, totalPrice, onBack])

  return (
    <div className="customizer-page">
      <button className="customizer-back-btn" onClick={onBack} aria-label="Back to Menu">
        <ArrowLeft size={18} />
        <span>Back to Menu</span>
      </button>

      <div className="customizer-layout">
        <div className="customizer-viewer-container">
          <div className="customizer-viewer-instructions">
            {CUSTOMIZER_VIEWER_HINT}
          </div>
          <Canvas camera={CUSTOMIZER_CAMERA} dpr={CANVAS_DPR} shadowMap>
            <ambientLight intensity={CUSTOMIZER_AMBIENT_INTENSITY} />
            <directionalLight
              position={CUSTOMIZER_DIRECTIONAL_LIGHT.position}
              intensity={CUSTOMIZER_DIRECTIONAL_LIGHT.intensity}
              castShadow
              shadow-mapSize-width={CUSTOMIZER_DIRECTIONAL_LIGHT.shadowMapSize}
              shadow-mapSize-height={CUSTOMIZER_DIRECTIONAL_LIGHT.shadowMapSize}
            />
            <Suspense fallback={null}>
              <group position={CUSTOMIZER_GROUP_POSITION} rotation={CUSTOMIZER_GROUP_ROTATION}>
                <PizzaModel pizzaIndex={pizzaIndex} customToppings={customToppings} />
              </group>
              <Environment preset={ENVIRONMENT_PRESET} background={false} />
            </Suspense>
            <OrbitControls
              enableZoom={true}
              enablePan={false}
              minDistance={CUSTOMIZER_ORBIT.minDistance}
              maxDistance={CUSTOMIZER_ORBIT.maxDistance}
              maxPolarAngle={CUSTOMIZER_ORBIT.maxPolarAngle}
            />
          </Canvas>
        </div>

        <div className="customizer-options-panel">
          <div className="customizer-options-header">
            <h1 className="customizer-options-title">{pizza?.name || CUSTOMIZER_FALLBACK_NAME}</h1>
            <p className="customizer-options-desc">
              {pizza?.description || CUSTOMIZER_FALLBACK_DESC}
            </p>
          </div>

          <div className="customizer-options-content">
            <div className="customizer-base-selector">
              <div className="customizer-section-title">Change Pizza Base Style</div>
              <select
                className="customizer-select"
                value={pizzaIndex}
                onChange={(e) => setPizzaIndex(Number(e.target.value))}
              >
                {Array.from({ length: PIZZA_STYLE_COUNT }, (_, idx) => {
                  const num = idx + 1
                  return (
                    <option key={num} value={num}>
                      Pizza Style #{String(num).padStart(2, '0')}
                    </option>
                  )
                })}
              </select>
            </div>

            <div className="customizer-section-title">Choose Toppings</div>
            <div className="toppings-list">
              {AVAILABLE_TOPPINGS.map((topping) => {
                const isSelected = !!customToppings[topping.id]
                return (
                  <div
                    key={topping.id}
                    className={`topping-item ${isSelected ? 'selected' : ''}`}
                    onClick={() => toggleTopping(topping.id)}
                  >
                    <div className="topping-label">
                      <span className="topping-emoji">{topping.emoji}</span>
                      <span>{topping.name}</span>
                      <span className="topping-price-addon">
                        (+${topping.price.toFixed(2)})
                      </span>
                    </div>
                    <div className="topping-checkbox-custom">
                      {isSelected && <Check size={14} strokeWidth={3} />}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="customizer-options-footer">
            <div className="customizer-price-row">
              <span className="customizer-price-label">Total Price</span>
              <span className="customizer-price-val">${totalPrice.toFixed(2)}</span>
            </div>
            <button
              className="customizer-btn customizer-btn-primary"
              onClick={handleAddToCart}
            >
              Add to Order
            </button>
            <button
              className="customizer-btn customizer-btn-secondary"
              onClick={resetToppings}
            >
              Reset Customization
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
