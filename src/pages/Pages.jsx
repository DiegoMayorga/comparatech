import React from "react"
import Home from "../components/MainPage/Home"
import Shop from "../components/shops/Shop"

const Pages = ({ productItems, addToCart, CartItem, shopItems }) => {
  return (
    <>
      <Home CartItem={CartItem} />
      <br />
      <Shop shopItems={shopItems} addToCart={addToCart} />
    </>
  )
}

export default Pages
