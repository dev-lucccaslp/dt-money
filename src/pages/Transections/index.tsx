import React from 'react'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { TransectionsContainer, TransectionsTable, PriceHighLight } from './styles'

export function Transections() {
  return (
    <div>
      <Header />
      <Summary />

      <TransectionsContainer>
        <TransectionsTable>
          <tbody>

            <tr>
              <td width='50%'>Desenvolvimento de site</td>
              <td>
                <PriceHighLight variant='income'>
                R$ 12.000,00
                </PriceHighLight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>

            <tr>
              <td width='50%'>Hamurguer</td>
              <td>
                <PriceHighLight variant='outcome'>
                - R$ 59,00
                </PriceHighLight>
              </td>
              <td>Alimentação</td>
              <td>10/04/2022</td>
            </tr>

          </tbody>
        </TransectionsTable>
      </TransectionsContainer>
    </div>
  )
}
