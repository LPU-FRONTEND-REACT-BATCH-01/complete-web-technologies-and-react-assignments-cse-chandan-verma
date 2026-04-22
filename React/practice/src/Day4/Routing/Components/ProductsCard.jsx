import React from 'react'
import { Link } from 'react-router'

const ProductsCard = ({data}) => {
  return (
    <div className='card-items'>
        <div className='prod-image'>
          <img src={data.images[0]}/>
        </div>
        <h3>Id: {data.id}</h3>
        <h4>Title: {data.title}</h4>
        <h4>Category: {data.category}</h4>
        <Link to={`${data.id}`}><button>View More</button></Link>
    </div>
  )
}

export default ProductsCard