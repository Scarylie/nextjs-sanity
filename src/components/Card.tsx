import Image from 'next/image'

import { urlForImage } from '~/lib/sanity.image'
import { type Product } from '~/lib/sanity.queries'

export default function Card({ product }: { product: Product }) {
  return (
    <div className="flex flex-col gap-4 relative">
      {product.mainImage ? (
        <Image
          src={urlForImage(product.mainImage).width(500).height(300).url()}
          height={300}
          width={500}
          alt=""
        />
      ) : (
        <div />
      )}
      <div className="flex flex-col lg:flex-row justify-between ">
        <div>
          <h3>
            <a href={`/post/${product.slug.current}`}>{product.title}</a>
          </h3>
          <p className="text-sm text-black/50">{product.category}</p>
          <div className="absolute top-4 left-4 bg-white px-2 uppercase text-sm text-green">
            {product.tag}
          </div>
        </div>
        <div>
          <p className="font-bold">€{product.price}</p>
        </div>
      </div>
    </div>
  )
}
