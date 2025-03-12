import { Pokemon } from '@/types/pokemon-types'
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react'

const pokemonContext = createContext<null | {
  activePokemon: Pokemon | null
  setActivePokemon: Dispatch<SetStateAction<Pokemon | null>>
  hidePokemon: boolean
  setHidePokemon: Dispatch<SetStateAction<boolean>>
}>(null)

export const PokemonContext = ({ children }: { children: ReactNode }) => {
  const [activePokemon, setActivePokemon] = useState<Pokemon | null>(null)
  const [hidePokemon, setHidePokemon] = useState(true)

  return (
    <pokemonContext.Provider
      value={{ activePokemon, setActivePokemon, hidePokemon, setHidePokemon }}
    >
      {children}
    </pokemonContext.Provider>
  )
}

export const usePokemon = () => {
  const context = useContext(pokemonContext)
  if (!context)
    throw new Error(
      'To use usePokemon the component must be wrapped in a context provider'
    )

  return context
}
