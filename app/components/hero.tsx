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
}

const HeroStyled = styled('div', {
  height: '300px',
  '@desktop': { height: '450px' },
  h1: {
    fontFamily: '$fontHeading',
    fontWeight: '$normal',
  },
})

export const Hero: FunctionComponent<HeroProps> = ({ children }) => (
  <HeroStyled id="hero">{children}</HeroStyled>
)

const HeroImageContainer = styled('div', {
  background: '$background',
  display: 'flex',
  overflow: 'hidden',
  height: '300px',
  top: '-300px',
  '@desktop': {
    height: '450px',
    top: '-450px',
  },

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
