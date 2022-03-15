/* eslint-disable react/no-danger */
/* eslint-disable @typescript-eslint/no-use-before-define */
import NProgress from 'nprogress'
import { useEffect } from 'react'
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
  useTransition,
} from 'remix'

import type {
  HeadersFunction,
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from 'remix'
import { H, Layout, LayoutBoundary, P, Link, LinkButton } from '~/components'
import { metaDefault } from '~/data'
import { lightTheme, darkTheme } from '~/stitches'
import { createMeta, getEnv } from '~/utils'
import {
  PreventFlashOnWrongTheme,
  Theme,
  ThemeProvider,
  useTheme,
} from '~/utils/theme'
import { getThemeSession } from '~/utils/theme.server'

import globalStylesUrl from '~/styles/global.css'
import nProgressStylesUrl from '~/styles/nprogress.css'

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

export const links: LinksFunction = () => [
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
  {
    rel: 'stylesheet',
    href: globalStylesUrl,
  },
  {
    rel: 'stylesheet',
    href: nProgressStylesUrl,
  },
]

/**
 * Metadata
 */

export const meta: MetaFunction = () => createMeta(metaDefault)

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

export function App() {
  const transition = useTransition()

  useEffect(() => {
    // when the state is idle then we can to complete the progress bar
    if (transition.state === 'idle') NProgress.done()
    // and when it's something else it means it's either submitting a form or
    // waiting for the loaders of the next location so we start it
    else NProgress.start()
  }, [transition.state])

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
export function Document({
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
export function DocumentBody({ children }: { children: React.ReactNode }) {
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
export function DocumentBoundary({
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

      <body className={darkTheme}>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
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

  // eslint-disable-next-line no-console
  console.error(error)

  return (
    <DocumentBoundary title="Error!">
      <LayoutBoundary>
        <div>
          <H as="h3" font="normal">
            What the flip?
          </H>
          <P>Sorry, there is an error. Please try again or refresh the page.</P>
          <P>
            <LinkButton to="/">Back to homepage</LinkButton>
          </P>

          <hr />

          <P>
            <code>{location.pathname}</code> is currently not working.
          </P>
          <P>This is the error message:</P>
          <code>{error.message}</code>
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

  // eslint-disable-next-line no-console
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
          <P>{location.pathname} is not available.</P>
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
        <H as="h3" font="normal">
          {caught.status}: {caught.statusText}
        </H>
        {message}
        <P>
          <Link to="/" prefetch="intent">
            Let's go back to homepage
          </Link>
        </P>
      </LayoutBoundary>
    </DocumentBoundary>
  )
}
