import Navebar from "./components/Navebar"
import './globals.css'
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className="bg-gray-100">
        <Navebar/>
        {children}
        </body>
    </html>
  )
}
