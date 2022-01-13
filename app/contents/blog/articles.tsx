import { FunctionComponent } from 'react'

import { Container, H, P } from '~/components'
import type { BlogArticle } from '~/types'

interface BlogArticleProps {
  articles: BlogArticle[]
}

export const BlogArticles: FunctionComponent<BlogArticleProps> = ({
  articles,
}) => (
  <Container>
    <div>
      {articles.map((article) => (
        <div key={article._id}>
          <H as="h4">{article.title}</H>
          <P>{article.content}</P>
        </div>
      ))}
    </div>
  </Container>
)
