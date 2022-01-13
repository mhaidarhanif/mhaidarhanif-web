import { FunctionComponent } from 'react'
import {
  BsSlack as SlackIcon,
  BsFillChatSquareFill as TwistIcon,
  BsDiscord as DiscordIcon,
} from 'react-icons/bs'
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
  FaFileAlt as CVIcon,
  // Compnay
  FaCat as CatamystIcon,
  FaProjectDiagram as KontenbaseIcon,
  FaCode as CodePolitanIcon,
} from 'react-icons/fa'
import { GiClover as HighSkillMastersIcon } from 'react-icons/gi'

const switchFn =
  (lookupObject: any, defaultCase = '_default') =>
  (expression: string | number) =>
    lookupObject[expression] || lookupObject[defaultCase]

export const iconMaps = {
  // General
  circle: <CircleIcon />,
  website: <WebsiteIcon />,
  // Theme
  light: <LightIcon />,
  dark: <DarkIcon />,
  // Social media
  twitter: <TwitterIcon />,
  github: <GitHubIcon />,
  linkedin: <LinkedInIcon />,
  instagram: <InstagramIcon />,
  facebook: <FacebookIcon />,
  youtube: <YouTubeIcon />,
  polywork: <PolyworkIcon />,
  // Chat
  slack: <SlackIcon />,
  twist: <TwistIcon />,
  discord: <DiscordIcon />,
  // Misc
  cv: <CVIcon />,
  // Company
  catamyst: <CatamystIcon />,
  kontenbase: <KontenbaseIcon />,
  codepolitan: <CodePolitanIcon />,
  highskillmasters: <HighSkillMastersIcon />,
  // Default
  default: <CircleIcon />,
}

const iconSwitch = switchFn(iconMaps, 'default')

interface IconProps {
  name: string
}

export const Icon: FunctionComponent<IconProps> = ({ name }) => iconSwitch(name)
