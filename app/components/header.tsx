import { Link, useLocation } from 'remix'

import { Logo, ButtonToggleTheme } from '~/components'
import { navigationLinks } from '~/data'
import { styled } from '~/stitches'

const HeaderStyled = styled('header', {
  zIndex: '$banner',
  userSelect: 'none',
  background: '$background',
  pd: '$4',
  '@tablet': { pd: '$6' },
  '@desktop': { pd: '$8' },
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

const NavigationGroupLogo = styled('div', {
  display: 'flex',
  alignSelf: 'flex-start',
  alignItems: 'center',
  gap: '$2',
  '@tablet': { gap: '$4' },
})

const NavigationGroupLinks = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '$1',
  pl: '$4',
})

const NavigationLink = styled(Link, {
  '&:first-child': {
    display: 'none',
    '@tablet': { display: 'block' },
  },

  transition: 'background 0.2s ease, color 0.2s ease',

  fontWeight: '$bold',
  borderRadius: '$pill',
  color: '$text',

  '&:hover': {
    background: '$brand4',
    color: '$anchorHover',
  },
  '&:focus': {
    background: '$brand5',
  },

  fontSize: '$0',
  px: '$2',
  py: '$1',
  '@desktop': {
    fontSize: '$1',
    px: '$3',
    py: '$2',
  },

  variants: {
    variant: {
      normal: {},
      active: {
        background: '$brand4',
        color: '$anchorHover',
      },
    },
  },
})

/**
 * Header
 */

export const Header = ({ id }: { id: string }) => {
  const location = useLocation()

  return (
    <HeaderStyled id={id}>
      <Navigation>
        <NavigationGroupLogo>
          <NavigationLogo>
            <Link to="/" title="M Haidar Hanif" prefetch="intent">
              <Logo />
            </Link>
          </NavigationLogo>

          <ButtonToggleTheme />
        </NavigationGroupLogo>

        <NavigationGroupLinks>
          {navigationLinks.map((link) => (
            <NavigationLink
              key={link.name}
              to={link.to}
              variant={location.pathname === link.to ? 'active' : 'normal'}
              prefetch="intent"
            >
              {link.name}
            </NavigationLink>
          ))}
        </NavigationGroupLinks>
      </Navigation>
    </HeaderStyled>
  )
}
