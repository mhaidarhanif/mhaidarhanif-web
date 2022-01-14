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
    heroName: 'Mount Fuji',
    heroImage:
      'https://ik.imagekit.io/mhaidarhanif/covers/mount-fuji-akira-deng-unsplash_kt06XGXOUmD.jpeg?updatedAt=1642112456388',
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
