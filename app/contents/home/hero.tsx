import { FunctionComponent } from 'react'

import {
  Container,
  Hero,
  Center,
  Avatar,
  AvatarImage,
  Anchor,
  H,
  P,
} from '~/components'

export const HomeHero: FunctionComponent = () => {
  return (
    <Hero>
      <Center>
        <Avatar size="5">
          <AvatarImage
            src="/photos/mhaidarhanif-cyan.jpeg"
            alt="M Haidar Hanif"
          />
        </Avatar>
        <H as="h1">M Haidar Hanif</H>
      </Center>
      <Center layout="vertical-adaptive">
        <P>
          🧑🏻‍🏫 Educator / Mentor 🧑🏻‍💻 Software Engineer / Full Stack Web
          Developer
        </P>
        <P>
          ⚡ Helping people in web development, software engineering, and tech
          business
        </P>
        <P>
          Founder of <Anchor href="https://catamyst.com">Catamyst</Anchor> •
          DevRel Lead of{' '}
          <Anchor href="https://kontenbase.com">Kontenbase</Anchor> • Community
          of{' '}
          <Anchor href="https://github.com/highskillmasters">
            High Skill Masters
          </Anchor>
        </P>
      </Center>
    </Hero>
  )
}
