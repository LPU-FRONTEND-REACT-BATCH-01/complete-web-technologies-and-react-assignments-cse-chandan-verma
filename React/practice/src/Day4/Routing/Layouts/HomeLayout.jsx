import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const HomeLayout = () => {
  return (
    <div>
      <div className='offer'>
        <p><strong>FREE RETURNS & EXCHANGES</strong></p>
      </div>
        <Navbar/>
        {/* to render childelements we use outlets */}
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default HomeLayout