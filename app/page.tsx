'use client'

import { Actions } from '@/components/actions'
import { LensIcon } from '@/components/LensIcon'
import { useTheme } from 'next-themes'
import { Button } from "@/components/ui/button"
import { Code } from "lucide-react"
import Link from 'next/link'

export default function Home() {
  return (
    <main className="
      flex-1 flex flex-col items-center
      sm:pt-24 pt-10
    ">
      <div className='flex flex-col flex-1 justify-center items-center'>
        <div
          className='
          flex items-center content-center
          px-2
          '
        >
        <LensIcon
          size={125}
          className="text-icon hidden sm:block"
        />
        <LensIcon
          size={100}
          className="text-icon sm:hidden block"
        />
        <h1 className='
          font-black text-center
          sm:text-6xl sm:ml-3
          text-4xl
          text-icon
        '>
          Smart Posts
        </h1>
        </div>
        <p
          className='text-muted-foreground text-center px-10'
        >
        With Open Actions, users and developers “bring-your-own-smart-contracts” to enable any external smart contract-action on a Lens publication.
        </p>
      </div>
      <div className='w-full sm:w-auto px-4'>
        <Button
          asChild
          className="px-24 mt-8 py-6 w-full"
          variant='outline'
        >
          <Link
            target="_blank"
            rel="no-opener"
            href="https://github.com/lens-protocol/open-actions-directory/blob/main/open_actions_pr_template.md">
            <Code className="mr-2" />
              Submit a new open action.
          </Link>
        </Button>
      </div>
      <Actions />
    </main>
  )
}
