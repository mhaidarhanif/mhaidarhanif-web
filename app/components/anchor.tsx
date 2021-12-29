import { FunctionComponent } from 'react'

import { styled } from '~/stitches'

interface AnchorProps {
  css?: any
  href: string
  display?: 'block' | 'with-icon' | undefined
  children: React.ReactNode
}

const AnchorStyled = styled('a', {
  transition: 'color 0.2s ease',
  color: '$anchor',
  '&:hover': {
    color: '$anchorHover',
  },
  variants: {
    display: {
      block: {
        display: 'block',
      },
      'with-icon': {
        verticalAlign: 'bottom',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.25rem',
      },
    },
  },
})

export const Anchor: FunctionComponent<AnchorProps> = (props) => {
  return (
    <AnchorStyled
      display={props.display}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {props.children}
    </AnchorStyled>
  )
}

export const AnchorIcon = styled(Anchor, {
  svg: { height: '100%' },
  // color: '$brand10',
  // '&:hover': { color: '$brand11' },
})
