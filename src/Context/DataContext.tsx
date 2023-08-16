import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'
import { useFetch } from '../Hooks/useFetch'

interface SaleProps {
  id: string
  nome: string
  preco: number
  status: 'pago' | 'processando' | 'falha'
  pagamento: 'boleto' | 'cartão' | 'pix'
  parcelas: number | null
  data: string
}

interface DataContextProps {
  data: SaleProps[] | null
  loading: boolean
  error: string | null
  start: string
  setStart: Dispatch<SetStateAction<string>>
  final: string
  setFinal: Dispatch<SetStateAction<string>>
}

const DataContext = createContext<DataContextProps | null>(null)

export function useDataContext() {
  const context = useContext(DataContext)
  if (!context) throw new Error('useData precisa estar em DataContextProvider')
  return context
}

function getDate(n: number) {
  const date = new Date()
  date.setDate(date.getDate() - n)
  const dd = String(date.getDate()).padStart(2, '0')
  const mm = String(date.getMonth() + 1).padStart(2, '0')
  const yyyy = date.getFullYear()
  return `${yyyy}-${mm}-${dd}`
}

export function DataContextProvider({ children }: PropsWithChildren) {
  const [start, setStart] = useState(getDate(14))
  const [final, setFinal] = useState(getDate(0))

  const { data, loading, error } = useFetch<SaleProps[]>(
    `https://data.origamid.dev/vendas/?inicio=${start}&final=${final}`,
  )

  return (
    <DataContext.Provider
      value={{ data, loading, error, start, setStart, final, setFinal }}
    >
      {children}
    </DataContext.Provider>
  )
}
