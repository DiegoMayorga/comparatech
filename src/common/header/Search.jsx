import React from "react"
import './Search.css'

const Search = ({ CartItem }) => {
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <h1>Comparatech</h1>
          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Busca el producto de tu interés...' />
            <span>Todas las categorías</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
