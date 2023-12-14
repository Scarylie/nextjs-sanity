import { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import post from './post'
import product from './product'

export const schemaTypes = [post, product, blockContent]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, product, blockContent],
}
