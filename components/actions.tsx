import { useState } from 'react'
import { ActionCard } from '@/components/ui/action-card'
import actions from '../actions.json'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/ui/icons"

let data = actions

export function Actions() {
  const [view, setView] = useState('all')
  const [filter, setFilter] = useState('all')

  function setFilterState(filterState) {
    if (filterState === filter) {
      setFilter('all')
    } else {
      setFilter(filterState)
    }
  }

  if (view === 'bounties') {
    data = actions.filter(a => a.bounty)
  }
  if (view === 'actions') {
    data = actions.filter(a => a.type === 'action')
  }
  if (view === 'all') {
    data = actions
  }

  if (filter === 'cross-chain') {
    data = data.filter(action => action.tags && action.tags.includes('cross-chain'))
  }
  if (filter === 'defi') {
    data = data.filter(action => action.tags && action.tags.includes('defi'))
  }
  if (filter === 'socialfi') {
    data = data.filter(action => action.tags && action.tags.includes('socialfi'))
  }
  
  return (
    <div className='w-full xl:w-auto'>
      <div className='flex pt-6 sm:flex-row flex-col'>
        <Tabs
          defaultValue="all"
          className='sm:pl-6 xl:pl-2 pl-3'
        >
          <TabsList>
            <TabsTrigger onClick={() => setView('all')} value="all">All</TabsTrigger>
            <TabsTrigger onClick={() => setView('actions')} value="actions">Actions</TabsTrigger>
            <TabsTrigger onClick={() => setView('bounties')} value="bounties">Bounties</TabsTrigger>
          </TabsList>
        </Tabs>
        <RadioGroup
          defaultValue="card"
          className='
          flex ml-2
          pt-2 sm:pt-0
          pl-1 sm:pl-0
          '
        >
          <div>
            <RadioGroupItem
              value="socialfi"
              id="socialfi"
              className="peer sr-only"
              checked={filter === 'socialfi'}
              onClick={() => setFilterState('socialfi')}

            />
            <Label
              htmlFor="socialfi"
              className="flex flex-col items-center justify-between rounded-md border-2 bg-popover p-[11px] hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              💬 SocialFI
            </Label>
          </div>
          <div>
            <RadioGroupItem
            checked={filter === 'defi'}
            onClick={() => setFilterState('defi')}
            value="defi" id="defi" className="peer sr-only" />
            <Label
              htmlFor="defi"
              className="flex flex-col items-center justify-between rounded-md border-2 bg-popover p-[11px] hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              💰 DeFi
            </Label>
          </div>
          <div>
            <RadioGroupItem
            checked={filter === 'cross-chain'}
            onClick={() => setFilterState('cross-chain')}
            value="cross-chain" id="cross-chain" className="peer sr-only" />
            <Label
              htmlFor="cross-chain"
              className="flex flex-col items-center justify-between rounded-md border-2 bg-popover p-[11px] hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              ⛓️ Cross Chain
            </Label>
          </div>
        </RadioGroup>
      </div>
      <div className='
        pt-4 pb-10 flex flex-1 flex-wrap
        px-2 sm:px-5 xl:px-0
        w-full sm:w-full xl:w-[1200px]
      '>
        {
          !data.length && (
            <p className='ml-2 mt-5 text-sm'>
              No results.
            </p>
          )
        }
        {
          data.map((action, index) => (
            <ActionCard key={index} action={action} />
          ))
        }
      </div>
    </div>
  )
}
