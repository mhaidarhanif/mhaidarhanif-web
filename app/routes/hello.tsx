import type { MetaFunction } from 'remix'

import { Hero, H, P, Article, ArticleSection, Span } from '~/components'
import { createMeta } from '~/utils'

export const meta: MetaFunction = () => {
  return createMeta({
    route: 'hello',
    title: 'Hello from visitors and friends',
    description:
      'Some kind of a guestbook which you can say anything. Hello. Halo. こんにちは. Bonjour. 안녕하세요. Kamusta. 你好. สวัสดี. مرحبا',
  })
}

export default function Hello() {
  return (
    <>
      <Hero>
        <Article>
          <H as="h1">Hello</H>
          <H as="h4">Hello from visitors and friends</H>
          <ArticleSection>
            <P>Some kind of a guestbook which you can say anything.</P>
            <P>Hello in English</P>
            <P>Halo in Indonesian or Malay</P>
            <P>
              <Span lang="ja">こんにちは</Span> in Japanese
            </P>
            <P>
              <Span lang="ko">안녕하세요</Span> in Korean
            </P>
            <P>Bonjour in French</P>
            <P>Kamusta in Filipino</P>
            <P>
              <Span lang="zh">你好</Span> in Chinese
            </P>
            <P>
              <Span lang="th">สวัสดี</Span> in Thai
            </P>
            <P>
              <Span lang="ar">مرحبا</Span> in Arabic
            </P>
          </ArticleSection>
        </Article>
      </Hero>
    </>
  )
}
