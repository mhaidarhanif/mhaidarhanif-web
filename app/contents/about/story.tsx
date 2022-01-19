import { FunctionComponent } from 'react'

import {
  Article,
  ArticleSection,
  Link,
  H,
  P,
  SocialMediaLinks,
  Tooltip,
  Span,
  AnchorIcon,
  Flex,
  ArticleHeader,
} from '~/components'
import { AvatarHaidar } from '~/contents'
import { textToolTech } from '~/data'
import { getDayNamePeriod } from '~/utils'

export const AboutStory: FunctionComponent = () => (
  <Article>
    <ArticleHeader>
      <H as="h1">Hi!</H>
      <H as="ja">
        <Tooltip content="Yaa!">やあ！</Tooltip>
      </H>
    </ArticleHeader>

    <ArticleSection>
      <Flex css={{ alignItems: 'center' }}>
        <AvatarHaidar size="3" />
        <P css={{ ml: '$3' }}>
          <Span> My name is Haidar!</Span>
        </P>
      </Flex>
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
      <P>
        How are you this <span>{getDayNamePeriod()}</span>? Hopefully you are
        good.
      </P>
      <P>Since you visit this About page, let me introduce myself.</P>
      <P>In daily basis I go by working as either...</P>
      <P>
        Educator. Mentor. Trainer. Coach. Tech Person. Web Developer. Software
        Engineer. Full Stack Web Developer. Technical Lead. Developer Advocate.
        Interface/Experience Designer. Product Manager. Business Runner. Human.
        <br />
        <Span lang="ja">
          <Tooltip
            align="start"
            content={
              <>
                <span>Nihon no aikō-ka.</span>
                <br />
                <span>Japanese enthusiast.</span>
                <br />
                <span>(Sorry if I made grammatical mistake!)</span>
              </>
            }
          >
            日本の愛好家。
          </Tooltip>
        </Span>
      </P>
    </ArticleSection>

    <ArticleSection>
      <H as="h4">Why I do things</H>
      <P>
        To help people to become become better at what they do is my life and
        work mission. And I've been doing this professionally since 2010.
      </P>
    </ArticleSection>
    <ArticleSection>
      <H as="h4">What things I do</H>
      <P>
        Currently founding{' '}
        <AnchorIcon color="teal" name="catamyst" href="https://catamyst.com">
          Catamyst
        </AnchorIcon>
        , an education platform and software company to bring that mission
        forward. Especially in tech career, web app development, software
        engineering, and startup building.
      </P>
      <P>
        Catamyst provides free and paid learning materials, private mentorship,
        as well as business/software development and consultancy service.
      </P>
    </ArticleSection>

    <ArticleSection>
      <P>
        There are some other stuffs that collaborate with{' '}
        <AnchorIcon color="teal" name="catamyst" href="https://catamyst.com">
          Catamyst
        </AnchorIcon>{' '}
        such as...
      </P>
      <P>
        Developer Relations Lead of{' '}
        <AnchorIcon color="red" name="kontenbase" href="https://kontenbase.com">
          Kontenbase
        </AnchorIcon>
        , a backend as a service platform that simple and easy to use.
      </P>
      <P>
        Product Engineer of{' '}
        <AnchorIcon
          color="blue"
          name="poinswap"
          href="https://github.com/poinswap"
        >
          Poinswap
        </AnchorIcon>
        , a decentralized exchange for cryptocurrencies and tokens.
      </P>
      <P>
        Content Creator at{' '}
        <AnchorIcon
          color="pink"
          name="codepolitan"
          href="https://codepolitan.com"
        >
          CodePolitan
        </AnchorIcon>
        , a programming community.
      </P>
      <P>
        Community Lead of{' '}
        <AnchorIcon
          color="green"
          name="highskillmasters"
          href="https://github.com/highskillmasters"
        >
          High Skill Masters
        </AnchorIcon>
        , a gathering of highly skilled professionals.
      </P>
    </ArticleSection>

    <ArticleSection>
      <H as="h4">How I do things</H>
      <P>
        Since jumping into the web development industry, I mostly prefer work
        with these tools and technologies:
      </P>
      <P>{textToolTech}</P>
      <P>The industry that I prefer to work with also varies:</P>
      <P>
        Education, Tech, Engineering, Management, Communication, Software, Web,
        Hardware, Crypto, Games, and as long as it is a legit business.
      </P>
    </ArticleSection>

    <ArticleSection>
      <H as="h4">Previous roles</H>
      <P>Previously I was...</P>
      <P>
        Co-Founder and Lead Mentor of{' '}
        <AnchorIcon color="red" name="impactbyte" href="https://impactbyte.com">
          Impact Byte
        </AnchorIcon>
        , a flexible coding bootcamp.
      </P>
      <P>
        Contract Consultant of{' '}
        <AnchorIcon color="orange" name="qopnet" href="https://qopnet.id">
          Qopnet
        </AnchorIcon>
        , a{' '}
        <Tooltip content="Business to Business">
          <b>B2B</b>
        </Tooltip>{' '}
        marketplace.
      </P>
      <P>
        Senior Instructor of{' '}
        <AnchorIcon color="orange" name="hacktiv8" href="httsp://hacktiv8.com">
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
      <H as="h4">Social media</H>
      <P>Follow and reach me on various social media. I also have a CV.</P>
      <SocialMediaLinks withName />
      <P>
        If you are interested to talk directly, you can also{' '}
        <Link to="/contact" prefetch="intent">
          contact me via this website
        </Link>
        .
      </P>
      <P>
        I usually hangout on{' '}
        <AnchorIcon name="twitter" href="https://a.mhaidarhanif.com/twitter">
          Twitter
        </AnchorIcon>
        ,{' '}
        <AnchorIcon name="github" href="https://a.mhaidarhanif.com/github">
          GitHub
        </AnchorIcon>
        , and{' '}
        <AnchorIcon name="linkedin" href="https://a.mhaidarhanif.com/linkedin">
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
      <H as="h4">Fun facts</H>
      <P mode="wrap" gap="3">
        <Span lang="ja">(づ ◕‿◕ )づ</Span>
        <Span> I like Japanese stuffs </Span>
        <Span lang="ja"> =＾● ⋏ ●＾= </Span>
      </P>
    </ArticleSection>
  </Article>
)
