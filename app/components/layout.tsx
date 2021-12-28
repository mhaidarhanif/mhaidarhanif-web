import { styled } from '~/stitches'

import { Header, Footer, Container } from '~/components'

const LayoutContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  minHeight: 'calc(100vh - env(safe-area-inset-bottom))',
})

const LayoutContent = styled('main', {
  paddingTop: '3rem',
  flex: 1,
})

/**
 * Layout
 */

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LayoutContainer>
      <Header />
      <LayoutContent>{children}</LayoutContent>
      <Footer />
    </LayoutContainer>
  )
}

export const LayoutBoundary = ({ children }: { children: React.ReactNode }) => {
  return (
    <LayoutContainer>
      <LayoutContent>
        <Container>{children}</Container>
      </LayoutContent>
    </LayoutContainer>
  )
}
