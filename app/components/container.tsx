import { FunctionComponent } from 'react'

import { styled } from '~/stitches'

interface ContainerProps {
  layout?: 'center-horizontal' | 'center-vertical' | undefined
  size?: 'full' | 'adaptive' | undefined
  children: React.ReactNode
}

interface ContainerBoundaryProps {
  children: React.ReactNode
}

const ContainerStyled = styled('div', {
  width: '760px',
  display: 'flex',
  justifyContent: 'space-between',
  marginRight: 'auto',
  marginLeft: 'auto',
  maxWidth: 'calc(100% - 1rem * 2)',
  '@desktop': {
    maxWidth: 'calc(100% - 2rem * 2)',
  },
  variants: {
    size: {
      full: {
        width: '100%',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        maxWidth: 'calc(100% - 1rem * 2)',
      },
      adaptive: {
        maxWidth: '100%',
        '@tablet': {
          maxWidth: 'calc(100% - 1rem * 2)',
        },
        '@desktop': {
          maxWidth: 'calc(100% - 2rem * 2)',
        },
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

const ContainerBoundaryStyled = styled('div', {
  width: '760px',
  marginRight: 'auto',
  marginLeft: 'auto',
  maxWidth: 'calc(100% - 1rem * 2)',
  '@desktop': {
    maxWidth: 'calc(100% - 2rem * 2)',
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
  <ContainerStyled className="container" layout={layout} size={size}>
    {children}
  </ContainerStyled>
)

/**
 * Container Boundary
 */
export const ContainerBoundary: FunctionComponent<ContainerBoundaryProps> = ({
  children,
}) => (
  <ContainerBoundaryStyled className="container-boundary">
    {children}
  </ContainerBoundaryStyled>
)
