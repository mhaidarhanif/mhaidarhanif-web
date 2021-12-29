import type { MetaFunction } from 'remix'

import { Hero, H, P, Article, ArticleSection } from '~/components'
import { createMeta } from '~/utils'

export const meta: MetaFunction = () => {
  return createMeta({
    route: 'blog',
    title: 'Blog posts by M Haidar Hanif',
    description:
      'Collection of ideas, stories, thoughts, learnings, and various sharings. Usually around life, career, tech, software engineering, web development, and multiple topics.',
  })
}

export default function Blog() {
  return (
    <>
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
          <ArticleSection>
            <P>Coming soon here.</P>
          </ArticleSection>
        </Article>
      </Hero>
    </>
  )
}
