import React from "react"

const Catg = () => {
  const data = [
    {
      cateImg: "",
      cateName: "Apple",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Samsung",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Oppo",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Vivo",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Xiaomi",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Sony",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Ver todas las marcas",
    },
  ]
  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        }
      )}
      </div>
    </>
  )
}

export default Catg
