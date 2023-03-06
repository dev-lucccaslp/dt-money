import React from 'react'
import { HeaderContainer, HeaderContent, NewTransectionButton } from './styles'

import logoImg from '../../assets/Logo (2).svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransectionModal } from '../NewTransectionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="#"/>

       <Dialog.Root>
        <Dialog.Trigger asChild> 
          <NewTransectionButton>Nova Transação</NewTransectionButton>
        </Dialog.Trigger>

        <NewTransectionModal />

      </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
