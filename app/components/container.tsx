import { FunctionComponent } from 'react'

import { styled } from '~/stitches'

interface ContainerProps {
  layout?: 'center-horizontal' | 'center-vertical' | undefined
  size?: 'adaptive' | undefined
  children: React.ReactNode
}

const ContainerStyled = styled('div', {
  width: '760px',
  marginRight: 'auto',
  marginLeft: 'auto',
  maxWidth: 'calc(100% - 1rem * 2)',
  '@desktop': { maxWidth: 'calc(100% - 2rem * 2)' },
  variants: {
    size: {
      adaptive: {
        maxWidth: '100%',
        '@tablet': { maxWidth: 'calc(100% - 1rem * 2)' },
        '@desktop': { maxWidth: 'calc(100% - 2rem * 2)' },
      },
    },
    layout: {
      'center-horizontal': {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
      },
      'center-vertical': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
    },
  },
})

/**
 * Container
 */
export const Container: FunctionComponent<ContainerProps> = ({
  layout,
  size,
  children,
}) => (
  <ContainerStyled className="content" layout={layout} size={size}>
    {children}
  </ContainerStyled>
)
