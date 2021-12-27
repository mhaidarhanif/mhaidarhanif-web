import { Link, Form } from 'remix'

import { styled } from '~/stitches'
import { Container, ButtonToggleTheme } from '~/components'

const HeaderStyled = styled('header', {
  position: 'fixed',
  backgroundColor: '$background',
  borderBottom: '2px solid $brand4',
  top: '0',
  left: '0',
  width: '100%',
  zIndex: '9999',
  '@tablet': { padding: '1rem 0' },
})

const LogoNavigation = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

const NavigationStyled = styled('nav', {
  display: 'flex',
})

/**
 * Header
 */
export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <NavigationStyled>
          <LogoNavigation>
            <Link to="/" title="M Haidar Hanif">
              <span>M Haidar Hanif</span>
            </Link>
          </LogoNavigation>
          <ButtonToggleTheme />
        </NavigationStyled>
      </Container>
    </HeaderStyled>
  )
}
