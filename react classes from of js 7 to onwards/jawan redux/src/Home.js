import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    // const navigate= useNavigate()
    const data= useSelector((a)=>a.Login);
    console.log(data)
  return (
    <div>Home</div>
  )
}

export default Home