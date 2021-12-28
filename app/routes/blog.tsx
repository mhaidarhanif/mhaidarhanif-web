import { Hero, H, P } from '~/components'

export default function Blog() {
  return (
    <>
      <Hero>
        <div>
          <H as="h1">Blog</H>
          <P>
            Collection of ideas, stories, thoughts, learnings, and various
            sharings. Usually around life, career, tech, software engineering,
            web development, and multiple topics.
          </P>
        </div>
      </Hero>
    </>
  )
}
