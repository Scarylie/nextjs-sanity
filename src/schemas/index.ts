import { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import hero from './hero'
import post from './post'
import product from './product'

export const schemaTypes = [post, product, hero, blockContent]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, product, hero, blockContent],
}
