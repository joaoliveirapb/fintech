import { useDataContext } from '../Context/DataContext'
import { DateInput } from './DateInput'

export function DateRange() {
  const { start, setStart, final, setFinal } = useDataContext()

  return (
    <form onSubmit={(e) => e.preventDefault()} className="box flex">
      <DateInput
        label="Início"
        value={start}
        onChange={(e) => setStart(e.target.value)}
      />
      <DateInput
        label="Final"
        value={final}
        onChange={(e) => setFinal(e.target.value)}
      />
    </form>
  )
}
