import {
  Container,
  P,
  Anchor,
  Tooltip,
  Span,
  SocialMediaLinks,
} from '~/components'
import { styled } from '~/stitches'
import { getDayName, getYear } from '~/utils'

const FooterStyled = styled('footer', {
  display: 'flex',
  justifyContent: 'space-between',
  pt: '$32',
  pb: '$3',
  background: '$background',
})

const FooterGroup = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  letterSpacing: '$widest',
  textTransform: 'uppercase',
  p: {
    my: '$0',
    fontSize: '$-2',
    '@tablet': { fontSize: '$-1' },
  },

  variants: {
    align: {
      left: {
        pr: '$5',
        alignItems: 'flex-start',
        '@desktop': { alignItems: 'flex-start' },
      },
      right: {
        alignItems: 'flex-start',
        '@desktop': { alignItems: 'flex-end' },
      },
    },
  },
})

const FooterSubGroup = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '$5',
})

/**
 * Footer
 */
export const Footer = ({ id }: { id: string }) => (
  <FooterStyled id={id}>
    <Container size="full">
      <FooterGroup align="left">
        <P>
          Happy{' '}
          <Tooltip content={getDayName('ja')}>
            <Span color="pink">{getDayName('en')}</Span>
          </Tooltip>
          !
        </P>
        <P>© M Haidar Hanif {getYear()}</P>
      </FooterGroup>

      <FooterGroup align="right">
        <FooterSubGroup>
          <SocialMediaLinks size="small" />
          <P lang="ja">
            <Tooltip content="🌏 World 🌍 Wide 🌎 Web">
              🌏 ワールド 🌍 ワイド 🌎 ウェブ
            </Tooltip>
          </P>
        </FooterSubGroup>
        <P>
          <Anchor
            css={{ color: '$text' }}
            href="https://github.com/mhaidarhanif/mhaidarhanif-web"
          >
            🐙 Code
          </Anchor>
          <span> &#8594; </span>
          <Anchor css={{ color: '$text' }} href="https://beta.reactjs.org">
            ⚛️ React
          </Anchor>
          <span> &#43; </span>
          <Anchor css={{ color: '$text' }} href="https://remix.run">
            💿 Remix
          </Anchor>
          <span> &#8594; </span>
          <Anchor css={{ color: '$text' }} href="https://vercel.com">
            ▲ Vercel
          </Anchor>
        </P>
      </FooterGroup>
    </Container>
  </FooterStyled>
)
