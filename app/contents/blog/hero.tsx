import { FunctionComponent } from 'react'

import {
  Hero,
  H,
  P,
  Article,
  ArticleSection,
  ArticleHeader,
} from '~/components'

export const BlogHero: FunctionComponent = () => (
  <Hero>
    <Article>
      <ArticleHeader>
        <H as="h1">Blog</H>
        <H as="ja">ブログ</H>
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
