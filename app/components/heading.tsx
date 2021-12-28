import { styled } from '~/stitches'

interface HeadingProps {
  as?: string
  css?: any
  color?: 'brand' | 'solid' | undefined
  children: React.ReactNode
}

const H1 = styled('h1', {
  fontFamily: '$fontHeading',
  mt: '$5',
  mb: '$10',
  fontSize: '2.5rem',
  '@tablet': { fontSize: '2.75rem' },
  '@desktop': { fontSize: '3.5rem' },
})

const H2 = styled('h2', {
  fontFamily: '$fontHeading',
  fontSize: '2rem',
  '@tablet': { fontSize: '2.5rem' },
  '@desktop': { fontSize: '3rem' },
})

const H3 = styled('h3', {
  fontFamily: '$fontHeading',
  fontSize: '1.75rem',
  '@tablet': { fontSize: '2.25rem' },
  '@desktop': { fontSize: '2.5rem' },
})

const H4 = styled('h4', {
  mt: '0',
  mb: '$2',
  fontSize: '1.5rem',
})

const H5 = styled('h5', {
  mt: '0',
  mb: '$2',
  fontSize: '1.25rem',
})

const H6 = styled('h6', {
  my: '0',
  fontSize: '1rem',
})

export const H = (props: HeadingProps) => {
  switch (props.as) {
    case 'h1':
      return <H1 {...props}>{props.children}</H1>
    case 'h2':
      return <H2 {...props}>{props.children}</H2>
    case 'h3':
      return <H3 {...props}>{props.children}</H3>
    case 'h4':
      return <H4 {...props}>{props.children}</H4>
    case 'h5':
      return <H5 {...props}>{props.children}</H5>
    case 'h6':
      return <H6 {...props}>{props.children}</H6>
    default:
      return <H1 {...props}>{props.children}</H1>
  }
}
