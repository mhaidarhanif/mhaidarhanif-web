import { FunctionComponent } from 'react'

import {
  Article,
  ArticleSection,
  H,
  P,
  ArticleHeader,
  Tooltip,
} from '~/components'

export const DashboardIntro: FunctionComponent = () => (
  <Article>
    <ArticleHeader>
      <H as="h1">Dashboard</H>
      <H as="ja">
        <Tooltip content="Dasshubōdo">ダッシュボード</Tooltip>
      </H>
    </ArticleHeader>

    <ArticleSection>
      <P>
        Personal dashboard that contains statistics and links. From different
        platforms such as Twitter, GitHub, YouTube, Spotify, Splitbee (web
        analytics), Posthog (product analytics), visitors, subscribers, revenue,
        and so on.
      </P>
    </ArticleSection>
    <ArticleSection>
      <P>Coming soon here.</P>
    </ArticleSection>
  </Article>
)
