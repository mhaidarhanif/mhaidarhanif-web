import { FunctionComponent } from 'react'

import {
  Article,
  ArticleSection,
  H,
  P,
  ArticleHeader,
  Anchor,
  Tooltip,
  AnchorIcon,
  SocialMediaLinks,
} from '~/components'

export const NowIntro: FunctionComponent = () => (
  <Article>
    <ArticleHeader>
      <H as="h1">Now</H>
      <H as="ja">
        <Tooltip content="Ima">今</Tooltip>
      </H>
    </ArticleHeader>

    <ArticleSection>
      <P>Here are some of the things I'm currently focused right now.</P>
      <P css={{ fontSize: '$0' }}>Updated 20 January 2022, from Earth.</P>
    </ArticleSection>

    <ArticleSection>
      <H as="h4">Life</H>
      <P>Moved to a new house.</P>
      <P>Married for 2 years. Had a 5 months old baby.</P>
    </ArticleSection>

    <ArticleSection>
      <H as="h4">Work</H>
      <P>
        Focusing on running{' '}
        <AnchorIcon color="teal" name="catamyst" href="https://catamyst.com">
          Catamyst
        </AnchorIcon>
        , a tech education platform and software engineering business.
      </P>
      <P>
        Rebuilding the platform while doing some collaboration with other
        companies.
      </P>
    </ArticleSection>

    <ArticleSection>
      <H as="h4">Hobby</H>
      <P>Learning to teach better.</P>
      <P>Rebuilding my personal website.</P>
      <P>
        Trying out <Anchor href="https://remix.run">Remix</Anchor> full stack
        JavaScript framework.
      </P>
    </ArticleSection>

    <ArticleSection>
      <H as="h4">Updates</H>
      <P>My recent updates nowadays are on:</P>
      <SocialMediaLinks
        withName
        enabledLinks={['Twitter', 'GitHub', 'LinkedIn']}
      />
    </ArticleSection>

    <ArticleSection>
      <H as="h4">Questions and Answer</H>

      <H as="h5">Location?</H>
      <P>Asia, Earth</P>

      <H as="h5">Professional title?</H>
      <P>Educator, Mentor, Web Developer, Software Engineer</P>

      <H as="h5">What do you do?</H>
      <P>
        I educate and mentor people to improve their career and professional
        skills. While also developing websites, applications, and building
        software.
      </P>

      <H as="h5">Why?</H>
      <P>To help people to become become better at what they do.</P>

      <H as="h5">What should we read?</H>
      <P>
        Ikigai: The Japanese Secret to a Long and Happy Life — Book by Francesc
        Miralles and Hector Garcia
      </P>

      <H as="h5">URLs?</H>
      <ul>
        <li>
          <Anchor href="https://mhaidarhanif.com">mhaidarhanif.com</Anchor>
        </li>
        <li>
          <Anchor href="https://twitter.com/mhaidarhanif">
            twitter.com/mhaidarhanif
          </Anchor>
        </li>
        <li>
          <Anchor href="https://linkedin.com/in/mhaidarhanif">
            linkedin.com/in/mhaidarhanif
          </Anchor>
        </li>
      </ul>
    </ArticleSection>

    <ArticleSection>
      This page is inspired by{' '}
      <Anchor href="https://sive.rs/now">Derek Siver’s now page</Anchor>{' '}
      suggestion and his{' '}
      <Anchor href="http://nownownow.com">Now Now Now</Anchor> movement.
      <ul>
        <li>
          <Anchor href="https://sive.rs/nowff">
            The /now page movement by Derek Sivers
          </Anchor>
        </li>
        <li>
          <Anchor href="http://nownownow.com">Now Now Now</Anchor>
        </li>
      </ul>
    </ArticleSection>
  </Article>
)
