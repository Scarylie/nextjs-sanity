import Image from 'next/image'

import { urlForImage } from '~/lib/sanity.image'
import { type Hero } from '~/lib/sanity.queries'

export default function Hero({ hero }: { hero: Hero }) {
  return (
    <div className="card">
      {hero.mainImage ? (
        <Image
          className="card__cover"
          src={urlForImage(hero.mainImage).width(500).height(300).url()}
          height={300}
          width={500}
          alt=""
        />
      ) : (
        <div className="card__cover--none" />
      )}
      <div className="card__container">
        <h3 className="card__title">
          <a className="card__link" href={`/post/${hero.slug.current}`}>
            {hero.title}
          </a>
        </h3>
        <p>{hero.title}</p>
        <p className="font-bold">€{hero.subtext}</p>
        <p>{hero.overline}</p>
      </div>
    </div>
  )
}
