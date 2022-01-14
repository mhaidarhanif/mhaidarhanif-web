import { MetaFunction } from 'remix'

import { Hero, Container, HeroImage, Content } from '~/components'
import { AboutStory } from '~/contents/about'
import { createMeta } from '~/utils'

export const meta: MetaFunction = () =>
  createMeta({
    title: 'About M Haidar Hanif',
    description:
      'Get to know Haidar. The story and summary of life and career.',
    route: 'about',
  })

export default function About() {
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
          <AboutStory />
        </Container>
      </Content>
    </>
  )
}
