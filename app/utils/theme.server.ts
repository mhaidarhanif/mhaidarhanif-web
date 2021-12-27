import { createCookieSessionStorage } from 'remix'

import { Theme, isTheme } from './theme'
import { getEnvServer } from '~/utils/env.server'

const themeStorage = createCookieSessionStorage({
  cookie: {
    name: 'app-theme',
    secrets: [getEnvServer('SESSION_SECRET')],
    sameSite: 'lax',
    path: '/',
    expires: new Date('2100-10-18'),
    httpOnly: true,
  },
})

async function getThemeSession(request: Request) {
  const session = await themeStorage.getSession(request.headers.get('Cookie'))

  return {
    getTheme: () => {
      const themeValue = session.get('theme')
      return isTheme(themeValue) ? themeValue : Theme.DARK
    },
    setTheme: (theme: Theme) => session.set('theme', theme),
    commit: () => themeStorage.commitSession(session),
  }
}

export { getThemeSession }
