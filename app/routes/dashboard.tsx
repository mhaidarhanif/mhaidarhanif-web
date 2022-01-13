import type { MetaFunction } from 'remix'
import {
  Hero,
  H,
  P,
  Article,
  ArticleSection,
  ArticleHeader,
} from '~/components'
import { createMeta } from '~/utils'

export const meta: MetaFunction = () =>
  createMeta({
    route: 'dashboard',
    title: 'Dashboard of M Haidar Hanif',
    description:
      'Personal dashboard that contains statistics and links. From different platforms such as Splitbee, Twitter, GitHub, YouTube, Spotify, subscribers, and revenue.',
  })

export default function Dashboard() {
  return (
    <Hero>
      <Article>
        <ArticleHeader>
          <H as="h1">Dashboard</H>
          <H as="ja">ダッシュボード</H>
        </ArticleHeader>

        <ArticleSection>
          <P>
            Personal dashboard that contains statistics and links. From
            different platforms such as Splitbee (web analytics), Twitter,
            GitHub, YouTube, Spotify, subscribers, revenue, and so on.
          </P>
        </ArticleSection>
        <ArticleSection>
          <P>Coming soon here.</P>
        </ArticleSection>
      </Article>
    </Hero>
  )
}
