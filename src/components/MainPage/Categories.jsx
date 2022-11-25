import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "https://cdn-icons-png.flaticon.com/512/2319/2319294.png",
      cateName: "Celulares",
    },
    {
      cateImg: "https://cdn-icons-png.flaticon.com/512/4449/4449619.png",
      cateName: "PC",
    },
    {
      cateImg: "https://cdn-icons-png.flaticon.com/512/7305/7305362.png",
      cateName: "Audífonos",
    },
    {
      cateImg: "https://cdn-icons-png.flaticon.com/512/6993/6993485.png",
      cateName: "Televisores",
    },
    {
      cateImg: "https://cdn-icons-png.flaticon.com/512/900/900263.png",
      cateName: "Tablets",
    },
    {
      cateImg: "https://cdn-icons-png.flaticon.com/512/709/709511.png",
      cateName: "Smartwatch",
    },
    {
      cateImg: "https://cdn-icons-png.flaticon.com/512/744/744141.png",
      cateName: "Consolas",
    },
    {
      cateImg: "https://cdn-icons-png.flaticon.com/512/937/937367.png",
      cateName: "Parlantes",
    },
    {
      cateImg: "https://cdn-icons-png.flaticon.com/512/685/685655.png",
      cateName: "Cámaras",
    },
    {
      cateImg: "https://cdn-icons-png.flaticon.com/512/446/446991.png",
      cateName: "Impresoras",
    },
    {
      cateImg: "https://cdn-icons-png.flaticon.com/512/4788/4788600.png",
      cateName: "Cargadores",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt=""></img>
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
