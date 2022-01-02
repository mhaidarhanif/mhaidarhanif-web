import {
  json,
  Link,
  LoaderFunction,
  MetaFunction,
  useCatch,
  useLocation,
} from 'remix'

import { Hero, H, P, Article, ContainerBoundary, Tooltip } from '~/components'
import { createMeta } from '~/utils'

export const meta: MetaFunction = () =>
  createMeta({
    route: '/',
    title: 'Blank Page - M Haidar Hanif',
    description: '',
  })

export const loader: LoaderFunction = async () => {
  throw json({}, { status: 404 })
}

export default function Slug() {
  return (
    <Hero>
      <Article>
        <H as="h1">Blank Page</H>
      </Article>
    </Hero>
  )
}

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
          <P lang="ja">
            <Tooltip
              content={
                <>
                  <span>Tōru koto narazu!</span>
                  <br />
                  <span>You shall not pass!</span>
                </>
              }
            >
              通ることならず！
            </Tooltip>
          </P>
        </div>
      )
      break
    case 404:
      message = (
        <div>
          <P>Sorry, this page doesn't exist.</P>
          <P>{location.pathname} is not available.</P>
          <P lang="ja">
            <Tooltip
              content={
                <>
                  <span>Gomen'nasai~</span>
                  <br />
                  <span>Sorry~</span>
                </>
              }
            >
              ごめんなさい〜
            </Tooltip>
          </P>
        </div>
      )
      break
    default:
      message = (
        <div>
          <P>{JSON.stringify(caught.statusText)}</P>
          <P>{JSON.stringify(caught.data)}</P>
        </div>
      )
  }

  return (
    <ContainerBoundary>
      <H as="h3">
        {caught.status}: {caught.statusText}
      </H>
      {message}
      <P>
        <Link to="/">Let's go back to homepage</Link>
      </P>
    </ContainerBoundary>
  )
}
