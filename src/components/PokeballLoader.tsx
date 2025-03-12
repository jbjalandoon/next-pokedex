import Image from 'next/image'
import pokeball from '../../public/pokeball.png'
export default function PokeballLoader() {
  return (
    <Image
      src={pokeball}
      alt={'pokeball loader'}
      className='w-20 h-20 animate-spin'
    />
  )
}
