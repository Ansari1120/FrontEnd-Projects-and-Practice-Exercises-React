import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Get } from '../../Config/apibasemethod'
import { useDispatch } from 'react-redux'
import { add } from '../../Reducer/CardSlice/cardSlice'

const Product = () => {
  const dispatch = useDispatch()
  const [Showproducts,setShowProducts] = useState([])
  const [collect, setCollect] = useState([])

  const navigate = useNavigate()

   const apiData = () =>{
    Get("/products").then((res)=>{console.log(res.data)
    
      setShowProducts([...res.data])
    
    }).catch((err)=>{console.log(err)})
   }
  const moveToCart  = () =>{
      navigate("/Cart")
  }

  const addtoCart  = (productshow) =>{
    console.log(productshow)
    dispatch(add(productshow))


  }

  console.log(collect)
  useEffect(()=>{apiData()},[])

  // console.log(Showproducts)
  return (
    <>
    
    <h1>Product</h1>

    <button onClick={moveToCart}>move to Cart</button>
    



      {Showproducts.map((x)=>(

  <div>
    <img src={x.image} alt='img' width={150 } height={150} />
{x.title}
    {x.category}
    {x.price}

    <button onClick={()=> addtoCart(x)}>add to cart</button>
 
  </div>
  ))}
    </>
  )
}

export default Product