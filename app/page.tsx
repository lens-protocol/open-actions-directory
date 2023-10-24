'use client'

import { Actions } from '@/components/actions'
import { LensIcon } from '@/components/LensIcon'
import { useTheme } from 'next-themes'

export default function Home() {
  const { theme, systemTheme } = useTheme()
  
  let fill
  switch(theme) {
    case 'light':
      fill = 'black'
      break
    case 'dark':
      fill = 'white'
    case 'system':
      fill = systemTheme === 'dark' ? 'white' : 'black'
    default:
      fill = 'white'
  }

  return (
    <main className="flex flex-col items-center pt-24">
      <div className='flex flex-col flex-1 justify-center items-center'>
        <div
          className='
          flex items-center content-center
          px-2
          '
        >
        <LensIcon
          fill={fill}
          size={125}
          className="hidden sm:block"
        />
        <LensIcon
          fill={fill}
          size={100}
          className="sm:hidden block"
        />
        <h1 className='
          font-black text-center
          sm:text-6xl sm:ml-3
          text-4xl
        '>
          Open Actions
        </h1>
        </div>
        <p
          className='text-muted-foreground text-center px-10'
        >
        With Open Actions, users and developers “bring-your-own-smart-contracts” to enable any external smart contract-action on a Lens publication.
        </p>
      </div>
      <div className='
        pt-10 pb-32 flex flex-1
        px-2 sm:px-5 xl:px-0
        w-full sm:w-full xl:w-[1200px]
      '>
       <Actions />
      </div>
    </main>
  )
}
