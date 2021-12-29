import { FunctionComponent } from 'react'

import { Container, H, P } from '~/components'

type Post = {
  title?: string
  description?: string
}

interface BlogPostProps {
  posts: Post[]
}

export const BlogPosts: FunctionComponent<BlogPostProps> = ({ posts }) => {
  return (
    <Container>
      <P>Some list of posts here.</P>
      <div>
        {posts.map((post) => {
          return (
            <div>
              <H as="h4">{post.title}</H>
            </div>
          )
        })}
      </div>
    </Container>
  )
}
