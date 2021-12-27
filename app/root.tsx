import {
  createCookieSessionStorage,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from 'remix'
import type {
  LinksFunction,
  LoaderFunction,
  HeadersFunction,
  MetaFunction,
} from 'remix'
import { Layout } from '~/components'
import styles from '~/styles/index.css'

/**
 * Remix Themes
 */

import {
  createThemeSessionResolver,
  ThemeProvider,
  useTheme,
  PreventFlashOnWrongTheme,
} from 'remix-themes'

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: 'remix-themes',
    secure: true,
    sameSite: 'lax',
    secrets: ['s3cr3t'],
    path: '/',
    httpOnly: true,
  },
})

export const themeSessionResolver = createThemeSessionResolver(sessionStorage)

/**
 * Remix
 */

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }]
}

export const headers: HeadersFunction = () => ({
  'Accept-CH': 'Sec-CH-Prefers-Color-Scheme',
})

export const meta: MetaFunction = () => {
  return {
    title: 'M Haidar Hanif',
    description: 'Personal website of Haidar. Educator + Engineer',
  }
}

// Return the theme from the session storage using the loader
export const loader: LoaderFunction = async ({ request }) => {
  const { getTheme } = await themeSessionResolver(request)

  return {
    theme: getTheme(),
  }
}

/**
 * App
 *
 * https://remix.run/api/conventions#default-export
 * https://remix.run/api/conventions#route-filenames
 */

// Wrap your app with ThemeProvider.
// `specifiedTheme` is the stored theme in the session storage.
// `themeAction` is the action name that's used to change the theme in the session storage.
export default function AppWithProviders() {
  const data = useLoaderData()

  return (
    <ThemeProvider specifiedTheme={data.theme} themeAction="action/set-theme">
      <App />
    </ThemeProvider>
  )
}

// Use the theme in your app.
// PreventFlashOnWrongTheme is used to prevent flash on wrong theme.
// If the theme is missing in session storage, it will get the browser theme.
// The client code runs conditionally, it won't be rendered if we have a theme in session storage.
function App() {
  const data = useLoaderData()
  const [theme] = useTheme()

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
        <Links />
      </head>

      <body className={theme ?? ''}>
        <Layout>
          <Outlet />
        </Layout>

        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}
