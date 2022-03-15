import { FunctionComponent } from 'react'

import { styled } from '~/stitches'

interface StackProps {
  children: React.ReactNode
}

export const StackStyled = styled('div', {
  display: 'flex',
  fd: 'column',
  gap: '$10',
})

export const Stack: FunctionComponent<StackProps> = ({ children }) => (
  <StackStyled>{children}</StackStyled>
)
