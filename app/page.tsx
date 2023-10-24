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
  }
  return (
    <main className="flex flex-col items-center pt-24">
      <div className='flex flex-col flex-1 justify-center items-center'>
        <h1 className='text-6xl font-black flex items-center'>
          <LensIcon fill={fill} size={150} />
          Open Actions
        </h1>
        <p
          className='text-muted-foreground'
        >
        Enable any external smart contract-action on a Lens publication.
        </p>
      </div>
      <div className='py-10 flex flex-1 w-[380px] md:w-[600px] lg:w-[900px] xl:w-[1200px]'>
       <Actions />
      </div>
    </main>
  )
}
