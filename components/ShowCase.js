import Image from 'next/image'
import showcase from '../public/images/showcase.jpg'

export default function ShowCase({ title, img }) {
  return (
    <div className="h-56 lg:h-[400px] w-full relative">
      <Image
        src={img || showcase}
        alt="showcase"
        layout="fill"
        className="object-cover object-top"
      />
      <div className="inset-0 flex z-10 absolute items-center justify-center bg-black bg-opacity-70 ">
        <h1 className="text-white text-center lg:text-left px-4 lg:text-6xl tracking-wide font-bold uppercase font-mont">
          {title ? (
            title
          ) : (
            <span>
              Enjoy Latest <span className="text-orange-600">DJ </span>Party
            </span>
          )}
        </h1>
      </div>
    </div>
  )
}
