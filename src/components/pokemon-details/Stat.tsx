import { convertStats } from '@/helper/pokemon'

export default function Stat({ name, value }: { name: string; value: number }) {
  const statStyle: {
    [stat: string]: { bg: string }
  } = {
    HPs: { bg: '#9EE865' },
    ATK: { bg: '#F5DE69' },
    DEF: { bg: '#F09A65' },
    SpA: { bg: '#66D8F6' },
    SpD: { bg: '#899EEA' },
    SPD: { bg: '#E46CCA' },
    TOT: { bg: '#88AAEA' },
  }

  return (
    <div
      className='flex flex-col gap-2 items-center'
      key={name}
    >
      <span
        className='rounded-full font-bold py-2 px-3 flex items-center justify-center text-black flex-col gap-2 font-noto'
        style={{ backgroundColor: statStyle[convertStats(name)].bg || '' }}
      >
        <span className='text-sm'>{value}</span>
        <span className='text-xs'>{convertStats(name)}</span>
      </span>
    </div>
  )
}
