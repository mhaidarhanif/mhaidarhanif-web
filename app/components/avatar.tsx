import * as AvatarPrimitive from '@radix-ui/react-avatar'

import { styled } from '~/stitches'

const AvatarStyled = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$brand',
  borderRadius: '100%',
  overflow: 'hidden',
  userSelect: 'none',
  verticalAlign: 'middle',
  variants: {
    size: {
      1: { width: 10, height: 10 },
      2: { width: 25, height: 25 },
      3: { width: 50, height: 50 },
      4: { width: 100, height: 100 },
      5: { width: 150, height: 150 },
    },
  },
  defaultVariants: {
    size: '2',
  },
})

const ImageStyled = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

const FallbackStyled = styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  color: '$brand',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
})

export const Avatar = AvatarStyled
export const AvatarImage = ImageStyled
export const AvatarFallback = FallbackStyled
