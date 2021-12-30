import { FunctionComponent } from 'react'

import { Avatar, AvatarImage } from '~/components'

interface AvatarHaidarProps {}

export const AvatarHaidar: FunctionComponent<AvatarHaidarProps> = () => (
  <Avatar size="5">
    <AvatarImage src="/photos/mhaidarhanif-cyan.jpeg" alt="M Haidar Hanif" />
  </Avatar>
)
