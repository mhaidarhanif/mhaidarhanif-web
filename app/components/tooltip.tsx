import { FunctionComponent } from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

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

export const TooltipContent = styled(TooltipPrimitive.Content, {
  borderRadius: 4,
  padding: '10px 15px',
  backgroundColor: '$background',
  color: '$text',
  '&:focus': {
    border: '1px solid $brand',
  },
  boxShadow:
    'hsla(190,95%,39%,35%) 0px -5px 30px -10px, hsla(190,95%,39%,20%) 0px 10px 20px -15px',
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
})

const TooltipArrow = styled(TooltipPrimitive.Arrow, {
  fill: '$background',
})

export const TooltipProvider = TooltipPrimitive.Provider
export const TooltipRoot = TooltipPrimitive.Root
export const TooltipTrigger = TooltipPrimitive.Trigger

interface TooltipProps {
  text: string
  children: React.ReactNode
}

export const Tooltip: FunctionComponent<TooltipProps> = ({
  text,
  children,
}) => {
  return (
    <TooltipRoot>
      <TooltipTrigger asChild>
        <span>{children}</span>
      </TooltipTrigger>
      <TooltipContent side="bottom" sideOffset={3}>
        <span>{text}</span>
        <TooltipArrow height="10" />
      </TooltipContent>
    </TooltipRoot>
  )
}

export default Tooltip
