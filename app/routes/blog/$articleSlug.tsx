/* eslint-disable no-console */
import { gql } from '@urql/core'
import {
  json,
  LoaderFunction,
  MetaFunction,
  useCatch,
  useLoaderData,
  useLocation,
  useParams,
} from 'remix'

import { Container, Content, Hero, HeroImage } from '~/components'
import { BlogArticle, BlogArticleError } from '~/contents'
import { graphcmsClient } from '~/lib'
import { TBlogArticle } from '~/types'
import { createMeta } from '~/utils'

export const meta: MetaFunction = ({ data }) => {
  if (!data?.article) {
    return createMeta({
      route: data?.slug,
      title: 'No blog article found — M Haidar Hanif',
      description:
        'Sorry, no blog article found. Please check the URL again. Thanks!',
    })
  }
  return createMeta({
    route: data?.article?.slug,
    title: `${data?.article?.title} — Blog Article — M Haidar Hanif`,
    description: data?.article?.description,
  })
}

export const loader: LoaderFunction = async ({ params }) => {
  const { articleSlug } = params

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
        coverImage {
          url(transformation: { image: { resize: { width: 2000 } } })
        }
      }
    }
  `
  const response = await graphcmsClient
    .query(queryOneArticleBySlug, { slug: articleSlug })
    .toPromise()

  const { article } = response.data

  if (!article) {
    throw json('Not Found', { status: 404 })
  }
  return json({
    slug: articleSlug,
    article,
  })
}

export default function BlogArticleSlug() {
  const data = useLoaderData<{
    slug: string
    article: TBlogArticle
  }>()

  const defaultHeroImageUrl =
    'https://images.unsplash.com/photo-1581855339095-0c282d58527b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80'
  
  const frontmatter = {
    heroName: 'Book with Words',
    heroImage: data.article?.coverImage?.url || defaultHeroImageUrl,
    heroImageAlign: 'center',
  }

  return (
    <>
      <Hero>
        <HeroImage
          src={frontmatter.heroImage}
          alt={frontmatter.heroName}
          height="tall"
        />
      </Hero>

      <Content>
        <Container>
          <BlogArticle article={data.article} />
        </Container>
      </Content>
    </>
  )
}

export function CatchBoundary() {
  const caught = useCatch()
  const params = useParams()
  const location = useLocation()

  return (
    <Content>
      <Container>
        <BlogArticleError data={{ caught, params, location }} />
      </Container>
    </Content>
  )
}
