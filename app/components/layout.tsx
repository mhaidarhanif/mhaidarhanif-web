import { styled } from '~/stitches'

import { Header, Footer, Container, TooltipProvider } from '~/components'

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
      <TooltipProvider delayDuration={200} skipDelayDuration={500}>
        <Header />
        <LayoutContent>{children}</LayoutContent>
        <Footer />
      </TooltipProvider>
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
