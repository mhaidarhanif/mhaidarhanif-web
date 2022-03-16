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
  height?: 'compact' | 'tall'
}

const HeroStyled = styled('div', {
  h1: {
    fontFamily: '$fontHeading',
    fontWeight: '$normal',
  },
})

const HeroImageContainer = styled('div', {
  background: '$backgroundSection',
  display: 'flex',
  overflow: 'hidden',

  variants: {
    align: {
      top: { alignItems: 'flex-start' },
      center: { alignItems: 'center' },
      bottom: { alignItems: 'flex-end' },
    },
    height: {
      compact: {
        height: '260px',
        '@tablet': { height: '300px' },
        '@desktop': { height: '380px' },
      },
      tall: {
        height: '260px',
        '@tablet': { height: '300px' },
        '@desktop': { height: '520px' },
      },
    },
  },

  defaultVariants: {
    align: 'center',
    height: 'compact',
  },
})

const HeroImageStyled = styled('img', {
  zIndex: '100',
  objectFit: 'contain',
  width: '100%',
})

export const Hero: FunctionComponent<HeroProps> = ({ children }) => (
  <HeroStyled id="hero">{children}</HeroStyled>
)

export const HeroImage: FunctionComponent<HeroImageProps> = ({
  src,
  alt,
  align,
  height,
}) => (
  <HeroImageContainer align={align as Align} height={height}>
    <HeroImageStyled src={src} alt={alt} />
  </HeroImageContainer>
)
