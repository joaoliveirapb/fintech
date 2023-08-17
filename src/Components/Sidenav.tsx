import {
  ArrowsDownUp,
  EnvelopeSimple,
  Gear,
  House,
  SignOut,
  Storefront,
} from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'
import { FintechLogo } from './FintechLogo'

export function Sidenav() {
  return (
    <nav className="sidenav box bg-3">
      <FintechLogo title="Logo da Fintech" />
      <ul>
        <li>
          <span>
            <House size={24} />
          </span>
          <NavLink to="/">Resumo</NavLink>
        </li>
        <li>
          <span>
            <Storefront size={24} />
          </span>
          <NavLink to="/vendas">Vendas</NavLink>
        </li>
        <li>
          <span>
            <ArrowsDownUp size={24} />
          </span>
          <a>Webhooks</a>
        </li>
        <li>
          <span>
            <Gear size={24} />
          </span>
          <a>Configurações</a>
        </li>
        <li>
          <span>
            <EnvelopeSimple size={24} />
          </span>
          <a>Contato</a>
        </li>
        <li>
          <span>
            <SignOut size={24} />
          </span>
          <a>Sair</a>
        </li>
      </ul>
    </nav>
  )
}
