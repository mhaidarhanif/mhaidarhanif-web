import MarkdownToJSX from 'markdown-to-jsx'
import { FunctionComponent } from 'react'

import { H, P } from '~/components'

interface MarkdownProps {
  children: string
}

export const Markdown: FunctionComponent<MarkdownProps> = ({ children }) => (
  <MarkdownToJSX
    options={{
      overrides: {
        h1: { component: H, props: { as: 'h1' } },
        h2: { component: H, props: { as: 'h2' } },
        h3: { component: H, props: { as: 'h3' } },
        h4: { component: H, props: { as: 'h4' } },
        h5: { component: H, props: { as: 'h5' } },
        h6: { component: H, props: { as: 'h6' } },
        p: { component: P },
      },
    }}
  >
    {children}
  </MarkdownToJSX>
)
