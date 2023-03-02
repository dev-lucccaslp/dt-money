import React from 'react'
import { HeaderContainer, HeaderContent, NewTransectionButton } from './styles'

import logoImg from '../../assets/Logo (2).svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="#"/>

        <NewTransectionButton>Nova Transação</NewTransectionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
