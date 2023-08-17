import { NavLink } from 'react-router-dom'
import { SaleProps } from '../Context/DataContext'

export function SaleItem({ sale }: { sale: SaleProps }) {
  return (
    <div className="sale box">
      <NavLink to={`/vendas/${sale.id}`} style={{ fontFamily: 'monospace' }}>
        {sale.id}
      </NavLink>
      <div>{sale.nome}</div>
      <div>
        {sale.preco.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </div>
    </div>
  )
}
