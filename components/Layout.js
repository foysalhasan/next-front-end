import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'
import ShowCase from './ShowCase'

import Router, { useRouter } from 'next/router'

export default function Layout({
  title,
  description,
  keywords,
  children,
  page,
  img,
}) {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {router.pathname === '/' && <ShowCase title={page} />}
      {router.pathname === '/about' && <ShowCase title={page} img={img} />}
      <div className="container py-10">{children}</div>
      <Footer />
    </>
  )
}
Layout.defaultProps = {
  title: 'DJ Events | Enjoy Hottest Events',
  description: 'Just find the latest DJ Party from Home',
  keywords: 'DJ, Events, Party, Show, Music',
  img: null,
}
