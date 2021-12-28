import { FunctionComponent } from 'react'

import { styled } from '~/stitches'

interface CenterProps {
  layout?: 'horizontal' | 'vertical' | undefined
  children: React.ReactNode
}

const CenterStyled = styled('div', {
  display: 'flex',
  variants: {
    layout: {
      vertical: {
        flexDirection: 'column',
        alignItems: 'center',
      },
      horizontal: {
        justifyContent: 'center',
        textAlign: 'center',
      },
    },
  },
  defaultVariants: {
    layout: 'vertical',
  },
})

export const Center: FunctionComponent<CenterProps> = (props) => {
  return <CenterStyled {...props}>{props.children}</CenterStyled>
}

export default Center
