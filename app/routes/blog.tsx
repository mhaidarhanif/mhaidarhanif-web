import { FunctionComponent } from 'react'
import type { MetaFunction, LoaderFunction } from 'remix'
import { json, useLoaderData } from 'remix'

import { BlogHero, BlogPosts } from '~/contents'
import { Container, H, P } from '~/components'
import { createMeta, getEnv, getEnvServer } from '~/utils'
import type { BlogPost } from '~/types'

export const meta: MetaFunction = () => {
  return createMeta({
    route: 'blog',
    title: 'Blog posts by M Haidar Hanif',
    description:
      'Collection of ideas, stories, thoughts, learnings, and various sharings. Usually around life, career, tech, software engineering, web development, and multiple topics.',
  })
}

export type BlogLoaderData = BlogPost[]

export const loader: LoaderFunction = async () => {
  const apiUrl = getEnvServer('KONTENBASE_API_URL')
  const response = await fetch(`${apiUrl}/posts`)
  const posts = await response.json()
  return json({ posts })
}

export default function Blog() {
  const data = useLoaderData()

  return (
    <>
      <BlogHero />
      <BlogPosts posts={data.posts} />
    </>
  )
}
