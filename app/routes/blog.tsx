import { Hero, H, P, Article, ArticleSection } from '~/components'

export default function Blog() {
  return (
    <>
      <Hero>
        <Article>
          <H as="h1">Blog</H>
          <ArticleSection>
            <P>
              Collection of ideas, stories, thoughts, learnings, and various
              sharings. Usually around life, career, tech, software engineering,
              web development, and multiple topics.
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
