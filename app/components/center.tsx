import { FunctionComponent } from 'react'

import { styled } from '~/stitches'

interface CenterProps {
  layout?: 'horizontal' | 'vertical' | 'vertical-adaptive' | undefined
  children: React.ReactNode
}

const CenterStyled = styled('div', {
  display: 'flex',
  variants: {
    layout: {
      vertical: {
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      },
      horizontal: {
        justifyContent: 'center',
        textAlign: 'center',
      },
      'vertical-adaptive': {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        textAlign: 'left',
        '@desktop': {
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        },
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
