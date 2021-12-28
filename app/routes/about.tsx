import { Hero, Avatar, AvatarImage, H, P } from '~/components'

export default function About() {
  return (
    <>
      <Hero>
        <div>
          <H as="h1">About</H>
          <P>
            Haidar is an Educator or Mentor by mission. Software Engineer and
            Full Stack Web Developer by career. Husband and father by life.
          </P>
          <P>
            Mostly helping people in web development, software engineering, and
            tech business.
          </P>
          <P>
            Currently founding Catamyst, a learning platform for modern career
            in tech. Developer Relations Lead of Kontenbase, a backend as a
            service platform. Community Lead of High Skill Masters, a gathering
            of highly skilled professionals.
          </P>
        </div>
      </Hero>
    </>
  )
}
