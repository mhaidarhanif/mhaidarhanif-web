import { FunctionComponent } from 'react'
import { Link as RemixLink } from 'remix'

import { styled } from '~/stitches'

interface LinkProps {
  css?: any
  to: string
  prefetch: any
  children: React.ReactNode
}

const LinkStyled = styled(RemixLink, {
  transition: 'color 0.2s ease',
  borderRadius: '$2',
  color: '$anchor',
  '&:hover': {
    color: '$anchorHover',
  },
})

export const Link: FunctionComponent<LinkProps> = ({
  css,
  to,
  prefetch,
  children,
}) => (
  <LinkStyled css={css} to={to} prefetch={prefetch}>
    {children}
  </LinkStyled>
)
