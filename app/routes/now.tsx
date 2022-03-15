import type { MetaFunction } from 'remix'
import { Hero, HeroImage, Content, Container } from '~/components'
import { NowIntro } from '~/contents'
import { createMeta } from '~/utils'

export const meta: MetaFunction = () =>
  createMeta({
    route: 'now',
    title: 'What Haidar is doing now?',
    description: `Sometimes I know, sometimes I don't know what I'm doing.`,
  })

export default function Now() {
  const frontmatter = {
    heroName: 'Mount Fuji',
    heroImage:
      'https://images.unsplash.com/photo-1609207436629-47a022570fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
    heroImageAlign: 'center',
    heroImageBlurhash: 'LcDwy]IpxuoJ*0ofRPj[E4ofRPWV',
  }

  return (
    <>
      <Hero>
        <HeroImage
          alt={frontmatter.heroName}
          src={frontmatter.heroImage}
          align={frontmatter.heroImageAlign}
          blurhash={frontmatter.heroImageBlurhash}
        />
      </Hero>

      <Content>
        <Container>
          <NowIntro />
        </Container>
      </Content>
    </>
  )
}
