import { FunctionComponent } from 'react'

import { Icon } from '~/components'
import { styled } from '~/stitches'
import { Theme, useTheme } from '~/utils/theme'

const ButtonToggleThemeStyled = styled('button', {
  fontWeight: '$bold',
  cursor: 'pointer',
  color: '$yellow11',
  borderRadius: '$round',
  backgroundColor: '$buttonNormal',
  '&:hover': { backgroundColor: '$buttonHover' },
  '&:focus': { backgroundColor: '$buttonFocus' },
  fontSize: '$-1',
  pd: '$2',
  '@tablet': { fontSize: '$0', pd: '$3' },
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
