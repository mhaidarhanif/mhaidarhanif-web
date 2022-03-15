import { FunctionComponent } from 'react'

import {
  Hero,
  H,
  P,
  Article,
  ArticleSection,
  ArticleHeader,
  Tooltip,
} from '~/components'

export const BlogIntro: FunctionComponent = () => (
  <Hero>
    <Article>
      <ArticleHeader>
        <H as="h1">Blog</H>
        <H as="ja">
          <Tooltip content="Burogu">ブログ</Tooltip>
        </H>
      </ArticleHeader>

      <ArticleSection>
        <P>
          Collection of ideas, stories, thoughts, learnings, and various
          sharings. Usually around life, career, tech, software engineering, web
          development, and multiple topics.
        </P>
      </ArticleSection>
    </Article>
  </Hero>
)
