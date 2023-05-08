import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { del } from '../../Reducer/CardSlice/cardSlice'

const Cart = () => {
  const slector = useSelector((a) => a.cart)
  console.log( "data colorct" ,slector)


  const dispatch = useDispatch();



  const deletitems = (id) => {
    console.log(id)
    dispatch(del(id))
    


  }
  return (
    <div>

      {slector.map((x) => (
        <div>
          <img src={x.image} alt='img' width={150 } height={150} />
{x.title}
    {x.category}
    {x.price}

    <Button onClick={()=> deletitems(x.id)} >delete</Button>
           </div>
      ))}
    </div>
  )
}

export default Cart