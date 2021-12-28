import { FunctionComponent } from 'react'

import { styled } from '~/stitches'
import { Theme, useTheme } from '~/utils/theme'

const ButtonToggleThemeStyled = styled('button', {
  fontSize: '$0',
  fontWeight: '$bold',
  px: '$3',
  py: '$2',
  cursor: 'pointer',
  border: '$none',
  borderRadius: '$pill',
  color: '$buttonText',
  backgroundColor: '$buttonNormal',
  '&:hover': { backgroundColor: '$buttonHover' },
  '&:focus': { backgroundColor: '$buttonFocus' },
})

export const ButtonToggleTheme: FunctionComponent = () => {
  const [theme, setTheme] = useTheme()
  const nameFrom = theme === Theme.DARK ? Theme.DARK : Theme.LIGHT
  const nameTo = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK

  const handleChangeTheme = () => {
    setTheme(nameTo)
  }

  return (
    <ButtonToggleThemeStyled type="button" onClick={handleChangeTheme}>
      Theme
    </ButtonToggleThemeStyled>
  )
}
