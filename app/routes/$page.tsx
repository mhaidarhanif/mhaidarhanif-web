import {
  json,
  LoaderFunction,
  MetaFunction,
  useCatch,
  useLocation,
} from 'remix'

import {
  Article,
  ContainerBoundary,
  H,
  Hero,
  LinkButton,
  P,
  Tooltip,
} from '~/components'
import { createMeta } from '~/utils'

export const meta: MetaFunction = () =>
  createMeta({
    route: '/',
    title: 'Error / Not Found',
    description: 'Sorry, something went wrong or page is not found.',
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
      <H as="h3" font="normal">
        {caught.status}: {caught.statusText}
      </H>
      {message}
      <P>
        <LinkButton to="/">Let's go back to homepage</LinkButton>
      </P>
    </ContainerBoundary>
  )
}
