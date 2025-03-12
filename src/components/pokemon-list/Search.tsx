'use client'

import { ChangeEvent, Dispatch, SetStateAction } from 'react'

export default function Search({
  query,
  handleSearch,
}: {
  query: string
  handleSearch: Dispatch<SetStateAction<string>>
}) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleSearch(e.currentTarget.value)
  }

  return (
    <>
      <div className='container top-0 z-997 bg-slate-200 w-full mx-auto px-4 mt-5'>
        <input
          className='rounded-2xl bg-white text-black py-5 w-full px-5 text-2xl'
          type='text'
          value={query}
          onChange={handleChange}
          placeholder='Search for pokemon'
        ></input>
      </div>
    </>
  )
}
