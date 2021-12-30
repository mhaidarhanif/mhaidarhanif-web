import type { MetaFunction } from 'remix'
import { Hero, H, P, Article, ArticleSection } from '~/components'
import { createMeta } from '~/utils'

export const meta: MetaFunction = () =>
  createMeta({
    route: 'now',
    title: 'What are you doing now? - M Haidar Hanif',
    description: '',
  })

export default function Now() {
  return (
    <Hero>
      <Article>
        <H as="h1">Now</H>
        <ArticleSection>
          <P>Coming soon here.</P>
        </ArticleSection>
      </Article>
    </Hero>
  )
}
