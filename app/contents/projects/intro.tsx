import { FunctionComponent } from 'react'

import {
  Article,
  ArticleSection,
  H,
  P,
  ArticleHeader,
  AnchorIcon,
  Tooltip,
} from '~/components'

export const ProjectsIntro: FunctionComponent = () => (
  <Article>
    <ArticleHeader>
      <H as="h1">Projects</H>
      <H as="ja">
        <Tooltip content="Purojekuto">プロジェクト</Tooltip>
      </H>
    </ArticleHeader>

    <ArticleSection>
      <P>
        Various projects, apps, websites, and things to use and learn from. All
        experiments are open source!
      </P>
    </ArticleSection>
    <ArticleSection>
      <P>Coming soon here.</P>
      <P>
        In the meantime you can visit{' '}
        <AnchorIcon name="github" href="https://a.mhaidarhanif.com/github">
          my GitHub profile
        </AnchorIcon>
        .
      </P>
    </ArticleSection>
  </Article>
)
