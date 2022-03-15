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

export const ArticleCard = styled('div', {
  pl: '$5',
  borderLeft: '5px solid $text',
  '&:hover': {
    borderLeft: '5px solid $brand10',
  },
})
