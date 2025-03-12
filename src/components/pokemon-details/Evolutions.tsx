'use client'
import { EvolutionChain, EvolutionDetail } from '@/types/pokemon-types'
import Image from 'next/image'
import { Fragment } from 'react'

export default function Evolutions({
  evolutions,
}: {
  evolutions: EvolutionChain
}) {
  const getDefaultSprite = (id: string) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  }
  const array: Array<{
    name: string
    detail?: Array<EvolutionDetail>
    sprite: string
  }> = []
  const speciesUrl = evolutions.chain.species.url.split('/')
  array.push({
    name: evolutions.chain.species.name,
    sprite: getDefaultSprite(speciesUrl[speciesUrl.length - 2]),
  })
  let temp = evolutions.chain.evolves_to
  while (temp.length > 0) {
    const data = temp[0]

    const speciesUrl = data.species.url.split('/')
    array.push({
      name: data.species.name,
      sprite: getDefaultSprite(speciesUrl[speciesUrl.length - 2]),
      detail: data.evolution_details,
    })

    temp = data.evolves_to
  }

  return (
    <div className='flex flex-col items-center justify-center gap-3 mt-6 w-full'>
      <h2 className='font-bold font-noto text-2xl text-slate-600'>Evolution</h2>
      <div className='flex gap-1 text-center'>
        {array.map((evolution) => (
          <Fragment key={evolution.name}>
            {evolution.detail && evolution.detail.length > 0 && (
              <span
                className='font-mono font-bold self-center bg-slate-400 rounded-full w-full justify-center flex'
                key={`evolution-requirement${evolution.name}`}
              >{`lvl ${evolution.detail![0].min_level || '?'}`}</span>
            )}
            <div
              className='flex flex-col items-center justify-center'
              key={evolution.name}
            >
              <div className='flex gap-3 items-center w-full bg-slate-200 rounded-2xl'>
                <Image
                  src={evolution.sprite!}
                  alt={evolution.name}
                  width={550}
                  height={550}
                  className=''
                />
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  )
}
