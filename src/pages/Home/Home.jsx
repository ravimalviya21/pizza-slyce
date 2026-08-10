import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Scroll, ScrollControls } from '@react-three/drei'
import { ConfigProvider } from 'antd'
import Overlay from './Overlay.jsx'
import { PizzaModel } from '../../components/common/PizzaModel.jsx'
import { useOverlayPages, useScrollPizzaTransform } from '../../hooks/index.js'
import {
  AMBIENT_LIGHT_INTENSITY,
  antdTheme,
  CANVAS_DPR,
  DIRECTIONAL_LIGHT,
  ENVIRONMENT_PRESET,
  LANDING_CAMERA,
  SCROLL_DAMPING,
} from '../../constant/index.js'

function ScrollDrivenPizza({ pizzaIndex }) {
  const groupRef = useScrollPizzaTransform()

  return (
    <group ref={groupRef}>
      <PizzaModel pizzaIndex={pizzaIndex} />
    </group>
  )
}

export default function Home({ pizzaIndex, setPizzaIndex, onCustomize }) {
  const [overlayEl, setOverlayEl] = useState(null)
  const pages = useOverlayPages(overlayEl)

  return (
    <Canvas
      style={{ position: 'absolute', inset: 0, zIndex: 0 }}
      camera={LANDING_CAMERA}
      dpr={CANVAS_DPR}
      frameloop="always"
      onCreated={({ gl }) => {
        gl.domElement.style.pointerEvents = 'none'
        gl.domElement.style.position = 'absolute'
      }}
    >
      <ambientLight intensity={AMBIENT_LIGHT_INTENSITY} />
      <directionalLight
        position={DIRECTIONAL_LIGHT.position}
        intensity={DIRECTIONAL_LIGHT.intensity}
      />
      <ScrollControls pages={pages} damping={SCROLL_DAMPING}>
        <Suspense fallback={null}>
          <ScrollDrivenPizza pizzaIndex={pizzaIndex} />
          <Environment preset={ENVIRONMENT_PRESET} background={false} />
        </Suspense>
        <Scroll html style={{ width: '100%' }}>
          <ConfigProvider theme={antdTheme}>
            <Overlay
              ref={setOverlayEl}
              pizzaIndex={pizzaIndex}
              setPizzaIndex={setPizzaIndex}
              onCustomize={onCustomize}
            />
          </ConfigProvider>
        </Scroll>
      </ScrollControls>
    </Canvas>
  )
}
