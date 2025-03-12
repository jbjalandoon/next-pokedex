'use client'
import type { Pokemon } from '@/types/pokemon-types'
import { motion, Variants } from 'motion/react'
import Image from 'next/image'
import Type from '../pokemon-details/Type'

export default function Pokemon({
  name,
  types,
  handleClick,
  sprite,
  url,
}: {
  name: string
  types: Array<string>
  handleClick: (url: string) => void
  sprite: string
  url: string
}) {
  const variants: Variants = {
    initial: { scale: 1 },
    animate: { scale: 1.3 },
  }

  return (
    <>
      <motion.div
        initial={'initial'}
        animate={'initial'}
        whileHover={'animate'}
        className='gap-3 bg-white rounded-lg flex justify-center items-center flex-col pt-1 pb-8 hover:cursor-pointer hover:outline-2 hover:outline-gray-400'
        onClick={() => {
          handleClick(url)
        }}
      >
        <motion.div
          variants={variants}
          className='relative'
        >
          <Image
            src={sprite}
            alt={name}
            width={100}
            height={100}
          />
        </motion.div>
        <h2 className='font-bold font-noto capitalize text-slate-700 text-lg'>
          {name}
        </h2>
        <div className='flex flex-wrap gap-2 items-center justify-center'>
          {types.map((type: string) => (
            <Type
              type={type}
              key={`${name}-${type}`}
            />
          ))}
        </div>
      </motion.div>
    </>
  )
}
