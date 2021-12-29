import {
  // General
  FaCircle as CircleIcon,
  FaGlobe as WebsiteIcon,
  // Theme
  FaSun as DarkIcon,
  FaMoon as LightIcon,
  // Social media
  FaFacebook as FacebookIcon,
  FaGithub as GitHubIcon,
  FaInstagram as InstagramIcon,
  FaLinkedin as LinkedInIcon,
  FaTwitter as TwitterIcon,
  FaYoutube as YouTubeIcon,
  FaTh as PolyworkIcon,
  // Misc
  FaCat as CatamystIcon,
  FaFileAlt as CVIcon,
} from 'react-icons/fa'
import {
  BsSlack as SlackIcon,
  BsFillChatSquareFill as TwistIcon,
  BsDiscord as DiscordIcon,
} from 'react-icons/bs'

interface IconProps {
  name: string
}

export function Icon(props: IconProps) {
  switch (props.name) {
    /**
     * General
     */
    case 'circle':
      return <CircleIcon />
    case 'website':
      return <WebsiteIcon />
    /**
     * Theme
     */
    case 'light':
      return <LightIcon />
    case 'dark':
      return <DarkIcon />
    /**
     * Social media
     */
    case 'twitter':
      return <TwitterIcon />
    case 'github':
      return <GitHubIcon />
    case 'linkedin':
      return <LinkedInIcon />
    case 'instagram':
      return <InstagramIcon />
    case 'facebook':
      return <FacebookIcon />
    case 'youtube':
      return <YouTubeIcon />
    case 'polywork':
      return <PolyworkIcon />
    /**
     * Chat
     */
    case 'slack':
      return <SlackIcon />
    case 'twist':
      return <TwistIcon />
    case 'discord':
      return <DiscordIcon />
    /**
     * Misc
     */
    case 'catamyst':
      return <CatamystIcon />
    case 'cv':
      return <CVIcon />
    /**
     * When nothing found
     */
    default:
      return <CircleIcon />
  }
}
