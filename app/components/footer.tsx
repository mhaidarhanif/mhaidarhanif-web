import { styled } from '~/stitches'
import { Container, Center, P, Anchor } from '~/components'

const FooterStyled = styled('footer', {
  py: '$1',
  mt: '10rem',
})

const FooterText = styled('div', {
  letterSpacing: '$widest',
  textTransform: 'uppercase',
  textAlign: 'center',
  p: {
    fontSize: '$-2',
    '@tablet': {
      fontSize: '$-1',
    },
  },
})

/**
 * Footer
 */
export const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <Center>
          <FooterText>
            <P>© M Haidar Hanif 2077 </P>
            <P lang="ja">🌏 ワールド 🌍 ワイド 🌎 ウェブ</P>
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
          </FooterText>
        </Center>
      </Container>
    </FooterStyled>
  )
}
