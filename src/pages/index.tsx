import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useLiveQuery } from 'next-sanity/preview'

import Card from '~/components/Card'
import Container from '~/components/Container'
import Welcome from '~/components/Welcome'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import {
  getProducts,
  postsQuery,
  type Product,
  productsQuery,
} from '~/lib/sanity.queries'
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
  console.log('Products: ', products)
  return (
    <Container>
      <section className="p-24">
        {products.length ? (
          products.map((product) => (
            <Card key={product._id} product={product} />
          ))
        ) : (
          <Welcome />
        )}
      </section>
    </Container>
  )
}
