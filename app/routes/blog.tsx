import { FunctionComponent } from 'react'
import type { MetaFunction, LoaderFunction } from 'remix'
import { json, useLoaderData } from 'remix'

import { BlogHero, BlogPosts } from '~/contents'
import { createMeta } from '~/utils'

import { getEnv } from '~/utils'

import { Container, H, P } from '~/components'

export const meta: MetaFunction = () => {
  return createMeta({
    route: 'blog',
    title: 'Blog posts by M Haidar Hanif',
    description:
      'Collection of ideas, stories, thoughts, learnings, and various sharings. Usually around life, career, tech, software engineering, web development, and multiple topics.',
  })
}

// export type LoaderData = {
// }

export const loader: LoaderFunction = async ({ request }) => {
  const data = [
    {
      title: 'Hello',
    },
    {
      title: 'World',
    },
  ]
  return json(data)
}

export default function Blog() {
  const posts = useLoaderData()

  return (
    <>
      <BlogHero />
      <BlogPosts posts={posts} />
    </>
  )
}
