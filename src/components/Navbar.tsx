import Link from "next/link"
import { Oswald } from '@next/font/google'

const oswald = Oswald({
    subsets: ['latin'],
    weight: ['400', '500', '700']
})

const Navbar: React.FC = () => {
  return (
    <nav className="bg-customBg text-white p-4 flex justify-around items-center">
        <img src="/logo.png" className='h-76px max-w-full' alt="" />
        <ul className="flex space-x-8">
            <li>
                <Link href='/' className="no-underline" >
                    Home
                </Link>
            </li>
            <li>
                <Link href='/menu' className="no-underline">
                    Menu
                </Link>
            </li><li>
                <Link href='/reservation' className="no-underline">
                    Make a Reservation
                </Link>
            </li><li>
                <Link href='/contact' className="no-underline">
                    Contact Us
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar;