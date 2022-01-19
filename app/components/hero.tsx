import { FunctionComponent } from 'react'

import { styled } from '~/stitches'

type Align = 'top' | 'center' | 'bottom'

interface HeroProps {
  children: React.ReactNode
}

interface HeroImageProps {
  src: string
  alt: string
  align?: string | 'top' | 'center' | 'bottom' | undefined
  // eslint-disable-next-line react/no-unused-prop-types
  blurhash?: string
}

const HeroStyled = styled('div', {
  h1: {
    fontFamily: '$fontHeading',
    fontWeight: '$normal',
  },
})

export const Hero: FunctionComponent<HeroProps> = ({ children }) => (
  <HeroStyled id="hero">{children}</HeroStyled>
)

const HeroImageContainer = styled('div', {
  background: '$backgroundSection',
  display: 'flex',
  overflow: 'hidden',
  height: '260px',
  '@tablet': { height: '300px' },
  '@desktop': { height: '390px' },

  variants: {
    align: {
      top: { alignItems: 'flex-start' },
      center: { alignItems: 'center' },
      bottom: { alignItems: 'flex-end' },
    },
  },
  defaultVariants: {
    align: 'center',
  },
})

const HeroImageStyled = styled('img', {
  zIndex: '100',
  objectFit: 'contain',
  width: '100%',
})

export const HeroImage: FunctionComponent<HeroImageProps> = ({
  src,
  alt,
  align,
}) => (
  <HeroImageContainer align={align as Align}>
    <HeroImageStyled src={src} alt={alt} />
  </HeroImageContainer>
)
