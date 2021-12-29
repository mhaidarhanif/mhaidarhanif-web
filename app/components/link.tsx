import { Link } from 'remix'
export { Link }
import { FunctionComponent } from 'react'

import { styled } from '~/stitches'

interface LinkProps {
  css?: any
  to: string
  display?: 'block' | 'with-icon' | undefined
  children: React.ReactNode
}

const LinkButtonStyled = styled(Link, {
  variants: {
    display: {
      block: {
        display: 'block',
      },
      'with-icon': {
        verticalAlign: 'bottom',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.25rem',
      },
    },
  },
})

export const LinkButton: FunctionComponent<LinkProps> = (props) => {
  return <LinkButtonStyled {...props}>{props.children}</LinkButtonStyled>
}
