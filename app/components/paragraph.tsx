import { styled } from '~/stitches'

export const P = styled('p', {
  fontSize: '$2',
  lineHeight: '$8',
  mt: '$0',
  mb: '$5',

  variants: {
    lang: {
      en: {
        fontFamily: '$fontDefault',
      },
      ja: {
        fontFamily: '$fontJapanese',
      },
    },
    size: {
      adaptive: {
        fontSize: '$1',
        '@tablet': { fontSize: '$2' },
        '@desktop': { fontSize: '$3' },
      },
    },
  },
})
