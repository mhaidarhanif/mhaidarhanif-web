import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { FunctionComponent, ReactNode } from 'react'

import { styled, keyframes } from '~/stitches'

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

export const TooltipArrow = styled(TooltipPrimitive.Arrow, {
  fill: '$backgroundInvert',
})

export const TooltipContent = styled(TooltipPrimitive.Content, {
  padding: '10px 15px',
  color: '$textInvert',
  backgroundColor: '$backgroundInvert',
  '&:focus': {
    border: '1px solid $brand',
  },
  boxShadow:
    'hsla(190,95%,39%,35%) 0px -5px 30px -10px, hsla(190,95%,39%,20%) 0px 10px 20px -10px',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '300ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="delayed-open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },

  variants: {
    radius: {
      center: { borderRadius: '$4' },
      start: { borderRadius: '0 $4 $4 $4' },
    },
  },

  defaultVariants: {
    radius: 'center',
  },
})

export const TooltipProvider = TooltipPrimitive.Provider
export const TooltipRoot = TooltipPrimitive.Root
export const TooltipTrigger = TooltipPrimitive.Trigger

interface TooltipProps {
  content: string | ReactNode | any
  side?: 'top' | 'bottom'
  align?: 'center' | 'start'
  children: React.ReactNode
}

export const Tooltip: FunctionComponent<TooltipProps> = ({
  content,
  side = 'bottom',
  align = 'center',
  children,
}) => (
  <TooltipRoot>
    <TooltipTrigger asChild>
      <span>{children}</span>
    </TooltipTrigger>
    <TooltipContent
      avoidCollisions={align !== 'start'}
      side={side}
      align={align}
      radius={align}
      sideOffset={3}
    >
      <span>{content}</span>
      <TooltipArrow height="10" />
    </TooltipContent>
  </TooltipRoot>
)

export default Tooltip
