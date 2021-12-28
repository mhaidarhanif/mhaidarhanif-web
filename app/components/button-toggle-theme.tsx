import { FunctionComponent } from 'react'

import { styled } from '~/stitches'
import { Theme, useTheme } from '~/utils/theme'
import { Icon } from '~/components'

const ButtonToggleThemeStyled = styled('button', {
  fontSize: '$0',
  fontWeight: '$bold',
  pd: '$3',
  cursor: 'pointer',
  color: '$yellow11',
  borderRadius: '$round',
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
      <Icon name={nameFrom} />
    </ButtonToggleThemeStyled>
  )
}
