import { FunctionComponent } from 'react'

import { styled } from '~/stitches'

interface FlexProps {
  css?: any
  children: React.ReactNode
}

const FlexStyled = styled('div', {
  display: 'flex',
})

export const Flex: FunctionComponent<FlexProps> = ({ css, children }) => (
  <FlexStyled css={css}>{children}</FlexStyled>
)
