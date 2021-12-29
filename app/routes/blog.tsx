import type { MetaFunction } from 'remix'

import { BlogHero, BlogPosts } from '~/contents'
import { createMeta } from '~/utils'

export const meta: MetaFunction = () => {
  return createMeta({
    route: 'blog',
    title: 'Blog posts by M Haidar Hanif',
    description:
      'Collection of ideas, stories, thoughts, learnings, and various sharings. Usually around life, career, tech, software engineering, web development, and multiple topics.',
  })
}

export default function Blog() {
  return (
    <>
      <BlogHero />
      <BlogPosts />
    </>
  )
}
