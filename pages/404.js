import Layout from '../components/Layout'
import Image from 'next/image'

import Error from '../public/images/notfound.png'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Layout title="Not Found">
      <div className="w-full max-w-xl mx-auto">
        <Image src={Error} alt="Not Found" lazyRoot="fill" />
      </div>
      <div className="text-center mt-5">
        <Link href="/">
          <a className="btn">Go back</a>
        </Link>
      </div>
    </Layout>
  )
}
