import { styled } from '~/stitches'

export const ButtonGroup = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',

  variants: {
    size: {
      1: {
        gap: '$2',
        a: { px: '$2', py: '$1' },
        button: { px: '$2', py: '$1' },
      },
      2: {
        gap: '$3',
        a: { px: '$3', py: '$2' },
        button: { px: '$3', py: '$2' },
      },
      3: {
        gap: '$5',
        fontSize: '$3',
        a: { px: '$5', py: '$3' },
        button: { px: '$5', py: '$3' },
      },
    },
  },
})
