import { FunctionComponent } from 'react'

import { styled } from '~/stitches'
import { Container, Center } from '~/components'

interface HeroProps {
  children: React.ReactNode
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

export const Hero: FunctionComponent<HeroProps> = ({ children }) => {
  return (
    <HeroStyled id="hero">
      <Container>
        <Center>{children}</Center>
      </Container>
    </HeroStyled>
  )
}
