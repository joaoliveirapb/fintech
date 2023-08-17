import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './Components/Header'
import { Sidenav } from './Components/Sidenav'
import { DataContextProvider } from './Context/DataContext'
import { Sale } from './Pages/Sale'
import { Sales } from './Pages/Sales'
import { Summary } from './Pages/Summary'
import './Style.css'

export default function App() {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className="container">
          <Sidenav />
          <main>
            <Header />
            <Routes>
              <Route path="/" element={<Summary />} />
              <Route path="/vendas" element={<Sales />} />
              <Route path="/vendas/:id" element={<Sale />} />
            </Routes>
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  )
}
