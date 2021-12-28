import { Link } from 'remix'

import { styled } from '~/stitches'
import {
  Container,
  Logo,
  ButtonToggleTheme,
  TooltipProvider,
  Tooltip,
} from '~/components'

const HeaderStyled = styled('header', {
  userSelect: 'none',
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

const NavigationLink = styled(Link, {
  borderRadius: '$pill',
  '&:hover': {
    background: '$brand4',
  },
  '&:focus': {
    background: '$brand5',
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
            <NavigationLink to="/">Home</NavigationLink>
            <NavigationLink to="/about">About</NavigationLink>
            <NavigationLink to="/blog">Blog</NavigationLink>
          </NavigationLinks>
        </Navigation>
      </Container>
    </HeaderStyled>
  )
}
