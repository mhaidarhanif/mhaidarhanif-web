import { styled, darkTheme } from '~/stitches'

export const Button = styled('button', {
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
  [`${darkTheme}`]: {},
})

/**
 * Need to pass dark theme into Button component or the dark
 * theme variables aren't compiled and added to :root. This isn't
 * normally necessary.
 */
