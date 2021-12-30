import { Container, P, Anchor, Tooltip } from '~/components'
import { styled } from '~/stitches'

const FooterStyled = styled('footer', {
  display: 'flex',
  justifyContent: 'space-between',
  py: '$2',
  mt: '$60',
})

const FooterGroup = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  letterSpacing: '$widest',
  textTransform: 'uppercase',
  p: {
    mb: '$0',
    fontSize: '$-2',
    '@tablet': { fontSize: '$-1' },
  },

  variants: {
    align: {
      left: {
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

/**
 * Footer
 */
export const Footer = () => (
  <FooterStyled>
    <Container size="full">
      <FooterGroup align="left">
        <P>Happy Monday!</P>
        <P>© M Haidar Hanif 2077 </P>
      </FooterGroup>

      <FooterGroup align="right">
        <P lang="ja">
          <Tooltip text="🌏 World 🌍 Wide 🌎 Web">
            🌏 ワールド 🌍 ワイド 🌎 ウェブ
          </Tooltip>
        </P>
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
