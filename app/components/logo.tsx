import { styled } from '~/stitches'

const LogoWrapper = styled('div', {
  display: 'flex',
  gap: '1em',
  height: 50,
  svg: { height: 50, width: 50 },
  transition: 'filter 0.2s ease-in-out',
  '&:hover': {
    filter: 'brightness(0.9)',
  },
})

export const Logo = () => {
  return (
    <LogoWrapper>
      <LogoSVG />
    </LogoWrapper>
  )
}

const LogoSVG = () => (
  <svg
    aria-labelledby="M Haidar Hanif Logo"
    fill="currentColor"
    height="50"
    width="50"
    viewBox="0 0 100 100"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width={100} height={100} rx={20} fill="url(#a)" />
    <g filter="url(#b)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M41.667 26a1 1 0 0 0-1-1H26a1 1 0 0 0-1 1v14.667a1 1 0 0 0 1 1h6.333a1 1 0 0 1 1 1v14.666a1 1 0 0 1-1 1H26a1 1 0 0 0-1 1V74a1 1 0 0 0 1 1h14.667a1 1 0 0 0 1-1v-6.333a1 1 0 0 1 1-1h14.666a1 1 0 0 1 1 1V74a1 1 0 0 0 1 1H74a1 1 0 0 0 1-1V59.333a1 1 0 0 0-1-1h-6.333a1 1 0 0 1-1-1V42.667a1 1 0 0 1 1-1H74a1 1 0 0 0 1-1V26a1 1 0 0 0-1-1H59.333a1 1 0 0 0-1 1v6.333a1 1 0 0 1-1 1H42.667a1 1 0 0 1-1-1V26Zm15.666 15.667a1 1 0 0 1 1 1v14.666a1 1 0 0 1-1 1H42.667a1 1 0 0 1-1-1V42.667a1 1 0 0 1 1-1h14.666Z"
        fill="url(#c)"
      />
    </g>
    <defs>
      <linearGradient
        id="a"
        x1={0}
        y1={0}
        x2={100}
        y2={100}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#84CDDA" />
        <stop offset={1} stopColor="#05A2C2" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={25}
        y1={25}
        x2={75}
        y2={75}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#C4EAEF" />
      </linearGradient>
      <filter
        id="b"
        x={15}
        y={15}
        width={70}
        height={70}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={5} />
        <feColorMatrix values="0 0 0 0 0.0196078 0 0 0 0 0.635294 0 0 0 0 0.760784 0 0 0 1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_234_30" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_234_30"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)
