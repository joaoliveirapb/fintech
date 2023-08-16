import { useDataContext } from '../Context/DataContext'
import { DateRange } from './DateRange'
import { Months } from './Months'

export function Header() {
  const { data } = useDataContext()

  console.log(data)

  return (
    <header className="mb">
      <div className="mb">
        <DateRange />
      </div>
      <Months />
    </header>
  )
}
