import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
import Type from '../pokemon-details/Type'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { EvolutionChain, Pokemon, PokemonSpecies } from '@/types/pokemon-types'
import { fetchPokemonProfile } from '@/action/get-pokemon'
import { ClipLoader } from 'react-spinners'
import PokemonStats from '../pokemon-details/PokemonStats'
import Evolutions from '../pokemon-details/Evolutions'
import { IoMdClose } from 'react-icons/io'

export default function PokemonDetailsMobile({
  url,
  hidden,
  setHidden,
}: {
  url: string | null
  hidden: boolean
  setHidden: Dispatch<SetStateAction<boolean>>
}) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<{
    pokemon: Pokemon
    pokemonSpecies: PokemonSpecies
    evolutionChain: EvolutionChain
  } | null>(null)
  useEffect(() => {
    const fetch = async () => {
      if (url === null) return

      setLoading(true)
      const data = await fetchPokemonProfile(url)
      setData(data)
      setLoading(false)
    }
    fetch()
  }, [url])

  if (loading) return null

  return (
    <AnimatePresence>
      {hidden ? null : (
        <motion.div
          initial={{
            y: '100%',
          }}
          animate={{
            y: '0%',
          }}
          transition={{
            duration: 0.7,
          }}
          exit={{
            y: '-100%',
          }}
          className='absolute w-screen h-screen bg-blue-500 top-0 z-998 flex lg:hidden'
        >
          <button
            className='text-2xl hover:cursor-pointer text-center hover:bg-slate-500 items-center justify-center absolute right-5 top-4 w-10 h-10 rounded-full bg-slate-700 text-white flex'
            onClick={() => {
              setHidden(true)
            }}
          >
            <IoMdClose />
          </button>
          <div className='rounded-t-4xl relative bg-slate-200 w-full mt-auto h-[90%] bottom-0 flex flex-col items-center gap-3'>
            {data !== null ? (
              <>
                <Image
                  src={data.pokemon.sprites.front_default}
                  alt={data.pokemon.name}
                  className='absolute left-1/2 -translate-x-1/2 -top-[75px] z-998'
                  height={150}
                  width={150}
                />
                <div className='flex flex-col items-center h-full gap-3 pt-[75px] overflow-scroll pb-5 z-999'>
                  <h1 className='text-slate-600 text-3xl font-bold font-noto capitalize'>
                    {data.pokemon.name}
                  </h1>
                  <div className='flex flex-wrap gap-2'>
                    <Type type={'fire'} />
                    <Type type={'grass'} />
                  </div>
                  <div className='w-full max-w-xl'>
                    <p className='font-mono text-center font-bold sm:text-lg text-xs px-4'>
                      {data.pokemonSpecies.flavor_text_entries.find(
                        (el) => el.language.name === 'en'
                      )!.flavor_text || 'No Description'}
                    </p>
                  </div>
                  <div className='w-full max-w-sm'>
                    <PokemonStats stats={data.pokemon.stats} />
                  </div>
                  <div className='flex flex-col items-center w-full max-w-3xl px-4 gap-5'>
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
                        {`${(data.pokemon.weight / 10).toFixed(0)} kg`}
                      </span>
                    </div>
                    <div className='flex flex-col text-center mt-5 gap-2 w-full'>
                      <h2 className='text-2xl text-slate-600 font-noto font-bold'>
                        Abilities
                      </h2>
                      <div className='flex w-full gap-2'>
                        {data.pokemon.abilities.map((ability) => (
                          <span
                            className='w-full bg-slate-300 text-slate-700 rounded-full py-1 font-mono uppercase text-lg font-bold'
                            key={ability.ability.name}
                          >
                            {ability.ability.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className='w-full max-w-3xl'>
                    <Evolutions evolutions={data.evolutionChain} />
                  </div>
                </div>
              </>
            ) : (
              <div>
                <ClipLoader />
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
