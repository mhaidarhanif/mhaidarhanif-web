import {
  Header,
  Footer,
  TooltipProvider,
  ContainerBoundary,
} from '~/components'
import { styled } from '~/stitches'

const LayoutBackground = styled('div', {
  backgroundImage: 'url("/images/asanoha.svg")',
  backgroundPosition: 'top center',
  backgroundRepeat: 'repeat',
  backgroundSize: '120px',
})

const LayoutContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  minHeight: 'calc(100vh - env(safe-area-inset-bottom))',
})

const LayoutContent = styled('div', {
  width: '100%',
  maxWidth: 'calc(100% - $5)',
  '@desktop': { maxWidth: 'calc(100% - $20)' },
})

const LayoutMain = styled('main', {
  background: '$background',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
})

/**
 * Layout
 */

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <LayoutBackground id="layout-background">
    <LayoutContainer id="layout-container">
      <TooltipProvider delayDuration={200} skipDelayDuration={500}>
        <LayoutContent id="layout-content">
          <LayoutMain id="layout-main">
            <Header id="layout-header" />
            {children}
          </LayoutMain>
          <Footer id="layout-footer" />
        </LayoutContent>
      </TooltipProvider>
    </LayoutContainer>
  </LayoutBackground>
)

export const LayoutBoundary = ({ children }: { children: React.ReactNode }) => (
  <LayoutBackground id="layout-background">
    <LayoutContainer id="layout-container">
      <LayoutContent id="layout-content">
        <LayoutMain id="layout-main">
          <ContainerBoundary>{children}</ContainerBoundary>
        </LayoutMain>
      </LayoutContent>
    </LayoutContainer>
  </LayoutBackground>
)
