import { json, LoaderFunction, MetaFunction } from 'remix'

import { Article, H, Hero } from '~/components'
import { createMeta } from '~/utils'

export const meta: MetaFunction = () =>
  createMeta({
    route: 'slug name',
    title: 'Blog article title',
    description: 'Blog article description',
  })

export const loader: LoaderFunction = async () => {
  throw json({
    message: '',
  })
}

export default function BlogSlug() {
  return (
    <Hero>
      <Article>
        <H as="h1">Blog article title</H>
      </Article>
    </Hero>
  )
}
