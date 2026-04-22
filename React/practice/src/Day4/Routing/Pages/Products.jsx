import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductsCard from '../Components/ProductsCard'
import { Navigate } from 'react-router'

const Products = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() =>{
    let fetchData = async () => {
      try{
        let res = await axios.get("https://dummyjson.com/products")
        setData(res.data.products)
        setLoading(false)
      }catch(error){
        console.log(error)
      }
    }

    fetchData();
  },[])

  if(loading){
        return 
          <div className='loading'>
            <h1>Loading</h1>
          </div>
      }
  return (
    <div className='products-container'>
      {data.map((item)=><ProductsCard key={item.id} data={item}/> )}
    </div>
  )
}

export default Products