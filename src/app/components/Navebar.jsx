import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
function Navebar() {
  return (
   <nav className="bg-white  p-3 flex justify-between"> 
     <Link href="/" className="mx-3 text-orange-500 font-bold text-3xl ">Next Store</Link>
     <Link href="/cart" className="text-orange-500 px-4 py-2 font-bold hover:text-red-600 cursor-pointer">
      <ShoppingCartIcon className="w-7 h-7  inline-block"/> cart
      <span>(0)</span>
     </Link>
   </nav>
  )
}

export default Navebar



