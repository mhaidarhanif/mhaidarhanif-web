import { Container, Avatar, AvatarImage, H } from '~/components'

export default function Index() {
  return (
    <Container>
      <Avatar size="5">
        <AvatarImage
          src="/photos/mhaidarhanif-cyan.jpeg"
          alt="M Haidar Hanif"
        />
      </Avatar>
      <H as="h1">M Haidar Hanif</H>
    </Container>
  )
}
