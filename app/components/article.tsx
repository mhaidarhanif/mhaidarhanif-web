import { styled } from '~/stitches'

export const Article = styled('article', {
  width: '100%',
})

export const ArticleHeader = styled('section', {
  mb: '$12',
  '@tablet': { mb: '$16' },
  '@desktop': { mb: '$20' },
})

export const ArticleSection = styled('section', {
  mb: '$14',
})
