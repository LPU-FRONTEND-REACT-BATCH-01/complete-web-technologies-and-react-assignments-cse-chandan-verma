import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const ViewMore = () => {
    const paramData = useParams()
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        const fetchData = async() =>{
            try{
                const res = await axios.get(`https://dummyjson.com/products/${paramData.id}`)
                setData(res.data)
                setLoading(false)
                console.log(res)

            }catch(error){
                console.log(error)
            }
        }

        fetchData()
        // if we give empty dependcy array it will only execute once after every render only when the id changes the useEffect will exceutes
    },[paramData.id])

    if(loading){
        return 
            <h2>Loading</h2>
    }
  return (
    <div className='viewMore'>
    <div className='products'>
        <center>
        <div className='viewmore-Img'>
            <img src={data.images[0]}></img>
        </div>
        <h3>ID: {data.id}</h3>
        <h3>Title: {data.title}</h3>
        <h3>Description: {data.description}</h3>
        </center>
    </div>
    </div>
  )
}

export default ViewMore