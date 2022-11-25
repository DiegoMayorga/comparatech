import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./common/header/Header"
import Pages from "./pages/Pages"
import Footer from "./common/footer/Footer"
import Sdata from "./components/shops/Sdata"

function App() {
  const { shopItems } = Sdata
  const [CartItem, setCartItem] = useState([])
  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  return (
    <>
      <Router>
        <Header CartItem={CartItem} />
        <Switch>
          <Route path='/' exact>
            <Pages addToCart={addToCart} shopItems={shopItems} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
