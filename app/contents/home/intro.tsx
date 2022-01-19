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
  IconSpan,
} from '~/components'
import { AvatarHaidar } from '~/contents'
import { textToolTech } from '~/data'

export const HomeIntro: FunctionComponent = () => (
  <>
    <Center layout="vertical-center" css={{ mb: '$10' }}>
      <AvatarHaidar mode="gradient" />
      <H as="h1" css={{ m: '$5' }}>
        M Haidar Hanif
      </H>
      <SocialMediaLinks />
    </Center>

    <Center layout="vertical">
      <Article>
        <ArticleSection>
          <P>
            <IconSpan color="brand" name="educator" />{' '}
            <IconSpan color="brand" name="developer" /> <span>Educator</span> •{' '}
            <span>Mentor</span> • <span>Software Engineer</span> •{' '}
            <span>Full Stack Web Developer</span>
          </P>

          <P>
            <IconSpan color="yellow" name="bolt" /> Helping people to be better
            especially in modern career, web development, software engineering,
            tech business, and life in general.
          </P>

          <P>
            <IconSpan color="blue" name="cloud" /> Doing education, mentoring,
            training, business, management, design, user interface (UI), user
            experience (UX), developer experience (DX), web design, web
            development, software engineering, and more.
          </P>

          <P>
            <IconSpan color="pink" name="cog" /> Using {textToolTech}.
          </P>

          <P>
            <span>
              Founder and Mentor of{' '}
              <AnchorIcon
                color="teal"
                name="catamyst"
                href="https://catamyst.com"
              >
                Catamyst
              </AnchorIcon>
            </span>
            <span> • </span>
            <span>
              Developer Relations Lead of{' '}
              <AnchorIcon
                color="red"
                name="kontenbase"
                href="https://kontenbase.com"
              >
                Kontenbase
              </AnchorIcon>
            </span>
            <span> • </span>
            <span>
              Content Creator at{' '}
              <AnchorIcon
                color="blue"
                name="codepolitan"
                href="https://codepolitan.com"
              >
                CodePolitan
              </AnchorIcon>
            </span>
            <span> • </span>
            <span>
              Community Lead of{' '}
              <AnchorIcon
                color="green"
                name="highskillmasters"
                href="https://github.com/highskillmasters"
              >
                High Skill Masters
              </AnchorIcon>
            </span>
          </P>
        </ArticleSection>

        <ArticleSection>
          <ButtonGroup size="2">
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
