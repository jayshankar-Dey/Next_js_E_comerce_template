
import { MinusIcon, PlusIcon, TrashIcon, XCircleIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
const Cartpage = () => {
    const cartCount = 1
    return (
        <div className='m-5 px-20'>
            {cartCount > 0 ? (
                <>
                    <h2 className='text-4xl font-semibold'>Cart Item:{cartCount}</h2>
                    <button className='text-orange-400 mt-2 font-bold hover:text-red-600 hover:cursor-pointer'> Cliear all<TrashIcon className='inline-block w-4 h-4' /></button>
                </>
            ) : (
                <>
                  <h2 className='text-4xl font-semibold'>Your shopping cart is empty</h2>
                  <Link href="/products" className='text-xl mt-2 text-orange-500'>Shop hear</Link>
                </>
            )}

            {
                cartCount > 0 && (
                    <div>

                    <div  className='flex justify-between border rounded-md p-4 my-2  bg-white hover:shadow-lg'>
                        <Link href="/products/p1">
                            <img src="/images/image5.jpg" alt="" className='w-20 h-20' />
                        </Link>
                        <div className='flex items-center gap-5'>
                             <div className='flex items-center gap-3'>
                                <button className='p-1 rounded-md text-orange-500 hover:bg-orange-700 hover:text-white '>
                                    <MinusIcon className='w-6 h-6 '/>
                                </button>
                                  <p className='font-semibold text-xl'>0</p>
                                <button className='p-1 rounded-md text-orange-500 hover:bg-orange-700 hover:text-white '>
                                    <PlusIcon className='h-6 w-6'/>
                                </button> 
                             </div>
                             <p>x <span className='text-xl font-semibold'>999</span></p>
                             <button className='text-orange-500'>
                                <XCircleIcon className='w-6 h-6'/>
                             </button>
                        </div>
                    </div>

                    <div className='flex flex-col items-end border-t py-4 mt-8'>
                        <p className='text-xl'>
                        Total <span className='font-bold text-green-500'>500</span>
                        </p>

                        <button className='mt-4 py-2 px-6  bg-orange-500 text-white rounded-lg hover:bg-red-500'>
                            Checkout
                        </button>
                    </div>

                    </div>
                )
            }
        </div>
    )
}

export default Cartpage