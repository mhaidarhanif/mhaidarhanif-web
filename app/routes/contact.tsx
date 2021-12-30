import type { MetaFunction } from 'remix'

import {
  Hero,
  H,
  P,
  Article,
  ArticleSection,
  SocialMediaLinks,
} from '~/components'
import { createMeta } from '~/utils'

export const meta: MetaFunction = () => {
  return createMeta({
    route: 'contact',
    title: 'Contact M Haidar Hanif',
    description: 'Contact channels and social media.',
  })
}

export default function Contact() {
  return (
    <>
      <Hero>
        <Article>
          <H as="h1">Contact</H>
          <ArticleSection>
            <P>There will be a contact form here for convenience.</P>
          </ArticleSection>
          <ArticleSection>
            <P>
              Until that, the best way would be reaching me via social media
              that I use often for external communication:
            </P>
            <SocialMediaLinks
              enabledLinks={['Twitter', 'GitHub', 'LinkedIn']}
            />
          </ArticleSection>
        </Article>
      </Hero>
    </>
  )
}
