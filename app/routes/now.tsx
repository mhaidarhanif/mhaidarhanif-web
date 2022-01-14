import type { MetaFunction } from 'remix'
import {
  Hero,
  HeroImage,
  Content,
  Container,
} from '~/components'
import { NowIntro } from '~/contents'
import { createMeta } from '~/utils'

export const meta: MetaFunction = () =>
  createMeta({
    route: 'now',
    title: 'What are you doing now? - M Haidar Hanif',
    description: '',
  })

export default function Now() {
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
          <NowIntro />
        </Container>
      </Content>
    </>
  )
}
