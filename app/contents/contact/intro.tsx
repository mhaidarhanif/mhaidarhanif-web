import { FunctionComponent } from 'react'

import {
  Article,
  ArticleSection,
  H,
  P,
  ArticleHeader,
  SocialMediaLinks,
  Tooltip,
} from '~/components'

export const ContactIntro: FunctionComponent = () => (
  <Article>
    <ArticleHeader>
      <H as="h1">Contact</H>
      <H as="ja">
        <Tooltip content="Renraku">連絡</Tooltip>
      </H>
    </ArticleHeader>

    <ArticleSection>
      <P>There will be a contact form here for convenience.</P>
      <form action="/">
        <input type="email" placeholder="email@domain.com" />
      </form>
    </ArticleSection>

    <ArticleSection>
      <P>
        Until that, the best way would be reaching me via social media that I
        use often for external communication:
      </P>
      <SocialMediaLinks
        withName
        enabledLinks={['Twitter', 'GitHub', 'LinkedIn']}
      />
    </ArticleSection>
  </Article>
)
