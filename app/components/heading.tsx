import { styled } from '~/stitches'

interface HeadingProps {
  as?: string
  css?: any
  color?: 'brand' | 'solid' | undefined
  children: React.ReactNode | any
}

const headingGradient = {
  width: '100%',
  fontFamily: '$fontHeading',
  color: '$heading',
  backgroundColor: '$heading',
  backgroundImage: 'linear-gradient(to right, $brand10, $brand8)',
  backgroundSize: '100%',
  backgroundClip: 'text',
  textFillColor: 'transparent',
  WebkitBackgroundClip: 'text',
  MozBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  MozTextFillColor: 'transparent',
}

const H1 = styled('h1', {
  ...headingGradient,
  mt: '$5',
  mb: '$12',
  fontSize: '2.5rem',
  '@tablet': { fontSize: '2.75rem' },
  '@desktop': { fontSize: '3.5rem' },
})

const H2 = styled('h2', {
  ...headingGradient,
  fontSize: '2rem',
  '@tablet': { fontSize: '2.5rem' },
  '@desktop': { fontSize: '3rem' },
})

const H3 = styled('h3', {
  ...headingGradient,
  fontSize: '1.75rem',
  '@tablet': { fontSize: '2.25rem' },
  '@desktop': { fontSize: '2.5rem' },
})

const H4 = styled('h4', {
  mt: '0',
  mb: '$4',
  fontSize: '1.5rem',
})

const H5 = styled('h5', {
  mt: '0',
  mb: '$3',
  fontSize: '1.25rem',
})

const H6 = styled('h6', {
  my: '$2',
  fontSize: '1rem',
})

export const H: React.FunctionComponent<HeadingProps> = ({
  as,
  color,
  css,
  children,
}) => {
  switch (as) {
    case 'h1':
      return (
        <H1 as={as} color={color} css={css}>
          {children}
        </H1>
      )
    case 'h2':
      return (
        <H2 as={as} color={color} css={css}>
          {children}
        </H2>
      )
    case 'h3':
      return (
        <H3 as={as} color={color} css={css}>
          {children}
        </H3>
      )
    case 'h4':
      return (
        <H4 as={as} color={color} css={css}>
          {children}
        </H4>
      )
    case 'h5':
      return (
        <H5 as={as} color={color} css={css}>
          {children}
        </H5>
      )
    case 'h6':
      return (
        <H6 as={as} color={color} css={css}>
          {children}
        </H6>
      )
    default:
      return children
  }
}
