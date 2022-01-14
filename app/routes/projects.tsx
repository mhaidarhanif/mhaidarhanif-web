import type { MetaFunction } from 'remix'
import {
  Hero,
  HeroImage,
  Content,
  Container,
} from '~/components'
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
          <ProjectsIntro />
        </Container>
      </Content>
    </>
  )
}
