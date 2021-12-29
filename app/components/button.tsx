import { styled } from '~/stitches'

export const buttonStyles = {
  px: '$3',
  py: '$2',
  fontWeight: '$bold',
  cursor: 'pointer',
  border: '$none',
  borderRadius: '$1',
  color: '$buttonText',
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
