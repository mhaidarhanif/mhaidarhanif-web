import { styled } from '~/stitches'

export const P = styled('p', {
  lineHeight: '$8',

  mt: '$2',
  mb: '$2',
  fontSize: '$0',
  '@tablet': { mb: '$3', fontSize: '$1' },
  '@desktop': { mb: '$4', fontSize: '$2' },

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
