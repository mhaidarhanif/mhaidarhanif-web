import { styled } from '~/stitches'

interface HeadingProps {
  as?: string
  css?: any
  color?: 'brand' | 'solid' | undefined
  font?: 'display' | 'normal'
  children: React.ReactNode | any
}

interface HeadingLinkProps {
  id: string
  as: string
  children: React.ReactNode | any
}

const headingStyle = {
  width: '100%',
  color: '$heading',
  backgroundColor: '$heading',
  backgroundImage: 'linear-gradient(to right, $brand10, $brand11)',
  backgroundSize: '100%',
  backgroundClip: 'text',
  textFillColor: 'transparent',
  WebkitBackgroundClip: 'text',
  MozBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  MozTextFillColor: 'transparent',

  variants: {
    font: {
      display: {
        fontFamily: '$fontHeading',
      },
      normal: {
        fontFamily: '$fontText',
      },
    },
  },
  defaultVariants: {
    font: 'display',
  },
}

const H1 = styled('h1', {
  fontSize: '2.5rem',
  lineHeight: '$normal',
  '@tablet': { fontSize: '3rem' },
  '@desktop': { fontSize: '4rem' },
  ...headingStyle,
})

const H2 = styled('h2', {
  fontSize: '2rem',
  '@tablet': { fontSize: '2.5rem' },
  '@desktop': { fontSize: '3rem' },
  ...headingStyle,
})

const H3 = styled('h3', {
  fontSize: '1.75rem',
  '@tablet': { fontSize: '2.25rem' },
  '@desktop': { fontSize: '2.5rem' },
  ...headingStyle,
})

const H4 = styled('h4', {
  mt: 0,
  mb: '$4',
  fontSize: '1.5rem',
})

const H5 = styled('h5', {
  mt: 0,
  mb: '$3',
  fontSize: '1.25rem',
})

const H6 = styled('h6', {
  my: '$2',
  fontSize: '1rem',
})

const H2JA = styled('h2', {
  color: '$pink10',
  mt: 0,
  fontSize: '2rem',
  '@tablet': { fontSize: '2.5rem' },
  '@desktop': { fontSize: '3rem' },
})

/**
 * H: Heading
 * To be used anywhere
 */
export const H: React.FunctionComponent<HeadingProps> = ({
  as,
  color,
  css,
  font,
  children,
}) => {
  switch (as) {
    case 'h1':
      return (
        <H1 as={as} color={color} css={css} font={font}>
          {children}
        </H1>
      )
    case 'h2':
      return (
        <H2 as={as} color={color} css={css} font={font}>
          {children}
        </H2>
      )
    case 'h3':
      return (
        <H3 as={as} color={color} css={css} font={font}>
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
    case 'ja':
      return <H2JA css={css}>{children}</H2JA>
    default:
      return children
  }
}

/**
 * HLink: Heading with Link
 * To be used within a content
 */
export const HLink: React.FunctionComponent<HeadingLinkProps> = ({
  id,
  as,
  children,
}) => {
  switch (as) {
    case 'h1':
      return (
        <h1 id={id}>
          <a href={`#${id}`}>{children}</a>
        </h1>
      )
    case 'h2':
      return (
        <h2 id={id}>
          <a href={`#${id}`}>{children}</a>
        </h2>
      )
    case 'h3':
      return (
        <h3 id={id}>
          <a href={`#${id}`}>{children}</a>
        </h3>
      )
    case 'h4':
      return (
        <h4 id={id}>
          <a href={`#${id}`}>{children}</a>
        </h4>
      )
    case 'h5':
      return (
        <h5 id={id}>
          <a href={`#${id}`}>{children}</a>
        </h5>
      )
    case 'h6':
      return (
        <h6 id={id}>
          <a href={`#${id}`}>{children}</a>
        </h6>
      )
    default:
      return children
  }
}
