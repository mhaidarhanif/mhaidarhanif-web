import { Link } from 'remix'

import { styled } from '~/stitches'
import { Container, Logo, ButtonToggleTheme } from '~/components'

const HeaderStyled = styled('header', {
  backgroundColor: '$background',
  top: '0',
  left: '0',
  width: '100%',
  py: '$5',
  '@tablet': { py: '$7' },
})

const Navigation = styled('nav', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  '@tablet': {
    alignItems: 'center',
  },
  a: {
    borderRadius: '$1',
  },
})

const NavigationLogo = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  a: {
    borderRadius: '$2',
  },
})

const NavigationLinks = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '$1',
  '@tablet': {
    gap: '$3',
  },
  a: {
    px: '$3',
    py: '$2',
    fontWeight: '$bold',
    fontSize: '$-1',
    '@tablet': {
      fontSize: '$1',
    },
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
          <NavigationLogo>
            <Link to="/" title="M Haidar Hanif">
              <Logo />
            </Link>
          </NavigationLogo>

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
