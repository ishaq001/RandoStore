import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./components/HomePage"
import ItemList from "./components/ItemList"
import Checkout from "./components/Checkout"
import AddItem from "./components/AddItem"

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='container mt-4'>
          <Routes>
            <Route
              path='/'
              element={<HomePage />}
            />
            <Route
              path='/items'
              element={<ItemList />}
            />
            <Route
              path='/checkout'
              element={<Checkout />}
            />
            <Route
              path='/add-item'
              element={<AddItem />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
