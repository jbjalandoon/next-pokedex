export default function type({ type }: { type: string }) {
  const types: {
    [key: string]: { bg: string; color: string }
  } = {
    bug: { bg: '#7CCF00', color: 'var(--color-slate-50)' },
    grass: { bg: '#5EA500', color: 'var(--color-slate-)' },
    dark: { bg: '#705746', color: '#C03A2B' },
    dragon: { bg: '#7038F8', color: '#B7B7CE' },
    electric: { bg: '#F8D030', color: '#F1C431' },
    fairy: { bg: '#EE99AC', color: '#F4B1BE' },
    fighting: { bg: '#C03028', color: '#F08030' },
    fire: { bg: '#F08030', color: '#FFB6C1' },
    flying: { bg: '#A890F0', color: '#E6E6FA' },
    ghost: { bg: '#735797', color: '#D6C1E8' },
    ground: { bg: '#E0C068', color: '#E6E16A' },
    ice: { bg: '#98D8D8', color: '#B3E7EA' },
    normal: { bg: '#A8A870', color: '#DEDEBB' },
    poison: { bg: '#A040A0', color: 'var(--color-slate-100)' },
    psychic: { bg: '#F85888', color: '#F8B1BE' },
    rock: { bg: '#B8A038', color: '#D6C173' },
    steel: { bg: '#B8B8D0', color: '#D6D6D6' },
    water: { bg: '#6890F0', color: '#B3E7EA' },
    default: { bg: '#193CB8', color: '#B3E7EA' },
  }

  return (
    <span
      className='py-1 px-3 rounded-xl uppercase text-slate-50'
      style={{
        backgroundColor: types[type] ? types[type].bg : '#193CB8',
      }}
    >
      {type}
    </span>
  )
}
