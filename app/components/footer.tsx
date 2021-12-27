import { Link } from 'remix'

import { styled } from '~/stitches'
import { Container } from '~/components'

const FooterStyled = styled('footer', {
  padding: '2rem 0',
  mt: '$28',
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
        <FooterText>Hello world</FooterText>
      </Container>
    </FooterStyled>
  )
}
