import { FunctionComponent } from 'react'
import { Link } from 'remix'

import {
  Hero,
  H,
  P,
  SocialMediaLinks,
  LinkButton,
  Article,
  ArticleSection,
} from '~/components'

export const BlogHero: FunctionComponent = () => {
  return (
    <Hero>
      <Article>
        <H as="h1">Blog</H>
        <ArticleSection>
          <P>
            Collection of ideas, stories, thoughts, learnings, and various
            sharings. Usually around life, career, tech, software engineering,
            web development, and multiple topics.
          </P>
        </ArticleSection>
      </Article>
    </Hero>
  )
}
