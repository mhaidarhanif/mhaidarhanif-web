import { Container, Content } from '~/components'
import { HomeIntro, HomeWorks } from '~/contents'

export default function Index() {
  return (
    <Content>
      <Container layout="center-vertical">
        <HomeIntro />
      </Container>

      <HomeWorks />
    </Content>
  )
}
