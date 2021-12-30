import { FunctionComponent } from 'react'

import { Tooltip, AnchorIcon, Icon } from '~/components'
import { socialMediaLinks } from '~/data'
import { styled } from '~/stitches'

const SocialContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '1rem',
  fontSize: '1.5rem',
})

interface SocialMediaLinksProps {
  enabledLinks?: string[]
}

export const SocialMediaLinks: FunctionComponent<SocialMediaLinksProps> = ({
  enabledLinks,
}) => {
  // Check if there are enabledLinks array
  const filteredLinks = enabledLinks?.length
    ? socialMediaLinks.filter((item) => enabledLinks?.includes(item.name))
    : socialMediaLinks

  return (
    <SocialContainer>
      {filteredLinks.map((link) => (
        <SocialMediaLink key={link.name} link={link} />
      ))}
    </SocialContainer>
  )
}

interface SocialMediaLinkProps {
  link: any
}

export const SocialMediaLink: FunctionComponent<SocialMediaLinkProps> = ({
  link,
}) => (
  <Tooltip content={link.name}>
    <AnchorIcon href={link.url}>
      <Icon name={link.name.toLowerCase()} />
    </AnchorIcon>
  </Tooltip>
)
