import { useParams } from 'react-router-dom'
import { Loading } from '../Components/Loading'
import { SaleProps } from '../Context/DataContext'
import { useFetch } from '../Hooks/useFetch'

interface SaleWithoutDate extends Omit<SaleProps, 'data'> {}

export function Sale() {
  const { id } = useParams()
  const { data, loading } = useFetch<SaleWithoutDate>(
    `https://data.origamid.dev/vendas/${id}`,
  )

  if (loading === true) return <Loading />
  if (data === null) return null
  return (
    <div>
      <div className="box mb">ID: {data.id}</div>
      <div className="box mb">Nome: {data.nome}</div>
      <div className="box mb">
        Preço{' '}
        {data.preco.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </div>
      <div className="box mb">Status: {data.status}</div>
      <div className="box mb">Pagamento: {data.pagamento}</div>
    </div>
  )
}
