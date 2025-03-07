import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./components/HomePage"
import ItemList from "./components/ItemList"
import Checkout from "./components/Checkout"
import AddItem from "./components/AddItem"
import NavBar from "./components/Navbar"
import NotFound from "./components/NotFound"
import { useEffect, useState } from "react"
import { TItem } from "./types"

function App() {
  const [cart, setCart] = useState<TItem[]>(() => {
    const savedCart = localStorage.getItem("cart")
    return savedCart ? JSON.parse(savedCart) : []
  })

  // ✅ Save cart to localStorage only when cart changes
  useEffect(() => {
    if (cart.length > 0) {
      // Prevent saving empty cart on first render
      localStorage.setItem("cart", JSON.stringify(cart))
    }
  }, [cart])

  const addToCart = (item: TItem) => setCart([...cart, item])

  return (
    <Router>
      <div className='App'>
        <NavBar cartItemCount={cart.length} />
        <div className='container mt-4'>
          <Routes>
            <Route
              path='/'
              element={<HomePage />}
            />
            <Route
              path='/items'
              element={<ItemList addToCart={addToCart} />}
            />
            <Route
              path='/checkout'
              element={<Checkout />}
            />
            <Route
              path='/add-item'
              element={<AddItem />}
            />
            <Route
              path='*'
              element={<NotFound />}
            />{" "}
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
