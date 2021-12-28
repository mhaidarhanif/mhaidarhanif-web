import { styled } from '~/stitches'
import { Container, Center } from '~/components'

const FooterStyled = styled('footer', {
  py: '$1',
  mt: '20rem',
})

const FooterText = styled('p', {
  letterSpacing: '$widest',
  textTransform: 'uppercase',
})

/**
 * Footer
 */
export const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <Center>
          <FooterText>🌏 World 🌍 Wide 🌎 Web</FooterText>
        </Center>
      </Container>
    </FooterStyled>
  )
}
