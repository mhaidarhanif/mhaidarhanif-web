import { Link } from 'remix'

import { styled } from '~/stitches'

export const buttonStyles = {
  userSelect: 'none',
  px: '$3',
  py: '$2',
  fontWeight: '$bold',
  cursor: 'pointer',
  border: '$none',
  borderRadius: '$pill',
  color: '$buttonText',
  transition: 'all 0.2s ease',
  backgroundColor: '$buttonNormal',
  '&:hover': { backgroundColor: '$buttonHover' },
  '&:focus': { backgroundColor: '$buttonFocus' },
}

/**
 * Button
 */

export const Button = styled('button', {
  ...buttonStyles,
})

/**
 * Anchor Button
 */

export const AnchorButton = styled('a', {
  ...buttonStyles,
})

/**
 * Link Button
 */
export const LinkButton = styled(Link, {
  ...buttonStyles,

  variants: {
    color: {
      sky: {
        color: '$textAbsolute',
        backgroundColor: '$sky9',
        '&:hover': { backgroundColor: '$sky10' },
        '&:focus': { backgroundColor: '$sky11' },
      },
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

  defaultVariants: { color: 'sky' },
})
