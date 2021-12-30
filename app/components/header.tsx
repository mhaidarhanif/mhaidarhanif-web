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
  width: '100%',
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

const NavigationGroupLogo = styled('div', {
  display: 'flex',
  alignSelf: 'flex-start',
  alignItems: 'center',
  gap: '$4',
})

const NavigationGroupLinks = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '$1',
})

const NavigationLink = styled(Link, {
  transition: 'all 0.2s ease',

  fontWeight: '$bold',
  borderRadius: '$pill',
  color: '$anchor',
  '&:hover': { background: '$brand4', color: '$anchorHover' },
  '&:focus': { background: '$brand5' },

  fontSize: '$-1',
  px: '$2',
  py: '$1',
  '@desktop': {
    fontSize: '$1',
    px: '$3',
    py: '$2',
  },
})

/**
 * Header
 */

export const Header = () => (
  <HeaderStyled>
    <Container>
      <Navigation>
        <NavigationGroupLogo>
          <NavigationLogo>
            <Link to="/" title="M Haidar Hanif">
              <Logo />
            </Link>
          </NavigationLogo>
          <ButtonToggleTheme />
        </NavigationGroupLogo>

        <NavigationGroupLinks>
          {navigationLinks.map((link) => (
            <NavigationLink key={link.name} to={link.to}>
              {link.name}
            </NavigationLink>
          ))}
        </NavigationGroupLinks>
      </Navigation>
    </Container>
  </HeaderStyled>
)
