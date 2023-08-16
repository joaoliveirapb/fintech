import { Header } from './Components/Header'
import { Sidenav } from './Components/Sidenav'
import { Summary } from './Pages/Summary'
import './Style.css'

export default function App() {
  return (
    <div>
      <Sidenav />
      <main>
        <Header />
        <Summary />
      </main>
    </div>
  )
}
