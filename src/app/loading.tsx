import { ClipLoader } from 'react-spinners'

export default function loading() {
  return (
    <div className='h-screen w-screen border px-4'>
      <div className='flex justify-center items-center'>
        <ClipLoader />
      </div>
    </div>
  )
}
