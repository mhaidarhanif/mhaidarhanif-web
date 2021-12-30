import { hydrate } from 'react-dom'
import { RemixBrowser } from 'remix'

import { splitbee } from '~/utils'

hydrate(<RemixBrowser />, document)

if (ENV.NODE_ENV !== 'development') {
  splitbee.init()
}
