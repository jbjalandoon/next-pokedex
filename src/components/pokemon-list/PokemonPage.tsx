'use client'
import { useEffect, useRef, useState } from 'react'
import Pokemon from './Pokemon'
import PokemonDetails from '../PokemonDetails'
import { PokemonLists } from '@/types/custom-types'
import { ClipLoader } from 'react-spinners'
import { useInView } from 'motion/react'
import Search from './Search'
import { useDebounce } from 'use-debounce'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import PokemonDetailsMobile from './PokemonDetailsMobile'

const queryClient = new QueryClient()

export default function PokemonPage({
  initial,
}: {
  initial: Array<PokemonLists>
}) {
  const pokemons = useRef<Array<PokemonLists>>(initial)
  const [activePokemon, setActivePokemon] = useState<string | null>(null)
  const [hidden, setHidden] = useState<boolean>(true)
  const [search, setSearch] = useState<string>('')
  const [query] = useDebounce(search, 500)

  const [renderedPokemons, setRenderedPokemons] = useState<Array<PokemonLists>>(
    initial.slice(0, 24)
  )
  const page = useRef(1)
  const [loading, setLoading] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref)

  useEffect(() => {
    if (query) {
      const result = initial.filter((el) => el.name.startsWith(query))
      pokemons.current = result
      setRenderedPokemons(result.slice(0, 24))
    } else {
      pokemons.current = initial
      setRenderedPokemons(pokemons.current.slice(0, 24))
    }
  }, [initial, query])

  useEffect(() => {
    if (inView) {
      setLoading(true)
      page.current += 1
      if (query)
        setRenderedPokemons(pokemons.current.slice(0, page.current * 24))
      else setRenderedPokemons(pokemons.current.slice(0, page.current * 24))
      setLoading(false)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  const handlePokemonClick = (url: string) => {
    setActivePokemon(url)
    setHidden(false)
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className='container px-4 mx-auto gap-3 flex flex-col'>
        <Search
          query={search}
          handleSearch={setSearch}
        />
        <div className='flex relative h-[85vh] gap-4 px-4'>
          <div
            className='flex flex-col w-full lg:w-[50%] xl:w-full 
           [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-500 overflow-y-scroll h-[97%] self-center'
          >
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 container w-full py-2 mx-auto px-3 gap-3'>
              {renderedPokemons.map((pokemon: PokemonLists) => {
                return (
                  <Pokemon
                    key={pokemon.name}
                    name={pokemon.name}
                    types={pokemon.types}
                    sprite={pokemon.sprite}
                    url={pokemon.url}
                    handleClick={handlePokemonClick}
                  />
                )
              })}
            </div>
            <div
              ref={ref}
              className='w-full items-center flex justify-center py-2'
            >
              {loading && <ClipLoader></ClipLoader>}
            </div>
          </div>
          <div className='relative lg:block hidden h-full w-[34%] lg:w-[50%]'>
            <PokemonDetails url={activePokemon} />
          </div>
        </div>
      </div>
      <PokemonDetailsMobile
        hidden={hidden}
        setHidden={setHidden}
        url={activePokemon}
      />
    </QueryClientProvider>
  )
}
