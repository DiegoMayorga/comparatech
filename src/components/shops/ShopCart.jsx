import React from "react"

const ShopCart = ({ shopItems, addToCart }) => {
  return (
    <>
      {shopItems.map((shopItems, index) => {
        return (
          <div className='box'>
            <div className='product mtop'>
              <div className='img'>
                <img src={shopItems.cover} alt='' />
              </div>
              <div className='product-details'>
                <h3>{shopItems.name}</h3>
                <div className='price'>
                  <h4>${shopItems.price}00 </h4>
                  <button onClick={() => addToCart(shopItems)}>
                    <a href={shopItems.link}>Ir</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ShopCart
