import { Link } from 'remix'

import { Container } from '~/components'

export default function Index() {
  return (
    <Container>
      <h1>This is the homepage</h1>

      <Link to="/about">About</Link>
    </Container>
  )
}
