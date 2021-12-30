import { Link } from 'remix'
import { styled } from '~/stitches'

export { Link }

export const LinkButton = styled(Link, {
  px: '$3',
  py: '$2',
  fontWeight: '$bold',
  cursor: 'pointer',
  borderRadius: '$1',
  transition: 'all 0.2s ease',

  variants: {
    color: {
      sky: {
        color: '$textAbsolute',
        backgroundColor: '$sky9',
        '&:hover': { backgroundColor: '$sky10' },
        '&:focus': { backgroundColor: '$sky10' },
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
