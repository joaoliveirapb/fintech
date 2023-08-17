import { SaleItem } from '../Components/SaleItem'
import { useDataContext } from '../Context/DataContext'

export function Sales() {
  const { data } = useDataContext()

  if (data === null) return null
  return (
    <ul>
      {data.map((sale) => (
        <li key={sale.id}>
          <SaleItem sale={sale} />
        </li>
      ))}
    </ul>
  )
}
