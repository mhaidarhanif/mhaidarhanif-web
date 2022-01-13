import { FunctionComponent } from 'react'

import { styled } from '~/stitches'

interface BoxProps {
  css?: any
  children: React.ReactNode
}

const BoxStyled = styled('div', {
  display: 'block',
})

export const Box: FunctionComponent<BoxProps> = ({ css, children }) => (
  <BoxStyled css={css}>{children}</BoxStyled>
)
