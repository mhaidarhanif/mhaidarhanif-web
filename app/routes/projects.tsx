import type { MetaFunction } from 'remix'
import {
  Hero,
  H,
  P,
  Article,
  ArticleSection,
  ArticleHeader,
} from '~/components'
import { createMeta } from '~/utils'

export const meta: MetaFunction = () =>
  createMeta({
    route: 'projects',
    title: 'Projects by M Haidar Hanif',
    description: 'Various projects, apps, websites, and things to use.',
  })

export default function Projects() {
  return (
    <Hero>
      <Article>
        <ArticleHeader>
          <H as="h1">Projects</H>
          <H as="ja">プロジェクト</H>
        </ArticleHeader>

        <ArticleSection>
          <P>
            Various projects, apps, websites, and things to use. All experiments
            are open source!
          </P>
        </ArticleSection>
        <ArticleSection>
          <P>Coming soon here.</P>
        </ArticleSection>
      </Article>
    </Hero>
  )
}
