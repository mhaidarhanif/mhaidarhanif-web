import { MetaFunction } from 'remix'

import {
  Hero,
  Article,
  ArticleSection,
  Link,
  H,
  P,
  SocialMediaLinks,
  Tooltip,
  Span,
  AnchorIcon,
} from '~/components'
import { AvatarHaidar } from '~/contents'
import { createMeta } from '~/utils'

export const meta: MetaFunction = () =>
  createMeta({
    title: 'About M Haidar Hanif',
    description:
      'Get to know Haidar. The story and summary of life and career.',
    route: 'about',
  })

export default function About() {
  return (
    <Hero>
      <Article>
        <H as="h1">Hi there</H>

        <ArticleSection>
          <P>
            <AvatarHaidar size="3" />
            <Span css={{ ml: '$3' }}> My name is Haidar!</Span>
          </P>
          <P lang="ja">
            <Tooltip
              align="start"
              content={
                <>
                  <span>Watashinonamaewa... Haidā!</span>
                  <br />
                  <span>My name is... Haidar!</span>
                </>
              }
            >
              私の名前は...ハイダー！
            </Tooltip>
          </P>
        </ArticleSection>

        <ArticleSection>
          <P>I define myself as a computational yet creative thinker.</P>
          <P>In daily basis goes by working as an...</P>
          <P>
            Educator. Mentor. Software Engineer. Full Stack Web Developer.
            Technical Lead. Experience Designer. Product Manager. Business
            Runner.
          </P>
          <P lang="ja">
            <Tooltip
              align="start"
              content={
                <>
                  <span>Nesshin'na anime to manga no aikō-ka.</span>
                  <br />
                  <span>Avid anime and manga lover.</span>
                  <br />
                  <span>(Sorry if I made grammatical mistake!)</span>
                </>
              }
            >
              熱心なアニメとマンガの愛好家。
            </Tooltip>
          </P>
        </ArticleSection>

        <ArticleSection>
          <P>
            Helping people to become become better at what they do is my life
            and work mission.
          </P>
          <P>And I've been doing this professionally since 2010.</P>
          <P>
            Currently founding{' '}
            <AnchorIcon name="catamyst" href="https://catamyst.com">
              Catamyst
            </AnchorIcon>
            , an education platform and software company to bring that mission
            forward.
          </P>
          <P>
            Especially in tech career, web app development, software
            engineering, and startup building.
          </P>
        </ArticleSection>

        <ArticleSection>
          <P>
            Usually hangout on{' '}
            <AnchorIcon
              name="twitter"
              href="https://a.mhaidarhanif.com/twitter"
            >
              Twitter
            </AnchorIcon>
            ,{' '}
            <AnchorIcon name="github" href="https://a.mhaidarhanif.com/github">
              GitHub
            </AnchorIcon>
            , and{' '}
            <AnchorIcon
              name="linkedin"
              href="https://a.mhaidarhanif.com/linkedin"
            >
              LinkedIn
            </AnchorIcon>
            .
          </P>
          <P>
            For work, I'm on{' '}
            <AnchorIcon name="twist" href="https://twist.com">
              Twist
            </AnchorIcon>{' '}
            and{' '}
            <AnchorIcon name="slack" href="https://slack.com">
              Slack
            </AnchorIcon>
            , sometimes on{' '}
            <AnchorIcon name="discord" href="https://discord.com">
              Discord
            </AnchorIcon>
            .
          </P>
        </ArticleSection>

        <ArticleSection>
          <P>
            There are some other stuffs that collaborate with{' '}
            <AnchorIcon name="catamyst" href="https://catamyst.com">
              Catamyst
            </AnchorIcon>{' '}
            such as...
          </P>
          <P>
            Developer Relations Lead of{' '}
            <AnchorIcon name="kontenbase" href="https://kontenbase.com">
              Kontenbase
            </AnchorIcon>
            , a backend as a service platform.
          </P>
          <P>
            Content Creator at{' '}
            <AnchorIcon name="codepolitan" href="https://codepolitan.com">
              CodePolitan
            </AnchorIcon>
            , a programming community.
          </P>
          <P>
            Community Lead of{' '}
            <AnchorIcon
              name="highskillmasters"
              href="https://github.com/highskillmasters"
            >
              High Skill Masters
            </AnchorIcon>
            , a gathering of highly skilled professionals.
          </P>
        </ArticleSection>

        <ArticleSection>
          <P>Previously...</P>
          <P>
            Co-founding and teaching at{' '}
            <AnchorIcon name="impactbyte" href="https://impactbyte.com">
              Impact Byte
            </AnchorIcon>
            , a flexible coding bootcamp.
          </P>
          <P>
            Teaching at{' '}
            <AnchorIcon name="hacktiv8" href="httsp://hacktiv8.com">
              Hacktiv8
            </AnchorIcon>
            , an intensive coding bootcamp.
          </P>
          <P>
            Teaching at{' '}
            <AnchorIcon name="agnium" href="https://agnium.co.id">
              Agnium
            </AnchorIcon>
            , a software training agency.
          </P>
          <P>
            Coding at{' '}
            <AnchorIcon name="amplified" href="https://amp.asia">
              AMPlified
            </AnchorIcon>
            , a startup incubator.
          </P>
          <P>And working as freelancer in several places.</P>
        </ArticleSection>

        <ArticleSection>
          <P>
            Since jumping into the web development industry, I mostly prefer
            work with:
          </P>
          <P>
            UI, UX, HTML, CSS, JavaScript, TypeScript, Node.js, React.js, Redux,
            Next.js, Remix, Prisma, PostgreSQL / Supabase, MySQL / MariaDB /
            PlanetScale, REST API, GraphQL, and many more.
          </P>
        </ArticleSection>

        <ArticleSection>
          <P>
            Fun fact: I often type on keyboards all the time, so my handwriting
            is so bad. 😀
          </P>
        </ArticleSection>

        <ArticleSection>
          <P>Follow and reach me on social media. I also have a CV.</P>
          <SocialMediaLinks />
          <P>
            If you are interested to talk directly, you can also{' '}
            <Link to="/contact" prefetch="intent">
              contact me via this website
            </Link>
            .
          </P>
        </ArticleSection>
      </Article>
    </Hero>
  )
}
