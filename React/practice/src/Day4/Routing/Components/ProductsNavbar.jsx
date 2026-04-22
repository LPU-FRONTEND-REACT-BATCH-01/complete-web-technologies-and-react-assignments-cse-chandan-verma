import React from 'react'
import { NavLink } from 'react-router'

const ProductsNavbar = () => {
  return (
    <div className='lifestyle-nav'>
        <NavLink to={"category/beauty"}>
            <div className='card'>
                <h2>BEAUTY</h2>
            </div>
        </NavLink>
        
        <NavLink to={"category/fragrances"}>
            <div className='card'>
                <h2>FRAGRANCES</h2>
            </div>
        </NavLink>

        <NavLink to={"category/mens-shoes"}>
            <div className='card'>
                <h2>MEN's SHOES</h2>
            </div>
        </NavLink>

        <NavLink to={"category/skin-care"}>
            <div className='card'>
                <h2>SKINCARE</h2>
            </div>
        </NavLink>
    </div>
  )
}

export default ProductsNavbar