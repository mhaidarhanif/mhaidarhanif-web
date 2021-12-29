import { FunctionComponent } from 'react'

import { Container, H, P } from '~/components'
import type { BlogPost } from '~/types'

interface BlogPostProps {
  posts: BlogPost[]
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
