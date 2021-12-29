import { Hero, H, P, Article, ArticleSection } from '~/components'

export default function Dashboard() {
  return (
    <>
      <Hero>
        <Article>
          <H as="h1">Dashboard</H>
          <ArticleSection>
            <P>
              Personal dashboard that contains . from different platforms such
              as Splitbee (web analytics), Twitter, GitHub, YouTube, Spotify,
              subscribers, revenue, and so on.
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
