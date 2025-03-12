import Image from 'next/image'
import { fetchPokemonProfile } from '@/action/get-pokemon'
import { EvolutionChain, Pokemon, PokemonSpecies } from '@/types/pokemon-types'
import { memo } from 'react'
import Evolutions from './pokemon-details/Evolutions'
import { AnimatePresence, motion } from 'motion/react'
import PokemonStats from './pokemon-details/PokemonStats'
import Type from './pokemon-details/Type'
import { ClipLoader } from 'react-spinners'
import { useQuery } from '@tanstack/react-query'
import PokeballLoader from './PokeballLoader'

export default memo(function PokemonDetails({ url }: { url: string | null }) {
  const { data, isLoading: loading } = useQuery<{
    pokemon: Pokemon
    pokemonSpecies: PokemonSpecies
    evolutionChain: EvolutionChain
  } | null>({
    queryKey: ['pokemonProfile', url],
    queryFn: () => {
      if (url === null) return null
      return fetchPokemonProfile(url)
    },
  })

  return (
    <AnimatePresence
      initial={false}
      mode='popLayout'
    >
      {loading ? (
        <div className='w-full h-full flex items-center justify-center'>
          <PokeballLoader />
        </div>
      ) : (
        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          animate={{
            opacity: 1,
            scaleX: 1,
          }}
          exit={{
            opacity: 0,
            scaleX: 0,
          }}
          className='absolute rounded-4xl bg-white w-full left-1/2 -translate-x-1/2 z-99 h-full flex justify-center overflow-scroll pb-4'
        >
          {data ? (
            <>
              <div className='flex flex-col items-center py-4 w-full px-4 gap-1'>
                <div className='flex w-full justify-evenly'>
                  <Image
                    src={data.pokemon.sprites.front_default}
                    alt={'Pokemon'}
                    height={125}
                    width={125}
                    className=''
                  />
                  <div className='flex flex-col items-center justify-center gap-3'>
                    <h1 className='text-2xl capitalize font-noto font-bold text-slate-600 text-center'>
                      {data.pokemon.name} #
                      {`${data.pokemon.id}`.padStart(4, '0')}
                    </h1>
                    <div className='flex gap-2'>
                      {data.pokemon.types.map(({ type }) => (
                        <Type
                          type={type.name}
                          key={type.name}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className='text-center font-bold font-mono py-2'>
                  {data.pokemonSpecies.flavor_text_entries.find(
                    (el) => el.language.name === 'en'
                  )!.flavor_text || 'No Description'}
                </p>
                <PokemonStats stats={data.pokemon.stats} />
                <div className='grid-cols-2 grid justify-center items-center text-center gap-3 w-3/4 font-noto mt-4'>
                  <h2 className='text-xl font-noto text-slate-600 font-bold'>
                    Height
                  </h2>
                  <h2 className='text-xl font-noto text-slate-600 font-bold'>
                    Weight
                  </h2>
                  <span className='bg-slate-700 text-white rounded-full py-1'>
                    {`${Math.floor(data.pokemon.height / 3.048)}\" ${(
                      ((data.pokemon.height / 3.048) % 1) *
                      12
                    ).toFixed()}\'`}
                  </span>
                  <span className='bg-slate-700 text-white rounded-full py-1'>
                    {`${(data.pokemon.weight / 10).toFixed(2)} kg`}
                  </span>
                </div>
                <div className='flex flex-col text-center mt-5 gap-2 w-full'>
                  <h2 className='text-2xl text-slate-600 font-noto font-bold'>
                    Abilities
                  </h2>
                  <div className='flex w-full gap-2'>
                    {data.pokemon.abilities.map((ability) => (
                      <span
                        className='w-full bg-slate-300 text-slate-700 rounded-full py-1 font-mono uppercase text-lg font-bold flex items-center justify-center'
                        key={ability.ability.name}
                      >
                        {ability.ability.name}
                      </span>
                    ))}
                  </div>
                </div>
                <Evolutions evolutions={data.evolutionChain} />
              </div>
            </>
          ) : (
            <span className='self-center font-mono font-bold text-slate-500 text-xl max-w-1/2'>
              Select a pokemon.
            </span>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
})
