import Link from 'next/link'
import React from 'react'
import ProductCard from './components/ProductCard'

function First() {
  return (
    <div>
      {/* banner */}
      <div className='bg-gray-900 h-72 flex text-center justify-center'>
         <h1 className='text-white text-5xl font-bold text-center pt-20'>Indias most loved <span className='text-orange-400'>fashion</span> platform for <span className='text-red-500'>coders!</span></h1>
      </div>

      {/* cards */}
      <div className='m-4 flex flex-wrap gap-2  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
        <ProductCard/>  
        <ProductCard/>  
        <ProductCard/>  
        <ProductCard/>   
      </div>
    <Link href="/products" className='inline-block text-orange-400 p-4 font-bold hover:underline'>View all{">"}</Link>

    </div>
  )
}

export default First