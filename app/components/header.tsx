import { Link } from 'remix'

import { Container, Logo, ButtonToggleTheme } from '~/components'
import { navigationLinks } from '~/data'
import { styled } from '~/stitches'

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
  a: { borderRadius: '$2' },
})

const NavigationLinks = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '$1',
  '@tablet': { gap: '$2' },
})

const NavigationLink = styled(Link, {
  transition: 'all 0.2s ease',
  px: '$3',
  py: '$2',
  fontWeight: '$bold',
  fontSize: '$-1',
  '@tablet': {
    fontSize: '$1',
  },
  borderRadius: '$pill',
  color: '$anchor',
  '&:hover': { background: '$brand4', color: '$anchorHover' },
  '&:focus': { background: '$brand5' },
})

/**
 * Header
 */

export const Header = () => (
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
          {navigationLinks.map((link) => (
            <NavigationLink key={link.name} to={link.to}>
              {link.name}
            </NavigationLink>
          ))}
        </NavigationLinks>
      </Navigation>
    </Container>
  </HeaderStyled>
)
