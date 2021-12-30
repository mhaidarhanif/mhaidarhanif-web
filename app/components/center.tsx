import { FunctionComponent } from 'react'

import { styled } from '~/stitches'

interface CenterProps {
  css?: any
  layout?:
    | 'horizontal'
    | 'vertical'
    | 'vertical-center'
    | 'vertical-adaptive'
    | undefined
  children: React.ReactNode
}

const CenterStyled = styled('div', {
  display: 'flex',
  width: '100%',
  variants: {
    layout: {
      horizontal: {
        justifyContent: 'center',
        textAlign: 'center',
      },
      vertical: {
        flexDirection: 'column',
        alignItems: 'center',
      },
      'vertical-center': {
        flexDirection: 'column',
        alignItems: 'center',
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

export const Center: FunctionComponent<CenterProps> = ({
  css,
  layout,
  children,
}) => (
  <CenterStyled css={css} layout={layout}>
    {children}
  </CenterStyled>
)

export default Center
