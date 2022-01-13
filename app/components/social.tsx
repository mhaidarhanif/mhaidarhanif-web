import { FunctionComponent } from 'react'

import { Tooltip, Icon, Anchor } from '~/components'
import { socialMediaLinks } from '~/data'
import { styled } from '~/stitches'

interface SocialMediaLinksProps {
  size?: 'small'
  side?: 'top'
  enabledLinks?: string[]
  withName?: boolean
}

interface SocialMediaLinkProps {
  link: any
  side?: 'top' | 'bottom'
}

interface SocialMediaLinkNamedProps {
  link: any
}

const SocialContainer = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  fontSize: '$5',
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

export const SocialMediaLinks: FunctionComponent<SocialMediaLinksProps> = ({
  size,
  side,
  enabledLinks,
  withName,
}) => {
  // Check if there are enabledLinks array
  const filteredLinks = enabledLinks?.length
    ? socialMediaLinks.filter((item) => enabledLinks?.includes(item.name))
    : socialMediaLinks

  return (
    <SocialContainer size={size}>
      {withName
        ? filteredLinks.map((link) => (
            <SocialMediaLinkNamed key={link.name} link={link} />
          ))
        : filteredLinks.map((link) => (
            <SocialMediaLink key={link.name} link={link} side={side} />
          ))}
    </SocialContainer>
  )
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
    <Anchor href={link.url}>
      <Icon name={link.name.toLowerCase()} />
    </Anchor>
  </Tooltip>
)

export const SocialMediaLinkNamed: FunctionComponent<
  SocialMediaLinkNamedProps
> = ({ link }) => (
  <Anchor display="with-icon" href={link.url}>
    <Icon name={link.name.toLowerCase()} /> <span>{link.name}</span>
  </Anchor>
)
