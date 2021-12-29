import { Link } from 'remix'
export { Link }

import { styled } from '~/stitches'

export const LinkButton = styled(Link, {
  px: '$3',
  py: '$2',
  fontWeight: '$bold',
  cursor: 'pointer',
  border: '$none',
  borderRadius: '$1',
  color: '$sky12',
  transition: 'all 0.2s ease',
  backgroundColor: '$sky9',
  '&:hover': { backgroundColor: '$sky10' },
  '&:focus': { backgroundColor: '$sky10' },
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
