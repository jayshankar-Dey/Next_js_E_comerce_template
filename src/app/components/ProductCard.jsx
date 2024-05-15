
import Link from 'next/link'
const ProductCard = () => {
  return (
    <Link href="/products/p1" className='w-full sm:w-60 h-64 rounded hover:shadow-lg transition-all border border-gray-200'>
    <img src="/images/images (3).jpg" className='w-full h-40 ' />
       <div className="flex justify-between p-2">
          <div>
                <h1 className='font-bold '> codding shirt 1</h1>
                <p className='w-40 truncate'> adipisicing elit. Suscipit nemo, sapiente aut iure ipsam officia.</p>
          </div>
          <div className='text-green-500 py-2 font-bold'>
            2000
          </div>
       </div>
   </Link>
  )
}

export default ProductCard
