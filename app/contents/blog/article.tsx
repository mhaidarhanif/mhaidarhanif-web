import { FunctionComponent } from 'react'

import {
  Article,
  ArticleHeader,
  ArticleSection,
  H,
  Markdown,
  P,
} from '~/components'
import type { TBlogArticle } from '~/types'
import { getCompleteDate } from '~/utils'

interface BlogArticleProps {
  article: TBlogArticle
}

export const BlogArticle: FunctionComponent<BlogArticleProps> = ({
  article,
}) => {
  const contentMarkdown = String(article?.content?.markdown)

  return (
    <Article>
      <ArticleHeader>
        <H as="h1" font="normal">
          {article.title}
        </H>
        <P>{getCompleteDate(article.date)}</P>
      </ArticleHeader>

      <ArticleSection>
        <Markdown>{contentMarkdown}</Markdown>
      </ArticleSection>
    </Article>
  )
}
