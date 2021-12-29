import type { MetaFunction } from 'remix'

import { Hero, H, P, Article, ArticleSection } from '~/components'
import { createMeta } from '~/utils'

export const meta: MetaFunction = () => {
  return createMeta({
    route: 'projects',
    title: 'Projects by M Haidar Hanif',
    description: 'Various projects, apps, websites, and things to use.',
  })
}

export default function Projects() {
  return (
    <>
      <Hero>
        <Article>
          <H as="h1">Projects</H>
          <ArticleSection>
            <P>
              Various projects, apps, websites, and things to use. All
              experiments are open source!
            </P>
          </ArticleSection>
          <ArticleSection>
            <P>Coming soon here.</P>
          </ArticleSection>
        </Article>
      </Hero>
    </>
  )
}
