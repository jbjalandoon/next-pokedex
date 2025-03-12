import PokemonPage from '@/components/pokemon-list/PokemonPage'
import { fetchPokemonType } from '@/action/get-pokemon'
import { Type } from '@/types/pokemon-types'
import { PokemonLists } from '@/types/custom-types'
export default async function Home() {
  const getSpriteURL = (id: string) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  }

  const pokemons: {
    [key: string]: {
      url: string
      sprite: string
      types: Array<string>
      id: number
    }
  } = {}
  for (let i = 1; i < 19; i++) {
    const type = (await fetchPokemonType(i)) as Type

    type.pokemon.forEach((el) => {
      if (el.pokemon.name in pokemons) {
        pokemons[el.pokemon.name].types.push(type.name)
      } else {
        const arrayURL = el.pokemon.url.split('/')

        pokemons[el.pokemon.name] = {
          id: parseInt(arrayURL[arrayURL.length - 2]),
          url: el.pokemon.url,
          sprite: getSpriteURL(arrayURL[arrayURL.length - 2]),
          types: [type.name],
        }
      }
    })
  }

  const pokemonArray: Array<PokemonLists> = Array.from(
    Object.entries(pokemons),
    ([key, value]) => {
      return { name: key, ...value }
    }
  )

  pokemonArray.sort((a, b) => a.id - b.id)

  return (
    <>
      <PokemonPage
        initial={pokemonArray}
        key={Math.random()}
      />
    </>
  )
}
