import Image from 'next/image'

import { urlForImage } from '~/lib/sanity.image'
import { type Product } from '~/lib/sanity.queries'
import { formatDate } from '~/utils'

export default function Card({ product }: { product: Product }) {
  return (
    <div className="card">
      {product.mainImage ? (
        <Image
          className="card__cover"
          src={urlForImage(product.mainImage).width(500).height(300).url()}
          height={300}
          width={500}
          alt=""
        />
      ) : (
        <div className="card__cover--none" />
      )}
      <div className="card__container">
        <h3 className="card__title">
          <a className="card__link" href={`/post/${product.slug.current}`}>
            {product.title}
          </a>
        </h3>
        <p>{product.category}</p>
        <p className="font-bold">€{product.price}</p>
        <p>{product.tag}</p>
      </div>
    </div>
  )
}
