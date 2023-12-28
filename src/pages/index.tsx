import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useLiveQuery } from 'next-sanity/preview'

import Card from '~/components/Card'
import Container from '~/components/Container'
import Footer from '~/components/Footer'
import Header from '~/components/Header'
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

  const tagList = products.map((tag) => {
    return tag.tag
  })
  const uniqueTags = [...new Set(tagList)]

  return (
    <Container>
      <Header />
      <Hero />
      <div className="sm:mx-8 mb-20 lg:mx-40">
        <Heading />
        <section className="px-4 lg:px-0">
          <div className="flex justify-between mx-5">
            <h2 className="mb-4 uppercase ">Featured products</h2>
            <div className="flex flex-row gap-2 invisible md:visible mb-5">
              <p className="">Sort:</p>
              {uniqueTags.map((tag) => (
                <button
                  key={tag}
                  className="border-solid border border-black-100 px-2 text-sm"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
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
      </div>
      <Footer />
    </Container>
  )
}
