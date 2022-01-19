import { FunctionComponent } from 'react'

import { Icon } from '~/components'
import { styled } from '~/stitches'
import { Color } from '~/types'

interface AnchorProps {
  css?: any
  href: string
  display?: 'block' | 'with-icon' | undefined
  color?: Color
  children: React.ReactNode
}

interface AnchorIconProps {
  name: string
  href: string
  color?: Color
  children: React.ReactNode
}

const AnchorStyled = styled('a', {
  cursor: 'alias',
  transition: 'color 0.2s ease',
  borderRadius: '$2',
  color: '$anchor',
  '&:hover': { color: '$anchorHover' },
  variants: {
    color: {
      normal: { color: '$text', '&:hover': { color: '$text' } },
      brand: { color: '$brand10', '&:hover': { color: '$brand11' } },
      blue: { color: '$blue10', '&:hover': { color: '$blue11' } },
      green: { color: '$green10', '&:hover': { color: '$green11' } },
      pink: { color: '$pink10', '&:hover': { color: '$pink11' } },
      red: { color: '$red10', '&:hover': { color: '$red11' } },
      teal: { color: '$teal10', '&:hover': { color: '$teal11' } },
      yellow: { color: '$yellow11', '&:hover': { color: '$yellow12' } },
    },
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
  defaultVariants: {
    color: 'brand',
  },
})

export const Anchor: FunctionComponent<AnchorProps> = ({
  href,
  display,
  color,
  css,
  children,
}) => (
  <AnchorStyled
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    display={display}
    color={color}
    css={css}
  >
    {children}
  </AnchorStyled>
)

export const AnchorIcon: FunctionComponent<AnchorIconProps> = ({
  name,
  color,
  href,
  children,
}) => (
  <Anchor display="with-icon" href={href} color={color}>
    <Icon name={name} /> {children}
  </Anchor>
)
