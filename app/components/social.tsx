import { styled } from '~/stitches'
import { TooltipProvider, Tooltip, AnchorIcon, Icon } from '~/components'

const socialMediaLinksOriginal = [
  { name: 'Twitter', url: 'https://twitter.com/mhaidarhanif' },
  { name: 'GitHub', url: 'https://github.com/mhaidarhanif' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/mhaidarhanif' },
  { name: 'YouTube', url: 'https://youtube.com/mhaidarhanif' },
  { name: 'Instagram', url: 'https://instagram.com/mhaidarhanif_' },
  { name: 'Facebook', url: 'https://facebook.com/mhaidarhanif' },
  { name: 'Polywork', url: 'https://poly.work/haidar' },
  { name: 'CV', url: 'https://haidar.read.cv' },
]

const socialMediaLinks = [
  { name: 'Twitter', url: 'https://a.mhaidarhanif.com/twitter' },
  { name: 'GitHub', url: 'https://a.mhaidarhanif.com/github' },
  { name: 'LinkedIn', url: 'https://a.mhaidarhanif.com/linkedin' },
  { name: 'YouTube', url: 'https://a.mhaidarhanif.com/youtube' },
  { name: 'Instagram', url: 'https://a.mhaidarhanif.com/instagram' },
  { name: 'Facebook', url: 'https://a.mhaidarhanif.com/facebook' },
  { name: 'Polywork', url: 'https://a.mhaidarhanif.com/polywork' },
  { name: 'CV', url: 'https://a.mhaidarhanif.com/cv' },
]

const SocialContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
  fontSize: '1.5rem',
})

export const SocialMediaLinks = () => {
  return (
    <SocialContainer>
      <TooltipProvider delayDuration={200} skipDelayDuration={500}>
        {socialMediaLinks.map((link, index) => {
          return (
            <Tooltip key={link.name} text={link.name}>
              <AnchorIcon key={link.name} href={link.url}>
                <Icon name={link.name.toLowerCase()} />
              </AnchorIcon>
            </Tooltip>
          )
        })}
      </TooltipProvider>
    </SocialContainer>
  )
}
