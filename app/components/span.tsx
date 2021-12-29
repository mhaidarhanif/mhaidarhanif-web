import { styled } from '~/stitches'

export const Span = styled('span', {
  variants: {
    lang: {
      en: { fontFamily: '$fontDefault' },
      ja: { fontFamily: '$fontJapanese' },
    },
  },
})
