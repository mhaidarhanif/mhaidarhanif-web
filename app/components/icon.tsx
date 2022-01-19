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
  FaBolt as BoltIcon,
  FaCloud as CloudIcon,
  FaCog as CogIcon,
  // Company
  FaProjectDiagram as KontenbaseIcon,
  // Person
  FaChalkboardTeacher as EducatorIcon,
  FaUserNinja as DeveloperIcon,
} from 'react-icons/fa'
import {
  // Company
  GiCat as CatamystIcon,
  GiClover as HighSkillMastersIcon,
  GiEmerald as CodePolitanIcon,
  GiPenguin as PoinswapIcon,
  GiDragonHead as ImpactByteIcon,
  GiFox as Hacktiv8Icon,
  GiOvermind as QopnetIcon,
  GiFlamer as AgniumIcon,
  GiCompass as AMPlifiedIcon,
} from 'react-icons/gi'

import { Span } from '~/components'
import { Color } from '~/types'

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
  bolt: <BoltIcon />,
  cloud: <CloudIcon />,
  cog: <CogIcon />,
  // Company
  catamyst: <CatamystIcon />,
  highskillmasters: <HighSkillMastersIcon />,
  kontenbase: <KontenbaseIcon />,
  codepolitan: <CodePolitanIcon />,
  poinswap: <PoinswapIcon />,
  impactbyte: <ImpactByteIcon />,
  hacktiv8: <Hacktiv8Icon />,
  qopnet: <QopnetIcon />,
  agnium: <AgniumIcon />,
  amplified: <AMPlifiedIcon />,
  // Person
  educator: <EducatorIcon />,
  developer: <DeveloperIcon />,
  // Default
  default: <CircleIcon />,
}

const iconSwitch = switchFn(iconMaps, 'default')

interface IconProps {
  name: string
}

interface IconSpanProps {
  name: string
  color?: Color
  css?: any
}

export const Icon: FunctionComponent<IconProps> = ({ name }) => iconSwitch(name)

export const IconSpan: FunctionComponent<IconSpanProps> = ({
  name,
  color,
  css,
}) => (
  <Span flex color={color} css={css}>
    <Icon name={name} />
  </Span>
)
