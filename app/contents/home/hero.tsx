import { FunctionComponent } from 'react'

import {
  Anchor,
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
import { AvatarHaidar } from '~/contents'

export const HomeHero: FunctionComponent = () => (
  <Hero>
    <Center layout="vertical-center" css={{ mb: '$10' }}>
      <AvatarHaidar mode="gradient" />
      <H as="h1" css={{ mb: '$5' }}>
        M Haidar Hanif
      </H>
      <SocialMediaLinks />
    </Center>

    <Center layout="vertical">
      <Article>
        <ArticleSection>
          <P>
            <span>🧑🏻‍🏫🧑🏻‍💻</span> <span>Educator</span> • <span>Mentor</span>{' '}
            • <span>Software Engineer</span> •{' '}
            <span>Full Stack Web Developer</span>
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
          <ButtonGroup size="3">
            <LinkButton to="/about" prefetch="intent">
              Follow more story
            </LinkButton>
            <LinkButton to="/blog" prefetch="intent">
              Enjoy blog posts
            </LinkButton>
          </ButtonGroup>
        </ArticleSection>
      </Article>
    </Center>
  </Hero>
)
