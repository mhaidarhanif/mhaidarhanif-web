import { FunctionComponent } from 'react'

import {
  Article,
  ArticleSection,
  H,
  P,
  ArticleHeader,
  Anchor,
} from '~/components'

export const NowIntro: FunctionComponent = () => (
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
)
