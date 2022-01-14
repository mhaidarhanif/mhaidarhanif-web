import { FunctionComponent } from 'react'

import {
  Article,
  ArticleSection,
  H,
  P,
  Span,
  ArticleHeader,
  Tooltip,
} from '~/components'

export const HelloIntro: FunctionComponent = () => (
  <Article>
    <ArticleHeader>
      <H as="h1">Hello</H>
      <H as="ja">
        <Tooltip content="Konnichiwa">こんにちは</Tooltip>
      </H>
    </ArticleHeader>

    <ArticleSection>
      <H as="h4">Hello from visitors and friends</H>
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
)
