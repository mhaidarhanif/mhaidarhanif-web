import { FunctionComponent } from 'react'

import { styled } from '~/stitches'

interface AnchorProps {
  css?: any
  href: string
  display?: 'block' | undefined
  children: React.ReactNode
}

const AnchorStyled = styled('a', {
  variants: {
    display: {
      block: {
        display: 'block',
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
