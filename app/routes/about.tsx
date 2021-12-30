import { Link, MetaFunction } from 'remix'
import {
  Hero,
  Article,
  ArticleSection,
  Avatar,
  AvatarImage,
  Anchor,
  H,
  P,
  SocialMediaLinks,
  Tooltip,
  Icon,
} from '~/components'
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
            <Avatar size="3">
              <AvatarImage
                src="/photos/mhaidarhanif-cyan.jpeg"
                alt="M Haidar Hanif"
              />
            </Avatar>
            <span> My name is Haidar!</span>
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
          <P>
            Currently founding{' '}
            <Anchor display="with-icon" href="https://catamyst.com">
              <Icon name="catamyst" /> Catamyst
            </Anchor>
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
            <Anchor
              display="with-icon"
              href="https://a.mhaidarhanif.com/twitter"
            >
              <Icon name="twitter" /> Twitter
            </Anchor>
            ,{' '}
            <Anchor
              display="with-icon"
              href="https://a.mhaidarhanif.com/github"
            >
              {' '}
              <Icon name="github" /> GitHub
            </Anchor>
            , and{' '}
            <Anchor
              display="with-icon"
              href="https://a.mhaidarhanif.com/linkedin"
            >
              <Icon name="linkedin" /> LinkedIn
            </Anchor>
            .
          </P>
          <P>
            For work, I'm on{' '}
            <Anchor display="with-icon" href="https://twist.com">
              <Icon name="twist" /> Twist
            </Anchor>{' '}
            and{' '}
            <Anchor display="with-icon" href="https://slack.com">
              <Icon name="slack" /> Slack
            </Anchor>
            , sometimes on{' '}
            <Anchor display="with-icon" href="https://discord.com">
              <Icon name="discord" /> Discord
            </Anchor>
            .
          </P>
        </ArticleSection>

        <ArticleSection>
          <P>
            There are some other stuffs that collaborate with Catamyst such
            as...
          </P>
          <P>
            Developer Relations Lead of{' '}
            <Anchor href="https://kontenbase.com">Kontenbase</Anchor>, a backend
            as a service platform.
          </P>
          <P>
            Content Creator at{' '}
            <Anchor href="https://codepolitan.com">CodePolitan</Anchor>, a
            programming community.
          </P>
          <P>
            Community Lead of{' '}
            <Anchor href="https://github.com/highskillmasters">
              High Skill Masters
            </Anchor>
            , a gathering of highly skilled professionals.
          </P>
        </ArticleSection>

        <ArticleSection>
          <P>Previously...</P>
          <P>
            Co-founding and teaching at{' '}
            <Anchor href="https://impactbyte.com">Impact Byte</Anchor>, a
            flexible coding bootcamp.
          </P>
          <P>
            Teaching at <Anchor href="httsp://hacktiv8.com">Hacktiv8</Anchor>,
            an intensive coding bootcamp.
          </P>
          <P>
            Teaching at <Anchor href="https://agnium.co.id">Agnium</Anchor>, a
            software training agency.
          </P>
          <P>
            Coding at <Anchor href="https://amp.asia">AMPlified</Anchor>, a
            startup incubator.
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
            <Link to="/contact">contact me via this website</Link>.
          </P>
        </ArticleSection>
      </Article>
    </Hero>
  )
}
