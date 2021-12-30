import { FunctionComponent } from 'react'

import { styled } from '~/stitches'
import { TooltipProvider, Tooltip, AnchorIcon, Icon } from '~/components'
import { socialMediaLinks } from '~/data'

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
    ? socialMediaLinks.filter((item) => {
        if (enabledLinks?.includes(item.name)) {
          return item
        }
      })
    : socialMediaLinks

  return (
    <SocialContainer>
      {filteredLinks.map((link, index) => {
        return <SocialMediaLink key={link.name} link={link} />
      })}
    </SocialContainer>
  )
}

interface SocialMediaLinkProps {
  link: any
}

export const SocialMediaLink: FunctionComponent<SocialMediaLinkProps> = ({
  link,
}) => {
  return (
    <Tooltip key={link.name} text={link.name}>
      <AnchorIcon key={link.name} href={link.url}>
        <Icon name={link.name.toLowerCase()} />
      </AnchorIcon>
    </Tooltip>
  )
}
