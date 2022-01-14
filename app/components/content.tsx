import { FunctionComponent } from 'react'

import { styled } from '~/stitches'

interface ContentProps {
  children: React.ReactNode
}

const ContentStyled = styled('div', {
  display: 'block',
  background: '$background',
  py: '2rem',
  '@tablet': { py: '3rem' },
  '@desktop': { py: '5rem' },
})

export const Content: FunctionComponent<ContentProps> = ({ children }) => (
  <ContentStyled id="content">{children}</ContentStyled>
)
