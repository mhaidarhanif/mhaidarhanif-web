import { FunctionComponent } from 'react'

import {
  Article,
  ArticleHeader,
  ArticleSection,
  H,
  LinkButton,
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

interface BlogArticleNotFoundProps {}

export const BlogArticleNotFound: FunctionComponent<
  BlogArticleNotFoundProps
> = () => (
  <Article>
    <ArticleHeader>
      <H as="h1" font="normal">
        Blog article not found
      </H>
      <P>
        Hey, looks like you've found something that used to exist, or you
        spelled something wrong. Please check the URL again. Thanks!
      </P>
      <LinkButton to="/blog">Back to blog articles list</LinkButton>
    </ArticleHeader>
  </Article>
)
