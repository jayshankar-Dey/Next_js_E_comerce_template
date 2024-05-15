import Link from 'next/link'
  export default function ProductLayout({ children }) {
   return (
      <html lang="en">
        <body>
        <Link href="/products" className='inline-block text-orange-400 p-4 font-bold hover:underline'>All Products{">"}</Link>
          {children}
          </body>
      </html>
    )
  }
  