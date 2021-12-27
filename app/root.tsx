import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  json,
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
 * Meta
 */
export const meta: MetaFunction = () => {
  const name = 'M Haidar Hanif'
  const title = 'M Haidar Hanif'
  const description = 'Personal website of Haidar. Educator + Engineer'
  const url = 'https://mhaidarhanif.com/'

  const ogImageAlt = 'Website of M Haidar Hanif'
  const ogImageUrl = url + 'images/mhaidarhanif-og.png?v=1'
  const twiterImageUrl = url + '/images/mhaidarhanif-twitter.png?v=1'

  return {
    title: title,
    description: description,

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

export const headers: HeadersFunction = () => ({
  'Accept-CH': 'Sec-CH-Prefers-Color-Scheme',
})

/**
 * App
 *
 * https://remix.run/api/conventions#default-export
 * https://remix.run/api/conventions#route-filenames
 */

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  )
}

/**
 * Error Boundary
 *
 * https://remix.run/docs/en/v1/api/conventions#errorboundary
 */
export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error)

  return (
    <Document title="Error!">
      <Layout>
        <div>
          <h1>There was an error</h1>
          <p>{error.message}</p>
          <hr />
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
  let caught = useCatch()
  let message

  switch (caught.status) {
    case 401:
      message = (
        <p>
          Sorry, looks like you tried to visit a page that you don't have access
          to.
        </p>
      )
      break
    case 404:
      message = (
        <p> Sorry, looks like you tried to visit a page that doesn't exist.</p>
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

/**
 * Document
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
    <ThemeProvider specifiedTheme={data.theme}>
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
    </ThemeProvider>
  )
}

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
