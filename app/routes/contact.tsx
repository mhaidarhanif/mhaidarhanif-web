import type { MetaFunction } from 'remix'
import { Hero, HeroImage, Content, Container } from '~/components'
import { ContactIntro } from '~/contents'
import { createMeta } from '~/utils'

export const meta: MetaFunction = () =>
  createMeta({
    route: 'contact',
    title: 'Contact M Haidar Hanif',
    description: 'Contact channels and social media.',
  })

export default function Contact() {
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
          <ContactIntro />
        </Container>
      </Content>
    </>
  )
}
