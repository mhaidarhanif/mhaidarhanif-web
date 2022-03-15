import { FunctionComponent } from 'react'

import { Article, ArticleHeader, ArticleSection, H } from '~/components'
import type { TBlogArticle } from '~/types'

interface BlogArticleProps {
  article: TBlogArticle
}

export const BlogArticle: FunctionComponent<BlogArticleProps> = ({
  article,
}) => (
  <Article>
    <ArticleHeader>
      <H as="h3" font="normal">
        {article.title}
      </H>
    </ArticleHeader>

    <ArticleSection>
      {JSON.stringify(article?.content?.markdown)}
    </ArticleSection>
  </Article>
)
