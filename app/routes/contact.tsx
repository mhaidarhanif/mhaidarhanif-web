import type { MetaFunction } from 'remix'

import { Hero, H, P, Article, ArticleSection } from '~/components'
import { createMeta } from '~/utils'

export const meta: MetaFunction = () => {
  return createMeta({
    route: 'contact',
    title: 'Contact M Haidar Hanif',
    description: '',
  })
}

export default function Contact() {
  return (
    <>
      <Hero>
        <Article>
          <H as="h1">Contact</H>
          <ArticleSection>
            <P>Coming soon here.</P>
          </ArticleSection>
        </Article>
      </Hero>
    </>
  )
}
