import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useLiveQuery } from 'next-sanity/preview'

import Card from '~/components/Card'
import Container from '~/components/Container'
import Heading from '~/components/Heading'
import Hero from '~/components/Hero'
import Welcome from '~/components/Welcome'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { getProducts, postsQuery, type Product } from '~/lib/sanity.queries'
import type { SharedPageProps } from '~/pages/_app'

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    products: Product[]
  }
> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const products = await getProducts(client)

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      products,
    },
  }
}

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const [products] = useLiveQuery<Product[]>(props.products, postsQuery)

  return (
    <Container>
      <Hero />
      <Heading />
      <section className="px-4 lg:px-0">
        <h2 className="mb-4 uppercase">Featured products</h2>
        {products.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 uppercase">
            {products.map((product) => (
              <Card key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <Welcome />
        )}
      </section>
    </Container>
  )
}
