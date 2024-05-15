import React from 'react'
import { CheckIcon } from "@heroicons/react/24/solid"
import Shared from '../../components/Shared'
import Addtocart from '../../components/Addtocart'
const Product = () => {
  return (
   <div className='m-2 px-20'>
        <div className='flex justify-around items-center flex-wrap'>
            <div className='w-80 h-80'>
                <img src="/images/image5.jpg" alt="" className='w-full h-auto  ' />
            </div>
            <div className='max-w-md border rounded shadow p-6 bg-white w-96'>
              <h2 className='font-semibold'>Codding shirt </h2>
              <div className="flex pt-2  gap-2">
               <CheckIcon className='text-lime-500 w-5 h-5'/>
               <span className='font-semibold'>In stock</span>
               <Shared/>
              </div>
              <div className='mt-4 border-t pt-4'>
                <p className='text-gray-500'>Price:</p>
                <p className='text-gray-500 text-xl font-semibold'>3000</p>
              </div>
              <Addtocart/>
            </div>
        </div>
        <p className=' text-2xl mt-28'>this will cointent product discreption </p>
   </div>
  )
}

export default Product

