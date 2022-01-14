import type { MetaFunction } from 'remix'
import { Hero, HeroImage, Content, Container } from '~/components'
import { HelloIntro } from '~/contents'
import { createMeta } from '~/utils'

export const meta: MetaFunction = () =>
  createMeta({
    route: 'hello',
    title: 'Hello from visitors and friends',
    description:
      'Some kind of a guestbook which you can say anything. Hello. Halo. こんにちは. Bonjour. 안녕하세요. Kamusta. 你好. สวัสดี. مرحبا',
  })

export default function Hello() {
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
          <HelloIntro />
        </Container>
      </Content>
    </>
  )
}
