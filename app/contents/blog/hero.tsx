import { FunctionComponent } from 'react'

import { Hero, H, P, Article, ArticleSection } from '~/components'

export const BlogHero: FunctionComponent = () => (
  <Hero>
    <Article>
      <H as="h1">Blog</H>
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
