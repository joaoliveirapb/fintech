import { Header } from './Components/Header'
import { Sidenav } from './Components/Sidenav'
import { DataContextProvider } from './Context/DataContext'
import { Summary } from './Pages/Summary'
import './Style.css'

export default function App() {
  return (
    <DataContextProvider>
      <div className="container">
        <Sidenav />
        <main>
          <Header />
          <Summary />
        </main>
      </div>
    </DataContextProvider>
  )
}
