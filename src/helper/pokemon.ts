export function convertStats(stat: string) {
  switch (stat) {
    case 'hp':
      return 'HPs'
    case 'attack':
      return 'ATK'
    case 'defense':
      return 'DEF'
    case 'special-attack':
      return 'SpA'
    case 'special-defense':
      return 'SpD'
    case 'speed':
      return 'SPD'
    default:
      return stat
  }
}
