import { json, useLoaderData } from 'remix'

import type { MetaFunction, LoaderFunction } from 'remix'
import { Container, Content, Hero, HeroImage } from '~/components'
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
  const frontmatter = {
    heroName: 'Book with Words',
    heroImage:
      'https://images.unsplash.com/photo-1581855339095-0c282d58527b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80',
    heroImageAlign: 'center',
  }

  return (
    <>
      <Hero>
        <HeroImage alt={frontmatter.heroName} src={frontmatter.heroImage} />
      </Hero>

      <Content>
        <Container>
          <BlogHero />
        </Container>
        <BlogArticles articles={data.articles} />
      </Content>
    </>
  )
}
