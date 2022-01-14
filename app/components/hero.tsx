import { FunctionComponent } from 'react'
import { Blurhash } from 'react-blurhash'

import { styled } from '~/stitches'

type Align = 'top' | 'center' | 'bottom'

interface HeroProps {
  children: React.ReactNode
}

interface HeroImageProps {
  src: string
  alt: string
  align?: string | 'top' | 'center' | 'bottom' | undefined
  blurhash?: string
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

const BlurhashContainer = styled('div', {
  position: 'relative',
  width: '100%',
  height: '100%',
})

const HeroImageContainer = styled('div', {
  position: 'relative',

  background: '$background',
  display: 'flex',
  overflow: 'hidden',

  height: '300px',
  top: '-300px',
  '@desktop': { height: '450px', top: '-450px' },

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
  blurhash,
}) => (
  <>
    {blurhash && (
      <BlurhashContainer>
        <Blurhash
          hash={blurhash as string}
          width="100%"
          height="450px"
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      </BlurhashContainer>
    )}
    <HeroImageContainer align={align as Align}>
      <HeroImageStyled src={src} alt={alt} />
    </HeroImageContainer>
  </>
)
