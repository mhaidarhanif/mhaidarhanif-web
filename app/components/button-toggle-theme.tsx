import { FunctionComponent } from 'react'
import { Theme, useTheme } from 'remix-themes'

import { styled } from '~/stitches'

const ButtonToggleThemeStyled = styled('button', {
  px: '$3',
  py: '$2',
  fontWeight: '$bold',
  cursor: 'pointer',
  border: '$none',
  borderRadius: '$1',
  color: '$buttonText',
  backgroundColor: '$buttonNormal',
  '&:hover': { backgroundColor: '$buttonHover' },
  '&:focus': { backgroundColor: '$buttonFocus' },
})

export const ButtonToggleTheme: FunctionComponent = () => {
  const [, setTheme] = useTheme()

  return (
    <ButtonToggleThemeStyled
      type="button"
      onClick={() =>
        setTheme((prev) => (prev === Theme.DARK ? Theme.LIGHT : Theme.DARK))
      }
    >
      Toggle Theme
    </ButtonToggleThemeStyled>
  )
}
