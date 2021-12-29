import { styled } from '~/stitches'

export const P = styled('p', {
  fontSize: '$2',
  lineHeight: '$8',
  mt: '$2',
  mb: '$3',

  variants: {
    lang: {
      en: { fontFamily: '$fontDefault' },
      ja: { color: '$pink10', fontFamily: '$fontJapanese' },
      ko: { color: '$blue10', fontFamily: '$fontDefault' },
      zh: { color: '$red10', fontFamily: '$fontDefault' },
      th: { color: '$amber10', fontFamily: '$fontDefault' },
      ar: { color: '$green10', fontFamily: '$fontDefault' },
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
