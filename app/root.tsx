import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  json,
  useLocation,
  useLoaderData,
  ScrollRestoration,
  useCatch,
  Link,
} from 'remix'
import type {
  ActionFunction,
  HeadersFunction,
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from 'remix'

import {
  PreventFlashOnWrongTheme,
  Theme,
  ThemeProvider,
  useTheme,
} from '~/utils/theme'
import { getThemeSession } from '~/utils/theme.server'
import { createMeta, getEnv } from '~/utils'

import { lightTheme, darkTheme } from '~/stitches'
import { H, Layout, LayoutBoundary, P } from '~/components'
import { metaDefault } from '~/data'

/**
 * Headers
 */

export const headers: HeadersFunction = () => ({
  'Accept-CH': 'Sec-CH-Prefers-Color-Scheme',
})

/**
 * Links
 *
 * https://remix.run/api/app#links
 */

export let links: LinksFunction = () => {
  return [
    {
      rel: 'shortcut icon',
      href: '/icons/favicon.ico?v=1',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/icons/favicon-32x32.png?v=1',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/icons/favicon-16x16.png?v=1',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/icons/apple-touch-icon.png?v=1',
    },
    {
      rel: 'mask-icon',
      href: '/icons/safari-pinned-tab.svg?v=1',
      color: '#05a2c2',
    },
    {
      rel: 'manifest',
      href: '/icons/site.webmanifest?v=1',
    },
    {
      href: 'https://fonts.googleapis.com',
      rel: 'preconnect',
    },
    {
      href: 'https://fonts.gstatic.com',
      rel: 'preconnect',
    },
    {
      href: 'https://fonts.googleapis.com/css2?family=Kosugi+Maru&family=Sarina&family=Shippori+Antique+B1&family=Space+Mono&display=swap',
      rel: 'stylesheet',
    },
  ]
}

/**
 * Metadata
 */

export const meta: MetaFunction = () => {
  return createMeta(metaDefault)
}

/**
 * Loader
 */

export type LoaderData = {
  theme: Theme | null
  ENV: ReturnType<typeof getEnv>
}

export const loader: LoaderFunction = async ({ request }) => {
  const themeSession = await getThemeSession(request)
  const data: LoaderData = {
    theme: themeSession.getTheme(),
    ENV: getEnv(),
  }

  return json(data)
}

/**
 * App
 *
 * https://remix.run/api/conventions#default-export
 * https://remix.run/api/conventions#route-filenames
 */

export default function AppWithProviders() {
  const data = useLoaderData<LoaderData>()

  return (
    <ThemeProvider specifiedTheme={data.theme}>
      <App />
    </ThemeProvider>
  )
}

function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  )
}

/**
 * Document is used for App component only, not Boundary components
 */
function Document({
  title,
  children,
}: {
  title?: string
  children: React.ReactNode
}) {
  const data = useLoaderData<LoaderData>()

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
      </head>

      <DocumentBody>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(data.ENV)};`,
          }}
        />
      </DocumentBody>
    </html>
  )
}

/**
 * DocumentBody is required because
 * useTheme can only be used inside ThemeProvider
 */
const DocumentBody = ({ children }: { children: React.ReactNode }) => {
  const [theme] = useTheme()

  return (
    <body className={theme === 'dark' ? darkTheme : lightTheme}>
      {children}
      <ScrollRestoration />
      <Scripts />
      {process.env.NODE_ENV === 'development' && <LiveReload />}
    </body>
  )
}

/**
 * DocumentBoundary
 */
function DocumentBoundary({
  title,
  children,
}: {
  title?: string
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>

      <body>{children}</body>
    </html>
  )
}

/**
 * Error Boundary
 *
 * Best effort, last ditch error boundary. This should only catch root errors
 * all other errors should be caught by the index route which will include
 * the footer and stuff, which is much better.
 * https://remix.run/docs/en/v1/api/conventions#errorboundary
 */

export function ErrorBoundary({ error }: { error: Error }) {
  const location = useLocation()

  console.error(error)

  return (
    <DocumentBoundary title="Error!">
      <LayoutBoundary>
        <div>
          <H as="h3">What? There was an error</H>
          <P>{error.message}</P>
          <hr />
          <P>${location.pathname} is currently not working.</P>
          <P>Sorry, there is an error. Please try again or refresh the page.</P>
          <P lang="ja">何？ ごめんなさい〜</P>
          <P>
            <Link to="/">Let's go back to homepage</Link>
          </P>
        </div>
      </LayoutBoundary>
    </DocumentBoundary>
  )
}

/**
 * Catch Boundary
 *
 * https://remix.run/docs/en/v1/api/conventions#catchboundary
 */
export function CatchBoundary() {
  const caught = useCatch()
  const location = useLocation()

  console.error('CatchBoundary', caught)

  let message

  switch (caught.status) {
    case 401:
      message = (
        <div>
          <P>Sorry, you don't have access to this page</P>
          <P lang="ja">通ることならず！</P>
        </div>
      )
      break
    case 404:
      message = (
        <div>
          <P>Sorry, this page doesn't exist.</P>
          <P>${location.pathname} is not available.</P>
          <P lang="ja">ごめんなさい〜</P>
        </div>
      )
      break
    default:
      throw new Error(caught.data || caught.statusText)
  }

  return (
    <DocumentBoundary title={`${caught.status} ${caught.statusText}`}>
      <LayoutBoundary>
        <H as="h3">
          {caught.status}: {caught.statusText}
        </H>
        {message}
        <P>
          <Link to="/">Let's go back to homepage</Link>
        </P>
      </LayoutBoundary>
    </DocumentBoundary>
  )
}
