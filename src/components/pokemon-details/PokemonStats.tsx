import { PokemonStat } from '@/types/pokemon-types'
import Stat from './Stat'

export default function PokemonStats({ stats }: { stats: Array<PokemonStat> }) {
  let total = 0

  return (
    <div className='gap-3 flex justify-center items-center flex-col w-full'>
      <h1 className='text-2xl font-noto font-bold text-slate-600'>Stats</h1>
      <div className='flex sm:flex-nowrap flex-wrap gap-2 w-full justify-center items-center'>
        {stats.map(({ stat, base_stat }) => {
          total += base_stat
          return (
            <Stat
              name={stat.name}
              value={base_stat}
              key={stat.name}
            />
          )
        })}
        <Stat
          name={'TOT'}
          value={total}
        />
      </div>
    </div>
  )
}
