import {
  Hero,
  Article,
  ArticleSection,
  Avatar,
  AvatarImage,
  Anchor,
  H,
  P,
} from '~/components'

export default function About() {
  return (
    <>
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
            <P lang="ja">私の名前は...ハイダー！</P>
          </ArticleSection>

          <ArticleSection>
            <P>I define myself as a computational yet creative thinker.</P>
            <P>In daily basis goes by working as an...</P>
            <P>
              Educator. Mentor. Software Engineer. Full Stack Web Developer.
              Technical Lead. Experience Designer. Product Manager. Business
              Runner.
            </P>
            <P lang="ja">熱心なアニメとマンガの愛好家。</P>
          </ArticleSection>

          <ArticleSection>
            <P>
              Helping people to become become better at what they do is my life
              and work mission.
            </P>
            <P>
              Currently founding{' '}
              <Anchor href="https://catamyst.com">Catamyst</Anchor>, an
              education platform and software company to bring that mission
              forward.
            </P>
            <P>
              Especially in tech career, web app development, software
              engineering, and startup building.
            </P>
          </ArticleSection>

          <ArticleSection>
            <P>
              Also do these other stuff that collaborate with Catamyst such
              as...
            </P>
            <P>
              Developer Relations Lead of{' '}
              <Anchor href="https://kontenbase.com">Kontenbase</Anchor>, a
              backend as a service platform.
            </P>
            <P>
              Content Creator at{' '}
              <Anchor href="https://codepolitan.com">CodePolitan</Anchor>, an
              Indonesian programming community.
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
              Co-founding <b>Impact Byte</b>, a flexible coding bootcamp.
            </P>
            <P>
              Teaching at <b>Hacktiv8</b>, an intensive coding bootcamp.
            </P>
            <P>
              Teaching at <b>Agnium</b>, a software training agency.
            </P>
            <P>
              Coding at <b>AMPlified</b>, a startup incubator.
            </P>
            <P>And working as freelancer in several places.</P>
          </ArticleSection>

          <ArticleSection>
            <P>
              Since jumping into the web development industry, I mostly prefer
              work with:
            </P>
            <P>
              UI, UX, HTML, CSS, JavaScript, TypeScript, Node.js, React.js,
              Redux, Next.js, Remix, Prisma, PostgreSQL / Supabase, MySQL /
              MariaDB / PlanetScale, REST API, GraphQL, and many more.
            </P>
          </ArticleSection>

          <ArticleSection>
            <P>
              Fun fact: I often type on keyboards all the time, so my
              handwriting is so bad. 😀
            </P>
          </ArticleSection>
        </Article>
      </Hero>
    </>
  )
}
