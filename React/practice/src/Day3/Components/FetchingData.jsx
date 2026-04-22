import React, { useEffect, useState } from 'react'
import Card from './Card'

const FetchingData = () => {

    const[data, setData] = useState([])
    const[loading, setLoading] =  useState(true)

    useEffect(() =>{
        let fetchData = async() =>{
            try{
                let res = await fetch("https://dummyjson.com/products")

                if(res.ok){
                    let data = await res.json()
                    setData(data.products)
                    setLoading(false)
                }
                console.log("Data Fetched!")
            }  catch(error){
                console.log(error)
            }
        }
        fetchData();
    },[])

    console.log(data)

    if(loading){
        return <h1>Loading</h1>
    }

  return (
    <>
        {
        data.map((product) => 
        <Card key={product.id} data = {product}/>
        )}
    </>
  )
}

export default FetchingData