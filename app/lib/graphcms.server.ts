import { createClient } from '@urql/core'

export const graphcmsClient = createClient({
  url: String(process.env.GRAPHCMS_ENDPOINT),
})
