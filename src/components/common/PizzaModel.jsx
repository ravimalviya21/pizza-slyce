import { useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import { TOPPING_GEOMETRY, TOPPING_SEEDS } from '../../constant/index.js'
import { MODEL_URL } from '../../config/index.js'
import { useModelNormalization } from '../../hooks/index.js'

export function PizzaModel({ pizzaIndex, customToppings }) {
  const modelUrl = useMemo(() => MODEL_URL(pizzaIndex), [pizzaIndex])
  const { scene } = useGLTF(modelUrl)
  const innerRef = useModelNormalization(scene)

  return (
    <group ref={innerRef}>
      <primitive object={scene} />

      {customToppings?.pepperoni && TOPPING_SEEDS.pepperoni.map((t, idx) => (
        <mesh key={`pep-${idx}`} position={t.pos} rotation={t.rot} castShadow receiveShadow>
          <cylinderGeometry args={TOPPING_GEOMETRY.pepperoni.args} />
          <meshStandardMaterial
            color={TOPPING_GEOMETRY.pepperoni.color}
            roughness={TOPPING_GEOMETRY.pepperoni.roughness}
            metalness={TOPPING_GEOMETRY.pepperoni.metalness}
          />
        </mesh>
      ))}
      {customToppings?.olives && TOPPING_SEEDS.olives.map((t, idx) => (
        <mesh key={`olive-${idx}`} position={t.pos} rotation={t.rot} castShadow receiveShadow>
          <torusGeometry args={TOPPING_GEOMETRY.olives.args} />
          <meshStandardMaterial
            color={TOPPING_GEOMETRY.olives.color}
            roughness={TOPPING_GEOMETRY.olives.roughness}
          />
        </mesh>
      ))}
      {customToppings?.mushrooms && TOPPING_SEEDS.mushrooms.map((t, idx) => (
        <group key={`mush-${idx}`} position={t.pos} rotation={t.rot}>
          <mesh position={[0, 0.025, 0]} castShadow>
            <sphereGeometry args={TOPPING_GEOMETRY.mushroomCap.args} />
            <meshStandardMaterial
              color={TOPPING_GEOMETRY.mushroomCap.color}
              roughness={TOPPING_GEOMETRY.mushroomCap.roughness}
            />
          </mesh>
          <mesh position={[0, 0.01, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={TOPPING_GEOMETRY.mushroomStem.args} />
            <meshStandardMaterial
              color={TOPPING_GEOMETRY.mushroomStem.color}
              roughness={TOPPING_GEOMETRY.mushroomStem.roughness}
            />
          </mesh>
        </group>
      ))}
      {customToppings?.peppers && TOPPING_SEEDS.peppers.map((t, idx) => (
        <mesh key={`pepper-${idx}`} position={t.pos} rotation={t.rot} castShadow>
          <torusGeometry args={TOPPING_GEOMETRY.peppers.args} />
          <meshStandardMaterial
            color={TOPPING_GEOMETRY.peppers.color}
            roughness={TOPPING_GEOMETRY.peppers.roughness}
          />
        </mesh>
      ))}
      {customToppings?.tomatoes && TOPPING_SEEDS.tomatoes.map((t, idx) => (
        <mesh key={`tomato-${idx}`} position={t.pos} rotation={t.rot} castShadow>
          <cylinderGeometry args={TOPPING_GEOMETRY.tomatoes.args} />
          <meshStandardMaterial
            color={TOPPING_GEOMETRY.tomatoes.color}
            roughness={TOPPING_GEOMETRY.tomatoes.roughness}
          />
        </mesh>
      ))}
    </group>
  )
}
