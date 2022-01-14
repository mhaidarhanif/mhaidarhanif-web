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
    heroName: 'Mount Fuji',
    heroImage:
      'https://ik.imagekit.io/mhaidarhanif/covers/mount-fuji-akira-deng-unsplash_kt06XGXOUmD.jpeg?updatedAt=1642112456388',
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
