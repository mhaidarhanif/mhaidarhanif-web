import { FunctionComponent } from 'react'

import { Article, ArticleSection, H, P, ArticleHeader } from '~/components'

export const ProjectsIntro: FunctionComponent = () => (
  <Article>
    <ArticleHeader>
      <H as="h1">Projects</H>
      <H as="ja">プロジェクト</H>
    </ArticleHeader>

    <ArticleSection>
      <P>
        Various projects, apps, websites, and things to use. All experiments are
        open source!
      </P>
    </ArticleSection>
    <ArticleSection>
      <P>Coming soon here.</P>
    </ArticleSection>
  </Article>
)
