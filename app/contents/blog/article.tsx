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
        <H as="h2" font="normal">
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

interface BlogArticleNotFoundProps {
  data: any
}

export const BlogArticleError: FunctionComponent<BlogArticleNotFoundProps> = ({
  data,
}) => (
  <Article>
    {data.caught.status === 404 && (
      <ArticleHeader>
        <H as="h1" font="normal">
          Blog article not found
        </H>
        <P>
          Hey, looks like you've found a blog article that used to exist, or you
          spelled something wrong. Please check the URL again. Thanks!
        </P>
        <LinkButton to="/blog">Back to blog articles list</LinkButton>

        <hr />

        <P>
          The location path: <code>{data.location.pathname}</code>
        </P>
        <P>
          The article slug: <code>{data.params.articleSlug}</code>
        </P>
      </ArticleHeader>
    )}
  </Article>
)
