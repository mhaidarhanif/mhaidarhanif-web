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
} from 'remix'
import type {
  ActionFunction,
  HeadersFunction,
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from 'remix'

import { getEnv } from '~/utils'
import {
  PreventFlashOnWrongTheme,
  Theme,
  ThemeProvider,
  useTheme,
} from '~/utils/theme'
import { getThemeSession } from '~/utils/theme.server'

import { lightTheme, darkTheme } from '~/stitches'
import { Layout } from '~/components'

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
  const name = 'M Haidar Hanif'
  const title = 'M Haidar Hanif'
  const description = 'Personal website of Haidar. Educator + Engineer'
  const url = 'https://mhaidarhanif.com/'
  const color = '#05a2c2'

  const ogImageAlt = 'Website of M Haidar Hanif'
  const ogImageUrl = url + 'images/mhaidarhanif-og.png?v=1'
  const twiterImageUrl = url + 'images/mhaidarhanif-twitter.png?v=1'

  return {
    title: title,
    description: description,
    'application-name': name,
    'apple-mobile-web-app-title': title,
    'msapplication-config': '/icons/browserconfig.xml?v=1',
    'msapplication-TileColor': color,
    'theme-color': color,

    'og:site_name': name,
    'og:title': title,
    'og:description': description,
    'og:url': url,
    'og:locale': 'en_US',
    'og:image': ogImageUrl,
    'og:image:alt': ogImageAlt,
    'og:type': 'website',

    'twitter:card': 'summary_large_image',
    'twitter:site': '@mhaidarhanif',
    'twitter:creator': '@mhaidarhanif',
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': twiterImageUrl,
  }
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
 * Document is separated so multiple components can use it:
 * - App
 * - ErrorBoundary
 * - CatchBoundary
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
 * Error Boundary
 *
 * Best effort, last ditch error boundary. This should only catch root errors
 * all other errors should be caught by the index route which will include
 * the footer and stuff, which is much better.
 * https://remix.run/docs/en/v1/api/conventions#errorboundary
 */

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error)
  const location = useLocation()

  return (
    <Document title="Error!">
      <Layout>
        <div>
          <h1>There was an error</h1>
          <p>{error.message}</p>
          <hr />
          <p>${location.pathname} is currently not working.</p>
          <p>Sorry, there is an error. Please try again or refresh the page.</p>
        </div>
      </Layout>
    </Document>
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
  let message

  console.error('CatchBoundary', caught)

  switch (caught.status) {
    case 401:
      message = (
        <div>
          <p>Sorry, you don't have access to this page</p>
        </div>
      )
      break
    case 404:
      message = (
        <div>
          <p>Sorry, this page doesn't exist.</p>
          <p>${location.pathname} is not available.</p>
        </div>
      )
      break
    default:
      throw new Error(caught.data || caught.statusText)
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <h1>
          {caught.status}: {caught.statusText}
        </h1>
        {message}
      </Layout>
    </Document>
  )
}
