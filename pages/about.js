import Link from 'next/link'
import Layout from '../components/Layout'
import avt from '../public/images/avt.webp'

export default function about() {
  return (
    <Layout title="About | DJ Events" page="About Us" img={avt}>
      <h1 className="text-orange-700">About Page</h1>
    </Layout>
  )
}
