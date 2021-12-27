import { FunctionComponent } from 'react'

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
  return (
    <ButtonToggleThemeStyled type="button">
      Toggle Theme
    </ButtonToggleThemeStyled>
  )
}
