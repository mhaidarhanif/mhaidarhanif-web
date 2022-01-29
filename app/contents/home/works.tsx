import { FunctionComponent } from 'react'

import { Box, Container, H, P } from '~/components'

export const HomeWorks: FunctionComponent = () => (
  <Container>
    <Box>
      <H as="h2">Works</H>
      <P>
        Some featured works will be added here. You know the reasons:
        prioritizing some other works first. 🙂
      </P>
      <img
        src="/illustrations/character-earth-chikyu.png"
        alt="Character Earth Chikyu"
        width="200"
      />
    </Box>
  </Container>
)
