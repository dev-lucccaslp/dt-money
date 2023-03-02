import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Transections } from './pages/Transections'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'

export function App() {
  return(
   <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />

    <Transections />
   </ThemeProvider>
  )
}
