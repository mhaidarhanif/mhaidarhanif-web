import { breakpoints } from "@xstyled/system"
import styled, { css } from "@xstyled/emotion"

const Title = styled.h1`
  margin: 0;
  ${breakpoints({
    xs: css`
      font-size: 2em;
    `,
    lg: css`
      font-size: 3em;
    `,
  })}
`

export default Title
