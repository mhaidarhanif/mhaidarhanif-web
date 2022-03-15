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
        h1: { component: H, props: { as: 'h1', font: 'normal' } },
        h2: { component: H, props: { as: 'h2', font: 'normal' } },
        h3: { component: H, props: { as: 'h3', font: 'normal' } },
        h4: { component: H, props: { as: 'h4', font: 'normal' } },
        h5: { component: H, props: { as: 'h5', font: 'normal' } },
        h6: { component: H, props: { as: 'h6', font: 'normal' } },
        p: { component: P },
      },
    }}
  >
    {children}
  </MarkdownToJSX>
)
