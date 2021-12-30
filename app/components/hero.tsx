import { FunctionComponent, ReactNode } from 'react'

import { Container, Center } from '~/components'
import { styled } from '~/stitches'

interface HeroProps {
  children: ReactNode
}

const HeroStyled = styled('div', {
  h1: {
    fontFamily: '$fontHeading',
    fontWeight: '$normal',
  },
  py: '$5',
  '@tablet': {
    py: '$5',
    mb: '$10',
  },
})

export const Hero: FunctionComponent<HeroProps> = ({ children }) => (
  <HeroStyled id="hero">
    <Container>
      <Center>{children}</Center>
    </Container>
  </HeroStyled>
)
