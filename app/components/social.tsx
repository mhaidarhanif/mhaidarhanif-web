import { styled } from '~/stitches'
import { AnchorIcon, Icon } from '~/components'

const socialMediaLinksRebrand = [
  { name: 'Twitter', url: 'https://a.mhaidarhanif.com/twitter' },
  { name: 'GitHub', url: 'https://a.mhaidarhanif.com/github' },
  { name: 'LinkedIn', url: 'https://a.mhaidarhanif.com/linkedin' },
  { name: 'YouTube', url: 'https://a.mhaidarhanif.com/youtube' },
  { name: 'Instagram', url: 'https://a.mhaidarhanif.com/instagram' },
  { name: 'Facebook', url: 'https://a.mhaidarhanif.com/facebook' },
]

const socialMediaLinks = [
  { name: 'Twitter', url: 'https://twitter.com/mhaidarhanif' },
  { name: 'GitHub', url: 'https://github.com/mhaidarhanif' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/mhaidarhanif' },
  { name: 'YouTube', url: 'https://youtube.com/mhaidarhanif' },
  { name: 'Instagram', url: 'https://instagram.com/mhaidarhanif' },
  { name: 'Facebook', url: 'https://facebook.com/mhaidarhanif' },
]

const SocialContainer = styled('div', {
  display: 'flex',
  gap: '1rem',
  fontSize: '1.5rem',
})

export const SocialMediaLinks = () => {
  return (
    <SocialContainer>
      {socialMediaLinks.map((link, index) => {
        return (
          <AnchorIcon key={link.name} href={link.url}>
            <Icon name={link.name.toLowerCase()} />
          </AnchorIcon>
        )
      })}
    </SocialContainer>
  )
}
