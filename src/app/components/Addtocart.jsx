"use client"
import React from 'react'
import toast, { Toaster } from 'react-hot-toast'

const Addtocart = () => {
    const cartadd =()=>{
       toast.success("Item added to cart")
    }
  return (
    <div>
      <button onClick={cartadd} className='w-full mt-4 py-2 mx-auto bg-orange-500 text-white rounded-lg hover:bg-red-500'> Add To Cart</button>
      <Toaster/>
    </div>
   
  )
}

export default Addtocart
