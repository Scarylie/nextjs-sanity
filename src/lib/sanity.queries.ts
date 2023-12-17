import type { PortableTextBlock } from '@portabletext/types'
import type { ImageAsset, Slug } from '@sanity/types'
import groq from 'groq'
import { type SanityClient } from 'next-sanity'

export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`
export const productsQuery = groq`*[_type == "product" && defined(slug.current)] | order(_createdAt desc)`
export const heroQuery = groq`*[_type == "product" && defined(slug.current)] | order(_createdAt desc)`

export async function getPosts(client: SanityClient): Promise<Post[]> {
  return await client.fetch(postsQuery)
}
export async function getProducts(client: SanityClient): Promise<Product[]> {
  return await client.fetch(productsQuery)
}
export async function getHero(client: SanityClient): Promise<Hero[]> {
  return await client.fetch(heroQuery)
}

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]`

export async function getPost(
  client: SanityClient,
  slug: string,
): Promise<Post> {
  return await client.fetch(postBySlugQuery, {
    slug,
  })
}

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export interface Post {
  _type: 'post'
  _id: string
  _createdAt: string
  title?: string
  slug: Slug
  excerpt?: string
  mainImage?: ImageAsset
  body: PortableTextBlock[]
}

export interface Product {
  _type: 'product'
  _id: string
  _createdAt: string
  title?: string
  category: string
  slug: Slug
  price: number
  tag: string
  mainImage?: ImageAsset
}

export interface Hero {
  _type: 'hero'
  _id: string
  _createdAt: string
  title?: string
  subtext?: string
  overline?: string
  slug: Slug
  mainImage?: ImageAsset
}
