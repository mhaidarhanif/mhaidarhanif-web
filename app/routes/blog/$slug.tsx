import { gql } from '@urql/core'
import { json, LoaderFunction, MetaFunction, useLoaderData } from 'remix'

import { Container, Content, Hero, HeroImage } from '~/components'
import { BlogArticle, BlogArticleNotFound } from '~/contents'
import { graphcmsClient } from '~/lib'
import { TBlogArticle } from '~/types'
import { createMeta } from '~/utils'

export const meta: MetaFunction = ({ data }) => {
  if (!data.article) {
    return createMeta({
      route: data.slug,
      title: 'No blog article found — M Haidar Hanif',
      description:
        'Sorry, no blog article found. Please check the URL again. Thanks!',
    })
  }
  return createMeta({
    route: data.slug,
    title: `${data?.article?.title} — Blog Article — M Haidar Hanif`,
    description: data?.article?.description,
  })
}

export const loader: LoaderFunction = async ({ params }) => {
  const { slug } = params

  const queryOneArticleBySlug = gql`
    query OneArticle($slug: String!) {
      article(where: { slug: $slug }) {
        id
        slug
        title
        date
        content {
          markdown
        }
      }
    }
  `
  const response = await graphcmsClient
    .query(queryOneArticleBySlug, { slug })
    .toPromise()

  const { article } = response.data

  return json({
    slug,
    article,
  })
}

export default function BlogArticleSlug() {
  const data = useLoaderData<{
    slug: string
    article: TBlogArticle
  }>()

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
          <BlogArticle article={data.article} />
        </Container>
      </Content>
    </>
  )
}

export function ErrorBoundary({ error }: { error: Error }) {
  // eslint-disable-next-line no-console
  console.error(error)

  return (
    <Content>
      <Container>
        <BlogArticleNotFound />
      </Container>
    </Content>
  )
}
