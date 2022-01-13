import type { MetaFunction } from 'remix'
import {
  Hero,
  H,
  P,
  Article,
  ArticleSection,
  ArticleHeader,
  Anchor,
} from '~/components'
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
        <ArticleHeader>
          <H as="h1">Now</H>
          <H as="ja">今</H>
        </ArticleHeader>

        <ArticleSection>
          <P>The Now page is coming soon here.</P>
        </ArticleSection>

        <ArticleSection>
          <P>References:</P>
          <ul>
            <li>
              <Anchor href="https://sive.rs/nowff">
                The /now page movement by Derek Sivers
              </Anchor>
            </li>
          </ul>
        </ArticleSection>
      </Article>
    </Hero>
  )
}
