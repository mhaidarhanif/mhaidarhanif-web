import { Hero, H, P, Article, ArticleSection } from '~/components'

export default function Projects() {
  return (
    <>
      <Hero>
        <Article>
          <H as="h1">Projects</H>
          <ArticleSection>
            <P>Collection of projects, apps, websites, and things to use.</P>
          </ArticleSection>
          <ArticleSection>
            <P>Coming soon here.</P>
          </ArticleSection>
        </Article>
      </Hero>
    </>
  )
}
