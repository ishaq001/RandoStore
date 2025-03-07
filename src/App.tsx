import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"

import HomePage from "./pages/HomePage"
import ItemList from "./pages/ItemList"
import Checkout from "./pages/Checkout"
import AddItem from "./pages/AddItem"
import NavBar from "./components/Navbar"
import NotFound from "./pages/NotFound"
import { TItem } from "./types"

import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [cart, setCart] = useState<TItem[]>(() => {
    const savedCart = localStorage.getItem("cart")
    return savedCart ? JSON.parse(savedCart) : []
  })

  // Save cart to localStorage only when cart changes
  useEffect(() => {
    if (cart.length > 0) {
      // Prevent saving empty cart on first render
      localStorage.setItem("cart", JSON.stringify(cart))
    }
  }, [cart])

  const addToCart = (item: TItem) => setCart([...cart, item])

  const removeFromCart = (itemIndex: number) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart]
      updatedCart.splice(itemIndex, 1) // Remove 1 item at the correct index
      return updatedCart
    })
  }

  const clearCart = () => {
    setCart([])
    localStorage.removeItem("cart") // Clear from storage
  }
  return (
    <Router>
      <div className='App'>
        <ToastContainer
          position='top-right'
          autoClose={2000}
        />
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
              element={
                <Checkout
                  cart={cart}
                  removeFromCart={removeFromCart}
                  clearCart={clearCart}
                />
              }
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
