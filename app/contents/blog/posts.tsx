import { FunctionComponent } from 'react'

import { Container, H, P } from '~/components'
import type { BlogPost } from '~/types'

interface BlogPostProps {
  posts: BlogPost[]
}

export const BlogPosts: FunctionComponent<BlogPostProps> = ({ posts }) => {
  return (
    <Container>
      <div>
        {posts.map((post) => {
          return (
            <div key={post._id}>
              <H as="h4">{post.title}</H>
            </div>
          )
        })}
      </div>
    </Container>
  )
}
