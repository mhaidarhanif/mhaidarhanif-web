import { styled } from '~/stitches'

export const P = styled('p', {
  mt: '$0',
  mb: '$5',
  fontSize: '$4',
  lineHeight: '$8',
  variants: {
    size: {
      adaptive: {
        fontSize: '$1',
        '@tablet': { fontSize: '$2' },
        '@desktop': { fontSize: '$3' },
      },
    },
  },
})
