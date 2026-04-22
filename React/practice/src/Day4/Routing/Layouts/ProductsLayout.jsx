import React from 'react'
import ProductsNavbar from '../Components/ProductsNavbar'
import { Outlet } from 'react-router'

const ProductsLayout = () => {
  return (
    <div>
        <ProductsNavbar/>
        <Outlet/>
    </div>
  )
}

export default ProductsLayout