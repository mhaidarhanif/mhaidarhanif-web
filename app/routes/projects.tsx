import type { MetaFunction } from 'remix'
import { Hero, HeroImage, Content, Container } from '~/components'
import { ProjectsIntro } from '~/contents'
import { createMeta } from '~/utils'

export const meta: MetaFunction = () =>
  createMeta({
    route: 'projects',
    title: 'Projects by M Haidar Hanif',
    description: 'Various projects, apps, websites, and things to use.',
  })

export default function Projects() {
  const frontmatter = {
    heroName: 'Real Life Gundam',
    heroImage:
      'https://images.unsplash.com/photo-1631791440984-dfad1c779742?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80',
    heroImageAlign: 'top',
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
          <ProjectsIntro />
        </Container>
      </Content>
    </>
  )
}
