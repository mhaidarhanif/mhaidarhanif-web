import { json, useLoaderData } from 'remix'

import type { MetaFunction, LoaderFunction } from 'remix'
import { BlogHero, BlogArticles } from '~/contents'
import type { BlogArticle } from '~/types'
import { createMeta, getEnvServer } from '~/utils'

export const meta: MetaFunction = () =>
  createMeta({
    route: 'blog',
    title: 'Blog articles by M Haidar Hanif',
    description:
      'Collection of ideas, stories, thoughts, learnings, and various sharings. Usually around life, career, tech, software engineering, web development, and multiple topics.',
  })

export type BlogLoaderData = BlogArticle[]

export const loader: LoaderFunction = async () => {
  const apiUrl = getEnvServer('KONTENBASE_API_URL')
  const response = await fetch(`${apiUrl}/posts`)
  const articles = await response.json()
  return json({ articles })
}

export default function Blog() {
  const data = useLoaderData()

  return (
    <>
      <BlogHero />
      <BlogArticles articles={data.articles} />
    </>
  )
}
