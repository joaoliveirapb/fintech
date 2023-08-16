import { MonthBtn } from './MonthBtn'

export function Months() {
  return (
    <div className="flex">
      <MonthBtn n={-3} />
      <MonthBtn n={-2} />
      <MonthBtn n={-1} />
      <MonthBtn n={0} />
    </div>
  )
}
