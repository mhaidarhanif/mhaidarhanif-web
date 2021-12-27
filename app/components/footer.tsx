import { Link } from 'remix'

import { styled } from '~/stitches'
import { Container } from '~/components'

const FooterStyled = styled('footer', {
  padding: '2rem 0',
  mt: '$28',
})

const Copyright = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.5rem',
  p: {
    margin: 0,
  },
  '@tablet': {
    alignItems: 'flex-start',
  },
  '@desktop': {
    flexDirection: 'row',
    alignItems: 'center',
  },
})

/**
 * Footer
 */
export const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <Copyright>
          <p>
            Copyright &copy; <Link to="/">M Haidar Hanif</Link>
          </p>
        </Copyright>
      </Container>
    </FooterStyled>
  )
}
