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
    heroName: 'Tokyo Tower',
    heroImage:
      'https://images.unsplash.com/photo-1590335795853-328746287696?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
    heroImageAlign: 'bottom',
    heroImageBlurhash: 'L35z]*WV0#s:1fjs|[oL+voLKOR+',
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
          <AboutStory />
        </Container>
      </Content>
    </>
  )
}
