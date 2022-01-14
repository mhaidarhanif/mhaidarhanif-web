import { FunctionComponent } from 'react'

import {
  Center,
  H,
  P,
  SocialMediaLinks,
  LinkButton,
  Article,
  ArticleSection,
  ButtonGroup,
  AnchorIcon,
} from '~/components'
import { AvatarHaidar } from '~/contents'

export const HomeIntro: FunctionComponent = () => (
  <>
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
              <AnchorIcon name="catamyst" href="https://catamyst.com">
                Catamyst
              </AnchorIcon>
            </span>
            <span> • </span>
            <span>
              Developer Relations Lead of{' '}
              <AnchorIcon name="kontenbase" href="https://kontenbase.com">
                Kontenbase
              </AnchorIcon>
            </span>
            <span> • </span>
            <span>
              Content Creator at{' '}
              <AnchorIcon name="codepolitan" href="https://codepolitan.com">
                CodePolitan
              </AnchorIcon>
            </span>
            <span> • </span>
            <span>
              Community Lead of{' '}
              <AnchorIcon
                name="highskillmasters"
                href="https://github.com/highskillmasters"
              >
                High Skill Masters
              </AnchorIcon>
            </span>
          </P>
        </ArticleSection>

        <ArticleSection>
          <ButtonGroup size="3">
            <LinkButton to="/about" prefetch="intent">
              Follow more story
            </LinkButton>
            <LinkButton to="/blog" prefetch="intent">
              Enjoy blog articles
            </LinkButton>
          </ButtonGroup>
        </ArticleSection>
      </Article>
    </Center>
  </>
)
