import type { MetaFunction } from 'remix'
import { Hero, Container, Content, HeroImage } from '~/components'
import { DashboardIntro } from '~/contents/dashboard'
import { createMeta } from '~/utils'

export const meta: MetaFunction = () =>
  createMeta({
    route: 'dashboard',
    title: 'Dashboard of M Haidar Hanif',
    description:
      'Personal dashboard that contains statistics and links. From different platforms such as Splitbee, Twitter, GitHub, YouTube, Spotify, subscribers, and revenue.',
  })

export default function Dashboard() {
  const frontmatter = {
    heroName: 'Assorted Sushi',
    heroImage:
      'https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80',
    heroImageAlign: 'center',
  }

  return (
    <>
      <Hero>
        <HeroImage alt={frontmatter.heroName} src={frontmatter.heroImage} />
      </Hero>

      <Content>
        <Container>
          <DashboardIntro />
        </Container>
      </Content>
    </>
  )
}
