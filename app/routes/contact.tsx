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
    heroName: 'Japanese Mailbox',
    heroImage:
      'https://images.unsplash.com/photo-1582389881120-ea93ec8c1d10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    heroImageAlign: 'center',
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
          <ContactIntro />
        </Container>
      </Content>
    </>
  )
}
