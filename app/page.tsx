'use client'

import { Actions } from '@/components/actions'
import { LensIcon } from '@/components/LensIcon'
import { useTheme } from 'next-themes'
import { Button } from "@/components/ui/button"
import { Code } from "lucide-react"
import Link from 'next/link'

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
      <div>
      <Button
        asChild
        className="w-full px-20 mt-8 py-6"
        variant='outline'
      >
        <Link
          target="_blank"
          rel="no-opener"
          href="https://github.com/lens-protocol/open-actions-directory/blob/main/open_actions_pr_template.md">
          <Code className="mr-2" />
            Submit an open action.
        </Link>
      </Button>
      </div>
       <Actions />
    </main>
  )
}
