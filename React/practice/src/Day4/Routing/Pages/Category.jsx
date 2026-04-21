import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductsCard from "../Components/ProductsCard";

const Category = () => {
  const paramData = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      try {
        let res = await axios.get(`https://dummyjson.com/products/category/${paramData.category}`);
        setData(res.data.products)
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    };
    fetchData()
  },[paramData.category]);
  return(
   <div className='products-container'>
    {data.map((item)=><ProductsCard key={item.id} data={item}/>)}
    </div>
  )
};

export default Category;
