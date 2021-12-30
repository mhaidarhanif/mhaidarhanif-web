import { json, useLoaderData } from 'remix'

import type { MetaFunction, LoaderFunction } from 'remix'
import { BlogHero, BlogPosts } from '~/contents'
import type { BlogPost } from '~/types'
import { createMeta, getEnvServer } from '~/utils'

export const meta: MetaFunction = () =>
  createMeta({
    route: 'blog',
    title: 'Blog posts by M Haidar Hanif',
    description:
      'Collection of ideas, stories, thoughts, learnings, and various sharings. Usually around life, career, tech, software engineering, web development, and multiple topics.',
  })

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
