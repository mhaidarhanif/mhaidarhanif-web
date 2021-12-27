import { Link } from 'remix'

import { styled } from '~/stitches'
import { Container, ButtonToggleTheme } from '~/components'

const HeaderStyled = styled('header', {
  backgroundColor: '$background',
  top: '0',
  left: '0',
  width: '100%',
  py: '$5',
  '@tablet': { py: '$5' },
})

const LogoNavigation = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

const Navigation = styled('nav', {
  display: 'flex',
  justifyContent: 'space-between',
})

const NavigationLinks = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  a: {
    px: '$3',
    py: '$2',
  },
})

/**
 * Header
 */
export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <Navigation>
          <LogoNavigation>
            <Link to="/" title="M Haidar Hanif">
              ICON
            </Link>
          </LogoNavigation>

          <NavigationLinks>
            <ButtonToggleTheme />
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
          </NavigationLinks>
        </Navigation>
      </Container>
    </HeaderStyled>
  )
}
