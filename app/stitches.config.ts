import {
  blackA,
  whiteA,
  amber,
  amberDark,
  blue,
  blueDark,
  cyan,
  cyanA,
  cyanDark,
  cyanDarkA,
  gray,
  grayDark,
  green,
  greenDark,
  pink,
  pinkDark,
  red,
  redDark,
  sky,
  skyDark,
  slate,
  slateA,
  slateDark,
  slateDarkA,
  yellow,
  yellowDark,
} from '@radix-ui/colors'
import { createStitches } from '@stitches/react'

import type * as Stitches from '@stitches/react'

export type { VariantProps } from '@stitches/react'

/**
 * Because it's semantic, need to be applied to both default and dark theme
 * It's going to replace the light mode colors with dark mode colors
 */
const colorsTokens = {
  black: '$black12',
  white: '$white12',

  // Brand Solid
  brand1: '$cyan1',
  brand2: '$cyan2',
  brand3: '$cyan3',
  brand4: '$cyan4',
  brand5: '$cyan5',
  brand6: '$cyan6',
  brand7: '$cyan7',
  brand8: '$cyan8',
  brand9: '$cyan9',
  brand10: '$cyan10',
  brand11: '$cyan11',
  brand12: '$cyan12',

  // Brand Alpha
  brandA1: '$cyanA1',
  brandA2: '$cyanA2',
  brandA3: '$cyanA3',
  brandA4: '$cyanA4',
  brandA5: '$cyanA5',
  brandA6: '$cyanA6',
  brandA7: '$cyanA7',
  brandA8: '$cyanA8',
  brandA9: '$cyanA9',
  brandA10: '$cyanA10',
  brandA11: '$cyanA11',
  brandA12: '$cyanA12',

  // Background Solid
  background1: '$slate12',
  background2: '$slate11',
  background3: '$slate10',
  background4: '$slate9',
  background5: '$slate8',
  background6: '$slate7',
  background7: '$slate6',
  background8: '$slate5',
  background9: '$slate4',
  background10: '$slate3',
  background11: '$slate2',
  background12: '$slate1',

  // Text Solid
  text1: '$slate12',
  text2: '$slate11',
  text3: '$slate10',
  text4: '$slate9',
  text5: '$slate8',
  text6: '$slate7',
  text7: '$slate6',
  text8: '$slate5',
  text9: '$slate4',
  text10: '$slate3',
  text11: '$slate2',
  text12: '$slate1',

  // Rename Solid
  gray1: '$slate1',
  gray2: '$slate2',
  gray3: '$slate3',
  gray4: '$slate4',
  gray5: '$slate5',
  gray6: '$slate6',
  gray7: '$slate7',
  gray8: '$slate8',
  gray9: '$slate9',
  gray10: '$slate10',
  gray11: '$slate11',
  gray12: '$slate12',

  // Semantic

  brand: '#05a2c2',
  heading: '$brand11',
  text: '$slate12',
  textInvert: '$slate1',

  buttonText: '$brand11',
  buttonNormal: '$brand4',
  buttonHover: '$brand5',
  buttonFocus: '$brand6',

  hiContrast: '$slate12',
  loContrast: '$slate1',
  canvas: 'hsl(0 0% 15%)',
  panel: '$slate3',
  transparentPanel: 'hsl(0 100% 100% / 97%)',
  shadowLight: 'hsl(206 22% 7% / 35%)',
  shadowDark: 'hsl(206 22% 7% / 20%)',

  success1: '$green9',
  success2: '$green10',
  valid1: '$green9',
  valid2: '$green10',
  error1: '$red9',
  error2: '$red10',
  bug1: '$red9',
  bug2: '$red10',
  warning1: '$yellow9',
  warning2: '$yellow10',
  pending1: '$yellow9',
  pending2: '$yellow10',
}

const colorsTokensLightTheme = {
  textAbsolute: '$slate12',
  anchor: '$brand9',
  anchorHover: '$brand10',
  focusOutline: '$cyanA10',
  background: '$background10',
  backgroundInvert: '$background1',
}

const colorsTokensDarkTheme = {
  textAbsolute: '$slate1',
  anchor: '$brand10',
  anchorHover: '$brand11',
  focusOutline: '$cyanA10',
  background: '$background12',
  backgroundInvert: '$background1',
}

const spaceTokens = {
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem',
}

const sizesTokens = {
  ...spaceTokens,

  0: '0',
  1: '5px',
  2: '10px',
  3: '15px',
  4: '20px',
  5: '25px',
  6: '35px',
  7: '45px',
  8: '65px',
  9: '80px',
  min: 'min-content',
  max: 'max-content',
  full: '100%',
}

const radiiTokens = {
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  round: '50%',
  full: '9999px',
  pill: '9999px',
}

const zIndicesTokens = {
  1: '100',
  2: '200',
  3: '300',
  4: '400',
  5: '500',
  hide: -1,
  max: '999',
  auto: 'auto',
  base: '0',
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
}

const fontsTokens = {
  fontDefault: `'Shippori Antique B1', Helvetica, Arial, -apple-system, system-ui, sans-serif`,
  fontJapanese: `'Kosugi Maru', sans-serif`,
  fontHeading: `Sarina, cursive`,
  fontMono: `'Space Mono', monospace`,
}

const fontSizesTokens = {
  '-2': '0.8rem',
  '-1': '0.9rem',
  '0': '1rem',
  '1': '1.1rem',
  '2': '1.2rem',
  '3': '1.3rem',
  '4': '1.4rem',
  '5': '1.5rem',
  '6': '1.6rem',
  '7': '1.7rem',
  '8': '1.8rem',
  '9': '1.9rem',
  '10': '2rem',
}

const fontWeightsTokens = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
}

const lineHeightsTokens = {
  1: '.25rem',
  2: '.5rem',
  3: '.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',

  normal: 'normal',
  none: 1,
  shorter: 1.25,
  short: 1.375,
  base: 1.5,
  tall: 1.625,
  taller: '2',
}

const letterSpacingsTokens = {
  tighter: '-0.05rem',
  tight: '-0.025rem',
  normal: '0',
  wide: '0.025rem',
  wider: '0.05rem',
  widest: '0.1rem',
}

const mediaTokens = {
  mobile: '(min-width: 0px)',
  tablet: '(min-width: 501px)',
  desktop: '(min-width: 769px)',
  tv: '(min-width: 1201px)',
  motion: '(prefers-reduced-motion)',
  hover: '(any-hover: hover)',
  dark: '(prefers-color-scheme: dark)',
  light: '(prefers-color-scheme: light)',
}

const utilsFunctions = {
  pd: (value: Stitches.PropertyValue<'padding'>) => ({
    padding: value,
  }),
  pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
    paddingTop: value,
  }),
  pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
    paddingRight: value,
  }),
  pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
    paddingBottom: value,
  }),
  pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
    paddingLeft: value,
  }),
  px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
    paddingTop: value,
    paddingBottom: value,
  }),

  m: (value: Stitches.PropertyValue<'margin'>) => ({
    margin: value,
  }),
  mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
    marginTop: value,
  }),
  mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
    marginRight: value,
  }),
  mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
    marginBottom: value,
  }),
  ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
    marginLeft: value,
  }),
  mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value: Stitches.PropertyValue<'marginTop'>) => ({
    marginTop: value,
    marginBottom: value,
  }),

  ta: (value: Stitches.PropertyValue<'textAlign'>) => ({ textAlign: value }),

  fd: (value: Stitches.PropertyValue<'flexDirection'>) => ({
    flexDirection: value,
  }),
  fw: (value: Stitches.PropertyValue<'flexWrap'>) => ({ flexWrap: value }),

  ai: (value: Stitches.PropertyValue<'alignItems'>) => ({
    alignItems: value,
  }),
  ac: (value: Stitches.PropertyValue<'alignContent'>) => ({
    alignContent: value,
  }),
  jc: (value: Stitches.PropertyValue<'justifyContent'>) => ({
    justifyContent: value,
  }),
  as: (value: Stitches.PropertyValue<'alignSelf'>) => ({ alignSelf: value }),
  fg: (value: Stitches.PropertyValue<'flexGrow'>) => ({ flexGrow: value }),
  fs: (value: Stitches.PropertyValue<'flexShrink'>) => ({
    flexShrink: value,
  }),
  fb: (value: Stitches.PropertyValue<'flexBasis'>) => ({ flexBasis: value }),

  bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
    backgroundColor: value,
  }),

  br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
    borderRadius: value,
  }),
  btrr: (value: Stitches.PropertyValue<'borderTopRightRadius'>) => ({
    borderTopRightRadius: value,
  }),
  bbrr: (value: Stitches.PropertyValue<'borderBottomRightRadius'>) => ({
    borderBottomRightRadius: value,
  }),
  bblr: (value: Stitches.PropertyValue<'borderBottomLeftRadius'>) => ({
    borderBottomLeftRadius: value,
  }),
  btlr: (value: Stitches.PropertyValue<'borderTopLeftRadius'>) => ({
    borderTopLeftRadius: value,
  }),

  bs: (value: Stitches.PropertyValue<'boxShadow'>) => ({ boxShadow: value }),

  lh: (value: Stitches.PropertyValue<'lineHeight'>) => ({
    lineHeight: value,
  }),

  ox: (value: Stitches.PropertyValue<'overflowX'>) => ({ overflowX: value }),
  oy: (value: Stitches.PropertyValue<'overflowY'>) => ({ overflowY: value }),

  pe: (value: Stitches.PropertyValue<'pointerEvents'>) => ({
    pointerEvents: value,
  }),
  us: (value: Stitches.PropertyValue<'userSelect'>) => ({
    WebkitUserSelect: value,
    userSelect: value,
  }),

  userSelect: (value: Stitches.PropertyValue<'userSelect'>) => ({
    WebkitUserSelect: value,
    userSelect: value,
  }),

  size: (value: Stitches.PropertyValue<'width'>) => ({
    width: value,
    height: value,
  }),

  appearance: (value: Stitches.PropertyValue<'appearance'>) => ({
    WebkitAppearance: value,
    appearance: value,
  }),
  backgroundClip: (value: Stitches.PropertyValue<'backgroundClip'>) => ({
    WebkitBackgroundClip: value,
    backgroundClip: value,
  }),
}

/**
 * The actual Stitches export
 * Configuration:
 * - theme
 *   - colors
 *   - space
 *   - sizes
 *   - radii
 *   - zIndices
 *   - fonts
 *   - fontSizes
 *   - fontWeights
 *   - lineHeights
 *   - letterSpacings
 * - media
 * - utils
 */
export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme,
} = createStitches({
  theme: {
    colors: {
      ...amber,
      ...blackA,
      ...blue,
      ...cyan,
      ...cyanA,
      ...gray,
      ...green,
      ...pink,
      ...red,
      ...sky,
      ...slate,
      ...slateA,
      ...whiteA,
      ...yellow,

      ...colorsTokens,
      ...colorsTokensLightTheme,
    },
    space: { ...spaceTokens },
    sizes: { ...sizesTokens },
    radii: { ...radiiTokens },
    zIndices: { ...zIndicesTokens },
    fonts: { ...fontsTokens },
    fontSizes: { ...fontSizesTokens },
    fontWeights: { ...fontWeightsTokens },
    lineHeights: { ...lineHeightsTokens },
    letterSpacings: { ...letterSpacingsTokens },
  },
  media: {
    ...mediaTokens,
  },
  utils: {
    ...utilsFunctions,
  },
})

export type CSS = Stitches.CSS<typeof config>

export const lightTheme = createTheme('light')

export const darkTheme = createTheme('dark', {
  colors: {
    ...amberDark,
    ...blueDark,
    ...cyanDark,
    ...cyanDarkA,
    ...grayDark,
    ...greenDark,
    ...pinkDark,
    ...redDark,
    ...skyDark,
    ...slateDark,
    ...slateDarkA,
    ...yellowDark,

    ...colorsTokens,
    ...colorsTokensDarkTheme,
  },
})

/**
 * Run globalCss() directly instead of using globalStyles()
 */
globalCss({
  '::selection': {
    backgroundColor: '$brandA4',
  },
  ':-moz-focusring': {
    '@desktop': {
      outline: 'auto',
    },
  },
  ':focus': {
    '@desktop': {
      outline: '$focusOutline solid 2px',
      outlineOffset: '2px',
    },
  },
  body: {
    color: '$text',
    backgroundColor: '$background',
    padding: '0',
    margin: '0',
    overflowX: 'hidden',
    boxSizing: 'border-box',
    fontFamily: '$fontDefault',
    border: '5px solid $brand',
  },
  h1: { color: '$heading' },
  h2: { color: '$heading' },
  h3: { color: '$heading' },
  h4: { color: '$heading' },
  h5: { color: '$heading' },
  h6: { color: '$heading' },
  p: {
    fontFamily: '$fontText',
    color: '$text',
  },
  a: {
    textDecoration: 'none',
    // color should be defined in Anchor/Link
  },
  hr: {
    display: 'block',
    height: '1px',
    border: '0',
    backgroundColor: '$background10',
    marginTop: '2rem',
    marginBottom: '2rem',
  },
  button: { border: '$none' },
  img: { userSelect: 'none' },
  svg: { display: 'block' },
  'pre, code': {
    margin: 0,
    fontFamily: '$fontMono',
  },
})()
