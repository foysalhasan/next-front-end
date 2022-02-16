import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-300 py-2">
      <div className="container flex-col lg:flex lg:flex-row text-center lg:text-left items-center justify-between">
        <p className="text-gray-800 uppercase text-sm font-mont font-medium">
          CopyRight &copy; 2022 | Developed By{' '}
          <span className="text-orange-700 font-semibold">Foysal Hasan</span>
        </p>
        <Link href="/about">
          <a className="uppercase text-sm font-semibold font-mont hover:text-orange-700">
            About Us
          </a>
        </Link>
      </div>
    </footer>
  )
}
