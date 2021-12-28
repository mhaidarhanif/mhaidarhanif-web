import { styled } from '~/stitches'
import { Container, Center, P } from '~/components'

const FooterStyled = styled('footer', {
  py: '$1',
  mt: '20rem',
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
          </FooterText>
        </Center>
      </Container>
    </FooterStyled>
  )
}
