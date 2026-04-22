import React from 'react'
import { Link, NavLink } from 'react-router'
import Puma from '../assets/puma.png'
import {Heart, ShoppingCart, User, Search} from 'lucide-react'

const Navbar = () => {
    
  return (
    <div>    
    <div className='navbar'>
      
      <div className='logo'>
        <Link><img src={Puma} style={{width:100, height:60}}/></Link>
      </div>
      <div className='menu-items'>
          <NavLink className={'navlink'} to={'new'}>New</NavLink>
          <NavLink className={'navlink'} to={'sport'}>Sport</NavLink>
          <NavLink className={'navlink'} to={'men'}>Men</NavLink>
          <NavLink className={'navlink'} to={'women'}>Women</NavLink>
          <NavLink className={'navlink'} to={'motorsport'}>Motorsport</NavLink>
          <NavLink className={'navlink'} to={'products'}>Products</NavLink>
          <NavLink className={'navlink'} to={'kids'}>Kids</NavLink>
          <NavLink className={'navlink'} to={'sale'}>Sale</NavLink> 
      </div>
      <div className='search'>
        <div className='search-box'>
        <Search size={20} color="#ffffff" strokeWidth={2.25} />
        <p>SEARCH</p>
        </div>
      </div>
      <div className='icons'>
        <Link><Heart/></Link>
        <Link><ShoppingCart /></Link>
        <Link><User size={28} color="white" strokeWidth={1.5} /></Link>
      </div>
    </div>
    </div>
  )
}

export default Navbar