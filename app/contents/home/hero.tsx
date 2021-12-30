import { FunctionComponent } from 'react'

import {
  Anchor,
  Avatar,
  AvatarImage,
  Center,
  Hero,
  H,
  P,
  SocialMediaLinks,
  LinkButton,
  Article,
  ArticleSection,
  ButtonGroup,
} from '~/components'

export const HomeHero: FunctionComponent = () => (
  <Hero>
    <Center layout="vertical-center" css={{ mb: '$10' }}>
      <Avatar size="5">
        <AvatarImage
          src="/photos/mhaidarhanif-cyan.jpeg"
          alt="M Haidar Hanif"
        />
      </Avatar>
      <H as="h1" css={{ mb: '$5' }}>
        M Haidar Hanif
      </H>
      <SocialMediaLinks />
    </Center>

    <Center layout="vertical-adaptive">
      <Article>
        <ArticleSection>
          <P>
            🧑🏻‍🏫 Educator / Mentor 🧑🏻‍💻 Software Engineer / Full Stack Web
            Developer
          </P>
          <P>
            ⚡ Helping people in modern career, web development, software
            engineering, tech business, and life in general
          </P>
          <P>
            <span>
              Founder and Mentor of{' '}
              <Anchor href="https://catamyst.com">Catamyst</Anchor>
            </span>
            <span> • </span>
            <span>
              Developer Relations Lead of{' '}
              <Anchor href="https://kontenbase.com">Kontenbase</Anchor>
            </span>
            <span> • </span>
            <span>
              Content Creator at{' '}
              <Anchor href="https://codepolitan.com">CodePolitan</Anchor>
            </span>
            <span> • </span>
            <span>
              Community Lead of{' '}
              <Anchor href="https://github.com/highskillmasters">
                High Skill Masters
              </Anchor>
            </span>
          </P>
        </ArticleSection>

        <ArticleSection>
          <Center>
            <ButtonGroup>
              <LinkButton to="/about">❯ Follow more story ❮</LinkButton>
              <LinkButton to="/blog">❯ Enjoy blog posts ❮</LinkButton>
            </ButtonGroup>
          </Center>
        </ArticleSection>
      </Article>
    </Center>
  </Hero>
)
