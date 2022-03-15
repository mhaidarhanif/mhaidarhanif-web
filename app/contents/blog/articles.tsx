import { FunctionComponent } from 'react'

import { ArticleCard, Container, H, Link, P, Stack } from '~/components'
import type { TBlogArticle } from '~/types'

interface BlogArticleProps {
  articles: TBlogArticle[]
}

export const BlogArticles: FunctionComponent<BlogArticleProps> = ({
  articles,
}) => (
  <Container>
    <Stack>
      {articles.map((article) => (
        <Link key={article.id} to={`/blog/${article.slug}`}>
          <ArticleCard>
            <H as="h4">{article.title}</H>
            <P css={{ mb: 0, opacity: '0.5' }}>{article.excerpt}</P>
          </ArticleCard>
        </Link>
      ))}
    </Stack>
  </Container>
)
