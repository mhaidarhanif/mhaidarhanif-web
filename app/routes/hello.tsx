import type { MetaFunction } from 'remix'
import { Hero, HeroImage, Content, Container } from '~/components'
import { HelloIntro } from '~/contents'
import { createMeta } from '~/utils'

export const meta: MetaFunction = () =>
  createMeta({
    route: 'hello',
    title: 'Hello from visitors and friends - M Haidar Hanif',
    description:
      'Some kind of a guestbook which you can say anything. Hello. Halo. こんにちは. Bonjour. 안녕하세요. Kamusta. 你好. สวัสดี. مرحبا',
  })

export default function Hello() {
  const frontmatter = {
    heroName: 'Hello with Pen',
    heroImage:
      'https://images.unsplash.com/photo-1587303988571-c5563c0bceab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    heroImageAlign: 'bottom',
  }

  return (
    <>
      <Hero>
        <HeroImage
          alt={frontmatter.heroName}
          src={frontmatter.heroImage}
          align={frontmatter.heroImageAlign}
        />
      </Hero>

      <Content>
        <Container>
          <HelloIntro />
        </Container>
      </Content>
    </>
  )
}
