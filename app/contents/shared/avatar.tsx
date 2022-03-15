import { FunctionComponent } from 'react'

import { Avatar, AvatarImage } from '~/components'
import { styled } from '~/stitches'

const haidarAvatarUrl = '/photos/mhaidarhanif-cyan-500.jpeg'

interface AvatarHaidarProps {
  size?: any
  mode?: 'gradient' | undefined
}

const AvatarContainer = styled('div', {
  display: 'inline-block',
  cursor: 'pointer',
  position: 'relative',

  variants: {
    size: {
      '1': { '& span::before': { maxWidth: '20px' } },
      '2': { '& span::before': { maxWidth: '35px' } },
      '3': { '& span::before': { maxWidth: '60px' } },
      '4': { '& span::before': { maxWidth: '110px' } },
      '5': { '& span::before': { maxWidth: '160px' } },
    },
    mode: {
      gradient: {
        '&:hover span::before': {
          opacity: '1',
        },
        '& span::before': {
          borderRadius: '$round',
          position: 'absolute',
          top: '-5px',
          right: '-5px',
          bottom: '-5px',
          left: '-5px',
          display: 'block',
          transition: 'opacity 0.2s ease-in-out',
          content: '',
          opacity: '0',
          background: `linear-gradient(135deg, rgb(255, 99, 105) -5%, rgb(246, 92, 182) 20%, rgb(240, 192, 0) 45%, rgb(0, 194, 215) 85%)`,
          // background: `linear-gradient(
          //   135deg,
          //   $red11 -5%,
          //   $pink11 20%,
          //   $yellow11 45%,
          //   $cyan11 85%)`,
        },
      },
    },
  },
})

export const AvatarHaidar: FunctionComponent<AvatarHaidarProps> = ({
  size = 5,
  mode,
}) => (
  <AvatarContainer size={size} mode={mode}>
    <Avatar size={size}>
      <AvatarImage src={haidarAvatarUrl} alt="M Haidar Hanif" />
    </Avatar>
  </AvatarContainer>
)
