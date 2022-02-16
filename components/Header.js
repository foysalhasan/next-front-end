import Link from 'next/link'
import { FiBox } from 'react-icons/fi'

export default function Header() {
  return (
    <header className="bg-gray-900 py-2 shadow-lg">
      <div className="container flex items-center justify-between px-3">
        <div className="logo">
          <Link href="/" passHref>
            <a className="text-white text-lg lg:text-2xl font-mont flex items-center group ease-out">
              <FiBox className="text-3xl ease-out inline-block group-hover:text-white text-orange-500 mr-1" />
              <span className="font-bold ease-out group-hover:text-orange-500">
                DJ{' '}
                <span className="text-orange-500 ease-out group-hover:text-white">
                  E
                </span>
                VENTS
              </span>
            </a>
          </Link>
        </div>
        <nav className="flex flex-1 items-center justify-end text-sm capitalize">
          <Link href="/events">
            <a className="text-white/75 hover:text-orange-400 uppercase font-mont font-semibold tracking-wide">
              All Events
            </a>
          </Link>
        </nav>
      </div>
    </header>
  )
}
