import { FunctionComponent } from 'react'

import { styled } from '~/stitches'

interface HeroProps {
  children: React.ReactNode
}

interface HeroImageProps {
  src: string
  alt: string
}

const HeroStyled = styled('div', {
  h1: {
    fontFamily: '$fontHeading',
    fontWeight: '$normal',
  },
})

const HeroImageContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  height: '300px',
  '@desktop': {
    height: '420px',
  },
})

const HeroImageStyled = styled('img', {
  objectFit: 'contain',
  width: '100%',
})

export const Hero: FunctionComponent<HeroProps> = ({ children }) => (
  <HeroStyled id="hero">{children}</HeroStyled>
)

export const HeroImage: FunctionComponent<HeroImageProps> = ({ src, alt }) => (
  <HeroImageContainer id="hero-image">
    <HeroImageStyled src={src} alt={alt} />
  </HeroImageContainer>
)
