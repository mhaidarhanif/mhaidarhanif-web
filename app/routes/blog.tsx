import { useLoaderData } from '@remix-run/react'
import { gql } from '@urql/core'
import { json } from 'remix'

import type { MetaFunction, LoaderFunction } from 'remix'
import { Container, Content, Hero, HeroImage } from '~/components'
import { BlogArticles, BlogIntro } from '~/contents'
import { graphcmsClient } from '~/lib'
import type { TBlogArticle } from '~/types'
import { createMeta } from '~/utils'

export const meta: MetaFunction = () =>
  createMeta({
    route: 'blog',
    title: 'Blog articles by M Haidar Hanif',
    description:
      'Collection of ideas, stories, thoughts, learnings, and various sharings. Usually around life, career, tech, software engineering, web development, and multiple topics.',
  })

export type BlogLoaderData = TBlogArticle[]

export const loader: LoaderFunction = async () => {
  const queryAllArticles = gql`
    query AllArticles {
      articles {
        id
        slug
        title
        date
        excerpt
      }
    }
  `

  const response = await graphcmsClient.query(queryAllArticles).toPromise()
  const { articles } = response.data

  return json({
    articles,
  })
}

export default function Blog() {
  const data = useLoaderData<TBlogArticle[]>()

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
          <BlogIntro />
        </Container>

        <BlogArticles articles={data.articles} />
      </Content>
    </>
  )
}
