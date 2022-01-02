import {
  Header,
  Footer,
  TooltipProvider,
  ContainerBoundary,
} from '~/components'
import { styled } from '~/stitches'

const LayoutContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  minHeight: 'calc(100vh - env(safe-area-inset-bottom))',
  backgroundImage: 'url("/images/asanoha.svg")',
  backgroundPosition: 'top center',
  backgroundRepeat: 'repeat',
  backgroundSize: '120px',
  pb: '$5',
  '@desktop': { pb: '$10' },
})

const LayoutContent = styled('div', {
  width: '100%',
  background: '$background',
  maxWidth: 'calc(100% - $5)',
  '@desktop': { maxWidth: 'calc(100% - $20)' },
})

const LayoutMain = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  py: '$10',
  flex: 1,
})

/**
 * Layout
 */

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <LayoutContainer>
    <TooltipProvider delayDuration={200} skipDelayDuration={500}>
      <LayoutContent>
        <Header />
        <LayoutMain>{children}</LayoutMain>
        <Footer />
      </LayoutContent>
    </TooltipProvider>
  </LayoutContainer>
)

export const LayoutBoundary = ({ children }: { children: React.ReactNode }) => (
  <LayoutContainer>
    <LayoutContent>
      <LayoutMain>
        <ContainerBoundary>{children}</ContainerBoundary>
      </LayoutMain>
    </LayoutContent>
  </LayoutContainer>
)
