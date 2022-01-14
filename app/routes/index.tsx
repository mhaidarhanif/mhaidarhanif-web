import { Container, Content } from '~/components'
import { HomeHero, HomeWorks } from '~/contents'

export default function Index() {
  return (
    <Content>
      <Container>
        <HomeHero />
      </Container>
      <HomeWorks />
    </Content>
  )
}
