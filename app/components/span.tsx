import { styled } from '~/stitches'

export const Span = styled('span', {
  variants: {
    flex: {
      true: { display: 'inline-flex' },
    },
    color: {
      normal: { color: '$text' },
      brand: { color: '$brand' },
      blue: { color: '$blue10' },
      green: { color: '$green10' },
      pink: { color: '$pink10' },
      red: { color: '$red10' },
      teal: { color: '$teal10' },
      yellow: { color: '$yellow10' },
    },
    lang: {
      en: { fontFamily: '$fontDefault' },
      ja: { color: '$pink10', fontFamily: '$fontJapanese' },
      ko: { color: '$blue10', fontFamily: '$fontDefault' },
      zh: { color: '$red10', fontFamily: '$fontDefault' },
      th: { color: '$amber10', fontFamily: '$fontDefault' },
      ar: { color: '$green10', fontFamily: '$fontDefault' },
    },
  },
})
