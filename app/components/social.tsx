import { FunctionComponent } from 'react'

import { Tooltip, AnchorIcon, Icon } from '~/components'
import { socialMediaLinks } from '~/data'
import { styled } from '~/stitches'

const SocialContainer = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  fontSize: '1.5rem',
  gap: '1rem',
  variants: {
    size: {
      small: {
        fontSize: '$1',
        gap: '$2',
      },
    },
  },
})

interface SocialMediaLinksProps {
  size?: 'small'
  side?: 'top'
  enabledLinks?: string[]
}

export const SocialMediaLinks: FunctionComponent<SocialMediaLinksProps> = ({
  size,
  side,
  enabledLinks,
}) => {
  // Check if there are enabledLinks array
  const filteredLinks = enabledLinks?.length
    ? socialMediaLinks.filter((item) => enabledLinks?.includes(item.name))
    : socialMediaLinks

  return (
    <SocialContainer size={size}>
      {filteredLinks.map((link) => (
        <SocialMediaLink key={link.name} link={link} side={side} />
      ))}
    </SocialContainer>
  )
}

interface SocialMediaLinkProps {
  link: any
  side?: 'top' | 'bottom'
}

export const SocialMediaLink: FunctionComponent<SocialMediaLinkProps> = ({
  link,
  side,
}) => (
  <Tooltip
    content={link.name}
    side={side}
    align="center"
    avoidCollisions={false}
  >
    <AnchorIcon href={link.url}>
      <Icon name={link.name.toLowerCase()} />
    </AnchorIcon>
  </Tooltip>
)
