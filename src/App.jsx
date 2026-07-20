import { useState } from 'react'
import { ConfigProvider } from 'antd'
import './App.css'
import Home from './pages/Home/Home.jsx'
import Header from './layout/Header.jsx'
import Cart from './pages/Cart/Cart.jsx'
import {
  antdTheme,
  createDefaultToppings,
  DEFAULT_PIZZA_INDEX,
  PAGES,
  PIZZA_ID_TO_INDEX,
} from './constant/index.js'

function App() {
  const [page, setPage] = useState(PAGES.landing)
  const [selectedPizza, setSelectedPizza] = useState(null)
  const [pizzaIndex, setPizzaIndex] = useState(DEFAULT_PIZZA_INDEX)
  const [customToppings, setCustomToppings] = useState(createDefaultToppings)

  const handleCustomize = (pizzaItem) => {
    setSelectedPizza(pizzaItem)
    setPizzaIndex(PIZZA_ID_TO_INDEX[pizzaItem.id] ?? DEFAULT_PIZZA_INDEX)

    setCustomToppings(createDefaultToppings())

    setPage(PAGES.cart)
  }

  return (
    <ConfigProvider theme={antdTheme}>
      {page === PAGES.landing ? (
        <>
          <Header />
          <Home
            pizzaIndex={pizzaIndex}
            setPizzaIndex={setPizzaIndex}
            onCustomize={handleCustomize}
          />
        </>
      ) : (
        <Cart
          pizza={selectedPizza}
          pizzaIndex={pizzaIndex}
          setPizzaIndex={setPizzaIndex}
          customToppings={customToppings}
          setCustomToppings={setCustomToppings}
          onBack={() => setPage(PAGES.landing)}
        />
      )}
    </ConfigProvider>
  )
}

export default App
