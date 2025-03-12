'use server'

import {
  EvolutionChain,
  NamedAPIResource,
  Pokemon,
  PokemonSpecies,
} from '@/types/pokemon-types'

export async function getPokemons({
  query,
  page,
  limit = 10000,
}: {
  query?: string
  page: number
  limit?: number
}): Promise<Array<Pokemon | null>> {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${
    (page - 1) * limit
  }`
  try {
    const response = await fetch(url)
    const data = (await response.json()) as { results: Array<NamedAPIResource> }

    if (query) {
      const filteredPokemon = data.results.filter((pokemon) =>
        pokemonStartsWith(pokemon.name, query.toLowerCase())
      )
      const pokemonData = filteredPokemon
        .slice(0, 24)
        .map((pokemon) => getPokemonDetails(pokemon.url))

      return await Promise.all(pokemonData)
    } else {
      const pokemonData = data.results
        .slice(0, 24)
        .map((pokemon) => getPokemonDetails(pokemon.url))
      return await Promise.all(pokemonData)
    }
  } catch (error) {
    console.log(error)
    return []
  }
}

export async function getPokemonSpecies({ url }: { url: string }) {
  try {
    const response = await fetch(url, {
      cache: 'force-cache',
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function getPokemonEvolutions({ url }: { url: string }) {
  try {
    const response = await fetch(url, { cache: 'force-cache' })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function getPokemonDetails(url: string) {
  try {
    const response = await fetch(url, {
      cache: 'force-cache',
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
    return null
  }
}

function pokemonStartsWith(pokemon: string, query: string) {
  return pokemon.toLowerCase().startsWith(query)
}

export async function fetchPokemons({
  page = 1,
  search,
}: {
  page?: number
  search: string | undefined
}) {
  try {
    const pokemons = await getPokemons({
      page,
      query: search,
    })
    if (pokemons === null) return []
    return pokemons
  } catch (error) {
    console.log(error)
    return []
  }
}

export async function fetchPokemonSpecies(url: string) {
  try {
    const species = await getPokemonSpecies({ url })
    return species
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function fetchPokemonEvolutions(url: string) {
  try {
    const evolutions = await getPokemonEvolutions({ url })
    return evolutions
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function fetchPokemonDetail(url: string) {
  try {
    const pokemon = await getPokemonDetails(url)
    return pokemon
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function getPokemonType({ id }: { id: number }) {
  const url = `https://pokeapi.co/api/v2/type/${id}/`

  try {
    const response = await fetch(url, {
      cache: 'force-cache',
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
    return []
  }
}

export async function fetchPokemonProfile(url: string) {
  try {
    const pokemon = (await getPokemonDetails(url)) as Pokemon
    const pokemonSpecies = (await getPokemonSpecies({
      url: pokemon!.species.url,
    })) as PokemonSpecies
    const evolutionChain = (await getPokemonEvolutions({
      url: pokemonSpecies.evolution_chain.url,
    })) as EvolutionChain

    return {
      pokemon,
      pokemonSpecies,
      evolutionChain,
    }
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function fetchPokemonType(id: number) {
  const data = await getPokemonType({ id })
  return data
}
