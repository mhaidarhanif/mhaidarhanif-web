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
  h1: {
    fontFamily: '$fontHeading',
    fontWeight: '$normal',
  },
})

const HeroImageContainer = styled('div', {
  background: '$background',
  display: 'flex',
  height: '300px',
  '@desktop': { height: '450px' },

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
}) => (
  <HeroImageContainer id="hero-image" align={align as Align}>
    <HeroImageStyled src={src} alt={alt} />
  </HeroImageContainer>
)
